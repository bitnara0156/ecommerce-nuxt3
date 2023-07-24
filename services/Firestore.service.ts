import { getDoc, doc, DocumentData, DocumentReference, CollectionReference, setDoc, collection, addDoc } from "firebase/firestore"
import { firestore } from "../api/firebase.config"
export default class FirestoreService {
    public static async getDocument(link: string | DocumentReference): Promise<DocumentData> {
        let result: DocumentData
        if(link instanceof DocumentReference) {
            result = (await getDoc(link))
        }
        else { 
            const documentReference = doc(firestore, link)
            result = (await getDoc(documentReference))
        }
        return result
    }
    public static async sendDocument(link: string, data: object): Promise<void> {
        const targetMethod = link.split('/').length % 2 !== 0 
            ? collection(firestore, link)
            : doc(firestore, link)
        targetMethod instanceof CollectionReference
            ? await addDoc(targetMethod, data)
            : await setDoc(targetMethod, data)
        
    }
}