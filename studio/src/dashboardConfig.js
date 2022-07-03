export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62c1ef7c2a7fa34dc007dc9e",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-hbsrmp9h",
                  apiId: "bc6ca5cc-963c-448f-9373-739b2aa37018",
                },
                {
                  buildHookId: "62c1ef7c355a9e441b111a44",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-d9ru7k7t",
                  apiId: "735c9005-48fd-4569-8cf1-e748828dac40",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/rubenkretek/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-d9ru7k7t.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
