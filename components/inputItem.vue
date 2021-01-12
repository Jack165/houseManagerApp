<template>
	<view class="item-box">
		<text>{{title}}</text>
		<input slot="input" :placeholder="placeholder" placeholder-class="placeholder-cls" v-model="inputVal" :readonly="readonly == '1' ? true : false"/>
	</view>
</template>
<script>
	export default {
		props: {
			title: String,
			placeholder: String,
			value:String,
			readonly:String
		},
		data() {
			return {
				inputVal: this.$props.value
			}
		}
	}
</script>
<style>
	@import "../common/components.css";
</style>
