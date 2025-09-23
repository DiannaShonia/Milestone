import Link from "next/link";
import { useRouter } from "next/router";

export default function LangSwitcher() {
  const router = useRouter();
  const { pathname, query, asPath, locale } = router;
  const next = locale === "en" ? "ka" : "en";

  return (
    <>
      <Link href={{ pathname, query }} as={asPath} locale={next}>
        Switch to {next.toUpperCase()}
      </Link>
    </>
  );
}
