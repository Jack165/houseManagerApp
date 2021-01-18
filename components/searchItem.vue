<template>
	<view class="s-item"> 
		<span class="iconfont" style="color:#aaa">&#xe63c;</span>
		<input class="input" :placeholder="placeholder" v-model="inputVal" @input="inputChange"/>
		<span class="iconfont" style="color:#aaa" v-if="inputVal" @tap="clear">&#xe68e;</span> 
	</view>
</template>

<script>
	export default {
		props: {
			placeholder: String
		},
		data() {
			return {
				inputVal: ''
			}
		},
		methods:{
			inputChange(){
				this.$emit('getKeyWord',this.inputVal);
				return this.inputVal;
			},
			clear(){
				this.inputVal = '';
				this.$emit('getKeyWord',this.inputVal);
			}
		}
	}
</script>

<style>
	@import "../common/components.css";
</style>
