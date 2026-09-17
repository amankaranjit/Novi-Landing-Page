import type { FloatingCardData } from './types';

export const heroClassName = {
  section: 'relative overflow-hidden bg-bg-primary pb-24 pt-20 sm:pt-28',
  container:
    'mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:gap-12 lg:px-8',
};

export const heroVisualClassName = {
  container: 'relative mx-auto w-full max-w-lg lg:mx-0',
  blobTop: 'absolute -top-16 -right-10 h-72 w-72 rounded-full bg-indigo-200/60 blur-3xl',
  blobBottom: 'absolute -bottom-16 -left-10 h-72 w-72 rounded-full bg-violet-200/50 blur-3xl',
  mockup: 'relative z-10',
};

export const heroContentClassName = {
  container: 'max-w-xl',
  badge:
    'inline-flex items-center rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-600 ring-1 ring-inset ring-indigo-100',
  heading: 'mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl',
  highlight: 'bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent',
  description: 'mt-6 text-lg leading-relaxed text-slate-500',
  actions: 'mt-8 flex flex-wrap items-center gap-4',
  primaryButton:
    'cursor-pointer rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/25',
  secondaryButton:
    'cursor-pointer rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-slate-300',
  playButton: 'mr-2 rounded-full bg-indigo-600 px-2 py-1 text-xs text-white',
};
export const floatingCardClassName = {
  card: 'absolute z-20 w-52 animate-float rounded-2xl bg-white p-3 shadow-xl shadow-slate-900/10 ring-1 ring-slate-100',
  content: 'flex items-center gap-3',
  icon: 'flex h-8 w-8 items-center justify-center rounded-full',
  activityIcon: 'bg-blue-100 text-blue-600',
  commentIcon: 'bg-violet-100 text-violet-600',
  teamIcon: 'bg-emerald-100 text-emerald-600',
  svg: 'h-4 w-4',
  text: 'min-w-0',
  title: 'truncate text-sm font-semibold text-slate-800',
  subtitle: 'truncate text-xs text-slate-400',
};

export const dashboardMockupClassName = {
  container:
    'w-full overflow-hidden rounded-2xl bg-white shadow-2xl shadow-slate-900/10 ring-1 ring-slate-200',
  window: 'flex items-center gap-2 border-b border-slate-100 px-4 py-3',
  windowDot: 'h-3 w-3 rounded-full',
  redDot: 'bg-rose-300',
  yellowDot: 'bg-amber-300',
  greenDot: 'bg-emerald-300',
  title: 'ml-3 text-xs font-medium text-slate-400',
  board: 'grid grid-cols-3 gap-4 p-4 sm:p-5',
  column: 'min-w-0',
  columnHeader: 'mb-3 flex items-center gap-2',
  columnTitle: 'text-xs font-semibold text-slate-600',
  count: 'rounded-full bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-500',
  cards: 'space-y-2',
  card: 'rounded-lg border border-slate-100 bg-slate-50 p-2.5 text-[11px] font-medium leading-snug text-slate-600 shadow-sm',
  cardText: 'truncate',
  cardIndicator: 'mt-2 block h-1 w-6 rounded-full',
};
export const floatingCardKind = {
  notification: 'notification',
  activity: 'activity',
  comment: 'comment',
  team: 'team',
} as const;
export const floatingCards: FloatingCardData[] = [
  {
    id: 'notification',
    kind: 'notification',
    title: 'Great progress! 🚀',
    subtitle: 'Priya · just now',
    position: '-top-6 right-4 sm:right-10',
    delay: '0s',
  },
  {
    id: 'activity',
    kind: 'activity',
    title: 'Updated the docs',
    subtitle: 'Alex R.',
    position: 'bottom-12 -left-8 hidden lg:block',
    delay: '0.8s',
  },
  {
    id: 'comment',
    kind: 'comment',
    title: 'New comment',
    subtitle: 'on Product Launch',
    position: '-bottom-8 right-2 sm:right-8',
    delay: '1.6s',
  },
  {
    id: 'team',
    kind: 'team',
    title: 'Team Novo',
    subtitle: '8 online now',
    position: 'top-1/3 -left-8 hidden lg:block',
    delay: '2.2s',
  },
];

export const boardColumns = [
  {
    title: 'To Do',
    count: 5,
    color: 'bg-slate-400',
    cards: ['Design landing page', 'Build API integration', 'Write documentation'],
  },
  {
    title: 'In Progress',
    count: 3,
    color: 'bg-amber-400',
    cards: ['Frontend development', 'Bug fixes', 'User testing'],
  },
  {
    title: 'Done',
    count: 4,
    color: 'bg-emerald-400',
    cards: ['Project setup', 'Marketing assets', 'Launch prep'],
  },
];
