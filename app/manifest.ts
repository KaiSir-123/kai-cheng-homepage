import { MetadataRoute } from "next";
import { profile } from "@/data/profile";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kai Cheng Research Homepage",
    short_name: "Kai Cheng",
    description:
      "Kai Cheng / 程凯 research homepage for Control Science and Engineering, Mobile Robot Localization, Multisensor Fusion, Factor Graph Optimization and SLAM.",
    start_url: "/",
    display: "standalone",
    background_color: "#08111f",
    theme_color: "#08111f",
    lang: "zh-CN",
    scope: "/",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any"
      }
    ],
    shortcuts: [
      {
        name: "Publications",
        short_name: "Papers",
        description: "Kai Cheng academic publications",
        url: "/publications/"
      },
      {
        name: "Research Blog",
        short_name: "Blog",
        description: "Kai Cheng research blog",
        url: "/blog/"
      }
    ],
    related_applications: [],
    prefer_related_applications: false,
    id: profile.siteUrl
  };
}
