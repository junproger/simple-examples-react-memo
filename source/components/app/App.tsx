import { FC } from 'react';

import * as styles from './app.module.css';
import { Counter1 } from '../Example1/Counter1';

export const App: FC = () => {
  return (
    <>
      <main className={styles['app']}>
        <div>
          <p>Example 1 (default)</p>
          <Counter1 />
        </div>
        <div>
          <p>Example 2 (editable)</p>
        </div>
      </main>
    </>
  );
};
