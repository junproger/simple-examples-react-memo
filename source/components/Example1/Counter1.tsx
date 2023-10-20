import { FC, useCallback, useState } from 'react';

import { logging } from '../../utils/logging';

import { Result1 } from './Result1';
import { List1 } from './List1';

export const Counter1: FC = () => {
  logging('COUNTER-1 is rendered');
  const [total, setTotal] = useState(0);
  const clickHandle = useCallback((): void => setTotal((prevVal) => prevVal + 1), []);
  return (
    <>
      <Result1 result={total} />
      <List1 callback={clickHandle} />
    </>
  );
};
