const SITE_URL = "https://pranavjoglekarcodes.web.app";
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function (eleventyConfig) {
  // Old Gatsby static folder (resume, post images) is served from the site root
  eleventyConfig.addPassthroughCopy({ "../static": "/" });
  eleventyConfig.addPassthroughCopy({ "../public/robots.txt": "robots.txt" });
  eleventyConfig.addPassthroughCopy({ "../src/assets/favicon.ico": "favicon.ico" });
  eleventyConfig.addPassthroughCopy({ "../src/assets/MugshotCard.jpg": "img/MugshotCard.jpg" });
  eleventyConfig.addPassthroughCopy({ "../src/posts": "blogs/posts" }, {
    filter: ["**/*.png", "**/*.jpg", "**/*.jpeg", "**/*.webp"],
  });
  eleventyConfig.addPassthroughCopy("css");

  // Open every link to another site in a new tab
  eleventyConfig.addTransform("external-links", function (content) {
    if (!(this.page.outputPath || "").endsWith(".html")) return content;
    return content.replace(/<a\s[^>]*href="https?:\/\/[^"]+"[^>]*>/g, (tag) => {
      if (tag.includes("target=") || tag.includes(`href="${SITE_URL}`)) return tag;
      return tag.replace("<a ", '<a target="_blank" rel="noopener noreferrer" ');
    });
  });

  eleventyConfig.addFilter("head", (list, count) => list.slice(0, count));

  // 25 Aug 2023
  eleventyConfig.addFilter("dayDate", (d) => {
    const date = new Date(d);
    return `${String(date.getUTCDate()).padStart(2, "0")} ${MONTHS[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
  });
  // 2023-08-25
  eleventyConfig.addFilter("isoDate", (d) => new Date(d).toISOString().slice(0, 10));

  return {
    dir: { input: ".", includes: "_includes", data: "_data", output: "_site" },
    templateFormats: ["njk"],
  };
}
