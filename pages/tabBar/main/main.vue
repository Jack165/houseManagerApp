<template>
	<view class="page">
		<view class="swiper">
			<swiper class="swiper" indicator-color="rgba(f, f, f, 1)" indicator-active-color="#41A863" indicator-dots="true"
			 autoplay="true" interval="5000" duration="500">
				<swiper-item>
					<image class="" src="../../../static/swiper1.jpg"></image>
				</swiper-item>
				<swiper-item>
					<image class="" src="../../../static/swiper2.jpg"></image>
				</swiper-item>
				<swiper-item>
					<image class="" src="../../../static/swiper3.jpg"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="top">
			<view class="top-item" @tap="showPage('../../../pages/bill/bill')">
				<image class="top-image" src="../../../static/zhang.png"></image>
				<text class="top-text">账单</text>
			</view>
			<view class="top-item" @tap="showPage('../../../pages/crm/shoukuan/shoukuan')">
				<image class="top-image" src="../../../static/kong.png"></image>
				<text class="top-text">闲置</text>
			</view>
			<view class="top-item" @tap="showPage('../../../pages/crm/shoukuan/shoukuan')">
				<image class="top-image" src="../../../static/shou.png"></image>
				<text class="top-text">收入</text>
			</view>
			<view class="top-item" @tap="showPage('../../../pages/crm/shoukuan/shoukuan')">
				<image class="top-image" src="../../../static/fang.png"></image>
				<text class="top-text">房产</text>
			</view>
			<view class="top-item" @tap="showPage('../../../pages/tenant/tenant')">
				<image class="top-image" src="../../../static/ke.png"></image>
				<text class="top-text">租客</text>
			</view>
			<view class="top-item" @tap="showPage('../../../pages/tabBar/user/user')">
				<image class="top-image" src="../../../static/bao.png"></image>
				<text class="top-text">报表</text>
			</view>
		</view>
		<view class="middle">
			<view class="middle-item">
				<text class="middle-text">本月待收</text>
				<text class="middle-num">{{waitIn}}</text>
			</view>
			<view class="middle-split"></view>
			<view class="middle-item">
				<text class="middle-text">本月已收</text>
				<text class="middle-num" style="color:#30BA6B">{{received}}</text>
			</view>
			<view class="middle-split"></view>
			<view class="middle-item">
				<text class="middle-text">房源总数</text>
				<text class="middle-num" style="color:#333">{{houseNum}}</text>
			</view>
		</view>

		<view class="promotion">
			<text class="promotion-tip">为您推荐</text>
			<view class="h-item">
				<view>
					<image class="h-img" src="../../../static/swiper2.jpg"></image>
				</view>
				<view class="h-text-view">
					<text class="h-title">房屋地址福州市五一中路青州大厦2号楼</text>
					<text class="h-footprint">张先生2小时前</text>
				</view>
			</view>
			<view class="h-item">
				<view>
					<image class="h-img" src="../../../static/swiper3.jpg"></image>
				</view>
				<view class="h-text-view">
					<text class="h-title">房屋地址福州市古田路水部地铁站附近水部小学对面3号楼502</text>
					<text class="h-footprint">张先生2小时前</text>
				</view>
			</view>
		</view>

	</view>
</template>
<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		computed: mapState(['forcedLogin', 'hasLogin', 'userName', 'companyCode']),
		data() {
			return {
				'waitIn': 1,
				'houseNum': 2,
				'received': 3
			}
		},
		onShow() {
			if (!this.hasLogin) {
				return
			}
		},
		onLoad() {
			var token;
			uni.getStorage({
				key: "token",
				success(e) {
					token = e.data;
				}
			});
			if (typeof token === "undefined") {
				uni.showToast({
					title: '未登陆',
					duration: 5000
				});
			} else {
				uni.showToast({
					title:token,
					duration: 5000
				});
				uni.request({
					url: 'https://wechat.feixingtianxia.cn/house/get_index', 
					data: {
						text: 'uni.request'
					},
					header: {
						'custom-header': 'hello' //自定义请求头信息
					},
					success: (res) => {

						var info = res.data.data;
						console.log('info-->' + info);
						this.waitIn = info.waitIn;
						this.houseNum = info.houseNum;
						this.received = info.received;

					}
				});
			}

		},
		onShareAppMessage() {
			return {
				//                 title: '欢迎体验uni-app',
				//                 path: '/pages/tabBar/component/component'
			}
		},
		onNavigationBarButtonTap(e) {
			uni.navigateTo({
				// url: '/platforms/app-plus/about/about'
			})
		},
		methods: {
			...mapMutations(['login']),
			showPage(e) {
				uni.navigateTo({
					url: e
				});
				return false;
			},
			getStatistics() {
				let url = this.$url + "soApi/statistics/" + this.companyCode;
				uni.request({
					url: url,
					method: 'GET',
					data: {},
					header: {
						'X-AUTH-TOKEN': this.$token
					},
					success: res => {
						if ((res.statusCode == "200" && res.data.respCode == "0")) {
							if (res.data.data.dAmount != null) {
								this.statistics.dAmount = res.data.data.dAmount;
							}
							if (res.data.data.wAmount != null) {
								this.statistics.wAmount = res.data.data.wAmount;
							}
							if (res.data.data.mAmount != null) {
								this.statistics.mAmount = res.data.data.mAmount;
							}
						}
					},
					fail: () => {
						uni.showToast({
							icon: 'none',
							title: '验证请求发送失败',
						});
					},
					complete: () => {}
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

	.swiper {
		width: 100%;
		height: 300rpx;
	}

	.middle-split {
		width: 3rpx;
		height: 55rpx;
		background-color: #F0F1F3;
	}

	.middle-text {
		font-size: 28rpx;
		color: #333;
		line-height: 40rpx;
	}

	.middle-num {
		font-size: 30rpx;
		color: #F33E54;
		line-height: 40rpx;
	}

	.middle-item {
		flex-direction: column;
		display: flex;
		align-items: center;
	}

	.middle {
		background-color: #fff;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		margin: 20rpx 0 20rpx 0;
		padding: 25rpx 0 25rpx 0;
	}

	.top-text {
		text-align: center;
		font-size: 22rpx;
		padding-top: 0rpx;
		color: #aaa;
	}

	.text-box {
		padding: 20upx 0;
		display: flex;
		background-color: #FFFFFF;
		font-size: 30upx;
		color: #353535;
		line-height: 46upx;
	}

	.text-box1 {
		margin-left: 30upx;
		font-size: 28upx;
	}

	.text-box2 {
		font-size: 28upx;
		color: #999999;
		margin-left: 10upx;
	}

	.top {
		background: #FFF;
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		padding: 18rpx 0 18rpx 0;
	}

	.top-item {
		width: 33%;
		height: 130rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border-color: #eee;
		box-sizing: border-box;
	}

	.top-image {
		width: 100rpx;
		margin-bottom: 0upx;
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
