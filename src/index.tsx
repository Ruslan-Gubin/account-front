 import ReactDOM from "react-dom/client";
import { Suspense } from "react";
import { RouterProvider } from "react-router";
import { routerApp } from "./app/router/routerApp";
import "./app/styles/globals.scss";
import { Providers } from "./app/providers";
import { BeforLoading } from "./widgets/befor-loading/BeforLoading";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
      <Providers>
      <Suspense fallback={<BeforLoading />}>
        <RouterProvider router={routerApp} />
      </Suspense>
      </Providers>

);
