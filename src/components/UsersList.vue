<template>
<!-- Можно использовать группу, но в отличии от transition -->
<!-- transition-group рендерит элемент в DOM -->
<!-- Поэтому мы можем указать тег, который будет вставлен в дерево -->
    <transition-group tag="ul" name="user-list">
        <li 
            v-for="user in users" 
            :key="user"
            @click="removeUser(user)"
        >{{ user }}</li>
    </transition-group>
    <div>
        <label for="username">Enter username</label>
        <input id="username" type="text" ref="userName">
        <button @click="addUser">Add user</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            users: ['Sergey', 'Anatoliy', 'Julie', 'Valentina', 'Galyna']
        }
    },
    methods: {
        addUser() {
            const enteredUserName = this.$refs.userName.value;
            this.users.unshift(enteredUserName);
        },
        removeUser(user) {
            this.users = this.users.filter(usr => usr !== user);
        }
    }
}
</script>

<style scoped>
/* Класс добавляется в тот момент, когда элемент меняет свои стили */
/* В данном случае - лист */
/* Мы можем добавить транзишн и убрать прыжок листа */
    .user-list-move {
        transition: all 0.3s ease;
    }

    .user-list-enter-from {
        opacity: 0;
        transform: translateX(-130px) scale(0.5);
    }

    .user-list-enter-active {
        transition: all 0.3s ease-in;
    }

    .user-list-enter-to {
        opacity: 1;
        transform: translateX(0px) scale(1);
    }

    .user-list-leave-from {
        opacity: 1;
    }

    .user-list-leave-active {
        transition: all 0.5s ease-out;
        position: absolute;
        width: 100%;
    }

    .user-list-leave-to {
        opacity: 0;
        transform: translateX(100px);
    }

    ul {
        position: relative;
        list-style: none;
        margin-bottom: 1rem;
        margin: 0;
        padding: 0;
        width: 100%;
    }

    li {
        border: 1px solid #000;
        border-radius: 4px;
        margin-bottom: 10px;
        text-align: center;
        padding: 20px 0;
    }

    input {
        width: 100%;
        padding: 10px;
        display: block;
        margin-bottom: 20px
    }
    
    div {
        width: 100%;
    }

    label {
        display: block;
        margin-bottom: 10px;
    }
</style>