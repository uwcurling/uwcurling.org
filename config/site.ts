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
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  navMenuItems: [
    {
      label: "Standings",
      href: "/standings",
    },
    {
      label: "Competitions",
      href: "/competitions",
    },
    {
      label: "Contact",
      href: "/contact",
    },
    {
      label: "About",
      href: "/about",
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
