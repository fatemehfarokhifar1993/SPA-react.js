import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import routes from "./routes";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route {...route} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
