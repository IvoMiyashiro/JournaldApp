import { types } from "../types/01-types";
import { 
    firebase,
    googleAuthProvider,
} from "../../firebase/01-firebase-config";

export const login = ( uid, displayName ) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName,
        }
    }
}

export const logout = () => {
    return {
        type: types.logout,
    }
}

export const startLogin = ( email, password, setLoginError, setButtonChildren ) => {
    return ( dispatch ) => {
        firebase.auth().signInWithEmailAndPassword( email, password )
            .then( ({ user })  => {
                dispatch( login( user.uid, user.displayName ));
            })
            .catch( err => {
                setLoginError( true );
                setButtonChildren( "let's go" );
            });
    }
}

export const startGoogleLogin = () => {
    return ( dispatch ) => {
        firebase.auth().signInWithPopup( googleAuthProvider )
            .then( ({ user }) => {
                dispatch( login( user.uid, user.displayName ) );
            });
    }
}

export const startSignUp = ( name, email, password, setFormError, setEmailState ) => {
    return ( dispatch ) => {
        firebase.auth().createUserWithEmailAndPassword( email, password )
            .then( async({ user }) => {
                await user.updateProfile({ displayName: name });
                dispatch( login( user.uid, user.displayName ) );
            })
            .catch( error => {
                if ( error.message === 'The email address is already in use by another account.') {
                    setFormError( true );
                }
            });
    }
}

export const startLogout = () => {
    return async( dispatch ) => {
        await firebase.auth().signOut();
        dispatch( logout() );
    }
}