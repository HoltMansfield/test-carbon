export const useLocalStorage = () => {
  const setItem = (key, value) => {
    localStorage.setItem(key, value)
  }

  const getItem = (key) => {
    return localStorage.getItem(key)
  }

  return {
    setItem,
    getItem
  }
}
