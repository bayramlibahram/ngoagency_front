import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import LayoutMain from "@/components/layout-components/main";
import Footer from "@/components/layout-components/footer";
import Header from "@/components/layout-components/header";
import { LanguageProvider } from "@/providers";
import { NavigationService, SocialService } from "@/network/services";
import { PageProvider } from "@/providers/currentPage.provider";
import { ThemeProvider } from "@/components/layout-components/theme/theme-provider";
import DesktopNavbar from "@/components/layout-components/desktop-navbar";
import HeaderTop from "@/components/layout-components/header-top";

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
    
      
        <div className="flex flex-col bg-white" style={{ minHeight: "100vh" }}>
          <HeaderTop />
          <DesktopNavbar />
          <LayoutMain>{children}</LayoutMain>
          <Footer />
        </div>
      
    
    // <LanguageProvider>
    //   <PageProvider navs={navigations || []}>
    //     <Header lang={lang} navigations={navigations || []} />
    //     <LayoutMain>{children}</LayoutMain>
    //     <Footer lang={lang} socials={socials || []} />
    //   </PageProvider>
    // </LanguageProvider>
  );
}
