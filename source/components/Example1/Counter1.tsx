import { FC, useCallback, useState } from 'react';

import { logging } from '../../utils/logging';
import { counters } from '../../constants/counters';
import { uidkey } from '../../helpers/uidkey';

import { Item1 } from './Item1';
import { Result1 } from './Result1';

export const Counter1: FC = () => {
  logging('COUNTER-1 is rendered');
  const [total, setTotal] = useState(0);
  const clickHandle = useCallback((): void => setTotal((prevVal) => prevVal + 1), []);
  return (
    <>
      <Result1 result={total} />
      <div>
        {[...Array(counters).keys()].map((index) => (
          <Item1 key={uidkey(index)} callback={clickHandle} uid={uidkey(index)}>
            Increase value
          </Item1>
        ))}
      </div>
    </>
  );
};
