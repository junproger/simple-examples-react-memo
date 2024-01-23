import { FC, memo } from 'react';

import { uidkey } from '../../helpers/uidkey';
import { logging } from '../../utils/logging';
import { range } from '../../helpers/range';

import { Item2 } from './Item2';

export interface List2Prop {
  counters: number;
  summator: () => void;
}

const List2Memo: FC<List2Prop> = ({ counters, summator }) => {
  logging('LIST-2 is rendered');
  return (
    <div>
      {range(counters).map((index) => (
        <Item2 key={uidkey(index)} summator={summator} uid={uidkey(index)}>
          Increase value
        </Item2>
      ))}
    </div>
  );
};

export const List2 = memo(List2Memo);
