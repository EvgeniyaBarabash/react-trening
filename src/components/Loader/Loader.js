import { Oval } from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import React from "react";

const sizes = {
    sm: 4,
    md: 24,
    lg: 32,
};

export default function Loader() {
    return (
        <Oval
            width="sizes[size]"
            color='orange'
            ariaLabel='loading'
        />
    )
}
