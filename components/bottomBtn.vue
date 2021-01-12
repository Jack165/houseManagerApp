<template>
	<view class="bottom-btn-view">
		<view class="bottom-btn bottom-btn-left" @click="leftFun">{{leftText}}</view>
		<view class="bottom-btn bottom-btn-right" @click="rightFun">{{rightText}}</view>
	</view>
</template>

<script>
	export default{
		props:{
			leftText:String,
			rightText:String
		},
		methods:{
			leftFun(){
				this.$emit('leftCallBack');
			},
			rightFun(){
				this.$emit('rightCallBack');
			}
		}
	}
</script>

<style>
		@import "../common/components.css";
</style>
