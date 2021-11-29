import { useState, useEffect } from "react";

const useSize = () => {
  const [size, setSize] = useState(window.innerWidth);
  useEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
};

export default useSize;
