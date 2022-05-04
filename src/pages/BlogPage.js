import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
const blogs = [
  { name: "blog-1", to: "/blogs/1" },
  { name: "blog-2", to: "/blogs/2" },
  { name: "blog-3", to: "/blogs/3" },
];
const BlogPage = (props) => {
  return (
    <Layout>
      <div className="responsive ">
        <div className="blogs-page">
          {blogs.map((blog) => {
            return (
              <li key={blog.to}>
                <Link to={blog.to}>{blog.name}</Link>
              </li>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
