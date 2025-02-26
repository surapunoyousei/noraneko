import type * as React from "react";
import { useTranslation } from "react-i18next";
import {
  BadgeInfo,
  Briefcase,
  Grip,
  House,
  Option,
  PanelLeft,
  PencilRuler,
  UserRoundPen,
  Wrench,
} from "lucide-react";
import { NavUser } from "@/components/nav-user.tsx";
import { NavHeader } from "@/components/nav-header.tsx";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar.tsx";
import { NavFeatures } from "@/components/nav-features.tsx";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { t } = useTranslation();

  const user = {
    name: "Noraneko",
    email: "noraneko@example.com",
    avatar: "/avatars/shadcn.jpg",
  };

  const overview = [
    { title: t("pages.home"), url: "#/overview/home", icon: House },
  ];

  const features = [
    {
      title: t("pages.tabAndAppearance"),
      url: "#/features/design",
      icon: PencilRuler,
    },
    {
      title: t("pages.browserSidebar"),
      url: "#/features/sidebar",
      icon: PanelLeft,
    },
    {
      title: t("pages.workspaces"),
      url: "#/features/workspaces",
      icon: Briefcase,
    },
    {
      title: t("pages.keyboardShortcuts"),
      url: "#/features/shortcuts",
      icon: Option,
    },
    { title: t("pages.webApps"), url: "#/features/webapps", icon: Grip },
    {
      title: t("pages.profileAndAccount"),
      url: "#/features/accounts",
      icon: UserRoundPen,
    },
  ];

  const about = [
    { title: t("pages.aboutBrowser"), url: "#/about/browser", icon: BadgeInfo },
    { title: t("pages.debug"), url: "#/debug", icon: Wrench },
  ];

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <NavHeader />
      </SidebarHeader>
      <SidebarContent>
        <NavFeatures
          title={t("sidebar.overview")}
          features={overview}
        />
        <NavFeatures
          title={t("sidebar.features")}
          features={features}
        />
        <NavFeatures
          title={t("sidebar.about")}
          features={about}
        />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
