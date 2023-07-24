import { auth } from "../api/firebase.config"
import { User, signInWithPopup, signInWithRedirect, signInWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider } from "firebase/auth"
export default class AuthService {
    public static async loginUsingEmailAndPassword(email: string, password: string): Promise<User> {
        return (await signInWithEmailAndPassword(auth, email, password)).user
    }
    public static async loginUsingProvider(providerOption: 'google' | 'github' | 'facebook' = 'google', uxOption: 'popup' | 'redirect' = 'popup'): Promise<User> {
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