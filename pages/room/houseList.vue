<template>
	<view class="promotion">
		<text class="promotion-tip">您的房产</text>

		<view v-for="(item,index) in houseList" :key="index" class="room-item" @tap="jumpToDetails(item.id)">
			<view class="h-item">
				<view>
					<image class="h-img" src="../../static/swiper3.jpg"></image>
				</view>
				<view class="h-text-view">
					<text class="h-title">{{item.addressDetail}}</text>
					<text class="h-footprint">{{item.homeowners}}更新于{{item.updateTime}}</text>
						<text class="state-1">{{item.status}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
			var status;
	export default {

		onLoad(option){
			status=option.status;
		},
		onShow(option) {
		
			const userId = uni.getStorageSync("userId");
			const token = uni.getStorageSync("token");
			var billUrl = this.Common.baseUrl + '/house/list?time=new Date().getTime()';
			uni.request({
				url: billUrl,
				data: {
					userId: userId,
					status:status
				},
				method: "POST",
				header: {
					'content-Type': 'application/json',
					'Accept': 'application/json'
				},
				success: (res) => {
					console.log(JSON.stringify(res))
					this.houseList = res.data.data;


				}
			});
		},
		data() {
			return {
				houseList: []
			}
		},
		methods: {
		jumpToDetails(id) {
				//  @tap="showPage('../../pages/bill/billDetails?id={{item.id}}')"
				uni.navigateTo({
					url: "../../pages/room/roomDetail?id=" + id
					// url:"../component/classdetails/classdetails?newsid="+ newsid,

				});
			}
		}
	}
</script>

<style>
	image,
	page {
		width: 100%;
		background-color: #F0F1F3;
	}
	
	
	
	.state-1 {
		color: red;
		font-size: 28rpx;
	}
	.h-footprint {
		font-size: 28rpx;
		color: #666
	}
	.h-title {
		font-size: 30rpx;
		color: #333
	}

	.h-text-view {
		margin-left: 20rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 160rpx;
	}
	.h-img {
		width: 230rpx;
		height: 160rpx;
	}

	.h-item {
		display: flex;
		flex: 1;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		border-bottom: 0.5rpx solid #eee;
		padding: 20rpx 0 20rpx;
	}

	.promotion {
		background-color: #fff;
		padding: 30rpx;

	}

	.promotion-tip {
		font-size: 30rpx;
		color: #666;
	}
</style>
