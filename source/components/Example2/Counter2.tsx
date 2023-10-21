import { FC, useCallback, useState } from 'react';

import { logging } from '../../utils/logging';

import { Result2 } from './Result2';
import { List2 } from './List2';

export const Counter2: FC = () => {
  logging('COUNTER-2 is rendered');
  const [getCounters, setCounters] = useState(0);
  const [getTotalSum, setTotalSum] = useState(0);
  const addCounter = (): void => {
    setCounters((prevVal) => prevVal + 1);
  };
  const summator = useCallback((): void => setTotalSum((prevVal) => prevVal + 1), []);
  return (
    <>
      <Result2 counters={getCounters} values={getTotalSum} />
      <button onClick={addCounter}>Add More Items++</button>
      <List2 counters={getCounters} summator={summator} />
    </>
  );
};
