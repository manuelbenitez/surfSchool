export const editFullName = (fullName) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore()
        const uid = getState().firebase.auth.uid

        firestore.collection('users_instructors').doc(uid).update({
            fullName: fullName
        }).then(() => dispatch({ type: 'EDIT_FULLNAME', fullName }))
            .catch(err => dispatch({ type: 'EDIT_FULLNAME_ERROR', err }))
    }
}

export const editLanguages = (languages) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore()
        const uid = getState().firebase.auth.uid

        firestore.collection('users_instructors').doc(uid).update({
            languages: languages
        }).then(() => dispatch({ type: 'EDIT_LANGUAGES', languages }))
            .catch(err => dispatch({ type: 'EDIT_LANGUAGES_ERROR', err }))
    }
}

export const editDescription = (description) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore()
        const uid = getState().firebase.auth.uid

        firestore.collection('users_instructors').doc(uid).update({
            description: description
        }).then(() => dispatch({ type: 'EDIT_DESCRIPTION', description }))
            .catch(err => dispatch({ type: 'EDIT_DESCRIPTION_ERROR', err }))
    }
}

export const editCualifications = (cualifications) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore()
        const uid = getState().firebase.auth.uid

        firestore.collection('users_instructors').doc(uid).update({
            cualifications: cualifications
        }).then(() => dispatch({ type: 'EDIT_CUALIFICATIONS', cualifications }))
            .catch(err => dispatch({ type: 'EDIT_CUALIFICATIONS_ERROR', err }))
    }
}

export const editDateOfBirth = (dateOfBirth) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore()
        const uid = getState().firebase.auth.uid

        firestore.collection('users_instructors').doc(uid).update({
            dateOfBirth: dateOfBirth
        }).then(() => dispatch({ type: 'EDIT_DATEOFBIRTH', dateOfBirth }))
            .catch(err => dispatch({ type: 'EDIT_DATEOFBIRTH_ERROR', err }))
    }
}