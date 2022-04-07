<template>
  <div>
    <h1>
      <strong>КриптоМаг2000</strong>
    </h1>
    <hr/>
    <TickersList
    v-bind:tickers="tickers"
    />
    <hr/>
    <router-link to="/userlist">Список пользователей</router-link>
    <span>
      Разработал Илюша 2001
    </span>
    <router-link to="/login">Авторизация</router-link>
  </div>
</template>

<script>
import TickersList from "@/components/TickersList.vue";

export default {
  data () {
    return {
      tickers: ['BTC', 'ETH', 'BNB', 'LUNA', 'LTC']
    }
  },
  components: {
    TickersList
  }
}
</script>