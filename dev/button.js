import React from "react";
import { Subscribe } from "../src";

import counter from "./counter";
import counter2 from "./counter-2";

export default function Counter() {
  return (
    <Subscribe to={counter}>
      {state => (
        <div>
          <button onClick={counter.increment}>
            Progress: {state.progress}
          </button>
        </div>
      )}
    </Subscribe>
  );
}
