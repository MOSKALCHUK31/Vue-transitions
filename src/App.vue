<template>
  <div class="container">
    <div class="block" :class="{animated: isAnimated}"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <transition 
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @enter-cancelled="enterCancelled"
      @leave-cancelled="leaveCancelled"
      >
      <p v-if="isTextVisible">This is a temporary text</p>
    </transition>
    <button @click="toggleText">Toggle</button>
  </div>
  <div class="container">
    <transition name="fade" mode="out-in">
      <button @click="hideUsers" v-if="isUsersVisible">Hide users</button>
      <button @click="showUsers" v-else>Show users</button>
    </transition>
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
      isTextVisible: false,
      isUsersVisible: true,
      enterInterval: null,
      leaveInterval: null
      };
  },
  methods: {
    enterCancelled() {
      console.log('enter cancelled');
      clearInterval(this.enterInterval);
    },
    leaveCancelled() {
      console.log('leave cancelled');
      clearInterval(this.leaveInterval);
    },
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
    },
    hideUsers() {
      this.isUsersVisible = false;
    },
    showUsers() {
      this.isUsersVisible = true;
    },
    beforeEnter(el) {
      console.log('before-enter');
      el.style.opacity = 0;
    },
    enter(el, done) {
      console.log('enter');
      let round = 1;
      this.enterInterval = setInterval(() =>  {
        el.style.opacity = round * 0.01;
        round++;

        if (round > 100) {
          clearInterval(this.enterInterval);
          done();
        }
      }, 20);

      
    },
    afterEnter() {
      console.log('after-enter');
    },
    beforeLeave(el) {
      console.log('before-leave');
      el.style.opacity = 1;
    },
    leave(el, done) {
      console.log('leave');
      let round = 1;
      this.leaveInterval = setInterval (() => {
        el.style.opacity = 1 - (round * 0.01);
        round++;

        if (round > 100) {
          clearInterval(this.leaveInterval);
          done();
        }
      } ,20);
    },
    afterLeave() {
      console.log('after-leave')
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

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.3s ease-in;
}

.fade-leave-active {
  transition: all 0.3s ease-out;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
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