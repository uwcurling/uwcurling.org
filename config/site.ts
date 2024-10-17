export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "UW Curling Club",
  description: "Official home of the UW-Madison Curling Club!",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Join",
      href: "/join",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Officers",
      href: "/officers",
    },
    {
      label: "Donate",
      href: "https://venmo.com/uwcurling",
    },
    {
      label: "USACC",
      href: "https://collegecurlingusa.org/",
      target: "_blank",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Join",
      href: "/join",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Officers",
      href: "/officers",
    },
    {
      label: "Donate",
      href: "https://venmo.com/uwcurling",
    },
    {
      label: "USACC",
      href: "https://collegecurlingusa.org/",
      target: "_blank",
    },
  ],
  links: {
    twitter: "/",
    instagram: "https://www.instagram.com/curlinguw/",
    discord: "https://discord.gg/mqPgszhKpR",
    sponsor: "https://venmo.com/uwcurling",
    recwell: "https://recwell.wisc.edu/curling/",
  },
};
