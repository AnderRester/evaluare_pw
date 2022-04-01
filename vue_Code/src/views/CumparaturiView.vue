<template>
  <div class="recepisa">
    <div class="main_cont_wrapper">
      <div id="productApps">
        <div id="functions_cont">
          <input
            type="number"
            name=""
            id="cantitate"
            v-model="cantitate"
            placeholder="cantitate"
          />
          <select name="" id="selectareaProdusului" v-model="selectareaProdusului">
            <option value="undefined" disabled>Selectati Produsul</option>
            <option value="Ultima zi in Pompei">Ultima zi in Pompei</option>
            <option value="Caiet in patratele">Caiet in patratele</option>
            <option value="Stilou gel">Stilou gel</option>
            <option value="Creion simplu">Creion simplu</option>
            <option value="Guma de sters">Guma de sters</option>
          </select>
          <input
            type="number"
            name=""
            id="pret"
            v-model="pret"
            placeholder="pret"
          />
          <button @click="adaugare()" id="adaugare">Adauga Produs</button>
          <button @click="resetare()" id="resetare">Resetare</button>
          <div id="buttons"></div>
        </div>
        <div id="tabelDeProdus">
          <div id="id">
            <div>Nr</div>
          </div>
          <div id="produsDenumire">
            <div>Numele Produsului</div>
          </div>
          <div id="pret">
            <div>Prețul unei cantități</div>
          </div>
          <div id="cantitate">
            <div>Numărul de cantități</div>
          </div>
          <div id="total">
            <div>Prețul total</div>
          </div>
          <div id="recepisa">
            {{ recepisa }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  el: "#tabelDeProdus",
  data() {
    return {
      selectareaProdusului: undefined,
      id: 0,
      pret: 0,
      cantitate: 0,
      recepisa: [],
    };
  },
  computed: {
    result() {
      return this.pret * this.cantitate;
    },
  },
  methods: {
    adaugare() {
      this.id++;
      this.recepisa.push({
        id: this.id,
        selectareaProdusului: this.selectareaProdusului,
        cantitate: this.cantitate,
        pret: this.pret,
        total: this.pret * this.cantitate,
      });
    },
    resetare() {
      this.recepisa = [];
    },
  },
};
</script>


<style>
@media (min-width: 1024px) {
  .recepisa {
    display: flex;
    align-items: center;
  }
}
</style>