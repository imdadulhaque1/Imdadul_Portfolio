"use client";

import { Lato, Nunito_Sans } from "next/font/google";
import styles from "./Resume.module.css";
import {
  resumeProfile,
  resumeExperience,
  resumeProjects,
  resumeSkillGroups,
  resumePublications,
  resumeEducation,
  type ResumeEntry,
} from "@/lib/resume-data";

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
});

const nunitoSans = Nunito_Sans({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-nunito-sans",
});

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 2a10 10 0 1 0 5 18.7l-1-1.7A8 8 0 1 1 20 12v1.5a1.5 1.5 0 0 1-3 0V12a5 5 0 1 0-1.5 3.5A3.5 3.5 0 0 0 22 13.5V12A10 10 0 0 0 12 2zm0 13a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
  </svg>
);

const LinkIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M10.6 13.4a1 1 0 0 1 0-1.4l3.5-3.5a3 3 0 1 1 4.2 4.2l-2 2-1.4-1.4 2-2a1 1 0 0 0-1.4-1.4l-3.5 3.5a1 1 0 0 1-1.4 0zm2.8-2.8a1 1 0 0 1 0 1.4l-3.5 3.5a3 3 0 1 1-4.2-4.2l2-2 1.4 1.4-2 2a1 1 0 0 0 1.4 1.4l3.5-3.5a1 1 0 0 1 1.4 0z" />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
  </svg>
);

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M7 2h2v2h6V2h2v2h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3V2zm12 8H5v9h14v-9z" />
  </svg>
);

const PlayStoreIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M4 2.5v19l10-9.5L4 2.5zm11.5 8L6.8 2.2l10.7 6.1-2 2.2zm0 3l2 2.2-10.7 6.1 8.7-8.3zm3.4-4.1L21 10.6c.9.6.9 1.9 0 2.5l-2.1 1.2-2.4-2.3 2.4-2.6z" />
  </svg>
);

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M11 3h2v9.2l3.3-3.3 1.4 1.4L12 16l-5.7-5.7 1.4-1.4 3.3 3.3V3zM5 18h14v2H5z" />
  </svg>
);

const Entry = ({ entry }: { entry: ResumeEntry }) => {
  const hasMeta =
    entry.company || entry.dateRange || entry.location || entry.linkLabel;

  return (
    <article className={styles.job}>
      <h3 className={styles.jobTitle}>{entry.title}</h3>
      {hasMeta && (
        <div className={styles.jobMeta}>
          {entry.company && (
            <span className={styles.company}>{entry.company}</span>
          )}
          <div className={styles.metaRight}>
            {entry.dateRange && (
              <span>
                <CalendarIcon />
                {entry.dateRange}
              </span>
            )}
            {entry.location && (
              <span>
                <PinIcon />
                {entry.location}
              </span>
            )}
            {entry.linkLabel && (
              <span>
                {entry.linkIcon === "playstore" ? <PlayStoreIcon /> : <LinkIcon />}
                {entry.linkHref ? (
                  <a href={entry.linkHref} target="_blank" rel="noopener noreferrer">
                    {entry.linkLabel}
                  </a>
                ) : (
                  entry.linkLabel
                )}
              </span>
            )}
          </div>
        </div>
      )}
      {entry.description && <p className={styles.jobDesc}>{entry.description}</p>}
      {entry.stack && <p className={styles.stack}>{entry.stack}</p>}
      {entry.bullets && (
        <ul>
          {entry.bullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>
      )}
    </article>
  );
};

const ResumeScreen = () => {
  return (
    <div className={`${lato.variable} ${nunitoSans.variable} ${styles.wrapper}`}>
      <button
        type="button"
        className={styles.downloadBtn}
        onClick={() => window.print()}
        aria-label="Download resume as PDF"
      >
        <DownloadIcon />
        Download PDF
      </button>

      <main className={styles.page}>
        <header>
          <h1 className={styles.name}>{resumeProfile.name}</h1>
          <p className={styles.role}>{resumeProfile.role}</p>
          <div className={styles.contactRow}>
            <span>
              <PhoneIcon />
              {resumeProfile.phone}
            </span>
            <span>
              <MailIcon />
              <a href={`mailto:${resumeProfile.email}`}>{resumeProfile.email}</a>
            </span>
            <span>
              <LinkIcon />
              <a href={resumeProfile.linkedinHref} target="_blank" rel="noopener noreferrer">
                {resumeProfile.linkedinLabel}
              </a>
            </span>
            <span>
              <PinIcon />
              {resumeProfile.location}
            </span>
          </div>
        </header>

        <div className={styles.columns}>
          <div className={styles.col}>
            <section>
              <h2 className={styles.sectionTitle}>Professional Experience</h2>
              {resumeExperience.map((entry) => (
                <Entry key={entry.title} entry={entry} />
              ))}
            </section>

            <section>
              <h2 className={styles.sectionTitle}>Projects</h2>
              {resumeProjects.map((entry) => (
                <Entry key={entry.title} entry={entry} />
              ))}
            </section>
          </div>

          <div className={`${styles.col} ${styles.colRight}`}>
            <section>
              <h2 className={styles.sectionTitle}>Technical Skills</h2>
              <ul className={styles.skillList}>
                {resumeSkillGroups.map((group) => (
                  <li key={group.label}>
                    <strong>{group.label}:</strong> {group.value}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className={styles.sectionTitle}>Publications</h2>
              <ol className={styles.pubs}>
                {resumePublications.map((pub) => (
                  <li key={pub}>{pub}</li>
                ))}
              </ol>
            </section>

            <section>
              <h2 className={styles.sectionTitle}>Education</h2>
              {resumeEducation.map((entry) => (
                <Entry key={entry.title} entry={entry} />
              ))}
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ResumeScreen;
