import Card from '../components/BlogCard';
import post from '../posts.json';
///Component that displays the list of blogs in a grid format.
const BlogList = () => (
    <div className="blog-list">
        <section className="blog-grid">
            {post
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .map((post) => (
          <Card key={post.slug} {...post} />
        ))}
        </section>
    </div>
);
export default BlogList;