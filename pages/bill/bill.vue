<template>
	<view class="page">
		<viwe class="top-search">
			<view style="flex:1;">
				<searchItem placeholder="请输入租客名" @getKeyWord="search" />
			</view>
			<span class="iconfont" style="margin-right: 35rpx;color:#333">&#xe695;</span>
		</viwe>
		<viwe class="bill-type">
			<view :class="params.type == 0 ? '.btn-type-active' : 'btn-type'" @tap="paramsChange({type:0})">
				<text class="">全部</text>
			</view>
			<viw class="type-split"></viw>
			<view :class="params.type == -1 ? '.btn-type-active' : 'btn-type'" @tap="paramsChange({type:1})">
				<text class="">未收</text>
			</view>
			<viw class="type-split"></viw>
			<view :class="params.type == 1 ? '.btn-type-active' : 'btn-type'" @tap="paramsChange({type:2})">
				<text class="">已收</text>
			</view>
		</viwe>

		<view class="bill-view" v-for="(item,index) in bills" :key="index" @tap="jumpToDetails(item.id)">
			<view class="bill-left-view">
				<text class="bill-left-text1">{{item.name}}</text>
				<text class="bill-left-text2">{{item.state}}</text>
			</view>
			<text class="bill-right-text">{{item.money}}</text>
		</view>
	</view>
</template>

<script>
	import searchItem from '@/components/searchItem.vue';
	const userId= uni.getStorageSync("userId");
	export default {
			onShow(option) {
				var billUrl=this.Common.baseUrl+'/bill/list?time=new Date().getTime()';
				console.log(billUrl);
				uni.request({
					url: billUrl,
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
						this.bills = res.data.data;
				
				
					}
				});
			},
		data() {
			//alert(this.Common.baseUrl);
	
			return {
				params: {
					type: 0
				},
				bills: [{
						id: 1,
						name: '清算账单',
						state: '未结算',
						money: 1520
					},
					{
						id: 1,
						name: '2019-07-25 清算账单',
						state: '已逾期',
						money: 2200
					}
				]
			};
		},
		components: {
			searchItem
		},
		methods: {
			paramsChange(param) {
				this.params = Object.assign({}, this.params, param);
				var billUrl=this.Common.baseUrl+'/bill/list';
				console.log(billUrl);
				uni.request({
					url: billUrl,
					data: {
						status: param.type,
						userId: userId
					},
					method: "POST",
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

			jumpToDetails(id) {
				//  @tap="showPage('../../pages/bill/billDetails?id={{item.id}}')"
				uni.navigateTo({
					url: "../../pages/bill/billDetails?id=" + id
					// url:"../component/classdetails/classdetails?newsid="+ newsid,

				});
			},
			search(e){
				if(e===''){
					
				}else{
					var billUrl=this.Common.baseUrl+'/bill/search';
					uni.request({
						url: billUrl,
						data: {
							status: 0,
							userId:userId,
							name: e
						},
						method: "POST",
						header: {
							'content-Type': 'application/json',
							'Accept': 'application/json'
						},
						success: (res) => {
					    console.log(JSON.stringify(res))
						this.bills = res.data.data;
						this.$set(this.bills, res.data.data)
						}
					});
				}
			
			},
			
			
		},

	}
</script>

<style>
	.type-split {
		height: 15rpx;
		width: 1rpx;
		background: #eee;
	}

	.btn-type-active text {
		color: #007AFF;
		font-size: 30rpx;
	}

	.btn-type text {
		color: #111;
		font-size: 30rpx;
	}

	.btn-type-active {
		display: flex;
		flex: 1;
		justify-content: center;
		align-items: center;
		padding: 15rpx 0;
		border-bottom: 1rpx solid #007AFF;
		background: #fff;
	}

	.btn-type {
		display: flex;
		flex: 1;
		justify-content: center;
		align-items: center;
		padding: 15rpx 0;
		background: #fff;
	}

	.bill-type {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		border: 1rpx solid #eee;
	}

	.top-search {
		display: flex;
		flex-direction: row;
		align-items: center;
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
		margin-top: 15rpx;
		margin-left: 15rpx;
		margin-right: 15rpx;
		padding: 15rpx 20rpx;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		background: #fff;
		border-bottom: 1rpx solid #eee;
	}
</style>
