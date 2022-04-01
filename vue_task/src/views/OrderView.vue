<template>
  <div class="order">
    <div class="main_cont_wrapper">
      <div id="productApps">
        <div id="functions_cont">
          <select name="" id="productSelector" v-model="selectProduct">
            <option value="undefined" disabled>Select Product</option>
            <option value="Mac Book">MacBook</option>
            <option value="Asus ROG">Asus ROG</option>
            <option value="Alienware M3">Alienware M3</option>
            <option value="NVidia RTX 3090">NVidia RTX 3090</option>
            <option value="NVidia RTX 3090 Ti">NVidia RTX 3090 Ti</option>
          </select>
          <input
            type="number"
            name=""
            id="quantityOfProduct"
            v-model="quantityOfProduct"
            placeholder="Quantity"
          />
          <input
            type="number"
            name=""
            id="priceOfProduct"
            v-model="priceOfProduct"
            placeholder="Market price"
          />
          <button @click="addProduct()" id="addProduct">Add Product</button>
          <button @click="reset()" id="reset">Reset</button>
          <div id="buttons"></div>
        </div>
        <div id="productTable">
          <div id="gridAtributes">
            <div id="id">
              <div>Nr</div>
            </div>
            <div id="productName">
              <div>Numele Produsului</div>
            </div>
            <div id="marketPrice">
              <div>Prețul unei cantități</div>
            </div>
            <div id="productQuantity">
              <div>Numărul de cantități</div>
            </div>
            <div id="totalPrice">
              <div>Prețul total</div>
            </div>
          </div>
          <div id="finalOrderTable">
            {{ order }}
          </div>
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
      this.id++;
      this.order.push({id: this.id, selectProduct: this.selectProduct, quantityOfProduct: this.quantityOfProduct, priceOfProduct: this.priceOfProduct, totalPrice: (this.priceOfProduct * this.quantityOfProduct)});
    },
    reset() {
      this.order = [];
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
  border: 1px solid #000;
  margin: auto;
}
#gridAtributes {
  display: grid;
  grid-template-columns: 0.4fr 1fr 1fr 1fr 1fr;
  background-color: rgb(99, 99, 99);
  border: 1px solid #000;
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