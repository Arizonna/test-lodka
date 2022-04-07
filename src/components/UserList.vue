<template>
    <div>
        <my-select
        v-model="selectedSort"
        :options="sortOptions"
        />
    </div>
    <div>
        <ul>
            <UserItem
            v-for="(user, t) of sortedUser" :key="t"
            v-bind:user="user"/>
        </ul>
    </div>
</template>

<script>
import UserItem from "@/components/UserItem.vue"
import MySelect from "@/components/UI/MySelect.vue"
export default {
    data () {
        return {
            selectedSort: '',
            sortOptions: [
                {value: 'name', name: 'По имени пользователя'},
                {value: 'username', name: 'По никнейму пользователя'},
                {value: 'email', name: 'По email'},
                {value: 'id', name: 'По ID'}
                ]
        }
    },
    props: ['users'],
    components: {
        UserItem, MySelect
    },
    computed: {
        sortedUser() {
            if(this.selectedSort === 'id'){
                return [...this.users].sort((user1, user2) => user2[this.selectedSort] - (user1[this.selectedSort]))
            }
            else {
                return [...this.users].sort((user1, user2) => user1[this.selectedSort]?.localeCompare(user2[this.selectedSort]))
            }

        }
    },
    watch: {

    }
}
</script>