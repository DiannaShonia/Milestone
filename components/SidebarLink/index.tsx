import Link from "next/link";
import { PointerEvent } from "react";
import { useRouter } from "next/router";

export default function SidebarLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const router = useRouter();

  function handlePointerDown(e: PointerEvent) {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button === 1)
      return;
    e.preventDefault();
    requestAnimationFrame(() => router.push(href));
  }

  return (
    <Link href={href} onPointerDown={handlePointerDown} className={className}>
      {children}
    </Link>
  );
}
