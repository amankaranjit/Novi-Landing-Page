import type { Feature } from './types';

export const features: Feature[] = [
  {
    icon: 'boards',
    iconBg: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
    title: 'Boards that move at your speed',
    description: 'Plan sprints and track tasks without hunting through spreadsheets.',
  },
  {
    icon: 'threads',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    title: 'Threads, not another inbox',
    description: 'Keep project conversations attached to the work itself.',
  },
  {
    icon: 'timeline',
    iconBg: 'bg-violet-100',
    iconColor: 'text-violet-600',
    title: 'One timeline for the whole team',
    description: 'Every deadline and milestone in one shared view.',
  },
  {
    icon: 'integrations',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    title: 'Works the way you already do',
    description: 'Import from Trello, Asana, or a spreadsheet in minutes.',
  },
];
