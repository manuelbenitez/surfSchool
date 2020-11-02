export const createGroupLessons = () => {
    return(dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore()
        const uid = getState().firebase.auth.uid

        return firestore.collection('users_instructors').doc(uid).collection('group_lessons').doc('information').set({
            price: '',
            level: '',
            description: '',
            places: '',
            min: '',
            max: '',
            times: '',
        }).then(() => dispatch({type: 'CREATE_GROUPLESSONS'}))
        .catch(err => dispatch({type: 'CREATE_GROUPLESSONS_ERROR', err}))
    }
}

export const editPrice = (price) => {
    return(dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore()
        const uid = getState().firebase.auth.uid

        return firestore.collection('users_instructors').doc(uid).collection('group_lessons').doc('information').update({
            price: price,
        }).then(() => dispatch({ type: 'EDIT_PRICE_G', price }))
            .catch(err => dispatch({ type: 'EDIT_PRICE_ERROR_G', err }))
    }
}

export const editLevel = (level) => {
    return(dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore()
        const uid = getState().firebase.auth.uid

        return firestore.collection('users_instructors').doc(uid).collection('group_lessons').doc('information').update({
            level: level
        }).then(() => dispatch({ type: 'EDIT_LEVEL_G', level }))
            .catch(err => dispatch({ type: 'EDIT_LEVEL_ERROR_G', err }))
    }
}

export const editDescription = (description) => {
    return(dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore()
        const uid = getState().firebase.auth.uid

        return firestore.collection('users_instructors').doc(uid).collection('group_lessons').doc('information').update({
            description: description
        }).then(() => dispatch({ type: 'EDIT_DESCRIPTION_G', description }))
            .catch(err => dispatch({ type: 'EDIT_DESCRIPTION_ERROR_G', err }))
    }
}

export const editPlaces = (places) => {
    return(dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore()
        const uid = getState().firebase.auth.uid

        return firestore.collection('users_instructors').doc(uid).collection('group_lessons').doc('information').update({
            places: places
        }).then(() => dispatch({ type: 'EDIT_PLACES_G', places }))
            .catch(err => dispatch({ type: 'EDIT_PLACES_ERROR_G', err }))
    }
}

export const editMax = (max) => {
    return(dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore()
        const uid = getState().firebase.auth.uid

        return firestore.collection('users_instructors').doc(uid).collection('group_lessons').doc('information').update({
            max: max
        }).then(() => dispatch({ type: 'EDIT_MAX_G', max }))
            .catch(err => dispatch({ type: 'EDIT_MAX_ERROR_G', err }))
    }
}

export const editMin = (min) => {
    return(dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore()
        const uid = getState().firebase.auth.uid

        return firestore.collection('users_instructors').doc(uid).collection('group_lessons').doc('information').update({
            min: min
        }).then(() => dispatch({ type: 'EDIT_MIN_G', min }))
            .catch(err => dispatch({ type: 'EDIT_MIN_ERROR_G', err }))
    }
}

export const editTimes = (times) => {
    return(dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore()
        const uid = getState().firebase.auth.uid

        return firestore.collection('users_instructors').doc(uid).collection('group_lessons').doc('information').update({
            times: times
        }).then(() => dispatch({ type: 'EDIT_TIMES_G', times }))
            .catch(err => dispatch({ type: 'EDIT_TIMES_ERROR_G', err }))
    }
}
