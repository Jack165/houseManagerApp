<template>
	<view class="page">
		<view class="info-view">
			<sectionTitle>
				<text slot="title">租客基本信息</text>
			</sectionTitle>
			<inputItem ref="name" title="姓名" placeholder="租客姓名" />
			<inputItem ref="phone" title="号码" placeholder="租客电话号码" />
			<inputItem ref="idcard" title="身份证是号" placeholder="租客身份证号码" />
			<selectItem ref="sex" title="性别" :arrayData="['男','女']" :sIndex="sexIndex" @bindPickerChange="sexChange" />
		</view>
		<view class="split"></view>
		<view class="info-view">
			<sectionTitle>
				<text slot="title">房屋信息</text>
			</sectionTitle>
			<view class="item-box">
				<text>入住房号</text>
				<span class="room-name">福州市金钻世家8号楼4房间</span>
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
					<input placeholder-class="price-laceholder" placeholder="0.00" />
					<span>元/吨</span>
				</view>
				<view class="fee-item-box">
					<input style="text-align: center;" placeholder-class="price-laceholder" placeholder="0.00" />
				</view>
			</view>
			<view class="fee-box">
				<view class="fee-item-box">
					<text class="fee-item-text">电费</text>
				</view>
				<view class="fee-item-box">
					<input placeholder-class="price-laceholder" placeholder="0.00" />
					<span>元/吨</span>
				</view>
				<view class="fee-item-box">
					<input style="text-align: center;" placeholder-class="price-laceholder" placeholder="0.00" />
				</view>
			</view>
			<view class="fee-box">
				<view class="fee-item-box">
					<text class="fee-item-text">宽带费</text>
				</view>
				<view class="fee-item-box">
					<input style="text-align: center;" placeholder-class="price-laceholder" placeholder="0.00" />
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
		<submitBtn cancelText="取消" confirmText="保存" @cancelCallBack="cancelFun" @confirmCallBack="confirmFun"/>
	</view>
</template>

<script>
	import sectionTitle from '@/components/sectionTitle.vue';
	import inputItem from '@/components/inputItem.vue';
	import selectItem from '@/components/selectItem.vue';
	import submitBtn from '@/components/submitBtn.vue';
	export default {
		data() {
			return {
				// array: ['中国', '美国', '巴西', '日本'],
				sexData: ['男', '女'],
				sexIndex: 0
			}
		},
		components: {
			sectionTitle,
			inputItem,
			selectItem,
			submitBtn
		},
		methods: {
			showPage(e) {
				uni.navigateTo({
					url: e
				});
				return false;
			},
			getVal() {
				console.log(this.$refs.name.inputVal);
			},
			sexChange(val) {
				console.log(this.sexIndex);
				this.sexIndex = val;
				console.log(this.sexIndex);
			},
			cancelFun(){
				console.log('取消了');
			},
			confirmFun(){
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
		flex:1;
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
