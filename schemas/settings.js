export default {
  title: "Site Settings",
  name: "settings",
  type: "document",
  // icon: MdSettings,
  __experimental_actions: ["update", "publish" /* 'create', 'delete' */],
  fields: [
    {
      title: "Site Title",
      name: "title",
      type: "string",
    },
    {
      title: "Logo",
      name: "logo",
      type: "image",
      description: "Logo loaded on front page of site",
    },
    {
      title: "Front Page Text",
      name: "frontpagematter",
      type: "array",
      of: [{ type: "block" }],
      description:
        "Text appears under the logo on the home page of mmlinedancing.com",
    },
    {
      title: "Favicon",
      name: "favicon",
      type: "image",
      description: "Favicon for displaying icon in browser tabs etc..",
    },
    {
      title: "Main Colour",
      name: "colorMain",
      type: "color",
    },
    {
      title: "Navigation Links",
      name: "nav",
      type: "array",
      of: [{ type: "nav" }],
      collapsible: true,
      collapsed: true,
    },
    {
      title: "Social Network Links",
      name: "socials",
      type: "array",
      of: [{ type: "socials" }],
      collapsible: true,
      collapsed: true,
    },
    {
      title: "About Page Image",
      name: "aboutImage",
      type: "image",
    },
    {
      name: "aboutImageCaption",
      type: "string",
      title: "About Page Image Caption",
    },
    {
      title: "About Blurb",
      name: "aboutBlurb",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
}
