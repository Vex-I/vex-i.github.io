import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import React from "react";
import matter from "front-matter";

//Page for the individual blog.
export default function BlogPost() {
  const { slug } = useParams();
  const [content, setContent] = React.useState("");


  //fetch the markdown file based on the slug parameter
  React.useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/posts/${slug}.md`)
      .then((res) => res.text()) //fetch the text
      .then((text) => {
        const parsed = matter(text); 
        setContent(parsed.body); //set the content to the body of the markdown file
      });
  }, [slug]);

  return (
    <article className="blog-container">
      <section>
        <ReactMarkdown>{content}</ReactMarkdown>
      </section>
    </article>
  );
}
