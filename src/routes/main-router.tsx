import MainLayout from "@/layouts/main-layout"
import HomePage from "@/pages/home/home-page"
import { createBrowserRouter } from "react-router"
import ErrorPage from "../pages/etc/error-page"

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
])
