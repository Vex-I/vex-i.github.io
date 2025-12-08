import Card from '../components/BlogCard';
import post from '../posts.json';
///Component that displays the list of blogs in a grid format.
const BlogList = (count=-1) => (

    <div style={{display:'grid', alignItems:'center', justifyItems:'center', gridTemplateColumn:'1fr'}}>
    <div className="blog-list">
        <section className="blog-grid">
            {post
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .slice(0, count > 0 ? count : post.length)
                .map((post) => (
          <Card key={post.slug} {...post} />
        )
        )}
        </section>
    </div>
    </div>
);
export default BlogList;
