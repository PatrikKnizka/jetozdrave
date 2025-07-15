import "./index.css";
import router from "./router.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <AnimatePresence mode="wait">
            <RouterProvider router={router} />
        </AnimatePresence>
    </StrictMode>
);
