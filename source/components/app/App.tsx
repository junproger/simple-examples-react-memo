import { FC } from 'react';

import * as styles from './app.module.css';

export const App: FC = () => {
  return (
    <>
      <main className={styles['app']}>
        <div>
          <p>Example 1</p>
        </div>
        <div>
          <p>Example 2</p>
        </div>
      </main>
    </>
  );
};
