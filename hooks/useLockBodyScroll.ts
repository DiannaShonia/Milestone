import { useEffect } from "react";

const useLockBodyScroll = (value: boolean) => {
  useEffect(() => {
    setTimeout(
      () =>
        value &&
        document.querySelector("body")!.classList.add("disable-scroll"),
      50
    );
    return () =>
      document.querySelector("body")?.classList.remove("disable-scroll");
  }, [value]);

  return [value];
};

export default useLockBodyScroll;
