import { FC, ReactNode } from 'react';

import { logging } from '../../utils/logging';

export interface Button2Prop {
  callback: () => void;
  children: ReactNode;
}

export const Button2: FC<Button2Prop> = ({ callback, children }) => {
  logging('BUTTON-2 is rendered');
  return <button onClick={callback}>{children}</button>;
};
