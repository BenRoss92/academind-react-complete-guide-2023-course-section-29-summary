import React from 'react'
import ReactDOM from 'react-dom/client'
import { Root } from "./routes/root";
import { CreatePost } from "./routes/create-post";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { App } from "./App";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // If the element/s in a route won't be just used for that route,
    // and if they won't fill the entire screen, and if you want to reuse an element to display on more than one route (have it shared), then you want a Layout route. 
    // Whenever `children` is used, this makes the route a Layout route.
    children: [
      {
        path: "/",
        element: <App />
      },
      {
        path: "/create-post",
        element: <CreatePost />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
