import React from 'react'
import ReactDOM from 'react-dom/client'
import { Root } from "./routes/root";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { NewPost } from './components/NewPost';
import { Modal } from './components/Modal';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/create-post",
        element: <Modal isModalOpen={true}><NewPost /></Modal>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
