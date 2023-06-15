/**
 * Author: Ahmad AlKafri
 * Date: 14e Juni
 * 
 * This components includes the "Sign out button" and "user name and role". When click on sign out the token removed and session ends, the app redirect to login page again
 */

<template>
    <div>
        <p v-if="isUserLoggedIn" class="user-title">Browsing as {{ userRole }} {{ userName }}</p>
        <p v-else class="user-title">Browsing as guest</p>
        
        <button v-if="isUserLoggedIn" class="signout-button" @click="signoutClick">Sign out</button>
        <button v-else class="signout-button" @click="signoutClick">Sign in</button>
        </div>
    </template>
    
    <script>
    export default {
        props: {
        label: {
            type: String,
            required: true
        }
        },
        data() {
        return {
            isUserLoggedIn: false,
            userName: ''
        };
        },
        mounted() {
        this.checkToken();
        },
        methods: {
            checkToken() {
                const token = sessionStorage.getItem('token');
                const userRole = sessionStorage.getItem('userRole');

                if (token) {
                    const decodedToken = this.decodeToken(token);
                    if (decodedToken) {
                        this.isUserLoggedIn = true;
                        this.userName = decodedToken.username;
                        this.userRole = userRole.toLowerCase();
                        console.log(decodedToken.role);
                    } else {
                        // Invalid token
                        this.isUserLoggedIn = false;
                        this.userName = '';
                        this.userRole = '';
                        sessionStorage.removeItem('token'); // Remove the invalid token from localStorage
                    }
                } else {
                    this.isUserLoggedIn = false;
                    this.userName = '';
                    this.userRole = '';
                }
            },

        decodeToken(token) {
            const [header, payload] = token.split('.');
            try {
            const decodedPayload = JSON.parse(this.base64UrlDecode(payload));
            return decodedPayload;
            } catch (error) {
            console.error('Error decoding token:', error);
            return null;
            }
        },
        base64UrlDecode(encodedText) {
            const base64 = encodedText.replace(/-/g, '+').replace(/_/g, '/');
            const paddingLength = 4 - (base64.length % 4);
            const paddedBase64 = base64 + '==='.slice(0, paddingLength);
            return atob(paddedBase64);
        },
        signoutClick() {
            sessionStorage.removeItem('token');
            this.isUserLoggedIn = false;
            this.userName = '';
            
            this.$router.push('/');
        }
        }
    };
</script>
    
<style scoped>
    .signout-button {
        background-color: #fff;
        border: none;
        color: black;
        padding: 5px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 20px;
        margin: 2px;
        cursor: pointer;
    }

    .user-title{
        font-size: 13px;
    }
</style>