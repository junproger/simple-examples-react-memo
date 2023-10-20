import { FC } from 'react';

import { logging } from '../../utils/logging';
import { counters } from '../../constants/counters';
import { uidkey } from '../../helpers/uidkey';

import { Item1 } from './Item1';

export interface List1Prop {
  callback: () => void;
}

export const List1: FC<List1Prop> = ({ callback }) => {
  logging('LIST-1 is rendered');
  return (
    <div>
      {[...Array(counters).keys()].map((index) => (
        <Item1 key={uidkey(index)} callback={callback} uid={uidkey(index)}>
          Increase value
        </Item1>
      ))}
    </div>
  );
};
