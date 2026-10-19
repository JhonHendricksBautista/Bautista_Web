export interface TimelineEntry {
  kind: 'Education' | 'Experience';
  title: string;
  org: string;
  period: string;
  detail: string;
}

export const timeline: TimelineEntry[] = [
  {
    kind: 'Education',
    title: 'BS Computer Engineering',
    org: 'Your University',
    period: '2023 — present',
    detail:
      'Coursework in digital design, computer architecture, signals and systems, and embedded systems.',
  },
  {
    kind: 'Experience',
    title: 'Hardware Engineering Intern',
    org: 'Placeholder Company',
    period: 'Summer 2025',
    detail:
      'Wrote RTL testbenches and brought up a sensor interface on a development board.',
  },
  {
    kind: 'Education',
    title: 'Senior High — STEM',
    org: 'Your Senior High School',
    period: '2021 — 2023',
    detail: 'Focused on electronics and programming fundamentals.',
  },
];
