import { Link } from "@inertiajs/inertia-react";
import React from "react";

function MenuItem({ link, icon, text, isActive, method='get' }) {
    const active = isActive ? ' active' : ''
    return (
        <Link 
            href={link ? route(link) : null} 
            className={`side-link${active}`}
            method={method}
            as="button"
        >
            {icon}
            {text}
        </Link>
    );
}

export default MenuItem;
