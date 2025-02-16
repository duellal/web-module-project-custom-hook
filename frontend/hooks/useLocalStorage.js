import { useState } from 'react'

const useLocalStorage = (key, initialValue) => {
   const [value, setValue] = useState(() => {
      if (localStorage.getItem(key)) {
         return JSON.parse(localStorage.getItem(key))
      }

      localStorage.setItem(key, JSON.stringify(initialValue))
   })

   const setStoredValue = value => {
      setValue(value)

      localStorage.setItem(key, JSON.stringify(value))
   }

   return ([value, setStoredValue])
}

export default useLocalStorage