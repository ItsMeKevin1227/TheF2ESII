const setStorage = value => {
  localStorage.setItem('cost', value)
}
const getStorage = key => {
  return localStorage.getItem(key)
}

export { setStorage, getStorage }
