import { useState } from 'react'
import './App.css'
import { ThemeProvider } from './ThemeContext';
import ThemeDisplay from './components/ThemeDisplay';

function App() {
/**  ==========================================================
 * theme practise stage 1 : Create a theme selection state
  ========================================================== */
  // const [theme, setTheme] =useState("dark");
  //   function handleTheme(){
  //     setTheme("light");
  //     console.log(theme);
// }

/**  ==========================================================
 * theme practise stage 2: Practise changing state dynamically
  ========================================================== */
// toggle theme test :1
  const [theme, setTheme] = useState('light');
  function toggleTheme(){
    setTheme(
      (prev) => prev === 'light' ? 'dark' : 'light'
    )
  }
  // toggle theme test :2 
  const [themeBangla, setThemeBangla] = useState('roddur');

  return (
    <>
  
{/* ==========================================================
     theme practise stage 1 :  Create a theme selection state
============================================================== */}
     {/* <h1>Hello, the world is {theme} </h1> */}
     {/* <button type="button" onClick={handleTheme}> Change The shine </button> */}
{/* ==========================================================
     theme practise stage 2 : Practise changing state dynamically
============================================================== */}
    {/* button toggle test 1 -------------------*/}
<h1>Hello, the world is {theme} </h1>
  <button onClick={toggleTheme}> Shimmer or shine </button>
<br></br>
<br></br>
    {/* button toggle test 2 ------------------- */}
 <button type="button" onClick={()=>{setThemeBangla((prev2)=>prev2==='roddur' ? 'akash meghla' : 'roddur')}}> Ami chai  </button>
    <h2>{themeBangla}</h2>

    {/* ===================================================
  theme practise stage 5 : Read Context from another component
  ======================================================  */}
  <ThemeProvider>
    <ThemeDisplay />
  </ThemeProvider>
  
    </>

    
  )
}

export default App
