import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import BlogPage from "./pages/BlogPage";
import Blog from "./components/Blog";

const routes = [
  { path: "/blogs/:id", element: <Blog /> },
  { path: "/blogs", element: <BlogPage /> },
  { path: "/", element: <HomePage /> },
  { path: "/about-us", element: <AboutUsPage /> },
  { path: "/profile/*", element: <Profile /> },
  {path:"*" ,element: <NotFound/> },
];

export default routes;
