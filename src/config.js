/* eslint-disable camelcase */

const domain = process.env.NEXT_PUBLIC_DOMAIN;

module.exports = {
  title: "Project Icarus",
  description: "Description",
  seo: {
    author: "Sreeram Padmanabhan",
    description: "Some description here",
    domain,
    gtmId: "GTM-5Z7T8F2",
    keywords: "",
    ogImage: `${domain}/img/og_image.png`,
    ogImageAlt: "",
    ogSiteName: "",
    ogType: "",
    ogUrl: "",
    title: "Title",
    twitterId: "",
    org: "",
    orgImage: "",
  },
  seed: {
    short_name: "Title",
    name: "Title",
    start_url: "/",
    background_color: "#ffffff",
    display: "standalone",
    theme_color: "#0563d8",
    icons: [
      {
        src: "/img/icon-192.png",
        type: "image/png",
        sizes: "192x192",
      },
      {
        src: "/img/icon-512.png",
        type: "image/png",
        sizes: "512x512",
      },
      {
        src: "/img/maskable_icon.png",
        sizes: "196x196",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
  },
  sections: {
    "section-1": {
      route: "/section-1",
      title: "Section 1",
      img: "/sections/blog.svg",
      auth: true,
      paid: true,
      links: [
        {
          route: "/section-1/post",
          title: "Post",
        },
      ],
    },
    "section-2": {
      route: "/section-2",
      title: "Section 2",
      img: "/sections/photos.svg",
      auth: true,
      paid: false,
      links: [
        {
          route: "/section-2/post",
          title: "Post",
        },
      ],
    },
    "section-3": {
      route: "/section-3",
      title: "Section 3",
      img: "/sections/games.svg",
      auth: false,
      paid: false,
      links: [
        {
          route: "/section-3/post",
          title: "Post",
        },
      ],
    },
  },
};
