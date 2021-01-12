<!-- 通用选择器，从底部弹出，例如：性别、国籍... -->
<template>
	<view class="item-box">
		<text>{{title}}</text>
		<picker @change="bindPickerChange" :value="sIndex" :range="arrayData">
			<span>{{arrayData[sIndex]}}</span> 
		</picker>
	</view>
</template>
<script>
	export default {
		props: {
			title: String,
			arrayData: Array,
			initIndex: Number
		},
		data() {
			return {
				sIndex:this.$props.initIndex
			}
		},
		methods:{
			bindPickerChange(e) {
				this.sIndex = e.target.value;
				this.$emit('bindPickerChange',this.sIndex);
			}
		}
	}
</script>
<style>
	@import "../common/components.css";
</style>
