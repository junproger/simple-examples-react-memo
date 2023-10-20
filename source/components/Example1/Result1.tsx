import { FC } from 'react';

import { logging } from '../../utils/logging';

export interface Result1Prop {
  result: number;
}

export const Result1: FC<Result1Prop> = ({ result }) => {
  logging('RESULT-1 is rendered');
  return (
    <div>
      <p>Current value = {result}</p>
    </div>
  );
};
