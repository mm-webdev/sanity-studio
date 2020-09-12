import { MdPeople } from "react-icons/md"

export default {
  title: "Social Network Links",
  name: "socials",
  type: "object",
  icon: MdPeople,
  // __experimental_actions: ["update", "publish" /* 'create', 'delete' */],
  fields: [
    {
      title: "Social Network",
      name: "title",
      type: "string",
      validation: Rule => Rule.required().error('A social network name is required.')
    },
    {
      title: "Link",
      name: "url",
      type: "string",
      validation: Rule => Rule.required().error('A url is required.')
    },
    {
      title: "Font Awesome Icon Code",
      name: "facode",
      type: "string",
      description:
        "This is the Font Awesome code for the icon, can be found at https://fontawesome.com/icons?d=gallery&s=brands (just use the code displayed on that page)",
      validation: Rule => Rule.required().error('An icon code is required.')
    },
  ],
  preview: {
    select: {
      title: "title",
      url: "url",
      facode: "facode"
    },
    prepare(selection) {
      const { title, url, facode } = selection
      
      return {
        title: `${title}`,
        subtitle: `${url} (Icon: ${facode})`,
      }
    },
  }
}
