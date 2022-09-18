import React from 'react';
import { CounterList } from '../components/CounterList';

export default function Home() {
  return (
    <div className="body">
      <section className="section">
        <h1 className="title">ReactJS</h1>
        <h2 className="subtitle">Assessment practice Exercise</h2>
        <p>
          <strong>Instructions:</strong> The tasks to be performed are listed
          below:
        </p>
        <p>
          IMPORTANT!!!! read this: Please open a new terminal and run there{' '}
          <code>yarn start-server</code>. Then read the following:
        </p>
        <ol className="instructions">
          <li>
            Install Jest and React Testing library. If you want to use MORE (not
            others instead of these but MORE) libraries you can use them.
          </li>
          <li>Setup the test command in package json</li>
          <li>
            Add as much tests as you consider necessary, please check the code
            coverage.
          </li>
        </ol>
      </section>
      <section className="section">
        <div id="root">
          <CounterList />
        </div>
      </section>
    </div>
  );
}
