import { createGlobalStyle } from 'styled-components'


export const useGlobalStyle = () => {
  const createGlobalStyleComponent = () => createGlobalStyle`
    body {
      background-color: rgb(243, 243, 243)
    }
    a {
      text-decoration: none; /* no underline */
      color: black;
    }
  `

  return { createGlobalStyleComponent }
}
