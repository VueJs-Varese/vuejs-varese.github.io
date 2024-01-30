import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vitepress";

// eslint-disable-next-line max-len
const TelegramIcon = { svg: '<svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 0 32 32" width="32"><path d="m16 .5c-8.563 0-15.5 6.938-15.5 15.5s6.938 15.5 15.5 15.5c8.563 0 15.5-6.938 15.5-15.5s-6.938-15.5-15.5-15.5zm7.613 10.619-2.544 11.988c-.188.85-.694 1.056-1.4.656l-3.875-2.856-1.869 1.8c-.206.206-.381.381-.781.381l.275-3.944 7.181-6.488c.313-.275-.069-.431-.482-.156l-8.875 5.587-3.825-1.194c-.831-.262-.85-.831.175-1.231l14.944-5.763c.694-.25 1.3.169 1.075 1.219z"/></svg>' } as const;

// https://vitepress.dev/reference/site-config
//
export default defineConfig({
  lang: "it-IT",
  title: "Vue.js Varese",
  description: "Community locale dedicata a Vue.js: il framework JavaScript progressivo.",

  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }]
  ],

  lastUpdated: true,

  srcDir: "./src",
  cacheDir: "./cache",
  outDir: "./dist",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    //
    logo: "/vuejs-varese.png",

    nav: [
      { text: "Home", link: "/" }
      // { text: "Examples", link: "/markdown-examples" }
    ],

    // sidebar: [{
    //   text: "Examples",
    //   items: [
    //     { text: "Markdown Examples", link: "/markdown-examples" },
    //     { text: "Runtime API Examples", link: "/api-examples" }
    //   ]
    // }],

    socialLinks: [
      { icon: "discord", link: "https://discord.gg/mEjrFREsEz" },
      { icon: "github", link: "https://github.com/vuejs-varese" },
      { icon: "instagram", link: "https://www.instagram.com/vuejs_varese/" },
      { icon: "linkedin", link: "https://www.linkedin.com/company/vuejs-varese/" },
      { icon: TelegramIcon, link: "https://t.me/vuejs_varese", ariaLabel: "Telegram" },
      { icon: "x", link: "https://twitter.com/vuejs_varese" },
      { icon: "youtube", link: "https://www.youtube.com/@vuejs-varese" }
    ],

    footer: {
      message: "Made with ❤️ by Vue.js Varese.",

      // eslint-disable-next-line max-len
      copyright: `Copyright © ${new Date().getFullYear()} Vue.js Varese.`
    }
  },

  vite: {
    resolve: {
      alias: { "@": fileURLToPath(new URL("../src", import.meta.url)) }
    }
  }
});
