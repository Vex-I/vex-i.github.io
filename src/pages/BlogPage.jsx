import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
//Page for the individual blog.
export default function BlogPost() {
  const { slug } = useParams();
  const [content, setContent] = React.useState("");


  //fetch the markdown file based on the slug parameter
  React.useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/posts/${slug}.md`)
      .then((res) => res.text())
      .then(setContent);
  }, [slug]);

  return (
    <article>
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
}