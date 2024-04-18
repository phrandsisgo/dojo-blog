import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({blogs, title,}) => {
    return (
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog) => ( //this line is like a for loop
                <Link to={`/blogs/${blog.id}`}>
                    <div className="blog-preview" key={blog.id}>
                        <h2>{ blog.title }</h2>
                        <p>Written by { blog.author }</p>
                    </div>
                </Link>
            ))}
        </div>

    );
}
export default BlogList;