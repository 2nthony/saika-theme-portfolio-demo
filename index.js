new Saika({
  target: "app",
  plugins: [
    saikaThemePortfolio,
    saikaDisqus({
      shortname: "saika-theme-portfolio-demo",
    }),
  ],
  github: "2nthony",
  twitter: "2nthony",
  hireable: true,
  sponsorLink: "https://patreon.com/2nthony",
  sponsorTip: "support me with love!",
  follow: true,
  repos: "pinned-repos",
  skills: [
    {
      topic: "vue",
      description: `I contribute to Vue ecosytem every a few days.`,
    },
    {
      topic: "nodejs",
      description: `I use Node.js to fit-up my stuff.`,
    },
    {
      topic: "github",
      description: `I'm not pretty good at GitHub ecosystem.`,
    },
  ],
  nav: [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/about",
    },
  ],
  posts: [
    {
      title: "my-first-post",
      link: "/posts/my-first-post",
    },
  ],
});
