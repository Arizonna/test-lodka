<template>
    <h1>
        Список пользователей
    </h1>
    <hr/>
    <UserList
    v-bind:users="users"/>
    <hr/>
    <button v-on:click="exit" class="btn btn-primary">Выйти</button>
</template>

<script>
import UserList from "@/components/UserList.vue"
export default {
    data () {
        return {
            users: []
        }
    },
    components: {
        UserList
    },
    mounted() {
        fetch ('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
            this.users = json
        })
    },
    methods: {
        exit: function () {
        this.$router.push({ name: 'login' });
    }
}
}
</script>