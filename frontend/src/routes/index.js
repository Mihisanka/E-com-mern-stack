import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home'; // Update the path to include the 'home' directory

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);

export default router;
