import React, {useState} from "react";
import FilmList from "../components/filmList";
import MoreFilms from "../components/moreFilms";
import NewFilmForm from "../components/newFilmForm";

const FilmBox = () => {

    const [films, setFilms] = useState(
        [
            {
                id: 1,
                name: "Spider-Man: Into the Spider-Verse",
                href: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
            },
            {
                id: 2,
                name: "Life Itself",
                href: "https://www.imdb.com/title/tt5989218/?ref_=rlm"
            },
            {
                id: 3,
                name: "Mary Queen of Scots",
                href: "https://www.imdb.com/title/tt2328900/?ref_=rlm"
            },
            {
                id: 5,
                name: "Captain Marvel",
                href: "https://www.imdb.com/title/tt4154664/?ref_=rlm"
            }

        ]
    )

    const addNewFilm = (submittedFilm) => {
        submittedFilm.id = Date.now();
        const updatedFilms = [...films, submittedFilm];
        setFilms(updatedFilms);
    }

    return (
        <>
            <h1>Upcoming Film Releases, UK</h1>
            <FilmList films={films}/>
            <MoreFilms/>
            <h2>Post a new Movie!</h2>
            <NewFilmForm onFilmSubmit={(film) => addNewFilm(film)}/>
        </>
    );
};

export default FilmBox;