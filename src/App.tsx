import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/Homepage/Homepage";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import SignUp from "./Pages/SignUp/SignUp";
import RouteError from "./Widgets/RouteError";
import AppLayout from "./Widgets/Applayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <RouteError />,

    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/Contact",
        element: <Contact />,
        errorElement: <RouteError />,
      },
      { path: "/About", element: <About /> },
      {
        path: "/SignUp",
        element: <SignUp />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;

  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path="/" index element={<Homepage />} />
  //       <Route path="/contact" element={<Contact />} />
  //       <Route path="/about" element={<About />} />
  //       <Route path="/signup" element={<SignUp />} />
  //     </Routes>
  //   </BrowserRouter>
  // );
}

export default App;
