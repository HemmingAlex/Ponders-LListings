import React, { useRef, useState, useEffect } from "react";
import S from "./Coll.module.css";

import PropTypes from "prop-types";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CollapseProps {
    body: string;
    label: string;
}

function Collapsible(props: CollapseProps) {
    let myRef = useRef(null);
    let buttonRef = useRef(null);
    let [button, setButton] = useState(true);

    let Show = () => {
        if (button) {
            setButton(false);
            buttonRef.current.style.backgroundColor = "hsl(35, 83%, 37%)";
            myRef.current.style.maxHeight = myRef.current.scrollHeight + "px";
        } else {
            setButton(true);
            buttonRef.current.style.backgroundColor = "hsl(35, 83%, 47%)";
            myRef.current.style.maxHeight = "0px";
        }
    };

    return (
        <div className={S.body}>
            <button className={S.collapsible} onClick={Show} ref={buttonRef}>
                {" "}
                {props.label}
                <div className={S.icon}>
                    {button || undefined ? (
                        <FontAwesomeIcon width="16" icon={faPlus} />
                    ) : (
                        <FontAwesomeIcon width="16" icon={faMinus} />
                    )}
                </div>
            </button>
            <div className={S.content} ref={myRef}>
                <div>{props.body}</div>
            </div>
        </div>
    );
}
Collapsible.propTypes = {
    label: PropTypes.string,
    body: PropTypes.string,
};

Collapsible.defaultProps = {
    label: "",
    body: "",
};
export default Collapsible;
