import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
function NotFound(props) {
  return (
    <Layout>
      <div className="responsive ">
        <div className="notFound-page">
          <p>
            <h1 className="text-404">404</h1>
            <br />
            the page not found
          </p>
          <Link to="/">go to home page</Link>
        </div>
      </div>
    </Layout>
  );
}

export default NotFound;
