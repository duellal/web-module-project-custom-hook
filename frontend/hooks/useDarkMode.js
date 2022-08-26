import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
   const [darkMode, setDarkMode] = useLocalStorage('darkModeBoolean', false);

   return ([darkMode, setDarkMode])
}

export default useDarkMode