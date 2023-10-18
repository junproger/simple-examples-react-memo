import { FC, useState } from 'react';

import { uidkey } from '../../helpers/uidkey';
import { logging } from '../../utils/logging';

import { Item2 } from './Item2';

export const Counter2: FC = () => {
  logging('COUNTER-2 is rendered');
  const [getCounters, setCounters] = useState(0);
  const [getTotalSum, setTotalSum] = useState(0);
  const addCounter = (): void => {
    setCounters((prevVal) => prevVal + 1);
  };
  const summator = (): void => setTotalSum((prevVal) => prevVal + 1);
  return (
    <div>
      <p>Quantity of Items: {getCounters}</p>
      <p>Total sum of Values: {getTotalSum}</p>
      <button onClick={addCounter}>Add More Items++</button>
      <div>
        {[...Array(getCounters).keys()].map((index) => (
          <Item2 key={uidkey(index)} summator={summator}>
            Increase value
          </Item2>
        ))}
      </div>
    </div>
  );
};
