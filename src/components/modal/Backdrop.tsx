import React from "react";
import { motion } from "framer-motion";

class BackdropProps {
    children:React.ReactNode;
    onClick:()=>void;
}

const Backdrop = ({ children, onClick }:BackdropProps) => {
    return (
        <motion.div
            className="fixed inset-0 z-20 bg-black opacity-5	"
            onClick={onClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {children}
        </motion.div>
    );
};

export default Backdrop;
