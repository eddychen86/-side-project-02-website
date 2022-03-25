import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: [
      {
        "id": 1,
        "name": "PhotoNFT-pro-01",
        "img_path": "/webPage/public/index-01.jpg"
      },
      {
        "id": 2,
        "name": "PhotoNFT-pro-02",
        "img_path": "/webPage/public/index-02.jpg"
      },
      {
        "id": 3,
        "name": "PhotoNFT-pro-03",
        "img_path": "/webPage/public/index-03.jpg"
      },
      {
        "id": 4,
        "name": "PhotoNFT-pro-04",
        "img_path": "/webPage/public/index-04.jpg"
      },
      {
        "id": 5,
        "name": "PhotoNFT-pro-05",
        "img_path": "/webPage/public/index-05.jpg"
      }
    ],
    markCart: [
      {
        "id": 1,
        "name": "PhotoNFT-free-01",
        "img_path": "/webPage/public/mark/index-01-mark.jpg"
      },
      {
        "id": 2,
        "name": "PhotoNFT-free-02",
        "img_path": "/webPage/public/mark/index-02-mark.jpg"
      },
      {
        "id": 3,
        "name": "PhotoNFT-free-03",
        "img_path": "/webPage/public/mark/index-03-mark.jpg"
      },
      {
        "id": 4,
        "name": "PhotoNFT-free-04",
        "img_path": "/webPage/public/mark/index-04-mark.jpg"
      },
      {
        "id": 5,
        "name": "PhotoNFT-free-05",
        "img_path": "/webPage/public/mark/index-05-mark.jpg"
      }
    ]
  },
  mutations: {
    addCart(state, data) {
      let isNewProduct = true;
      console.log(data);
      state.cart.map((product) => {
        if (product.id === data.product.id) {
          product.number += data.number
          isNewProduct = false;
        }
        return product;
      });
      if (isNewProduct) {
        let newProduct = data.product
        newProduct.number = data.number
        state.cart.push(newProduct);
      }
    }
  },
  actions: {

  },
  getters: {

  }
});