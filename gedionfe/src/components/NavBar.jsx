import React from "react";
import useDarkMode from "../utils/hooks/useTheme";

const NavBar = ({ list }) => {
    const [theme, toggleTheme] = useDarkMode();
    const handleChange = (theme) =>{
        console.log("theme",theme);
        toggleTheme('dark' ?'light' : 'dark')
    }
  return (
    <div className="relative">
      <ul className="w-[calc(100%-6rem)] top-2 left-12 right-12 list-none flex justify-center dark:bg-background-dark bg-background-light py-4 px-8 gap-8 z-50 rounded-[24px] fixed mx-auto">
        {list.map((nav,key) => {
            if(nav === 'mode'){
                
                
                return <input type="checkbox" for={nav} onChange={()=>handleChange(theme)} />
            }
          return <li key={nav+key} className="dark:text-text-dark text-text-light">{nav}</li>;
        })}
      </ul>
    </div>
  );
};

export default NavBar;
