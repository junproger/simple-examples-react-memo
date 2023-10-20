import { FC } from 'react';

import { logging } from '../../utils/logging';

export interface Result2Prop {
  counters: number;
  values: number;
}

export const Result2: FC<Result2Prop> = ({ counters, values }) => {
  logging('RESULT-2 is rendered');
  return (
    <div>
      <p>Quantity of Items: {counters}</p>
      <p>Total sum of Values: {values}</p>
    </div>
  );
};
