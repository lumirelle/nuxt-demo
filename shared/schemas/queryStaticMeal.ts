export interface StaticMeal {
  code: number
  msg: string
  data: Datum[]
}

export interface Datum {
  mealName: string
  mealType: number
  showTraffic: string
  showGiftTraffic: null
  price: string
  discountPrice: string
  discountPriceTotal: string
  pricePer: string
  discountPricePer: string
  mealEfficient: number
  mealNum: number
  mealId: string
  activityMealVO: ActivityMealVO
  ipType: number
  bandwidth: number | null
  efficientUnit: number
  giftEfficient: null
  discount: null
}

export interface ActivityMealVO {
  discountWordColor: string
  discountPicUrl: string
  discount: number | null
  gift: null
  giftFlow: null
  giftIp: null
  recommendedMealPicList: null
  giftEfficient: null
}
