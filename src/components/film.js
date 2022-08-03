import React from "react";

const Film = ({href, children}) => {
    return (
        <>
            <p>
                <a href={href}>{children}</a>
            </p>
        </>
    );
};

export default Film;