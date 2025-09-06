import React from "react";
import About from "./components/About/About.jsx";
import Home from "./components/Home/Home.jsx";
import Github, { GithubInfoLoader } from "./components/Github/Github.jsx";
import User from "./components/User/User.jsx";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import { RouterProvider } from "react-router/dom";
import "./App.css";
import Contact from "./components/Contact/Contact.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//     children: [
//       { path: "", element: <Home /> },
//       { path: "about", element: <About /> },
//       {path:"contact",element:<Contact/>},
//     ],
//   },
// ]);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:Userid" element={<User/>} />
      <Route 
      loader={GithubInfoLoader}
      path="github" 
      element={<Github/>} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
