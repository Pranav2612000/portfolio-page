// Reads the blog posts from ../src/posts and turns them into HTML
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import markdownIt from "markdown-it";
import hljs from "highlight.js";

const POSTS_DIR = path.resolve("../src/posts");

const md = markdownIt({
  html: true,
  linkify: true,
  highlight(code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(code, { language: lang }).value;
    }
    return "";
  },
});

function findPostFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return findPostFiles(full);
    return entry.name === "index.mdx" ? [full] : [];
  });
}

export default function () {
  return findPostFiles(POSTS_DIR)
    .map((file) => {
      const { data, content } = matter(fs.readFileSync(file, "utf8"));
      // Same url as the old Gatsby site: /blogs/posts/2021/git_tricks_1/
      const folder = path.relative(POSTS_DIR, path.dirname(file)).split(path.sep).join("/");
      return {
        ...data,
        url: `/blogs/posts/${folder}/`,
        image: data.desktop_img ? `/blogs/posts/${folder}/${data.desktop_img.replace("./", "")}` : null,
        html: md.render(content),
      };
    })
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}
