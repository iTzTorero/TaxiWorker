<script>
export default {
  name: "Modal",
  // data: {
  //   calle: "",
  //   numero: "",
  //   colonia: "",
  //   referencia: "",
  // },
  props: {
    numero: { required: true, type: String },
  },
  mounted() {
    const numero = document.getElementById("phoneInput").innerHTML;
    console.log("Imprimi el numero en el modelo " + numero);
  },
  methods: {
    close() {
      this.$emit("close");
    },
    addDireccion(calle, numero, colonia, referencia) {
      console.log(
        "Intente Agregar una direccion" + calle + numero + colonia + referencia
      );
    },
  },
};
</script>

<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header class="modal-header" id="modalTitle">
          <slot name="header"> Numero de telefono: {{ numero }} </slot>
          <p hidden id="num">{{ numero }}</p>
          <button
            type="button"
            class="btn-close"
            @click="close"
            aria-label="Close modal"
          >
            x
          </button>
        </header>

        <section class="modal-body" id="modalDescription">
          <slot name="body">
            <table class="table">
              <thead>
                <th>Direcciones</th>
                <th>Operaciones</th>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <button class="btn-yellow">Editar</button>
                    <button class="btn-red">Eliminar</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </slot>
        </section>
        <!-- <form @submit.prevent="addDireccion">
          <input v-model="calle" type="text" placeholder="Ingresa la calle" />
          <input
            v-model="numeroCasa"
            type="text"
            placeholder="Ingresa el numero"
          />
          <input
            v-model="colonia"
            type="text"
            placeholder="Ingresa la colonia"
          />
          <input
            v-model="referencia"
            type="text"
            placeholder="Ingresa la referencia"
          />
        </form> -->
        <footer class="modal-footer">
          <slot name="footer"> This is the default footer! </slot>
          <button
            type="button"
            class="btn-green"
            @click="close"
            aria-label="Close modal"
          >
            Cerrar
          </button>
        </footer>
      </div>
    </div>
  </transition>
</template>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: #4aae9b;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid black;
  border-radius: 2px;
  padding: 10px;
}

.btn-yellow {
  color: white;
  background: #f7b731;
  border: 1px solid black;
  border-radius: 2px;
  padding: 10px;
}

.btn-red {
  color: white;
  background: #ff0000;
  border: 1px solid black;
  border-radius: 2px;
  padding: 10px;
  margin-left: 5px;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}

.table {
  color: black;
  border: black;
}
</style>
