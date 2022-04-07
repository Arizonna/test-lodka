<template>
    <div>
        <ul>
            <TickersItem
            v-for="(ticker, i) of tickers" :key="i"
            v-bind:ticker="ticker"/>
        </ul>
    </div>
</template>

<script>
import TickersItem from '@/components/TickerItem.vue'
export default {
    props: ['tickers'],
    components: {
        TickersItem
    }
}
</script>

<style>
ul {
    display: flex;
    flex-direction: column;
    padding: 1rem 1rem;
}
</style>