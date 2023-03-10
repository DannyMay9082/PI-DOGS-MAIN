import React, { useState, useEffect } from 'react';
import btnDark from "./../../assets/cachorro-de-poodle-animais-caes-1674436-removebg-preview.png";
import btnLight from "./../../assets/cachorro-de-poodle-animais-caes-1336395-removebg-preview.png";


function DarkMode() {
    const [checked, setChecked] = useState(localStorage.getItem("theme") === "dark" ? true : false); // si el localStorage tiene un valor de dark, lo pongo a true, si no, lo pongo a false

    useEffect(() => {
        document
        .getElementsByTagName("HTML")[0] // obtengo el elemento HTML
        .setAttribute("data-theme", localStorage.getItem("theme")); // le pongo el valor del localStorage al elemento HTML
    }, [checked]);

    const toggleThemeChange = () => {
        if (checked === false) {
        localStorage.setItem("theme", "dark");
        
        setChecked(true);
        } else {
        localStorage.setItem("theme", "light");
    
        setChecked(false);
        }
    }

    return (
        <div>
            <label>
                    <img src={checked ? btnLight : btnDark} alt="btn" onClick={toggleThemeChange} className="switch" />
            </label>
        </div>
    )
}

export default DarkMode