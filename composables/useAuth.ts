import { ref, Ref } from 'vue'
import { User } from "firebase/auth"

import { auth } from '../api/firebase.config'
import AuthService from "../services/Auth.service"
import { providers } from '../types/providers'
export default function useAuth() {
    const currentUser: Ref<User | null> = ref(null as User | null)
    const loading: Ref<Boolean> = ref(true as Boolean)

    auth.onAuthStateChanged( (user: User | null) => {
        currentUser.value = user
        loading.value = false
    })
    const loginUsingEmailAndPassword = async (email: string, password: string) => {
        loading.value = true
        currentUser.value = await AuthService.loginUsingEmailAndPassword(email, password)
        loading.value = false
    }
    const loginUsingProvider = async (provider: providers, uxOption?: 'popup' | 'redirect') => { 
        loading.value = true
        currentUser.value = await AuthService.loginUsingProvider(provider, uxOption) 
        loading.value = false
    }
    const signUpUsingEmailAndPassword = async (email: string, password: string) => {
        loading.value = true
        await AuthService.signUpUsingEmailAndPassword(email, password)
        loading.value = false
    }

    return { currentUser, loading, loginUsingEmailAndPassword, loginUsingProvider, signUpUsingEmailAndPassword }
}




