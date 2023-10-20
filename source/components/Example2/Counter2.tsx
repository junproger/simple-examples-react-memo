import { FC, useCallback, useState } from 'react';

import { uidkey } from '../../helpers/uidkey';
import { logging } from '../../utils/logging';

import { Item2 } from './Item2';
import { Result2 } from './Result2';

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
      <div>
        {[...Array(getCounters).keys()].map((index) => (
          <Item2 key={uidkey(index)} summator={summator} uid={uidkey(index)}>
            Increase value
          </Item2>
        ))}
      </div>
    </>
  );
};
