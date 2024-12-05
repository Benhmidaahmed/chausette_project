<template>
  <div class="nav-bar">
        
        <div class="cart">cart({{cart}})</div>
    </div>
    <div class="product-display">
      <div class="product-container">
        <div class="product-image">
          <img :src="cart > 5 ? require('../assets/out-of-stock.jpg') : (inStock ? image : require('../assets/out-of-stock.jpg'))" :alt="product" />


        </div>
        <div class="product-info">
          <h1>{{ title }}</h1>
          <a :href="lien">Vers le site Vue.js</a>
          <p v-if="inventory > 10">En Stock</p>
          <p v-else-if="inventory <= 10 && inventory > 0">Presque épuisé</p>
          <p v-else>En rupture de stock</p>
          <ul>
            <li v-for="detail in details" :key="detail">{{ detail }}</li>
          </ul>
          <div
            v-for="(variant, index) in variants"
            :key="variant.id"
            @mouseover="updateImage(index)"
            class="color-circle"
            :style="{ backgroundColor: variant.color }"
          ></div>
          <select id="pointure">
            <option v-for="size in sizes" :key="size">{{ size }}</option>
          </select>
          <button
            class="button"
            @click="addToCart"
            :disabled="!inStock"
            :class="{ disabledButton: !inStock }"
          >
            Add to Cart
          </button>
          <button class="button" @click="removeFromCart">Remove From Cart</button>
        </div>
      </div>
      <review-list v-if="reviews.length" :reviews="reviews"></review-list>
      <review-form @review-submitted="addReview"></review-form>
      <ProductDetails></ProductDetails>
    </div>
  </template>
  
  <script>
  import ReviewForm from './ReviewForm.vue';
  import ReviewList from './ReviewList.vue';
  import ProductDetails from './ProductDetails.vue'
  
  export default {
    components: {
      ReviewForm,
      ReviewList,
      ProductDetails

    },
    data() {
      return {
        brand: 'Vue JS',
        product: 'chaussettes',
        lien: 'https://vuejs.org/',
        selectedVariant: 0,
        inventory: 8,
        details: ['50% coton', '20% polyester', '30% laine'],
        variants: [
  { id: 2001, color: 'green', image: require('../assets/socks_green.jpg'), quantity: 50 },
  { id: 2002, color: 'blue', image: require('../assets/socks_blue.jpg'), quantity: 0 },
],

        sizes: [36, 38, 40, 42, 44],
        reviews: [],
        cart: 0,
      };
    },
    computed: {
      title() {
        return this.product + ' ' + this.brand;
      },
      image() {
        return this.variants[this.selectedVariant].image;
      },
      inStock() {
  return this.variants[this.selectedVariant].quantity;
},

    },
    methods: {
      addToCart() {
    if (this.inStock > 0) { // Vérifie si l'article est en stock
      this.cart += 1;
      this.variants[this.selectedVariant].quantity -= 1; // Diminue la quantité en stock
    }
  },
  removeFromCart() {
    if (this.cart > 0) { // Vérifie qu'il y a au moins un article dans le panier
      this.cart -= 1;
      this.variants[this.selectedVariant].quantity += 1; // Réajoute la quantité en stock
    }
  },
      updateImage(index) {
        this.selectedVariant = index;
      },
      addReview(review) {
        this.reviews.push(review);
      },
    },
  };
  </script>
  
  <style scoped>
   body {
    background-color: #f2f2f2;
    margin: 0px;
    font-family: tahoma;
    color: #282828;
    margin:0;
    padding: 0;
  }
  
  .button {
    margin: 30px;
    background-color: #39495c;
    border-radius: 5px;
    font-size: 18px;
    width: 160px;
    height: 60px;
    color: white;
    padding: 20px;
    box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17),
      inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15),
      inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
    text-align: center;
    cursor: pointer;
  }
  
  .cart {
    margin: 25px 100px;
    float: right;
    border: 1px solid #d8d8d8;
    padding: 10px 30px;
    background-color: white;
    -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
    box-shadow: 2px 15px -12px rgba(0, 0, 0, 0.57);
  }
  
  .color-circle {
    width: 50px;
    height: 50px;
    margin-top: 8px;
    border: 2px solid #d8d8d8;
    border-radius: 50%;
  }
  
  
  .disabledButton {
    background-color: #d8d8d8;
    cursor: not-allowed;
  }
  
  h1 {
    font-size: 50px;
  }
  
  h3 {
    font-size: 25px;
  }
  
  img {
    border: 2px solid #d8d8d8;
    width: 70%;
    margin: 40px;
    padding: 15px;
    -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
    box-shadow: 2px 15px -12px rgba(0, 0, 0, 0.57);
  }
  
  input {
    width: 100%;
    height: 40px;
    margin-bottom: 20px;
  }
  
  label {
    font-size: 20px;
    margin-bottom: 5px;
  }
  
  li {
    font-size: 18px;
  }
  
  .nav-bar {
    background: linear-gradient(-90deg, #84cf6a, #16c0b0);
    height: 60px;
    margin-bottom: 25px;
    -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.57);
  }
  
  p {
    font-size: 22px;
  }
  
  .product-display {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
  .imageblur{
    filter: grayscale(100%) blur(5px);
  }
  .product-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  
  .product-image,
  .product-info {
    width: 50%;
  }
  
  .review-form {
    display: flex;
    flex-direction: column;
    width: 425px;
    padding: 20px;
    margin: 40px;
    border: 2px solid #d8d8d8;
    background-color: white;
    -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
    box-shadow: 2px 15px -12px rgba(0, 0, 0, 0.57);
  }
  
  .review-container {
    width: 425px;
    padding: 20px;
    background-color: white;
    -webkit-box-shadow: 0px 2px 20px -12px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 2px 20px -12px rgba(0, 0, 0, 0.57);
    box-shadow: 2px 20px -12px rgba(0, 0, 0, 0.57);
    margin-left: 40px;
    border: 2px solid #d8d8d8;
  }
  
  .review-container li {
    margin-bottom: 30px;
  }
  
  .review-form .button {
    display: block;
    margin: 30px auto;
  }
  
  select {
    height: 40px;
    font-size: 20px;
    background-color: white;
    cursor: pointer;
  }
  
  textarea {
    width: 95%;
    height: 70px;
    padding: 10px;
    font-size: 20px;
    margin-bottom: 20px;
  }
  
  ul {
    list-style-type: none;
  }
  
  @media only screen and (max-width: 600px) {
    .container {
      flex-direction: column;
    }
  
    .product-image,
    .product-info {
      margin-left: 10px;
      width: 100%;
    }
  
    .review-form {
      width: 90%;
    }
  }
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  
  
  </style>
  