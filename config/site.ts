export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "UW Curling",
  description: "Official home of the UW-Madison Curling Club!",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Standings",
      href: "/standings",
    },
    {
      label: "Competitions",
      href: "/competitions",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "/",
    twitter: "/",
    instagram: "https://www.instagram.com/curlinguw/",
    docs: "/",
    discord: "https://discord.gg/mqPgszhKpR",
    sponsor: "https://venmo.com/uwcurling",
  },
};
