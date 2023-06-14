<template>
    <div class="user-admin">
        <table class="user-table">
            <thead>
            <tr>
                <th>Username</th>
                <th>Role</th>
                <th>Purchases</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(user, index) in users" :key="index" :class="{ 'title-row': index === 0 }">
                <td>{{ user.username }}</td>
                <td>{{ user.role }}</td>
                <td>{{ user.purchases }}</td>
                <td style="max-width: 75px;">
                <button @click="editUser(user)" class="user-button" style="margin-right: 35px;">Edit</button>
                <button @click="deleteUser(user)" class="user-button">Delete</button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        data() {
        return {
            users: [],
        };
        },
        mounted() {
        this.fetchUsers();
        },
        methods: {
        fetchUsers() {
            fetch('http://localhost:3000/admin/users', {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json'
                }
                })
                .then(response => response.json())
                .then(data => {
                    // Process the response data
                    this.users = data.users;
                    console.log(localStorage.getItem('Token'));
                })
                .catch(error => {
                    console.error('Failed to fetch users:', error);
                    
                });

        },
        editUser(user) {
            console.log('Edit user:', user);
        },
        deleteUser(user) {
            console.log('Delete user:', user);
        },
        },
    };
</script>
    
<style>
.user-admin {
    width: 90%;
    margin: 0 auto;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th {
    background-color: #7c7c7c;
    color: white;
    font-size: 16px;
    height: 45px;
    text-align: center;
    border: white solid 2px;
}

td {
    background-color: #d9d9d9;
    color: black;
    font-size: 14px;
    padding: 8px;
    height: 45px;
    text-align: center;
    border: white solid 2px;
    align-content: center;
    vertical-align: middle;
}

.even-row {
    background-color: #d9d9d9;
}

.odd-row {
    background-color: white;
}

.user-button {
    background-color: #5c5c5c;
    color: #ffffff;
    width: 125px;
    border: none;
    border-radius: 5px;
    margin-bottom: 5px;
    height: 35px;
    cursor: pointer;
    font-weight: bold;
}

</style>