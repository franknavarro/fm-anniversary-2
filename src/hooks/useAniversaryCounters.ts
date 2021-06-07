import { useRef } from 'react';
import { TimeItem } from '../components/TimeGrid';

const getDate = (date: string) => new Date(date).toISOString();

const startedDating = getDate('april,17,2016,04:15:00');
const anniversary = getDate('june,26,2020,12:00:00');

const useAniversaryCounters = (): TimeItem[] => [
  {
    primaryText: "We've been married...",
    startTime: anniversary,
    ref: useRef<HTMLDivElement>(null),
  },
  {
    primaryText: "We've been together...",
    startTime: startedDating,
    ref: useRef<HTMLDivElement>(null),
  },
  {
    primaryText: "That's a total of...",
    secondaryText: 'And counting...',
    startTime: startedDating,
    useTotals: true,
    ref: useRef<HTMLDivElement>(null),
  },
];

export default useAniversaryCounters;
