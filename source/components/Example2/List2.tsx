import { FC, memo } from 'react';

import { uidkey } from '../../helpers/uidkey';
import { logging } from '../../utils/logging';

import { Item2 } from './Item2';

export interface List2Prop {
  counters: number[];
  summator: () => void;
}

const memoList2: FC<List2Prop> = ({ counters, summator }) => {
  logging('LIST-2 is rendered', counters);
  return (
    <div>
      {counters.map((index) => (
        <Item2 key={uidkey(index)} summator={summator} uid={uidkey(index)}>
          Increase value
        </Item2>
      ))}
    </div>
  );
};

export const List2 = memo(memoList2);
