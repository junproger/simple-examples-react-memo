import { FC, ReactNode } from 'react';

import { logging } from '../../utils/logging';

export interface Button1Prop {
  callback: () => void;
  children: ReactNode;
}

export const Button1: FC<Button1Prop> = ({ callback, children }) => {
  logging('BUTTON-1 is rendered');
  return <button onClick={callback}>{children}</button>;
};
