export default {
  widgets: [
    {
      name: "netlify",
      layout: {
        width: "auto",
        height: "auto"
      },
      options: {
        title: "Website Deployments",
        sites: [
          {
            title: "mmlinedancing.com",
            apiId: "f3f9e63f-3721-43f0-b54a-b3dd6de6628d",
            buildHookId: "5f5eee50a9ea4dd836e47dfe",
            name: "mmlinedancing-v2",
          },
          {
            title: "admin.mmlinedancing.com",
            apiId: "a307a69a-281d-47e4-b227-f8cd7d1f870b",
            buildHookId: "5f5ef07a3b4b0ec2ca28def3",
            name: "mmadmin",
          },
        ],
      },
    },
    { 
      name: "document-list",
      options: {
        title: 'Last items added/edited',
        order: '_updatedAt desc',
        limit: 6
      },
      layout: {
        width: "medium",
      }
    },
    {
      name: "padlet",
      layout: {
        width: "large",
      },
    },
  ],
};
