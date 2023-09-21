import { useState } from "react";
export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <h1>Solar System</h1>
      <h2>Mercury</h2>
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        Mercury is the closest planet to the Sun. The smallest planet in the
        Solar System (0.055 M🜨), Mercury has no natural satellites.
      </Panel>

      <h2>Venus</h2>
      <Panel
        title="Physical characteristics"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        Mercury is one of four terrestrial planets in the Solar System, and is a
        rocky body like Earth. It is the smallest planet in the Solar System,
        with an equatorial radius of 2,439.7 kilometres (1,516.0 mi).
      </Panel>
    </div>
  );
  function Panel({ title, children, isActive, onShow }) {
    return (
      <section className="panel">
        <h3>{title}</h3>
        {isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
      </section>
    );
  }
}
