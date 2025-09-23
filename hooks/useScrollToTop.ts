import { useEffect } from "react";
import { Router } from "next/router";

const useScrollToTop = (router: Router) => {
  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.route]);
};

export default useScrollToTop;
