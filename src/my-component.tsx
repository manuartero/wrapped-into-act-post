import { useEffect, useState } from "react";

export function MyComponent(): JSX.Element {
  const [count, setCount] = useState<number | undefined>(undefined);

  useEffect(() => {
    // read from localStorage
    const value = localStorage.getItem("count");
    if (value) {
      setCount(Number(value));
    }
  }, []);

  const increment = () => {
    if (count !== undefined) {
      setCount(count + 1);
    }
  };

  const saveToLocalStorage = () => {
    localStorage.setItem("count", String(count));
  };

  return (
    <div className="card">
      <button onClick={increment} aria-label="increment">
        count is {count ? count : ".."}
      </button>
      <button onClick={saveToLocalStorage} aria-label="save">
        save to localStorage
      </button>
    </div>
  );
}
