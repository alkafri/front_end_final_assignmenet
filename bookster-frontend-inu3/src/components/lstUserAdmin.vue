/**
 * Author: Ahmad AlKafri
 * Date: 14e Juni
 * 
 * This file allows the Admin's to shows/controls all users. In this file the admin can see the whole users lists, delete or promote a user and see user purchases 
 */

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
            <tr v-for="(user, index) in users" :key="index" :class="{ 'title-row': index == 0 }">
                <td>{{ user.username }}</td>
                <td>{{ user.role }}</td>
                <td>{{ user.purchases }}</td>
                <td style="max-width: 75px;">
                <button v-if="user.role=='USER'" @click="promoteUser(user)" class="user-button" style="margin-right: 35px;">Promote</button>
                <button v-else class="user-button-dis" style="margin-right: 35px;">Promote</button>
                <button @click="deleteUser(user)" class="user-button">Delete</button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>


    <div class="modal" v-if="showModal">
        <div class="modal-content">
            <h2>Change user settings</h2>
            <br>
            <p>Are you sure you wish to <br> promote user {{ userToPromote.username }}?</p><br>
            <div class="modal-buttons">
                <button class="modal-button confirm" @click="confirmPromotion">Confirm</button>
                <button class="modal-button cancel" @click="cancelPromotion">Cancel</button>
            </div>
        </div>
    </div>

    

</template>

<script>
    export default {
        data() {
            return {
                users: [],
                showModal: false,
                userToPromote: null,
            };
        },

        created() {
            const q = this.$route.query.q;

            if (q) {
                const fetchURL = `http://localhost:3000/library/user?q=${q}`;
                this.fetchUsers(fetchURL);
            } else {
                this.fetchUsers('http://localhost:3000/admin/users');
            }
        },

        methods: {
        
            fetchUsers(url) {
                fetch(url, {
                    headers: {
                        'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken'),
                        'Content-Type': 'application/json'
                    }
                })
                .then(response => response.json())
                .then(data => {
                    this.users = data.users;
                })
                .catch(error => {
                    console.error('Failed to fetch users:', error);
                });
            },



            promoteUser(user) {
                this.showModal = true; 
                this.userToPromote = user; 
            },

            confirmPromotion() {
                this.showModal = false; 

                const url = `http://localhost:3000/admin/users/${this.userToPromote.username}`;

                fetch(url, {
                    method: 'PUT',
                    headers: {
                    'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken'),
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ username: this.userToPromote.username })
                })
                    .then(response => {
                    if (response.ok) {
                        console.log('User promoted successfully.');

                        this.showCustomMessage('User promoted successfully!', 'success');
                        // Reload the page or update the users list
                        // this.fetchUsers('http://localhost:3000/admin/users');
                    } else {
                        console.error('Failed to promote user:', response.statusText);
                    }
                    })
                    .catch(error => {
                    console.error('Failed to promote user:', error);
                    });
                },

                cancelPromotion() {
                this.showModal = false; // Hide the modal
                },

                


        
        
        deleteUser(user) {
            const confirmed = confirm('Are you sure you want to delete this user?');
            
            if (confirmed) {
                const url = `http://localhost:3000/admin/users/${user.username}`;
                
                fetch(url, {
                method: 'DELETE',
                headers: {
                    'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken'),
                    'Content-Type': 'application/json'
                }
                })
                .then(response => {
                if (response.ok) {
                    console.log('User deleted successfully.');
                    // Reload the page or update the users list
                    //this.fetchUsers('http://localhost:3000/admin/users');
                } else {
                    console.error('Failed to delete user:', response.statusText);
                }
                })
                .catch(error => {
                console.error('Failed to delete user:', error);
                });
            }
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

.user-button-dis {
    background-color: #acacac;
    color: #ffffff;
    width: 125px;
    border: none;
    border-radius: 5px;
    margin-bottom: 5px;
    height: 35px;
    font-weight: bold;
}



.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.modal-content {
    background-color: #d9d9d9;
    padding: 20px;
    border-radius: 4px;
    width: 300px;
    height: 200px;
}

.modal h2 {
    font-size: 18px;
    margin-top: 0;
    text-align: center;
}

.modal p {
    margin-bottom: 20px;
    text-align: center;
}

.modal-buttons {
    text-align: center;
}

.modal-button {
    margin-left: 10px;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
}

.modal-button.confirm {
    background-color: #434343;
    color: #fff;
}

.modal-button.cancel {
    background-color: #c3c3c3;
    color: black;
}

</style>