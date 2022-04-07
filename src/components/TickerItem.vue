<template>
  <li>
    <span>
      <img :src="getTickerImg(ticker)"/>
      {{ ticker }}
      <strong>{{ price }} <small>USD</small></strong>
    </span>
  </li>
</template>

<script>
export default {
    props: {
        ticker: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            price: 0
        }
    },
    mounted: function () {
        this.getPrice(this.ticker);

        setInterval(() => {
            this.getPrice(this.ticker);
        }, 5000);
    },
    methods: {
        getPrice(ticker) {
            fetch(`https://min-api.cryptocompare.com/data/price?fsym=${ticker}&tsyms=USD`)
                .then(response => response.json())
                .then(json => {
                    this.price = json['USD'];
                });
        },
        getTickerImg(ticker) {
            try {
                return require(`../assets/img/${ticker}.png`);
            } catch {
                return '';
            }
        }
    }
}
</script>

<style scoped>
li {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgb(192, 192, 192);
  padding: 0.5rem 0.5rem;
  margin-bottom: 1rem;
}

img {
    width: 25px;
    height: 25px
}
</style>