import React, { useState, useEffect } from "react";
export default function Demo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // 让resize事件触发handleResize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    // 把count输出
    console.log(`count is ${count}`);
  };

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <h1>{count}</h1>
    </div>
  );
}
