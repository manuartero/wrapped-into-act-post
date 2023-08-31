import { useState } from "react";

export function MyComponent(): JSX.Element {
  const [count, setCount] = useState(0);
  
  return (
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  );
}
