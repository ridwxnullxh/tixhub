import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Tickets from "./pages/Tickets";
import NotFound from "./pages/NotFound";
import Layout from "./shared/Layout";
import { AuthProvider } from "./context/AuthContext";
import { TicketProvider } from "./context/TicketContext";

const router = createBrowserRouter([
  {
    path: "/",

    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "auth/login", element: <Login /> },
      { path: "auth/signup", element: <Signup /> },
      {
        path: "dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "tickets",
        element: (
          <ProtectedRoute>
            <Tickets />
          </ProtectedRoute>
        ),
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

const Router = () => {
  return (
    <AuthProvider>
      <TicketProvider>
        <RouterProvider router={router} />
      </TicketProvider>
    </AuthProvider>
  );
};

export default Router;
