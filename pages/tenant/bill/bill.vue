<template>
	<view class="page container">
		<view class="tenant-view">
			<view class="tenant-item">
				<image class="tenant-img" src="../../../static/tenant.jpg"></image>
				<view class="middle-item">
					<text class="middle-text1">{{rentarName}}</text>
					<text class="middle-text2">{{rentarAddress}}</text>
				</view>
				<text :class="state == '退租' ? 'tenant-right-text-red' : 'tenant-right-text'">{{rentarState}}</text>
			</view>
		</view>
		<view class="bill-view" v-for="(item,index) in bills" :key="index"  @tap="jumpToDetails(item.id)">
			<view class="bill-left-view">
				<text class="bill-left-text1">{{item.name}}</text>
				<text class="bill-left-text2">{{item.state}}</text>
			</view>
			<text class="bill-right-text">{{item.money}}</text>
		</view>


	</view>
</template>

<script>
	var rentarId;
	var rentarName;
	var rentarAddress;
	var rentarState;
	export default {

		onLoad(option) {
			console.log(JSON.stringify(option))
			rentarId = option.rentarId;
			rentarName = option.rentarName;
			rentarAddress = option.rentarAddress;
			rentarState=option.rentarState;
			
			this.rentarName=rentarName;
			this.rentarAddress=rentarAddress;
			this.rentarState=rentarState;
			
			
			var billUrl = this.Common.baseUrl + '/bill/list/ranter';
			console.log(billUrl);
			uni.request({
				url: billUrl,
				method: "POST",
				data: {
					"userId": rentarId
				},
				header: {
				'content-Type': 'application/json',
				'Accept': 'application/json'
				},
				success: (res) => {
					console.log(JSON.stringify(res))
					this.bills = res.data.data;
			
			
				}
			});
			
			
			
			
		},
		data() {

			
			return {
				bills: [{
						name: 'xxx',
						state: '未结算',
						money: 1500
					},
					{
						name: 'xxx',
						state: '已逾期',
						money: 2200
					},
					{
						name: 'xxx',
						state: '已结算',
						money: 3000
					}
				],
				rentarState: '退租',
				rentarAddress:"xx",
				rentarName:"xx"
			}
		},
		methods: {

			jumpToDetails(id) {
				//  @tap="showPage('../../pages/bill/billDetails?id={{item.id}}')"
		
				uni.navigateTo({
					url: "../../../pages/bill/billDetails?id=" + id
					// url:"../component/classdetails/classdetails?newsid="+ newsid,

				});
			}
		},
	}
</script>

<style>
	.container {
		height: 100vh;
	}

	.bill-right-text {
		color: #111;
		font-size: 26rpx;
	}

	.bill-left-text2 {
		color: red;
		margin-top: 8rpx;
		font-size: 26rpx;
	}

	.bill-left-text1 {
		color: #111;
		font-size: 30rpx;
	}

	.bill-left-view {
		display: flex;
		flex-direction: column;

	}

	.bill-view {
		display: flex;
		margin: 10rpx 15rpx 0 15rpx;
		padding: 15rpx 20rpx;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		background: #fff;
		box-shadow: 2rpx 2rpx 3rpx #888;
	}

	.tenant-view {
		background: #fff;
	}

	.tenant-right-text-red {
		font-size: 28rpx;
		color: red;
	}

	.tenant-right-text {
		color: #00CE47;
		font-size: 28rpx;
	}

	.middle-text2 {
		flex: 1;
		color: #bbb;
		font-size: 27rpx;
	}

	.middle-text1 {
		flex: 1;
		color: #333;
		font-size: 32rpx;
	}

	.middle-item {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: space-between;
		margin: 0 10rpx 0 15rpx;
	}

	.tenant-img {
		width: 85rpx;
		height: 85rpx;
		border-radius: 40rpx;
	}

	.tenant-item {
		background: #FFF;
		margin: 0 35rpx;
		padding: 10rpx 0;
		border-bottom: 1rpx solid #eee;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		height: 110rpx;
	}
</style>
