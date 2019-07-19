import _ from 'lodash'
import {
  ACTIVE_TODO,
  ADD_NEW_TODO,
  ADD_TOMATO,
  CLEAN_DONE_TODO,
  TODDLE_TODO_DONE
} from '@/stores/constants/mutation-types'
import { generateId } from '@/service/todo'
import { ADD_TOMATO_ON_CURRENT } from '@/stores/constants/actions'
import {
  getLocalStorage,
  LOCAL_STORAGE_KEY,
  setLocalStorage
} from '@/service/localStorage'

const isDone = state => {
  return state.todoList.filter(item => item.isDone)
}

const isUndone = state => {
  return state.todoList.filter(item => !item.isDone)
}

const initialState = () => {
  const todoList = getLocalStorage(LOCAL_STORAGE_KEY.TODO_LIST) || [
    {
      id: 'zsdfgt',
      title: 'The F2E week 1',
      isDone: false,
      tomato: 3
    }
  ]

  let currentId = getLocalStorage(LOCAL_STORAGE_KEY.CURRENT_TODO) || 'zsdfgt'

  let current = _.find(todoList, { id: currentId })

  if (!current || current.isDone) {
    currentId = null
  }
  return {
    currentId,
    todoList
  }
}

const todo = {
  state: initialState(),
  getters: {
    threeUndoList (state, getters) {
      return getters.undoneList
        .filter(item => item.id !== state.currentId)
        .filter((_, index) => index < 3)
    },
    doneList (state) {
      return isDone(state)
    },
    undoneList (state) {
      return isUndone(state)
    },
    current (state) {
      return _.find(state.todoList, item => item.id === state.currentId)
    }
  },
  mutations: {
    [ADD_NEW_TODO] (state, title) {
      state.todoList.unshift({
        id: generateId(),
        isDone: false,
        tomato: 0,
        title
      })
      if (!state.currentId) {
        console.log(state.todoList)
        state.currentId = isUndone(state)[0] ? isUndone(state)[0].id : null
        setLocalStorage(LOCAL_STORAGE_KEY.CURRENT_TODO, state.currentId)
      }
      setLocalStorage(LOCAL_STORAGE_KEY.TODO_LIST, state.todoList)
    },
    [TODDLE_TODO_DONE] (state, id) {
      state.todoList = state.todoList.map(item => {
        if (item.id === id) {
          return {
            ...item,
            isDone: !item.isDone
          }
        }
        return item
      })
      if (id === state.currentId || !state.currentId) {
        state.currentId = isUndone(state)[0] ? isUndone(state)[0].id : null
        setLocalStorage(LOCAL_STORAGE_KEY.CURRENT_TODO, state.currentId)
      }
      setLocalStorage(LOCAL_STORAGE_KEY.TODO_LIST, state.todoList)
    },
    [ACTIVE_TODO] (state, id) {
      state.currentId = id
      setLocalStorage(LOCAL_STORAGE_KEY.CURRENT_TODO, state.currentId)
    },
    [ADD_TOMATO] (state) {
      state.todoList = state.todoList.map(item => {
        if (item.id === state.currentId) {
          return {
            ...item,
            tomato: item.tomato + 1
          }
        }
        return item
      })
      setLocalStorage(LOCAL_STORAGE_KEY.TODO_LIST, state.todoList)
    },
    [CLEAN_DONE_TODO] (state) {
      state.todoList = state.todoList.filter(item => !item.isDone)
      setLocalStorage(LOCAL_STORAGE_KEY.TODO_LIST, state.todoList)
    }
  },
  actions: {
    [ADD_TOMATO_ON_CURRENT] ({ commit }) {
      commit(ADD_TOMATO)
    }
  }
}

export default todo
