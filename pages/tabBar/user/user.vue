<template>
	<view class="page">
		<view v-if='hasLogin' class="hello">
			<view class="uni-list">
				<view class="uni-list-cell" hover-class="uni-list-cell-hover">
					<view class="uni-list-cell-navigate">
						手机号：
						<text>{{cellPhone}}</text>
					</view>
				</view>
				<view class="uni-list-cell" hover-class="uni-list-cell-hover">
					<view class="uni-list-cell-navigate">
						用户名称：
						<text>{{realName}}</text>
					</view>
				</view>

				<view class="uni-list-cell uni-list-cell-last" hover-class="uni-list-cell-hover" @tap="goDetail('../../pwd/pwd')">
					<view class="uni-list-cell-navigate uni-navigate-right">
						密码修改
					</view>
				</view>
			</view>
			<view class="uni-list-cell-divider"></view>
			<view class="uni-list">

				<!-- <view class="uni-list-cell" hover-class="uni-list-cell-hover">
					<view class="uni-list-cell-navigate uni-navigate-right">
						分享有礼
					</view>
				</view> -->
				<view class="uni-list-cell uni-list-cell-last" hover-class="uni-list-cell-hover" @tap="goDetail('../../../platform/about/about')">
					<view class="uni-list-cell-navigate uni-navigate-right">
						版本信息
					</view>
				</view>
			</view>


		</view>
		<view v-if="!hasLogin" class="hello">
			<view class="title">
				您好。
			</view>
			<view class="ul">
				<view>您还未登陆。</view>
				<view>点击 “登录”去登陆页登录您的账户”</view>
			</view>
		</view>
		<view class="btn-row">
			<!-- #ifdef MP-WEIXIN -->
			<!-- <button type="primary" open-type="getUserInfo" @getuserinfo="wxGetUserInfo">绑定微信</button> -->
			<!-- #endif -->
			<button v-if="!hasLogin" type="primary" class="primary" @tap="bindLogin">登录</button>
			<button v-if="hasLogin" class="btn-logout" @tap="bindLogout">退出登录</button>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'

	export default {
		data() {
			return {
				realName: "",
				cellPhone: "",
				received: "",
				hasLogin:true
			}
		},
		onLoad() {
			const token = uni.getStorageSync("token");
			if (typeof token === "undefined") {
				bindLogout();
			} else {
				const cellPhone = uni.getStorageSync("cellPhone");

				const name = uni.getStorageSync("name");
				console.log("-->" + cellPhone)
				console.log("-->" + name)
				this.realName = name;
				this.cellPhone = cellPhone;
				this.hasLogin = true;
			}
		


		},
		methods: {
			bindLogin() {
				uni.navigateTo({
					url: '../../login/login',

				});

			},
			bindLogout() {

				uni.removeStorageSync('token');
				/**
				 * 如果需要强制登录跳转回登录页面
				 */
				uni.reLaunch({
					url: '../../login/login',
				});

			},
			goDetail: function(e) {
				uni.navigateTo({
					url: e
				})
			},
			wxGetUserInfo(e) {
				console.log("得到用户信息", e);
				if (e.detail.errMsg !== 'getUserInfo:ok') {
					uni.showModal({
						title: "获取用户信息失败",
						content: "错误原因" + e.detail.errMsg,
						showCancel: false
					});
					return;
				}
				// 				this.hasUserInfo = true;
				// 				this.userInfo = e.detail.userInfo
				uni.showModal({
					title: "成功",
					content: "openid:" + e.detail.userInfo.openid,
					showCancel: false
				});
			}
		}
	}
</script>

<style>
	.btn-logout {
		background: #fa6b4b;
		color: #FFFFFF;
	}
</style>
