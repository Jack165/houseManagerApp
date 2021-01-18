<template>
	<view class="page container">
		<view class="info-view">
			<sectionTitle>
				<text slot="title">租客基本信息</text>
			</sectionTitle>
			<view class="fee-box">
				<span>姓名：</span>
				<text>{{name}}</text>
			</view>
			<view class="fee-box">
				<span>号码：</span>
				<text>{{phone}}</text>

			</view>
			<view class="fee-box">
				<span>身份证号：</span>
				<text>{{idcard}}</text>
			</view>
			<view class="fee-box">
				<span>性别：</span>
				<radio-group @change="radioChange" disabled="true">
					<label v-for="i in sexItems">
						<radio :value="i.name" :checked="i.checked" />{{i.value}}
					</label>
				</radio-group>
			</view>
		</view>
		<view class="split"></view>
		<view class="info-view">
			<sectionTitle>
				<text slot="title">房屋信息</text>
			</sectionTitle>
			<view class="item-box">
				<text>入住房号</text>
				<span class="room-name">{{addressDetail}}</span>
				<span class="iconfont" style="font-size:50rpx;color:#ddd">&#xe672;</span>
			</view>
		</view>
		<view class="split"></view>
		<view class="info-view">
			<sectionTitle>
				<text slot="title">费用设置</text>
			</sectionTitle>
			<view class="fee-view">
				<text class="fee-text">费用</text>
				<text class="fee-text">价格</text>
				<text class="fee-text">初始读数</text>
			</view>
			<view class="fee-box">
				<view class="fee-item-box">
					<text class="fee-item-text">水费</text>
				</view>
				<view class="fee-item-box">
					<text>{{waterPrice}}</text>
					<span>元/吨</span>
				</view>
				<view class="fee-item-box">
				
					 <text>{{waterInitPrice}}</text>
				</view>
			</view>
			<view class="fee-box">
				<view class="fee-item-box">
					<text class="fee-item-text">电费</text>
				</view>
				<view class="fee-item-box">
					 <text>{{electricityPrice}}</text>
					<span>元/度</span>
				</view>
				<view class="fee-item-box">
					
					  <text>{{electricityInitPrice}}</text>
				</view>
			</view>
			<view class="fee-box">
				<view class="fee-item-box">
					<text class="fee-item-text">宽带费</text>
				</view>
				<view class="fee-item-box">
				<text>{{broadbandPrice}}</text>
				</view>
				<view class="fee-item-box">
					/
				</view>
			</view>
			<view class="fee-box">
				<view class="fee-item-box">
					<text class="fee-item-text">其他费用</text>
				</view>
				<view class="fee-item-box">
					<input style="text-align: center;" placeholder-class="price-laceholder" placeholder="0.00" />
				</view>
				<view class="fee-item-box">
					/
				</view>
			</view>
		</view>
		<bottomBtn leftText="信息修改" rightText="账单查看" @leftCallBack="this.showPage('../../pages/tenant/updateTenant')"
		 @rightCallBack="jumpToDetails()" />

	</view>
</template>

<script>
	import sectionTitle from '@/components/sectionTitle.vue';
	import inputItem from '@/components/inputItem.vue';
	import selectItem from '@/components/selectItem.vue';
	import bottomBtn from '@/components/bottomBtn.vue';
	var id;
	var houseId;
	var houseAddress;
	var name;
	var phone;
	var idcard;
	var sex;
	var waterPrice;
	var electricityPrice;
	var broadbandPrice;
	var waterInitPrice;
	var electricityPrice;
	var relust;
	export default {

		onLoad(option) {
			id = option.id;
			
			var contractUrl = this.Common.baseUrl + '/contract//select';
			uni.request({
				url: contractUrl,
				method: "POST",
				data: {
					"id": id
				},
				header: {
					'content-Type': 'application/json',
					'Accept': 'application/json'
				},
				success: (res) => {
					console.log(JSON.stringify(res))
					 relust= res.data;
					this.name = relust.renter.name;
					this.phone = relust.renter.cellPhone;
					this.idcard = relust.renter.idCard;
					this.addressDetail=relust.contract.housePropertyName;
					this.waterPrice=relust.costList[0].price;
					this.waterInitPrice=relust.costList[0].price;
					this.electricityPrice=relust.costList[1].price;
					this.electricityInitPrice=relust.costList[1].price;
			        this.broadbandPrice=relust.costList[2].price;
				}
			});
			
			
			

		},
		data() {

		

			return {
				sexItems: [{
					"name": "男",
					"value": "男",
					"checked": "true"
				}, {
					"name": "女",
					"value": "女"
				}],
				sexIndex: 0,
				name: "",
				phone:"",
				idcard:"",
				addressDetail:"",
				waterPrice:"",
				waterInitPrice:"",
				electricityPrice:"",
				electricityInitPrice:"",
				broadbandPrice:""
				
			}
		},	
		methods: {

			jumpToDetails() {
				//  @tap="showPage('../../pages/bill/billDetails?id={{item.id}}')"
				uni.navigateTo({
					url: "../../pages/tenant/bill/bill?rentarId="+ relust.renter.id
					+"&rentarName="+relust.renter.name
					+"&rentarAddress="+relust.contract.housePropertyName
					+"&rentarState"+relust.contract.status
					// url:"../component/classdetails/classdetails?newsid="+ newsid,

				});
			}
		},
		components: {
			sectionTitle,
			inputItem,
			selectItem,
			bottomBtn
		},
	}
</script>

<style>
	.container {
		padding-bottom: 100rpx;
	}

	.fee-item-text {
		color: #111;
		font-size: 30rpx;
	}

	.fee-item-box span {
		color: #bbb;
		font-size: 30rpx;
		flex: 1;
	}

	.price-laceholder {
		color: #CE3C39;
	}

	.fee-item-box input {
		padding: 0;
		text-align: right;
		color: #CE3C39;
	}

	.fee-item-box {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: row;
	}

	.fee-box {
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 100rpx;
		padding: 0;
		margin: 0 35rpx;
		border-bottom: 1rpx solid #eee;
	}

	.fee-text {
		flex: 1;
		text-align: center;
		color: #222;
		font-size: 28rpx;
	}

	.fee-view {
		display: flex;
		align-items: center;
		height: 60rpx;
		background: #eee;
		justify-content: space-around;
	}

	.room-name {
		display: flex;
		flex: 1;
		justify-content: flex-end;
	}

	.split {
		height: 20rpx;

	}

	.item-box span {
		color: #111;
		font-size: 30rpx;
	}

	.item-box text {
		margin-right: 15rpx;
		color: #333;
		font-size: 30rpx;
		width: 150rpx;
	}

	.item-box {
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 100rpx;
		padding: 0;
		margin: 0 35rpx;
		border-bottom: 1rpx solid #eee;
	}

	.info-view {
		background-color: #FFF;

	}
</style>
