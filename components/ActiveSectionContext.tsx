"use client";

import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import { sectionRoutes } from "@/lib/section-data";

// A click-triggered smooth scroll passes through every section between the
// old and new target, so the passive scroll listener would otherwise see
// (and briefly pin) each one it crosses - most noticeably the section right
// before the target, which can end up "stuck" as active once the scroll
// settles. Explicit navigation wins until the scroll tracker itself reports
// having reached the clicked target - a fixed timeout can't stand in for
// that, since scroll duration scales with distance (Hero -> About settles
// in well under a second; Hero -> Contact crosses five sections and can
// take noticeably longer). MAX_SUPPRESS_MS is only a safety net in case the
// target is somehow never reported (e.g. its element gets removed).
const MAX_SUPPRESS_MS = 3000;

type ActiveSectionContextValue = {
  activeSection: string;
  /** Explicit change, e.g. a navbar click - also suppresses passive scroll updates briefly. */
  setActiveSection: (id: string) => void;
  /** Passive update from the scroll-position tracker - ignored while a click's scroll is still settling. */
  reportScrollSection: (id: string) => void;
};

const ActiveSectionContext = createContext<ActiveSectionContextValue | null>(
  null,
);

function sectionIdForPathname(pathname: string) {
  if (pathname === "/") return "hireMe";
  const route = pathname.replace(/^\//, "").split("/")[0];
  const match = sectionRoutes.find((section) => section.route === route);
  return match?.sectionId ?? "hireMe";
}

export function ActiveSectionProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [activeSection, setActiveSectionState] = useState(() =>
    sectionIdForPathname(pathname),
  );
  const [trackedPathname, setTrackedPathname] = useState(pathname);
  const pendingTargetRef = useRef<string | null>(null);
  const suppressUntilRef = useRef(0);

  // Non-home routes each render a single static section, so the active
  // link is derived straight from the URL instead of a scroll tracker.
  // Adjusted during render (React's recommended alternative to an effect
  // for syncing state to a changed prop) rather than after commit.
  if (pathname !== trackedPathname) {
    setTrackedPathname(pathname);
    if (pathname !== "/") {
      setActiveSectionState(sectionIdForPathname(pathname));
    }
  }

  const setActiveSection = useCallback((id: string) => {
    pendingTargetRef.current = id;
    suppressUntilRef.current = Date.now() + MAX_SUPPRESS_MS;
    setActiveSectionState(id);
  }, []);

  const reportScrollSection = useCallback((id: string) => {
    if (pendingTargetRef.current) {
      if (id === pendingTargetRef.current) {
        // The scroll has genuinely arrived at the explicitly-set target -
        // resume normal passive tracking from here.
        pendingTargetRef.current = null;
      } else if (Date.now() < suppressUntilRef.current) {
        // Still mid-flight toward the target; ignore whatever section
        // we're passing through.
        return;
      } else {
        // Safety net expired without ever seeing the target - stop
        // suppressing so tracking doesn't get stuck.
        pendingTargetRef.current = null;
      }
    }
    setActiveSectionState(id);
  }, []);

  return (
    <ActiveSectionContext.Provider
      value={{ activeSection, setActiveSection, reportScrollSection }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSection() {
  const context = useContext(ActiveSectionContext);
  if (!context) {
    throw new Error(
      "useActiveSection must be used within an ActiveSectionProvider",
    );
  }
  return context;
}
