import type { Feature } from './types';

export const wrapperClassName = {
  section: 'bg-bg-secondary py-24',
  container: 'mx-auto max-w-7xl px-6 lg:px-8',
  content: 'mx-auto max-w-2xl text-center',
  badge: 'text-sm font-semibold uppercase tracking-wider text-primary-600',
  heading: 'mt-3 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl',
  description: 'mt-4 text-base leading-relaxed text-text-secondary',
  grid: 'mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4',
};

export const cardClassName = {
  card: 'group rounded-2xl border border-border-light bg-bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border-card hover:shadow-lg',
  icon: 'inline-flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110',
  title: 'mt-5 text-lg font-semibold tracking-tight text-text-primary',
  description: 'mt-3 text-sm leading-relaxed text-text-secondary',
};

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
