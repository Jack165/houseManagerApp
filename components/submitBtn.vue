<template>
	<view class="submit-btn-view">
		<view @click="cancelClick" class="submit-btn submit-btn-cancel" >{{cancelText}}</view>
		<view @click="confirmClick" class="submit-btn submit-btn-confirm">{{confirmText}}</view>
	</view>
</template>

<script>
	export default{
		props:{
			cancelText:String,
			confirmText:String
		},
		methods:{ 
			confirmClick(){
				this.$emit('confirmCallBack');
			},
			cancelClick(){
				this.$emit('cancelCallBack');
			}
		}
	}
</script>

<style>
	@import "../common/components.css";
</style>
