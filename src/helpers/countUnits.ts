import dayjs, { UnitTypeLong } from 'dayjs';
import { dateUnits } from '../language/dateUnits';

export type CountUnitsOptions = {
  startTime: string;
  endTime?: string;
  units: UnitTypeLong[];
  useTotals?: boolean;
};

export const countUnits = ({
  startTime,
  endTime,
  units,
  useTotals,
}: CountUnitsOptions) => {
  const start = dayjs(startTime);
  let end = dayjs(endTime && endTime !== 'now' ? endTime : undefined);

  return units.map((unit) => {
    const amount = end.diff(start, unit);
    if (!useTotals) {
      end = end.subtract(amount, unit);
    }

    const multiple = amount === 1 ? 'singular' : 'plural';
    return [amount, dateUnits[unit][multiple]];
  });
};
