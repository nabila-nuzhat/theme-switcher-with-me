/**  ===================================================
 * theme practise stage 5 : Read Context from another component
  ====================================================== */


import { useContext } from 'react'
import ThemeContext from '../ThemeContext'

function ThemeDisplay() {
const {theme} = useContext(ThemeContext); // This is simply object destructuring again. // Now the Settings component can read the theme and update it.
  return (
        <>
            <h1>ThemeDisplay</h1>
            <h2>Theme: {theme} </h2>
        </>
        
  )
}

export default ThemeDisplay;