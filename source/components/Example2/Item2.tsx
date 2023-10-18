import { FC, ReactNode, useState } from 'react';

import { logging } from '../../utils/logging';

export interface Item2Prop {
  summator: () => void;
  children: ReactNode;
}

export const Item2: FC<Item2Prop> = ({ summator, children }) => {
  logging('Button-2 is rendered');
  const [getItemCount, setItemCount] = useState(0);
  const countHandle = (): void => {
    setItemCount((prevVal) => prevVal + 1);
    summator();
  };
  return (
    <p>
      <button onClick={countHandle}>
        {children} {getItemCount}
      </button>
    </p>
  );
};
