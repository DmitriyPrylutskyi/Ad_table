export default {
  state: {
    ads: [
      {
        title: 'First ad',
        description: 'Hello i am description',
        promo: false,
        imageSrc: '/static/img/image-1.png',
        id: '1'
      },
      {
        title: 'Second ad',
        description: 'Hello i am description',
        promo: true,
        imageSrc: '/static/img/image-2.png',
        id: '2'
      },
      {
        title: 'Third ad',
        description: 'Hello i am description',
        promo: true,
        imageSrc: '/static/img/image-3.png',
        id: '3'
      }
    ]
  },
  mutation: {},
  actions: {},
  getters: {
    ads (state) {
      return state.ads
    },
    promoAds (state) {
      return state.ads.filter(ad => ad.promo)
    },
    myAds (state) {
      return state.ads
    },
  }
}
