export const LOCAL_STORAGE_KEY = {
  WORK_AUDIO: 'wa',
  BREAK_AUDIO: 'ba',
  CURRENT_TODO: 'ct',
  TODO_LIST: 'tl',
  HISTORY_REPORT: 'hr'
}

export const setLocalStorage = (key, value) => {
  return localStorage.setItem(key, JSON.stringify(value))
}

export const getLocalStorage = key => {
  const data = localStorage.getItem(key)
  if (!data) {
    return null
  }
  return JSON.parse(data)
}
