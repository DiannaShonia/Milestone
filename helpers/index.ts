export type NavDirection = "left" | "right" | "none";
let navDirection: NavDirection = "none";

export function setNavDirection(dir: NavDirection) {
  navDirection = dir;
}
export function getNavDirection(): NavDirection {
  return navDirection;
}
