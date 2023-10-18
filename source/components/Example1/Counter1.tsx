import { FC, useCallback, useState } from 'react';

import { logging } from '../../utils/logging';

import { Item1 } from './Item1';

export const Counter1: FC = () => {
  logging('COUNTER-1 is rendered');
  const [total, setTotal] = useState(0);
  const clickHandle = useCallback((): void => setTotal((prevVal) => prevVal + 1), []);
  return (
    <div>
      <p>Current value = {total}</p>
      <div>
        <Item1 callback={clickHandle}>Increase value</Item1>
        <Item1 callback={clickHandle}>Increase value</Item1>
        <Item1 callback={clickHandle}>Increase value</Item1>
        <Item1 callback={clickHandle}>Increase value</Item1>
        <Item1 callback={clickHandle}>Increase value</Item1>
        <Item1 callback={clickHandle}>Increase value</Item1>
        <Item1 callback={clickHandle}>Increase value</Item1>
        <Item1 callback={clickHandle}>Increase value</Item1>
      </div>
    </div>
  );
};
