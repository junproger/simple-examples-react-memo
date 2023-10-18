import { FC, ReactNode, useState } from 'react';

import { logging } from '../../utils/logging';

export interface Item1Prop {
  callback: () => void;
  children: ReactNode;
}

export const Item1: FC<Item1Prop> = ({ callback, children }) => {
  logging('ITEM-1 is rendered');
  const [value, setValue] = useState(0);
  const clickHandle = (): void => {
    setValue((prevVal) => prevVal + 1);
    callback();
  };
  return (
    <p>
      <button onClick={clickHandle}>
        {children} {value}
      </button>
    </p>
  );
};
