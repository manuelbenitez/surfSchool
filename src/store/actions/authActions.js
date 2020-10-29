import { getFirebase } from "react-redux-firebase"

export const signIn = (email, password) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => dispatch({ type: 'LOGIN_SUCCESS' }))
            .catch((err) => {
                dispatch({ type: 'LOGIN_ERROR', err })
            })
    }
}

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()

        firebase.auth().signOut().then(() => dispatch({ type: 'SIGN_OUT' }))
    }
}

export const signUp = (fullName, email, password) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()
        const firestore = getFirebase().firestore()

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((response) => {
                return firestore.collection('users_instructors').doc(response.user.uid).set({
                    fullName: fullName,
                    languages: '',
                    cualifications: '',
                    dateOfBirth: '',
                    description: ''
                })
            }).then(() => dispatch({ type: 'SIGN_UP' }))
            .catch(err => {
                dispatch({ type: 'SIGN_UP_ERROR', err })
            })
    }
}

// export const createGroupLessonsDb = (userUid) => {
//     return(dispatch, getState, { getFirebase }) => {
//         const firestore = getFirebase().firestore()

//         firestore.collection(`users_instructors/${userUid}/group_lessons/information`).set({
//             price: '',
//             level: '',
//             description: '',
//             max: '',
//             min: '',
//             places:'',
//             times: '',
//             dates: '',
//         }).then(() => dispatch({type: 'CREATE_GROUP_LESSONS_DB'}))
//         .catch(err => dispatch({type: 'CREATE_GROUP_LESSONS_DB_ERROR', err}))
// }
// }

// export const createPrivateLessonsDb = (userUid) => {
//     return(dispatch, getState, { getFirebase }) => {
//         const firestore = getFirebase().firestore()

//         firestore.collection(`users_instructors/${userUid}/private_lessons/information`).set({
//             price: '',
//             level: '',
//             description: '',
//             max: '',
//             min: '',
//             places:'',
//             times: '',
//             dates: '',
//         }).then(() => dispatch({type: 'CREATE_PRIVATE_LESSONS_DB'}))
//         .catch(err => dispatch({type: 'CREATE_PRIVATE_LESSONS_DB_ERROR', err}))
// }
// }



