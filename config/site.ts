export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Curling Club of UW-Madison",
  description: "Official home of the Curling Club of UW-Madison!",
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
