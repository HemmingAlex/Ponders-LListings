import React from "react";
import { motion } from "framer-motion";
// import InstagramEmbed from "react-instagram-embed";
import react from "react";

class ModealProps {
    children: react.ReactNode;
    onClick: () => void;
}

export const Button = ({ children, onClick }: ModealProps) => {
    return (
        <motion.button
            onClick={onClick}
            whileHover={{ scale: 1.1 }}
            whileFocus={{
                scale: 0.9,
                color: "#dd8915",
                backgroundColor: "black",
                borderColor: "#dd8915",
            }}
            whileTap={{
                scale: 0.9,
                color: "#dd8915",
                backgroundColor: "black",
                borderColor: "#dd8915",
            }}
            className="bg-gold font-bold p-1 rounded border-2 border-black"
        >
            {children}
        </motion.button>
    );
};

export default Button;
