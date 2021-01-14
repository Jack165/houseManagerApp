import Vue from 'vue'
import App from './App'
import store from './store'
import Common from './common/common.js'
Vue.prototype.Common = Common;
Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.prototype.$backgroundAudioData = {
	playing: false,
	playTime: 0,
	formatedPlayTime: '00:00:00'
}
Vue.prototype.showPage = function(e) {
	uni.navigateTo({
		url: e
	});
	return false;
}
App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
