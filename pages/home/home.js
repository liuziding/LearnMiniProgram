// pages/home/home.js
import { getMultiData, getGoodsData } from '../../service/home.js'
const TOP_DISTANCE = 1000;
const types = ['pop', 'new', 'sell']
Page({
  data: {
    banners:[],
    recommends: [],
    titles: ['流行', '新款', '精选'],
    goods: {
      pop: { page: 0, list: [] },
      new: { page: 0, list: [] },
      sell: { page: 0, list: [] }
    },
    currentType: 'pop',
    showBackTop: false,
    isTabFixed: false,
    tabScrollTop: 0
  },
  onLoad: function (options) {
    // 1. 请求轮播图以及推送数据
    this._getMultidata()
    // 2. 请求商品数据
    this._getGoodsData('pop')
    this._getGoodsData('new')
    this._getGoodsData('sell')
  },
  // 页面显示出来的时回调的函数
  // 页面显示是否意味着所有的图片都加在完成
  onShow() {
  },
  // ------------- 网络请求函数 -----------------
  _getMultidata() {
    getMultiData().then(res => {
      const banners = res.data.data.banner.list;
      const recommends = res.data.data.recommend.list;
      // 将 banners 和 recommends 放到 data 中
      this.setData({
        banners,
        recommends
      })
    })
  },
  _getGoodsData(type) {
    // 1. 获取页码
    const page = this.data.goods[type].page + 1;
    // 2. 发送网络请求
    getGoodsData(type, page).then(res => {
      // 2.1. 取出我们的数据
      const list = res.data.data.list;
      // 2.2. 将数据设置到对应 type 的 list 中
      const oldList = this.data.goods[type].list
      oldList.push(...list)
      // 2.3. 将数据设置到 data 中的 goods 中
      const typeKey = `goods.${type}.list`
      const pageKey = `goods.${type}.page`
      this.setData({
        [typeKey]: oldList,
        [pageKey]: page
      })
    })
  },
  // ------------- 事件监听函数 -----------------
  handleTapClick(e) {
    // 取出 index
    const index = e.detail.index

    // 设置 currentType
    this.setData({
      currentType: types[index]
    })
  },
  handleImageLoad() {
    wx.createSelectorQuery().select('#tab-control').boundingClientRect(rect=>{
      console.log('chu')
      console.log(rect)
      this.data.tabScrollTop = rect.top
    }).exec()
  },
  onReachBottom() {
    // 上拉加载更多
    this._getGoodsData(this.data.currentType)
  },
  onPageScroll(options) {
    // 1. 取出scrollTop
    const scrollTop = options.scrollTop;
    // 2. 修改 showBackTop 属性
    // 官方：不要再滚动的函数回调中频繁的调用 this.setData
    const flag1 = scrollTop >= TOP_DISTANCE;
    if (flag1 != this.data.showBackTop) {
      this.setData({
        showBackTop: flag1
      })
    }
    // 3. 修改 isTabFixed 属性
    const flag2 = scrollTop >= this.data.tabScrollTop;
    if(flag2 != this.data.isTabFixed) {
      this.setData({
        isTabFixed: flag2
      })
    }
  }
})