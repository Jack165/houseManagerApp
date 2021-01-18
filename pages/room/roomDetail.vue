<template>
  <view>
    <view class="margin-0">
      <view class="cu-card case" :class="isCard?'no-card':''">
        <view class="cu-item shadow">
          <view class="image">
            <view style="width: 100%;height: 350upx;background-color: #1cbbb4">
            </view>
            <view class="cu-tag bg-blue">房产简介</view>
            <view class="cu-bar bg-shadeBottom"> <text class="text-cut">我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。</text>
            </view>
          </view>
          <view class="cu-list menu-avatar">
            <view class="cu-item">
              <view class="cu-avatar round lg" style="background-image:url(../../static/swiper2.jpg)">
              </view>
              <view class="content flex-sub">
                <view class="text-grey">最近更新</view>
                <view class="text-gray text-sm flex justify-between">十天前 <view class="text-gray text-sm">
                    <text class="cuIcon-attentionfill margin-lr-xs">
                    </text> 10 <text class="cuIcon-appreciatefill margin-lr-xs">
                    </text> 20 <text class="cuIcon-messagefill margin-lr-xs">
                    </text> 30 </view>
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
 
  </view>
</template>
<script>
    
    export default {
        name: "",
        data() {
            return {

                gridCol112: 3,
                gridBorder112: false,
            }
        },
        methods: {
            
        },
        computed: {
            
        },
        components:{
        }

    }
</script>

<style scoped>
    
</style>