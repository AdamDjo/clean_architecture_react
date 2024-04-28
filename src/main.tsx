import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "./i18n.ts";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
