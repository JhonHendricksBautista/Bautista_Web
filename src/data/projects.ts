export interface Project {
  title: string;
  summary: string;
  stack: string[];
  href?: string;
  year: string;
}

export const projects: Project[] = [
  {
    title: 'FPGA Traffic Light Controller',
    summary:
      'Synchronous FSM on an FPGA that drives a four-way intersection with pedestrian override and a fault-safe all-red state.',
    stack: ['Verilog', 'FPGA', 'Vivado'],
    href: '#',
    year: '2025',
  },
  {
    title: 'PID Line-Following Robot',
    summary:
      'Two-wheel robot tuning a PID loop on an 8-bit microcontroller, with an IR sensor array and serial telemetry for live gains.',
    stack: ['C', 'Microcontroller', 'PID'],
    href: '#',
    year: '2025',
  },
  {
    title: 'RISC-V Subset CPU',
    summary:
      'Single-cycle RV32I core with a hand-written assembler, simulated end to end against a reference test suite.',
    stack: ['Verilog', 'RISC-V', 'Python'],
    href: '#',
    year: '2024',
  },
  {
    title: 'Digital Signal Scope',
    summary:
      'Python tooling that captures serial data and renders an oscilloscope-style view for characterising analog front ends.',
    stack: ['Python', 'NumPy', 'PySerial'],
    href: '#',
    year: '2024',
  },
];
