import React from "react";
import LayoutMain from "@/components/layout-components/main";
import Footer from "@/components/layout-components/footer";
import Header from "@/components/layout-components/header";
import { LanguageProvider } from "@/providers";
import { NavigationService, SocialService } from "@/network/services";
import { PageProvider } from "@/providers/currentPage.provider";

const navigationService = new NavigationService();
const socialService = new SocialService();

const fetchNavigations = async ({ lang = "az" } = {}) => {
  try {
    return await navigationService.getNavigations({ lang: lang });
  } catch (error) {
    console.error(error);
  }
};
const fetchSocials = async ({ lang = "az" } = {}) => {
  try {
    return await socialService.getSocials({ lang: lang });
  } catch (error) {
    console.error(error);
  }
};

export default async function PublicLayout({ children, lang }) {
  const lang_obj = {
    lang: lang,
  };

  // const [navigations, socials] = await Promise.all([
  //   fetchNavigations(lang_obj),
  //   fetchSocials(lang_obj),
  // ]);

  return (
    <div className="bg-red-500 p-5 h-[500px]">{children}</div>
    // <LanguageProvider>
    //   <PageProvider navs={navigations || []}>
    //     <Header lang={lang} navigations={navigations || []} />
    //     <LayoutMain>{children}</LayoutMain>
    //     <Footer lang={lang} socials={socials || []} />
    //   </PageProvider>
    // </LanguageProvider>
  );
}
