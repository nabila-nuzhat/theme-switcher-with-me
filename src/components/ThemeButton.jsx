import React, { useContext } from 'react'
import ThemeContext from '../ThemeContext'

/** =================================================================
 * theme practise stage 6 : Update Context from a different component
  ================================================================= */
function ThemeButton() {
    const { theme, setTheme } = useContext(ThemeContext);

    function toggleTheme() {
        setTheme((prevTheme) => prevTheme === "light" ? "dark" : "light")
    }
    return (
        <>
            <h2>ThemeButton: {theme} </h2>
            <button onClick={() => { setTheme(prev3 => (prev3 === 'light' ? "dark" : "light")) }} > Click! Click!! </button>
            <br /><br />
            {/* with Toggle Predefined function ------------------------ */}
            <button onClick={toggleTheme}>Toggle~~ ~~ {theme}  </button>

        </>
    )
}

export default ThemeButton