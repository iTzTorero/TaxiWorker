<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
//import HelloWorld from './components/HelloWorld.vue'
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: {
    Modal,
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    getNombre(){
      return this.nombre
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      var form = document.getElementById("taxiNumeroForm");
      form.reset();
      this.isModalVisible = false;
    },
  },
};
</script>

<template>
  <form id="taxiNumeroForm" @submit="showModal" onsubmit="return false;">
    <h1>Taxi Worker</h1>
    <p>Ingrese el number de telefono</p>
    <input
      required
      v-model="numero"
      type="tel"
      id="phoneInput"
      name="phoneInput"
      pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
    />
    <br />

    <div id="app">
      <!-- <button type="submit" class="btn" @>Enviar</button> -->
      <input type="submit" value="Enviar" />
      <Modal v-show="isModalVisible" @close="closeModal" numero="6871748530"> </Modal>
    </div>
  </form>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
