<template>
  <div class="container">
    <div class="block" :class="{animated: isAnimated}"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <base-modal @close="hideDialog" v-if="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <!-- Компонента transition помещает в себя одного ребенка и позволяет делать анимацию -->
    <!-- с помощью классов, которые описанны внизу. Также всегда должен использоваться v-if/v-show -->
    <transition>
      <p v-if="isTextVisible">This is a temporary text</p>
    </transition>
    <!--  -->
    <button @click="toggleText">Toggle</button>
  </div>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>  

<script>
export default {
  data() {
    return { 
      dialogIsVisible: false,
      isAnimated: false,
      isTextVisible: false
      };
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animateBlock() {
      this.isAnimated = true;
    },
    toggleText() {
      this.isTextVisible = !this.isTextVisible;
    }
  },
};
</script>

<style>
@keyframes myAnimation {
  from {
    transform: translatex(-150px) scale(0.9);
    opacity: 0;
  }

  to {
    transform: translatex(0) scale(1);
    opacity: 1;
  }
}

.v-enter-active {
  animation: myAnimation 0.3s ease-out;
}


.v-leave-active {
  animation: myAnimation 0.3s ease-in;
}


* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  transition: all 0.5s ease;
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animated {
  transform: translateX(-150px);
}
</style>