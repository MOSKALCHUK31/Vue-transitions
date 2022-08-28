<template>
    <ul>
        <li 
            v-for="user in users" 
            :key="user"
            @click="removeUser(user)"
            >{{ user }}</li>
    </ul>
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
    ul {
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