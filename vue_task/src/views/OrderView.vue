<template>
  <div class="order">
    <div class="main_cont_wrapper">
      <div id="productApps">
        <div id="functions_cont">
          <select name id="productSelector" v-model="selectProduct">
            <option value="undefined" disabled>Select Product</option>
            <option value="Mac Book">MacBook</option>
            <option value="Asus ROG">Asus ROG</option>
            <option value="Alienware M3">Alienware M3</option>
            <option value="NVidia RTX 3090">NVidia RTX 3090</option>
            <option value="NVidia RTX 3090 Ti">NVidia RTX 3090 Ti</option>
          </select>
          <input
            type="number"
            name
            id="quantityOfProduct"
            v-model="quantityOfProduct"
            placeholder="Quantity"
          />
          <input
            type="number"
            name
            id="priceOfProduct"
            v-model="priceOfProduct"
            placeholder="Market price"
          />
          <!-- <button @click="addProduct()" id="addProduct">Add Product</button> -->
          <button @click="addProductBeta()" id="addProduct">Add Product</button>
          <!-- <button @click="reset()" id="reset">Reset</button> -->
          <button @click="reset_beta()" id="reset">Reset</button>
          <div id="buttons"></div>
        </div>
        <div id="productTable">
          <div id="gridAtributes">
            <div id="id">
              <div>Nr</div>
              <div id="id_beta"></div>
            </div>
            <div id="productName">
              <div>Numele Produsului</div>
              <div id="productName_beta"></div>
            </div>
            <div id="marketPrice">
              <div>Prețul unei cantități</div>
              <div id="marketPrice_beta"></div>
            </div>
            <div id="productQuantity">
              <div>Numărul de cantități</div>
              <div id="productQuantity_beta"></div>
            </div>
            <div id="totalPrice">
              <div>Prețul total</div>
              <div id="totalPrice_beta"></div>
            </div>
          </div>
          <!-- <div id="finalOrderTable">{{ order }}</div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  el: "#productTable",
  data() {
    return {
      selectProduct: undefined,
      id: 0,
      marketPrice: 0,
      quantityOfProduct: 0,
      priceOfProduct: 0,
      order: [

      ],
    };
  },
  computed: {
    result() {
      return this.priceOfProduct * this.quantityOfProduct;
    },
  },
  methods: {
    addProduct() {
      // this.id++;
      // this.order.push({ id: this.id, selectProduct: this.selectProduct, quantityOfProduct: this.quantityOfProduct, priceOfProduct: this.priceOfProduct, totalPrice: (this.priceOfProduct * this.quantityOfProduct) });
    },
    addProductBeta() {
      this.id++;
      const id_beta = document.getElementById("id_beta");
      const selectProduct_beta = document.getElementById("productName_beta");
      const quantityOfProduct_beta = document.getElementById("marketPrice_beta");
      const priceOfProduct_beta = document.getElementById("productQuantity_beta");
      const totalPrice_beta = document.getElementById("totalPrice_beta");
      id_beta.append(this.id, document.createElement('br'));
      selectProduct_beta.append(this.selectProduct, document.createElement('br'));
      quantityOfProduct_beta.append(this.quantityOfProduct, document.createElement('br'));
      priceOfProduct_beta.append(this.priceOfProduct, document.createElement('br'));
      totalPrice_beta.append(this.priceOfProduct * this.quantityOfProduct, document.createElement('br'));
    },
    // reset() {
    //   this.order = [];
    // },
    reset_beta() {
      const id_beta = document.getElementById("id_beta");
      const selectProduct_beta = document.getElementById("productName_beta");
      const quantityOfProduct_beta = document.getElementById("marketPrice_beta");
      const priceOfProduct_beta = document.getElementById("productQuantity_beta");
      const totalPrice_beta = document.getElementById("totalPrice_beta");
      id_beta.innerHTML = "";
      selectProduct_beta.innerHTML = "";
      quantityOfProduct_beta.innerHTML = "";
      priceOfProduct_beta.innerHTML = "";
      totalPrice_beta.innerHTML = "";
    }
  },
};
</script>


<style>
@media (min-width: 1024px) {
  .order {
    display: flex;
    align-items: center;
  }
}
#id_beta,
#productName_beta,
#marketPrice_beta,
#productQuantity_beta,
#totalPrice_beta {
  display: grid;
}
#main_cont_wrapper {
  display: grid;
  /* grid-template-rows: 1fr 1fr; */
}
#id {
  display: grid;
}
#productSelector {
  padding: 8px;
  border: none;
}
#quantityOfProduct,
#priceOfProduct {
  padding: 8px;
}
#addProduct,
#reset {
  padding: 8px;
}

#functions_cont {
  margin-top: 4vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}
#productTable {
  display: grid;
  grid-template-rows: repeat(2fr);
  background-color: rgb(99, 99, 99);
  /* border: 1px solid #000; */
  margin: auto;
}
#gridAtributes {
  display: grid;
  grid-template-columns: 0.4fr 1fr 1fr 1fr 1fr;
  background-color: rgb(99, 99, 99);
  /* border: 1px solid #000; */
  border-bottom: 1px solid #000;
}
#id,
#productName,
#marketPrice,
#productQuantity,
#totalPrice {
  border-right: 1px solid #000;
  padding: 6px;
}
</style>