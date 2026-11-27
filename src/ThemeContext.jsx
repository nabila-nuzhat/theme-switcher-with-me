// /**  ===================================================
//  * theme practise stage 3
// Create a Context object
//   ====================================================== */

// import { createContext, useState } from "react";

// const ThemeContext = createContext('light');

// return
// export default ThemeContext;

/**  ===================================================
 * theme practise stage 4 : Create a Context Provider
  ====================================================== */

import { createContext, useState } from "react";

// // both are ok. professionally used null for practical use
// const ThemeContext = createContext(null);
const ThemeContext = createContext("light");

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )

}

export default ThemeContext;
export { ThemeProvider };