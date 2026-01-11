import { QuartzConfig } from "quartz"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Slip Box",
    enableSPA: true,
    enablePopovers: true,
    baseUrl: "ishehroze.github.io",
    ignorePatterns: ["private", "templates"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Inter",
        body: "Inter",
        code: "JetBrains Mono",
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate(),
      Plugin.ObsidianFlavoredMarkdown(),
      Plugin.GitHubFlavoredMarkdown(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.Assets(),
    ],
  },
}

export default config