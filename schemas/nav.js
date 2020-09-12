import { MdLink } from "react-icons/md"

export default {
  title: "Navigation Links",
  name: "nav",
  type: "object",
  icon: MdLink,
  fields: [
    {
      title: "Page Name",
      name: "name",
      type: "string",
      validation: Rule => Rule.required().error('A page name is required.')
    },
    {
      title: "Relative Path",
      name: "path",
      type: "string",
      description: "Add the '/' in front for a valid pathname.",
      validation: Rule => Rule.required().error('A pathname is required.')
    },
    {
      title: "Displayed",
      name: "display",
      type: "boolean",
      layout: "checkbox",
      validation: Rule => Rule.required().error('A choice of if this is displayed or not is required.')
    },
  ],
  preview: {
    select: {
      name: "name",
      path: "path",
      display: "display"
    },
    prepare(selection) {
      const { name, path, display } = selection
      
      return {
        title: `${name} (${path})`,
        subtitle: `Displayed: ${display}`,
      }
    },
  }
}
