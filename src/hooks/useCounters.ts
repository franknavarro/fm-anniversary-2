import { useRef } from 'react';
import { TimeItem } from '../components/TimeGrid';

const getDate = (date: string) => new Date(date).toISOString();

const startedDating = getDate('april,17,2016,04:15:00');
const anniversary = getDate('june,26,2020,12:00:00');
const eeveesBirth = getDate('november,29,2020,00:00:00');
const eeveesJoinsTheFamily = getDate('january,24,2021,10:00:00');

export type useCounter = () => TimeItem[];

export const useAniversaryCounters: useCounter = () => [
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

export const useEeveeCounters: useCounter = () => [
  {
    primaryText: 'Eevee has graced this earth for...',
    startTime: eeveesBirth,
    ref: useRef<HTMLDivElement>(null),
  },
  {
    primaryText: "And we've had Eevee for...",
    startTime: eeveesJoinsTheFamily,
    ref: useRef<HTMLDivElement>(null),
  },
];
