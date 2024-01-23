import { FC, ReactNode, useState } from 'react';

import { logging } from '../../utils/logging';

import { Button2 } from './Button2';

export interface Item2Prop {
  summator: () => void;
  uid: string;
  children: ReactNode;
}

export const Item2: FC<Item2Prop> = ({ summator, uid, children }) => {
  logging('ITEM-2 is rendered');
  const [getItemCount, setItemCount] = useState(0);
  const countHandle = (): void => {
    setItemCount((prevVal) => prevVal + 1);
    summator();
  };
  return (
    <p>
      <Button2 callback={countHandle}>
        {uid} {children} {getItemCount}
      </Button2>
    </p>
  );
};
