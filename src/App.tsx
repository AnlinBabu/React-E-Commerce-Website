import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/Homepage/Homepage";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import SignUp from "./Pages/SignUp/SignUp";
import RouteError from "./Widgets/RouteError";
import AppLayout from "./Widgets/Applayout";
import WishList from "./Pages/wishList/WishList";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://hjahfjkuwcqmosymgxue.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhqYWhmamt1d2NxbW9zeW1neHVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE0MDU5MzMsImV4cCI6MjAxNjk4MTkzM30.um2g4PWqRmCQFIn1qWpkPYT6Nyu8aa_V7FDtdZiUn_c"
);

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
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/wishList",
        element: <WishList />,
      },

      {
        path: "/SignUp",
        element: <SignUp />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );

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
