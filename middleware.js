import { NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;
const SUPPORTED_LOCALES = ["az", "en", "ru"];
const DEFAULT_LOCALE = "az";

function getPreferredLocale(request) {
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;

  if (SUPPORTED_LOCALES.includes(cookieLocale)) return cookieLocale;

  const preferred = DEFAULT_LOCALE?.split(",")[0]?.split("-")[0];

  if (SUPPORTED_LOCALES.includes(preferred)) return preferred;

  return DEFAULT_LOCALE;
}
export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/api") || pathname.startsWith("/_next") || PUBLIC_FILE.test(pathname)) {
    return NextResponse.next();
  }

  const isMissingLocale = SUPPORTED_LOCALES.every((locale) => !pathname.startsWith(`/${locale}`));

  if (isMissingLocale) {
    const locale = getPreferredLocale(request);
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};
