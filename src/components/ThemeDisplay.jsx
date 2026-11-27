/**  ===================================================
 * theme practise stage 5 : Read Context from another component
  ====================================================== */


import React, { useContext } from 'react'
import ThemeContext from '../ThemeContext'

function ThemeDisplay() {
const {theme, setTheme} = useContext(ThemeContext); // This is simply object destructuring again. // Now the Settings component can read the theme and update it.
  return (
        <div>
            <h1>ThemeDisplay</h1>
            <h2>Theme: {theme} </h2>
        </div>
        
  )
}

export default ThemeDisplay