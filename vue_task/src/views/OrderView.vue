<template>
  <div class="order">
    <div class="main_cont_wrapper">
      <select name="" id="productSelector" v-model="selectProduct">
        <option value="undefined" disabled>Select Product</option>
        <option value="1">Product</option>
        <option value="2">Product</option>
        <option value="3">Product</option>
        <option value="4">Product</option>
        <option value="5">Product</option>
        <option value="6">Product</option>
      </select>
    </div>
    <button @click="">Add Product</button>
    <button @click="">Reset</button>
    <div id="productTable">

    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .order {
    display: flex;
    align-items: center;
  }
}
#productTable {
    display: grid;
}
#productSelector {
  border: none;
}
</style>