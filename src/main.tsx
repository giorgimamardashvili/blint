import React from "react";
import ReactDOM from "react-dom/client";
import "@smastrom/react-rating/style.css";
import Root from "./pages/Root.tsx";
import "./index.css";
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import CategoryLayout from "./CategoryLayout.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CategoryPage, { loader as categoryPageLoader } from "./pages/CategoryPage.tsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProductPage from "./pages/ProductPage.tsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>404 Not Found</div>,
    handle: {
      crumb: () => (
        <Link className="text-gray-500" to="/">
          Home
        </Link>
      ),
    },
    children: [
      {
        element: <CategoryLayout />,
        children: [
          {
            path: "/:categoryId",
            handle: {
              crumb: (data: any) => (
                <Link className="text-gray-500" to={`/${data.categoryId}`}>
                  {data.categoryId}
                </Link>
              ),
            },
            children: [
              {
                path: "/:categoryId/",
                element: <CategoryPage />,
                loader: categoryPageLoader(queryClient),
              },
              {
                path: "/:categoryId/:productId",
                children: [
                  {
                    path: "/:categoryId/:productId/",
                    element: <ProductPage />,
                    handle: {
                      crumb: (data: any) => (
                        <Link className="text-gray-500" to={`/${data.categoryId}/${data.productId}`}>
                          {data.productId}
                        </Link>
                      ),
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
