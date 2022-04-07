<template>
    <div>
        <div class="bd-example">
        <form class="review-form" @submit.prevent="onSubmit">
            <h3>Авторизация</h3>
                <input v-model="login" class="form-control" type="text" id="login" placeholder="Логин">
                <input v-model="password" class="form-control" type="text" id="password" placeholder="Пароль">
                <button v-on:click="check" class="btn btn-success">Войти</button>
        </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            login: '',
            password: ''
        }
    },
    methods: {
        onSubmit() {
        this.login = null;
        this.password = null;
    },
        check: function () {
        if (this.login === 'sas' && this.password === 'sus') {
            this.$router.push({ name: 'users' });
        }
        else {
          alert('Давай по новой Миша все хуйня')
        }
        }
    }
}





</script>


<style>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 40px;
  border: solid #dee2e6;
  border-width: 1px;
}
.form-control {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 25px;
}
.btn-success {
    margin-top: 25px;
}
.bd-example {
    margin-top: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>