import { createBrowserRouter, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import TableInput from "./pages/TableInput";
import WeightInput from "./pages/WeightInput";
import Result from "./pages/Result";

const pageVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
};

const pageTransition = {
    duration: 0.3,
    type: "tween" as const,
    ease: "easeInOut" as const
};

function AnimatedTableInput() {
    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
        >
            <TableInput />
        </motion.div>
    );
}

function AnimatedWeightInput() {
    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
        >
            <WeightInput />
        </motion.div>
    );
}

function AnimatedResult() {
    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
        >
            <Result />
        </motion.div>
    );
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/table" replace />,
    },
    {
        path: "/table",
        element: <AnimatedTableInput />,
    },
    {
        path: "/weight",
        element: <AnimatedWeightInput />,
    },
    {
        path: "/result",
        element: <AnimatedResult />,
    },
]);

export default router;
