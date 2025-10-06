import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

export default function usePreviousPath() {
  const router = useRouter();
  const prev = useRef<string | null>(null);

  useEffect(() => {
    const handleStart = () => {
      prev.current = router.pathname;
    };
    router.events.on("routeChangeStart", handleStart);
    return () => router.events.off("routeChangeStart", handleStart);
  }, [router]);

  return prev.current;
}
