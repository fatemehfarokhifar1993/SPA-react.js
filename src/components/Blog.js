import Layout from "../Layout/Layout";
import { Link, useParams } from "react-router-dom";
const Blog = (props) => {
  //  const id = props.match.params.id;
  const { id } = useParams();
  return (
    <Layout>
      <div className="responsive ">
        <div className="blog-page">
          <h2>blog detail {id}</h2>
          <Link to="/blogs">go to blog page</Link>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
