import fs from "fs";
import path from "path";
import fm from "front-matter";

//Directory of the .md stuff
const postsDir = path.join(process.cwd(), "public/posts");
const outputFile = path.join(process.cwd(), "src/posts.json");

// Read all the .md file in the posts directory
const files = fs.readdirSync(postsDir);

const posts = files.map((file) => {
  const filePath = path.join(postsDir, file);
  const rawContent = fs.readFileSync(filePath, "utf-8");

  // Splits metadata from content
  const data = fm(rawContent);

  return {
    slug: file.replace(/\.md$/, ""), 
    title: data.attributes.title,
    date: data.attributes.date,
    excerpt: data.attributes.excerpt || "",
    image: data.attributes.image || "",
  };
});

// Write posts.json
fs.writeFileSync(outputFile, JSON.stringify(posts, null, 2));
