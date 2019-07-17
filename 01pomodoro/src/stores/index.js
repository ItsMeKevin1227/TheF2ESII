import Vue from 'vue'
import Vuex from 'vuex'
import main from '@/stores/modules/main' // 主畫面
import todo from '@/stores/modules/todo' // 任務管理
import analytics from '@/stores/modules/analytics' // 任務分析
import ringtones from '@/stores/modules/ringtones' // 提示音
import screen from '@/stores/modules/screen' // 螢幕控制

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    main,
    todo,
    analytics,
    ringtones,
    screen
  }
})
