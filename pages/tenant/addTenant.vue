<template>
	<view class="page">
		<view class="info-view">
			<sectionTitle>
				<text slot="title">租客基本信息</text>
			</sectionTitle>
			<view class="fee-box">
				<span>姓名：</span>
				<input @input="name" title="姓名" placeholder="租客姓名" />
			</view>
			<view class="fee-box">
				<span>号码：</span>
				<input @input="phone" title="号码" placeholder="租客姓名" />
			</view>
			<view class="fee-box">
				<span>身份证号：</span>
				<input @input="idcard" type="idcard" title="身份证是号" placeholder="租客姓名" />
			</view>
			<view class="fee-box">
				<span>性别：</span>
			<radio-group @change="radioChange">
			    <label v-for="i in sexItems">
			        <radio :value="i.name" :checked="i.checked"/>{{i.value}}
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
				<text>入住地址</text>
				<span>{{addressDetail}}</span>
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
					<input @input="waterPrice" placeholder-class="price-laceholder" placeholder="0.00" />
					<span>元/吨</span>
				</view>
				<view class="fee-item-box">
					<input @input="waterInitPrice" style="text-align: center;" placeholder-class="price-laceholder" placeholder="0.00" />
				</view>
			</view>
			<view class="fee-box">
				<view class="fee-item-box">
					<text class="fee-item-text">电费</text>
				</view>
				<view class="fee-item-box">
					<input @input="electricityPrice" placeholder-class="price-laceholder" placeholder="0.00" />
					<span>元/度</span>
				</view>
				<view class="fee-item-box">
					<input @input="electricityInitPrice" style="text-align: center;" placeholder-class="price-laceholder" placeholder="0.00" />
				</view>
			</view>
			<view class="fee-box">
				<view class="fee-item-box">
					<text class="fee-item-text">宽带费</text>
				</view>
				<view class="fee-item-box">
					<input @input="broadbandPrice" style="text-align: center;" placeholder-class="price-laceholder" placeholder="0.00" />
				</view>
				<view class="fee-item-box">
					/
				</view>
			</view>
			<view class="fee-box">
				<view class="fee-item-box">
					<span class="fee-item-text">其他费用</span>
				</view>
				<view class="fee-item-box">
					<input style="text-align: center;" placeholder-class="price-laceholder" placeholder="0.00" />
				</view>
				<view class="fee-item-box">
					/
				</view>
			</view>
		</view>
		<submitBtn cancelText="取消" confirmText="保存" @cancelCallBack="cancelFun" @confirmCallBack="confirmFun" />
	</view>
</template>

<script>
	import sectionTitle from '@/components/sectionTitle.vue';
	import inputItem from '@/components/inputItem.vue';
	import selectItem from '@/components/selectItem.vue';
	import submitBtn from '@/components/submitBtn.vue';
	var houseId;
	var houseAddress;
	var name ;
	var phone ;
	var idcard ;
	var sex ;
	var waterPrice ;
	var electricityPrice ;
	var broadbandPrice ;
	var waterInitPrice ;
	var electricityPrice ;

	export default {

		onLoad(option) {
			this.addressDetail = option.addressDetail;
			houseId = option.id;
			houseAddress = option.addressDetail;

		},
		data() {
			return {
				// array: ['中国', '美国', '巴西', '日本'],
				sexItems: [{"name":"男","value":"男","checked":"true"},{"name":"女","value":"女"}],
				sexIndex:0

			}
		},
		components: {
			sectionTitle,
			inputItem,
			selectItem,
			submitBtn
		},
		methods: {
			radioChange: function(e) {
				sex=e.detail.value;
			   // console.log('radio发生change事件，携带value值为：', e.detail.value)//e.detail.value就是每次选择后得出来的值
			  },
			showPage(e) {
				uni.navigateTo({
					url: e
				});
				return false;
			},
			name(e) {
				name = e.detail.value;
			},
			phone(e) {
				phone = e.detail.value;
			},
			idcard(e) {
				idcard = e.detail.value;
			},
			sex(e) {
				sex = e.detail.value;
			},
			waterPrice(e) {
				waterPrice = e.detail.value;
			},
			electricityPrice(e) {
				electricityPrice = e.detail.value;
			},
			broadbandPrice(e) {
				broadbandPrice = e.detail.value;
			},
			waterInitPrice(e) {
				waterInitPrice = e.detail.value;
			},
			electricityPrice(e) {
				electricityPrice = e.detail.value;
			},

			getVal() {
				console.log(this.$refs.name.inputVal);
			},
			sexChange(val) {
				console.log(this.sexIndex);
				this.sexIndex = val;
				console.log(this.sexIndex);
			},
			cancelFun() {
				console.log('取消了');
			},
			confirm(e) {
				console.log(e);
			},
			
			confirmFun() {
				var userId;
				uni.getStorage({
					key: "userId",
					success(e) {
						userId = e.data;
					}
				});


				var contractUrl = this.Common.baseUrl + '/contract//add';
				uni.request({
					url: contractUrl,
					method: "POST",
					data: {
						"contract": {
							"housownerId": userId,
							"housePropertyId": houseId,
							"housePropertyName": houseAddress
						},
						"renter": {
							"name": name,
							"cellPhone": phone,
							"idCard": idcard,
							"sex": sex
						},
						"costList": [{
								"costName": "水费",
								"price": waterPrice,
								"unit": "元/吨",
								"initData": waterInitPrice
							},
							{
								"costName": "电费",
								"price": electricityPrice,
								"unit": "元/度",
								"initData": electricityPrice
							},
							{
								"costName": "宽带费",
								"price": broadbandPrice,
								"unit": "元/月",
								"initData": ""
							},
						]

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

				console.log('保存了');
			}
		}
	}
</script>

<style>
	.btn-cancel {
		margin-right: 10rpx;
		background: #eee;
	}

	.btn-confirm {
		margin-left: 10rpx;
		background: #8EBF59;
	}

	.submit-btn-view button {
		color: #111;
		height: 85rpx;
		flex: 1;
		display: flex;
		border-radius: 80rpx;
		font-size: 30rpx;
		justify-content: center;
		align-items: center;
	}

	.submit-btn-view {
		margin: 15rpx 35rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
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
