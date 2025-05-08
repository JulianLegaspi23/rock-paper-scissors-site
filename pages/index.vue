<template>
    <div v-if="!loggedIn" style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; background-color: #222831; color: #FFFFFF;" >
        <h1 style="color: #FFFFFF;">Simple Login</h1>
        <a-card style="background-color: #393E46; width: 300px; display: flex; justify-content: center; align-items: center; padding: 20px; border-radius: 8px;">
            <a-flex vertical :gap="5" style="color: white;">
                Username: 
                <a-input 
                    v-model:value="form.userName"
                    style="background-color: #2A2A2A; color: #F0F0F0; border-color: #2E2E2E;" 
                    placeholder-style="color: #FFFFFF;" 
                ></a-input>
                Password:
                <a-input 
                    v-model:value="form.password"
                    style="background-color: #2A2A2A; color: #F0F0F0; border-color: #2E2E2E;" 
                    placeholder-style="color: #FFFFFF;" 
                    type="password"
                ></a-input>
                <a-button 
                    @click="login" 
                    style="background-color: #1677FF; color: #FFFFFF; border: none; width: 100%; margin-top: 10px; border-radius: 4px;"
                    :hover="{
                        backgroundColor: '#1A7FF7',
                        borderColor: '#1677FF'
                    }"
                >
                    LOGIN
                </a-button>
            </a-flex>
        </a-card>
    </div>

    <div v-if="loggedIn" style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; background-color: #222831; color: #FFFFFF;" >
        <h1 style="color: #FFFFFF;">Welcome, {{ user.userName }}</h1>
        <a-button 
            @click="logout" 
            style="background-color: #1677FF; color: #FFFFFF; border: none; width: 200px; margin-top: 10px; border-radius: 4px;"
            :hover="{
                backgroundColor: '#1A7FF7',
                borderColor: '#1677FF'
            }"
        >
            LOGOUT
        </a-button>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { reactive } from 'vue'
    const form = reactive({
        userName: '',
        password: ''
    });
    let loggedIn = ref(false);
    let user = ref({});

    const login = async () => {
        try {
            console.log('form :>> ', form);
            if (!form.userName || !form.password) {
                console.log('Both Username and Password are required');
                return;
            }

            const { data, error } = await useFetch('http://localhost:5000/loginDetails/login', {
                method: 'POST',
                body: { userName: form.userName, password: form.password }
            });

            if (error.value) {
                console.log('Error fetching user data:', error.value);
                return;
            }
            console.log('User data :>> ', data.value);
            user.value = data.value;
            loggedIn.value = !!user.value; 
            if(user) {
                loggedIn = true;
            }
            console.log('user :>> ', user);
            console.log('loggedIn :>> ', loggedIn);
        } catch (error) {
            console.log('Error during login fetch:', error);
        }
    }

    const logout = () => {
        form.userName = ''
        form.password = ''
        loggedIn = false;
    }
</script>
