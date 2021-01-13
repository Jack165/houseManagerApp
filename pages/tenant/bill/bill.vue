<template>
	<view class="page container">
		<view class="tenant-view">
			<view class="tenant-item">
				<image class="tenant-img" src="../../../static/tenant.jpg"></image>
				<view class="middle-item">
					<text class="middle-text1">张三</text>
					<text class="middle-text2">鑫都家园3号楼201</text>
				</view>
				<text :class="state == '退租' ? 'tenant-right-text-red' : 'tenant-right-text'">{{state}}</text>
			</view>
		</view>
		<view class="bill-view" v-for="(item,index) in bills" :key="index" @tap="showPage('../../../pages/bill/billDetails')">
			<view class="bill-left-view">
					<text class="bill-left-text1">{{item.name}}</text>
					<text class="bill-left-text2">{{item.state}}</text>
			</view>
			<text class="bill-right-text">{{item.money}}</text>
		</view>
		
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				bills:[
					{
						name:'清算账单',
						state:'未结算',
						money:1500
					},
					{
						name:'2019-07-25 清算账单',
						state:'已逾期',
						money:2200
					},
					{
						name:'清算账单',
						state:'已结算',
						money:3000
					}
				],
				state:'退租'
			}
		}
	}
</script>

<style>
	.container{
		height:100vh;
	}
	.bill-right-text{
		color:#111;
		font-size: 26rpx;
	}
	.bill-left-text2{
		color:red;
		margin-top:8rpx;
		font-size: 26rpx;
	}
	.bill-left-text1{
		color:#111;
		font-size: 30rpx;
	}
	.bill-left-view{
		display: flex;
		flex-direction: column;
		
	}
	.bill-view{
		display: flex;
		margin:10rpx 15rpx 0 15rpx;
		padding:15rpx 20rpx;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		background: #fff;
		box-shadow: 2rpx 2rpx 3rpx #888;
	}
	.tenant-view{
		background: #fff;
	}
	.tenant-right-text-red{
		font-size: 28rpx;
		color:red;
	}
	.tenant-right-text{
		color:#00CE47;
		font-size: 28rpx;
	}
	.middle-text2{
		flex:1;
		color:#bbb;
		font-size: 27rpx;
	}
	.middle-text1{
		flex:1;
		color:#333;
		font-size: 32rpx;
	}
	.middle-item{
		display: flex;
		flex:1;
		flex-direction: column;
		justify-content: space-between;
		margin: 0 10rpx 0 15rpx;
	}
	.tenant-img{
		width:85rpx;
		height: 85rpx;
		border-radius: 40rpx; 
	}
	.tenant-item{
		background: #FFF;
		margin:0 35rpx;
		padding:10rpx 0;
		border-bottom:1rpx solid #eee;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		height:110rpx;
	}
</style>
