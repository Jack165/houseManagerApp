// An highlighted block
<template>
	<view class="content">
		<view class="avatorWrapper">
			<view class="avator">
				<image class="img" src="../../static/tenant.jpg" mode="widthFix"></image>
			</view>
		</view>
		<view class="form">
			<view class="inputWrapper">
				<input class="input" type="text" v-model="callphone" value="" placeholder="请输入手机号" />
			</view>
			<view class="inputWrapper">
				<input class="input" type="password" v-model="password" value="" placeholder="请输入密码" />
			</view>
			<view class="loginBtn">
				<text class="btnValue" @click="login">登录</text>
			</view>
			<view class="forgotBtn">
				<text>找回密码</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				callphone: '',
				password:''
			}
		},
		onLoad() {
		},
		methods: {
			login() {
				let account = this.callphone;
				//密码
				let pwd = this.password;
				var billUrl = this.Common.baseUrl + '/user/getUser';
				console.log(billUrl);
				uni.request({
					url: billUrl,
					data: {
						account: account,
						pwd: pwd

					},
					method: "POST",
					header: {
						'content-Type': 'application/json',
						'Accept': 'application/json'
					},
					success: (res) => {
						console.log(JSON.stringify(res));
						if(res.data.code===200){
							console.log(JSON.stringify(res))
				
							uni.setStorageSync("token","qwewqeqw");
							
							uni.setStorageSync("userId",res.data.data.id);
						    uni.setStorageSync("name",res.data.data.name);
							uni.setStorageSync("cellPhone",res.data.data.cellPhone);
							
						    const value= uni.getStorageSync("userId");
							uni.switchTab({
								url: "../tabBar/main/main"
							});
						}else{
							uni.showToast({
								title: res.data.msg,
								image:'../../static/zhang.png', 
								duration: 2000
							});
						}
					


					}
				});
			

			},

		}
	}
</script>

<style>
	.content {
		background: #377EB4;
		width: 100vw;
		height: 100vh;
	}

	.avatorWrapper {
		height: 30vh;
		width: 100vw;
		display: flex;
		justify-content: center;
		align-items: flex-end;
	}

	.avator {
		width: 200upx;
		height: 200upx;
		overflow: hidden;
	}

	.avator .img {
		width: 100%
	}

	.form {
		padding: 0 100upx;
		margin-top: 80px;
	}

	.inputWrapper {
		width: 100%;
		height: 80upx;
		background: white;
		border-radius: 20px;
		box-sizing: border-box;
		padding: 0 20px;
		margin-top: 25px;
	}

	.inputWrapper .input {
		width: 100%;
		height: 100%;
		text-align: center;
		font-size: 15px;
	}

	.loginBtn {
		width: 100%;
		height: 80upx;
		background: #77B307;
		border-radius: 50upx;
		margin-top: 50px;
		display: flex;
		justify-content: center;
		align-items: center;

	}

	.loginBtn .btnValue {
		color: white;
	}

	.forgotBtn {
		text-align: center;
		color: #EAF6F9;
		font-size: 15px;
		margin-top: 20px;
	}
</style>
