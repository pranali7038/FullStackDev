import './App.css';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import About from './Components/About';
import Courses from './Components/Courses';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from './Components/Navbar';  
import NotFound from './Components/NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <Navbar />
        <About />
      </div>
    ),
  },
  {
    path:('*'),
    element:<NotFound/>
  },
  {
    path: "/dashboard",
    element: (
      <div>
        <Navbar />
        <Dashboard />
      </div>
    ),
    children: [
      {
        path: "courses", 
        element: <Courses />,
      }
    ]
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
