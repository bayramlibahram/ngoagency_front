import PublicLayout from "@/layouts/public-layout";

export default async function RootLayout({ children, params }) {
  const { lang } = await params;
  return <PublicLayout lang={lang}>{children}</PublicLayout>;
}

