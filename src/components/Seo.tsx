import { useEffect } from "react";

interface SeoProps {
  title: string;
  description: string;
  path?: string;
}

const SITE = "West Ford";
const ORIGIN = typeof window !== "undefined" ? window.location.origin : "";

export const Seo = ({ title, description, path = "/" }: SeoProps) => {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE}`;
    document.title = fullTitle;

    const setMeta = (key: string, value: string, attr: "name" | "property" = "name") => {
      let tag = document.head.querySelector(`meta[${attr}="${key}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, key);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", value);
    };

    setMeta("description", description);
    setMeta("og:title", fullTitle, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:url", `${ORIGIN}${path}`, "property");
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);
  }, [title, description, path]);

  return null;
};
