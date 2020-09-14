export default {
  widgets: [{
      name: "netlify",
      options: {
        title: "Website Deployments",
        sites: [{
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
      name: "project-info",
    },
    {
      name: 'notes',
      layout: {
        width: 'small',
        height: 'auto'
      }
    }

  ],
}