import Vue from 'vue'
import Vuex from 'vuex'
import { setStorage, getStorage } from '@/utils/LocalStorage'
Vue.use(Vuex)

const ItemList = [
  {
    id: 1,
    name: '測試物品1',
    cost: 1000,
    description:
      '這裡是測試物品1 這裡是測試物品1 這裡是測試物品1 這裡是測試物品1'
  },
  {
    id: 2,
    name: '測試物品2',
    cost: 3000,
    description:
      '這裡是測試物品2 這裡是測試物品2 這裡是測試物品2 這裡是測試物品2'
  }
]

export default new Vuex.Store({
  state: {
    headerTitle: '訂單資訊',
    step: 1,
    shopCart: [
      {
        id: ItemList[0].id,
        name: ItemList[0].name,
        cost: ItemList[0].cost,
        description: ItemList[0].description,
        amount: 1
      },
      {
        id: ItemList[1].id,
        name: ItemList[1].name,
        cost: ItemList[1].cost,
        description: ItemList[1].description,
        amount: 1
      }
    ]
  },
  getters: {
    totalCost: state => {
      state.shopCart.reduce((prev, element) => {
        setStorage(prev.cost * prev.amount + element.cost * element.amount)
        return prev.cost * prev.amount + element.cost * element.amount
      })
      return getStorage('cost')
    }
  },
  mutations: {
    UPDATE_COST (state, payload) {
      state.shopCart[payload.id].amount = payload.amount
    },
    UPDATE_STEP (state, payload) {
      state.step = payload
    }
  }
})
