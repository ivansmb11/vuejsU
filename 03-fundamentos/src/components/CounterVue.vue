<template>
  <h2> {{ customTile }} </h2>
  <p> {{ counter }} <sup>2</sup> = {{ squareCounter }} </p>

  <div>
    <button @click="addCounter"> + </button>
    <button @click="minusCounter"> - </button>
  </div>
</template>

<script>
export default {

    props: {
      title: String,
      start: {
        type: Number,
        default: 0,
        validator(value) {
          return value >= 0;
        }
      }
    },

    data() {
        return {
            counter: parseInt(this.start)
        }
    },
    methods: {
      getSquare() {
        return this.counter * this.counter;
      },
      addCounter() {
        this.counter++;
      },
      minusCounter() {
        this.counter--;
      }
    },
    computed: {
      squareCounter() {
        return this.counter * this.counter;
      },
      customTile() {
        return this.title || 'Counter';
      }
    }
}
</script>

<style>

button {
  background: #42b883;
  border-radius: 5px;
  border: 1px solid #fff;
  color: #fff;
  cursor: pointer;
  margin: 0 5px;
  padding: 5px 15px;
  transition: 0.3s ease-in-out;
}

button:hover {
  background: #258158;
  transition: 0.3s ease-in-out;
}

</style>