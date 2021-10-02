import React, { useState } from "react";
import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
// import InstagramEmbed from 'react-instagram-embed';
import Button from "../Button";
import react from "react";

class ModalProps {
    handleClose: () => void;
    full?: boolean;
    children: react.ReactNode;
}

const Modal = ({ handleClose, children, full = false }: ModalProps) => {
    const drop = {
        hidden: {
            y: "-100vh",
            opacity: 0,
        },
        cisible: {
            y: 0,
            opacity: "1",
            transition: {
                duration: 0.1,
                type: "spring",
                damping: 100,
                stiffness: 500,
            },
        },
        esit: {
            y: "100VH",
            opacity: 0,
        },
    };

    const styler = full
        ? "w-1/2 fixed inset-0 z-20 bg-gold text-black z-3 m-auto p-1 rounded font-bold flex flex-col align-center"
        : "h-1/2 w-1/2 fixed inset-0 z-20 bg-gold text-black z-3 m-auto p-1 rounded font-bold flex flex-col align-center";

    return (
        <Backdrop onClick={handleClose}>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                variants={drop}
                className={styler}
            >
                {children}
                <Button onClick={handleClose}>close</Button>
            </motion.div>
            //{" "}
        </Backdrop>
    );
};

export default Modal;
