import { auth } from "../api/firebase.config"
import { providers } from "../types/providers"
import { User, createUserWithEmailAndPassword, signInWithPopup, signInWithRedirect, signInWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider, UserCredential } from "firebase/auth"
export default class AuthService {
    public static async loginUsingEmailAndPassword(email: string, password: string): Promise<User> {
        return (await signInWithEmailAndPassword(auth, email, password)).user
    }
    public static async signUpUsingEmailAndPassword(email: string, password: string): Promise<UserCredential> {
        return await createUserWithEmailAndPassword(auth, email, password)
    }
    public static async loginUsingProvider(providerOption: providers = 'google', uxOption: 'popup' | 'redirect' = 'popup'): Promise<User> {
        const providers = {
            google: new GoogleAuthProvider(),
            github: new GithubAuthProvider(),
            facebook: new FacebookAuthProvider()
        }
        const provider = providers[providerOption]
        if(uxOption === 'popup')
            return (await signInWithPopup(auth, provider)).user
        else return (await signInWithRedirect(auth, provider))
    }

}