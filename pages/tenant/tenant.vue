<template>
	<view class="page">
		<searchItem placeholder="请输入租客名" @getKeyWord="search" />
		<view class="nodata-view" v-if="tenants == null">
			<noData />
		</view>
		<view style="background: #fff;" v-else>
			<view class="tenant-item" v-for="(item,index) in tenants" :key="index" @tap="showPage(item.id)">
				<image class="tenant-img" src="../../static/tenant.jpg"></image>
				<view class="middle-item">
					<text class="middle-text1">{{item.name}}</text>
					<text class="middle-text2">{{item.room}}</text>
				</view>
				<text :class="item.status == '退租' ? 'tenant-right-text-red' : 'tenant-right-text'">{{item.status}}</text>
			</view>
		</view>
		<view class="add-tenant" @tap="showAddPage()">
			<span class="iconfont" style="font-size:130rpx;color:#007AFF;">&#xe61d;</span>
		</view>
	</view>
</template>

<script>
	import searchItem from '@/components/searchItem.vue';
	import noData from '@/components/noData.vue';
	export default {
		onLoad(option) {
			var result;
			var contractUrl = this.Common.baseUrl + '/contract/list';
			const userId= uni.getStorageSync("userId");
			
			uni.request({
				url: contractUrl, //仅为示例，并非真实接口地址。
				data: {
					userId: userId
				},
				method: "POST",
				header: {
					'content-Type': 'application/json',
					'Accept': 'application/json'
				},
				success: (res) => {
					console.log(JSON.stringify(res))
					if (res.data.code === 200) {
						result = res.data.data;
						this.tenants = result;
					}

				}
			});
		},
		data() {


			return {
				tenants: [{
						id: 0,
						name: 'xx',
						room: 'xxxxxx',
						state: '正常'
					},

				]
			};
		},
		components: {
			searchItem,
			noData
		},
		methods: {
			showPage(e) {

				uni.navigateTo({
					url: "../../pages/tenant/tenantInfo?id=" + e
				});
				return false;
			},
			showAddPage(e) {

				uni.navigateTo({
					url: "../../pages/tenant/addTenant"
				});
				return false;
			},

			search(keyWord) {
				console.log(keyWord);
			}
		}
	}
</script>

<style>
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

	.nodata-view {
		display: flex;
		flex: 1;
		justify-content: center;
		align-items: center;
	}

	.page {
		width: 100%;
		background-color: #F0F1F3;
		height: 100vh;
		display: flex;
		flex-direction: column;
	}

	.add-tenant {
		position: fixed;
		bottom: 100rpx;
		right: 50rpx;
	}

	.input {
		height: 40rpx;
		font-size: 30rpx;
		padding: 0;
	}

	.s-item {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 8rpx 15rpx;
		border-radius: 15rpx;
		margin: 8rpx 15rpx;
		background-color: #ddd;
	}
</style>
