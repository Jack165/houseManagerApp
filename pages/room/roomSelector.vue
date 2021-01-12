<template>
	<view class="page">
		<searchItem placeholder="请输入小区名" @getKeyWord="search"/>
		<view class="room-list">
			<view v-for="(item,index) in rooms" :key="index" class="room-item">
				<span class="room-name">{{item}}</span>
				<span class="room-state">闲置</span>
			</view>
		</view>
	</view>
</template>

<script>
	import searchItem from '../../components/searchItem.vue';
	export default{
		data(){
			return{
				rooms:['福州市台江区万达小区福州市台江区万达小区福州市台江区万达小区3号楼1005','万福新村5座302室','万达小区3号楼1005','万达小区3号楼1005','福州市台江区万福新村5座302室','万福新村5座302室']
			}
		},
		components:{
			searchItem
		},
		methods:{
			search(keyWord){
				console.log(keyWord);
			}
		}
	}
</script>

<style>
	.room-state{
		color:#F0AD4E;
		font-size: 30rpx;
	}
	.room-name{
		flex:1;
		color:#111; 
		font-size: 30rpx;
	}
	.room-list{
		background: #fff;
	}
	.room-item{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin:0 35rpx;
		height:90rpx;
		border-bottom: 1rpx solid #eee;
	}
</style>
