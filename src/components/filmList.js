import React from "react";
import Film from "./film";

const FilmList = ({films}) => {

    const filmNodes = films.map(film => {
        return (
            <>
                <Film href={film.href} key={film.id}>{film.name}</Film>
            </>
        );
    });

    return (
        <>
            {filmNodes}
        </>
    )

};

export default FilmList;