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
        export default {
            data() {
            return {
                username: '',
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
                            const expirationMinutes = 45;
                            const role = data.role;
                            const token = this.generateToken({ username: this.username }, expirationMinutes, role);

                            localStorage.setItem('token', token);

                            //alert('Login successful!');
                            this.$router.push('/booklistuser');
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
        
            generateToken(payload, expirationMinutes, role) {
                const now = new Date();
                const expirationTime = new Date(now.getTime() + expirationMinutes * 60000); // Convert minutes to milliseconds

                const tokenPayload = {
                    ...payload,
                    exp: Math.floor(expirationTime.getTime() / 1000), // Convert expiration time to seconds
                    role: role // Include the user role in the token payload
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
            }
        };
</script>

<style>
.login-container {
    height: 375px;
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