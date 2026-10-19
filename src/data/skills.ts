export interface SkillGroup {
  label: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    items: ['C', 'C++', 'Python', 'Verilog', 'JavaScript', 'Assembly'],
  },
  {
    label: 'Hardware',
    items: ['FPGA', 'RTL design', 'Digital logic', 'Microcontrollers', 'PCB basics'],
  },
  {
    label: 'Software',
    items: ['Linux', 'Git', 'Embedded firmware', 'NumPy', 'Node.js'],
  },
  {
    label: 'Tools',
    items: ['Vivado', 'KiCad', 'Oscilloscope', 'Logic analyzer', 'MATLAB'],
  },
];
