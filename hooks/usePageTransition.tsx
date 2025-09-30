// import React, {
//   createContext,
//   useCallback,
//   useContext,
//   useEffect,
//   useRef,
//   useState,
// } from "react";
// import { Router, useRouter } from "next/router";
// import { OVERLAY_MIN_MS, PUSH_DELAY_MS } from "@/utils/animationConstants";

// type Direction = "ltr" | "rtl";
// type TransitionPhase = "idle" | "prePush" | "pushing";

// type Ctx = {
//   isOverlayVisible: boolean;
//   direction: Direction;
//   transitionPhase: TransitionPhase;
//   pendingPath: string | null;
//   startOverlay: (dir?: Direction) => void;
//   navigateWithOverlay: (path: string, dir?: Direction) => void;
//   hideOverlayNow: () => void;
// };

// const PageTransitionContext = createContext<Ctx | null>(null);

// export const PageTransitionProvider: React.FC<{
//   children: React.ReactNode;
// }> = ({ children }) => {
//   const router = useRouter();

//   const [isOverlayVisible, setIsOverlayVisible] = useState(false);
//   const [direction, setDirection] = useState<Direction>("ltr");
//   const [transitionPhase, setTransitionPhase] =
//     useState<TransitionPhase>("idle");
//   const [pendingPath, setPendingPath] = useState<string | null>(null);

//   const startTimeRef = useRef<number | null>(null);
//   const endTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
//   const pushTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

//   const clearTimers = useCallback(() => {
//     if (endTimerRef.current) clearTimeout(endTimerRef.current);
//     if (pushTimerRef.current) clearTimeout(pushTimerRef.current);
//     endTimerRef.current = null;
//     pushTimerRef.current = null;
//   }, []);

//   const hideOverlayNow = useCallback(() => {
//     clearTimers();
//     setIsOverlayVisible(false);
//     setPendingPath(null);
//     setTransitionPhase("idle");
//     startTimeRef.current = null;
//   }, [clearTimers]);

//   const finishAfterMinimum = useCallback(() => {
//     if (startTimeRef.current === null) return;
//     const elapsed = Date.now() - startTimeRef.current;
//     const remaining = Math.max(OVERLAY_MIN_MS - elapsed, 0);
//     if (endTimerRef.current) clearTimeout(endTimerRef.current);
//     endTimerRef.current = setTimeout(hideOverlayNow, remaining);
//   }, [hideOverlayNow]);

//   const startOverlay = useCallback(
//     (dir: Direction = "ltr") => {
//       clearTimers();
//       setDirection(dir);
//       setIsOverlayVisible(true);
//       setTransitionPhase("prePush");
//       startTimeRef.current = Date.now();
//     },
//     [clearTimers]
//   );

//   const navigateWithOverlay = useCallback(
//     (path: string, dir: Direction = "ltr") => {
//       if (router.pathname === path) return;
//       clearTimers();

//       setDirection(dir);
//       setIsOverlayVisible(true);
//       setPendingPath(path);
//       setTransitionPhase("prePush");
//       startTimeRef.current = Date.now();

//       pushTimerRef.current = setTimeout(() => {
//         setTransitionPhase("pushing");
//         router.push(path);
//       }, PUSH_DELAY_MS);
//     },
//     [router, clearTimers]
//   );

//   useEffect(() => {
//     const onComplete = () => finishAfterMinimum();
//     const onError = () => finishAfterMinimum();

//     Router.events.on("routeChangeComplete", onComplete);
//     Router.events.on("routeChangeError", onError);
//     return () => {
//       Router.events.off("routeChangeComplete", onComplete);
//       Router.events.off("routeChangeError", onError);
//       clearTimers();
//     };
//   }, [finishAfterMinimum, clearTimers]);

//   return (
//     <PageTransitionContext.Provider
//       value={{
//         isOverlayVisible,
//         direction,
//         transitionPhase,
//         pendingPath,
//         startOverlay,
//         navigateWithOverlay,
//         hideOverlayNow,
//       }}
//     >
//       {children}
//     </PageTransitionContext.Provider>
//   );
// };

// export const usePageTransitionContext = () => {
//   const ctx = useContext(PageTransitionContext);
//   if (!ctx)
//     throw new Error(
//       "usePageTransitionContext must be used within PageTransitionProvider"
//     );
//   return ctx;
// };
