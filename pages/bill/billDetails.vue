<template>
	<view class="page container">
		<view style="background: #fff;">
			<view class="top-container">
				<view class="top-left">
					<view>
						<text class="top-text1">应收</text>
						<text class="top-text2">{{receivableCost}}</text>
					</view>
					<text class="top-text3">{{tenant}}鼓楼区先锋小区602-张三</text>
				</view>
				<view class="top-right">
					<text class="top-text4" @tap="onClickChildText">催租</text>
				</view>
			</view>
		</view>
		<view class="item-box" style="border:0">
			<text class="item-title">账单状态</text>
			<view>
				<text class="state-1">{{status}}</text>
				<!--<text class="state-2">已到账</text>-->
			</view>
		</view>
		<view class="split"></view>
		<view class="item-box">
			<text class="item-title">收租日期</text>
			<text class="state-2">{{collectDate}}</text>
		</view>
		<view class="item-box">
			<text class="item-title">缴费周期</text>
			<text class="state-2">{{collectDate}} ~ {{endChangeDate}}</text>
		</view>
		<view class="split"></view>
		<view class="item-box">
			<text class="item-title">费用明细</text>
			<view></view>
		</view>
		<view class="item-box">
			<text class="item-title">租金</text>
			<text class="state-2">{{rent}}</text>
		</view>
		<view class="item-box">
			<text class="item-title">押金</text>
			<text class="state-2">{{deposit}}</text>
		</view>
		<view class="item-box2">
			<view class="item-box2-left">
				<viwe>
					<text class="item-title" style="margin-right: 22rpx;">水费</text>
					<text class="item-box2-left-text2">2.00元/吨</text>
				</viwe>
				<view>
					<text class="item-box2-left-text2">2.0吨</text>
					<text class="item-box2-left-text2">(0.00-2.00)</text>
				</view>
			</view>
			<text class="item-title">{{watterCost}}</text>
		</view>
		<view class="item-box2">
			<view class="item-box2-left">
				<viwe>
					<text class="item-title" style="margin-right: 22rpx;">电费</text>
					<text class="item-box2-left-text2">2.00元/度</text>
				</viwe>
				<view>
					<text class="item-box2-left-text2">2.0度</text>
					<text class="item-box2-left-text2">(0.00-2.00)</text>
				</view>
			</view>
			<text class="item-title">{{electricCost}}</text>
		</view>
		<view class="item-box">
			<text class="item-title">物业费</text>
			<text class="state-2">{{propertyCost}}</text>
		</view>
		<view class="item-box">
			<text class="item-title">宽带费</text>
			<text class="state-2">{{broadbandCost}}</text>
		</view>
		<bottomBtn leftText="账单修改" rightText="到账" @leftCallBack="billUpdate" @rightCallBack="billOver" />
	</view>
</template>

<script>
	import bottomBtn from '../../components/bottomBtn.vue';
	var id;
	export default {
		
		onLoad(option) {
		id=option.id;
		},
		data() {
			var result;
			if(id){
				uni.request({
					url: 'https://wechat.feixingtianxia.cn/house/get_billDetail', //仅为示例，并非真实接口地址。
					data: {
						id: id
					},
					header: {
						'custom-header': 'hello' //自定义请求头信息
					},
					success: (res) => {
						console.log(res.data);
						result = res.data.data;
						this.status= result.status;
						this.collectDates= result.collectDates;
						this.startChangeDate= result.startChangeDate;
						this.endChangeDate= result.endChangeDate;
						this.receivableCost= result.receivableCost;
						this.tenant= result.tenant;
						this.rent= result.rent;
						this.deposit= result.deposit;
						this.watterCost= result.watterCost;
						this.electricCost= result.electricCost;
						this.propertyCost= result.propertyCost;
						this.broadbandCost= result.broadbandCost;
						
					}
				});
			}
			

			return {
				        "status":"xxx",
				        "collectDate":"2020-1-1",
				        "startChangeDate":"2020-1-1",
				        "endChangeDate":"2020-1-7",
				        "receivableCost":"00",
				        "tenant":"xxx",
				        "rent":"100",
				        "deposit":"1000",
				        "watterCost":"10",
				        "electricCost":"88",
				        "propertyCost":"20",
				        "broadbandCost":""
			}
		},
		components: {
			bottomBtn
		},
		methods: {
			billUpdate() {
				uni.showToast({
					title: '账单修改',
					duration: 2000
				});
			},
			billOver() {
				uni.showToast({
					title: '已到账',
					duration: 2000
				});
			}
		}
	}
</script>

<style>
	.container {
		padding-bottom: 100rpx;
		background: #fff;
	}

	.item-box2-left-text2 {
		color: #aaa;
		font-size: 25rpx;
		margin-right: 22rpx;
	}

	.item-box2-left {
		display: flex;
		flex-direction: column;
	}

	.item-box2 {
		height: 120rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1rpx solid #eee;
		margin: 0rpx 35rpx;
	}

	.state-2 {
		color: #333;
		font-size: 28rpx;
	}

	.state-1 {
		color: red;
		font-size: 28rpx;
	}

	.item-title {
		color: #666;
		font-size: 28rpx;
	}

	.item-box {
		height: 90rpx;
		margin: 0 35rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1rpx solid #eee;
	}

	.top-right {
		padding: 10rpx 0;
		background: #00B6F6;
		border-radius: 26rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 140rpx;
	}

	.top-text4 {
		color: #fff;
		font-size: 30rpx;
	}

	.top-text3 {
		color: #222;
		font-size: 30rpx;
	}

	.top-text1 {
		color: #333;
		font-size: 32rpx;
	}

	.top-text2 {
		margin-left: 15rpx;
		color: #333;
		font-size: 40rpx;
	}

	.top-left {}

	.top-container {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: 40rpx 0 15rpx 0;
		margin: 0 35rpx;
		border-bottom: 1rpx solid #eee;
		background: #fff;
		height: 140rpx;
	}
</style>
