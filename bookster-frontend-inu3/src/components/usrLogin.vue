/**
 * Author: Ahmad AlKafri
 * Date: 14e Juni
 * 
 * This file contains the template, script, style, for user login page. It gives the option to login as a user/admin or proceed to book list as a guest.
 * The user login is valid for 45 minutes only, after that it will be logged out.
 */

<template>
    <div class="login-container">
        <br />
        <div class="login-title-div">
            <h2 class="login-title">Login</h2>
        </div>
    
        <div class="login-box">
            <div class="form-group">
            <label for="username">Username</label>
            <input type="text" id="username" placeholder="Type your username..." class="form-control" v-model="username" />
            </div>
            <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" placeholder="Type your password..." class="form-control" v-model="password" />
            </div>
            <p class="signup-link">No Account? Sign up <a href="#/signup">here!</a></p>
            <button class="signin-button" @click="signIn">Sign in</button>
            <button class="guest-button" @click="proceedAsGuest">Proceed as guest user</button>
        </div>
    </div>
</template>

<script>
    import { User } from '@/interface/user.ts';

    export default {
    

    data() {
        return {
            user: {
            username: '',
            role: '',
            loggedIn: false
            },
            password: ''
        };
    },
    methods: {
        signIn() {
        const credentials = {
            username: this.username,
            password: this.password
        };

        fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
        .then(response => response.json())
        .then(data => {
            if (data.message === 'Successfully signed in') {
                const accessToken = data.accessToken;

                const expirationMinutes = 45;
                const expirationTime = new Date().getTime() + expirationMinutes * 60;

                const token = this.generateToken(
                    { username: this.username },
                    expirationTime,
                    accessToken
                );

                sessionStorage.setItem('token', token);
                sessionStorage.setItem('tokenExpiration', expirationTime);
                sessionStorage.setItem('accessToken', accessToken);

                fetch('http://localhost:3000/library/profile', {
                    headers: {
                        'Authorization': 'Bearer ' + accessToken
                    }
                })
                .then(response => response.json())
                .then(userData => {
                    
                    this.user.username = this.username;
                    this.user.role = userData.user.role;
                    this.user.loggedIn = true;

                    sessionStorage.setItem('userRole', userData.user.role);
                    sessionStorage.setItem('userRole', userData.user.role);
                    
                    if(userData.user.role == 'USER'){
                        this.$router.push('/booklistuser');
                    }else{
                        this.$router.push('/booklistadmin');
                    }
                })
                .catch(error => {
                    console.error('Error fetching user profile:', error);
                });
                
                
            } else {
                alert('Invalid username or password');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred during login');
        });

        },


        proceedAsGuest() {
            this.$router.push('/booklistguest');
        },

        generateToken(payload, expirationTime, accessToken) {
        const tokenPayload = {
            ...payload,
            exp: Math.floor(expirationTime / 1000), // Convert expiration time to seconds
            accessToken: accessToken // Include the access token in the token payload
        };

        const encodedHeader = this.base64UrlEncode(JSON.stringify({ typ: 'JWT', alg: 'HS256' }));
        const encodedPayload = this.base64UrlEncode(JSON.stringify(tokenPayload));

        const signature = this.generateSignature(encodedHeader, encodedPayload, 'Your-secret-key');

        return `${encodedHeader}.${encodedPayload}.${signature}`;
        },

        base64UrlEncode(text) {
            const base64 = btoa(text);
            return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
        },
        generateSignature(encodedHeader, encodedPayload, secretKey) {
            const signature = this.sha256(`${encodedHeader}.${encodedPayload}.${secretKey}`);
            return this.base64UrlEncode(signature);
        },
        sha256(plainText) {
            const encoder = new TextEncoder();
            const data = encoder.encode(plainText);
            return window.crypto.subtle.digest('SHA-256', data).then(buffer => {
            const hashArray = Array.from(new Uint8Array(buffer));
            return hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
        });
        }
    },
    
    created() {
        const user = JSON.parse(sessionStorage.getItem('user'));
        if (user) {
            this.user = user;
        }
        
        const expirationTime = sessionStorage.getItem('tokenExpiration');
        if (expirationTime && new Date().getTime() > expirationTime) {
        // Token has expired, clear token and redirect to login page
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('tokenExpiration');
        this.$router.push('/');
        }
    }
    };
</script>

<style>
.login-container {
    height: 425px;
    font-size: 18px;
    color: #000000;
    padding: auto;
    background-color: #d9d9d9;
    max-width: 30%;
    align-content: center;
    margin: auto; 
}

.login-title-div {
    padding: 1px;
    width: 90%;
    margin: auto;
    align-content: center;
    text-align: center;
    background-color: #828282;
    color: #ffffff;
    
}


.login-box {
    background-color: #d9d9d9;
    padding: 10px;
    justify-content: space-between;
    width: 80%;
    margin: auto;
}

.form-group {
    display: flexbox;
    margin-bottom: 10px;
    align-content: center;
}

label {
    display: block;
    margin-bottom: 5px;
    font-size: 12px;
}

input[type="text"],
input[type="password"] {
    width: 100%;
    padding: 5px;
    margin-bottom: 10px;
}

.signup-link {
    font-size: 12px;
}

.signup-link a {
    color: #828282;
    font-weight: bold;
}


.signin-button {
    background-color: #828282;
    color: #ffffff;
    width: 100%;
    border: none;
    border-radius: 5px;
    margin-bottom: 5px;
    height: 45px;
    cursor: pointer;
    font-weight: bold;
    
}

.guest-button {
    background-color: #ffffff;
    color: #000000;
    border: none;
    border-radius: 5px;
    width: 100%;
    height: 45px;
    cursor: pointer;
    font-weight: bold;
}
</style>