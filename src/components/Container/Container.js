import s from "./Container.module.css";
import React from 'react';
export default function Container({ title, children }) {
    return (
        <div className={s.container}>
            <h2>{title}</h2>
            {children}
        </div>
    );
}