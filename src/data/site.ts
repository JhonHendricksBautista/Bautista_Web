export const site = {
  name: 'Jhon Hendricks Bautista',
  shortName: 'Bautista',
  // Placeholder tagline — swap for the real one-word-position specialisation.
  role: 'Computer Engineering Student',
  tagline:
    'I build at the seam where hardware meets software — from logic gates and FPGA datapaths up to the firmware and tools that drive them.',
  location: 'Philippines',
  email: 'you@example.com',
  // Relative to the deploy base. Drop the real file into public/resume.pdf.
  resumePath: 'resume.pdf',
  socials: [
    { label: 'GitHub', href: 'https://github.com/JhonHendricksBautista' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-handle' },
  ],
} as const;

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
] as const;
