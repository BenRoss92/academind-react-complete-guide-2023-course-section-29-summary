import React from 'react'
import ReactDOM from 'react-dom/client'
import { Root } from "./routes/root";
import { CreatePost } from "./routes/create-post";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
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
