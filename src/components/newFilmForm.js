import React, {useState} from "react";

const NewFilmForm = ({onFilmSubmit}) => {

    const [name, setName] = useState("");
    const [href, setHref] = useState("");

    const handleNameChange = (evt) => {
        setName(evt.target.value);
    }

    const handleHrefChange = (evt) => {
        setHref(evt.target.value);
    }

    const handleFormSubmit = (evt) => {
        evt.preventDefault();
        const nameToSubmit = name.trim();
        const hrefToSubmit = href.trim();
        if (!nameToSubmit || !hrefToSubmit){
            return
        }

        onFilmSubmit({
            name: nameToSubmit,
            href: hrefToSubmit
        })

        // TODO update comments in box
        setName("");
        setHref("");
    }

    return (
        <form className="form-submit" onSubmit={handleFormSubmit}>
            <input
                type="text"
                placeholder="new movie"
                value={name}
                onChange={handleNameChange}/>
            
            <input
                type="href"
                placeholder="link to movie"
                value={href}
                onChange={handleHrefChange}/>

            <input type="submit" value="post"/>
        </form>
    );
};

export default NewFilmForm;