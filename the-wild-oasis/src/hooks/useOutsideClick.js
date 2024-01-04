import { useEffect, useRef } from "react";

export function useOutsideClick(action, listenCapturating = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          action();
        }
      }
      document.addEventListener("click", handleClick, listenCapturating);
      return () =>
        document.removeEventListener("click", handleClick, listenCapturating);
    },
    [action, listenCapturating]
  );
  return ref;
}
