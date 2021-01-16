import React from 'react';
import { render } from 'react-dom';
import './styles.scss';
import Counter from './Counter';
const Application = () => {
  return (
    <main className="Application">
      <section className="Counters"></section>
      <Counter max={15} step={5} />
    </main>
  );
};

render(<Application />, document.getElementById('root'));
