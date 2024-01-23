import { FC, memo, ReactNode, useState } from 'react';

import { logging } from '../../utils/logging';

export interface Item2Prop {
  summator: () => void;
  uid: string;
  children: ReactNode;
}

const Item2Memo: FC<Item2Prop> = ({ summator, uid, children }) => {
  logging('Button-2 is rendered');
  const [getItemCount, setItemCount] = useState(0);
  const countHandle = (): void => {
    setItemCount((prevVal) => prevVal + 1);
    summator();
  };
  return (
    <p>
      <button onClick={countHandle}>
        {uid} {children} {getItemCount}
      </button>
    </p>
  );
};

export const Item2 = memo(Item2Memo);
