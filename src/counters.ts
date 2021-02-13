import { TimeGridProps } from './components/TimeGrid';

const getDate = (date: string) => new Date(date).toISOString();

const startedDating = getDate('april,17,2016,04:15:00');
const anniversary = getDate('june,26,2020,12:00:00');

export const counters: TimeGridProps[] = [
  {
    primaryText: "We've been married...",
    startTime: anniversary,
    id: 'married-time',
  },
  {
    primaryText: "We've been together...",
    startTime: startedDating,
    id: 'total-time',
  },
  {
    primaryText: "That's a total of...",
    secondaryText: 'And counting...',
    startTime: startedDating,
    useTotals: true,
    id: 'all-total-times',
  },
];
