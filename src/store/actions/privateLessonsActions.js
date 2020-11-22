export const createPrivateLessons = () => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore()
        const uid = getState().firebase.auth.uid

        return firestore.collection('users_instructors').doc(uid).collection('private_lessons').doc('information').set({
            price: '',
            level: '',
            description: '',
            places: '',
            min: '',
            max: '',
            times: '',
            startDate: '',
            endDate: ''
        }).then(() => dispatch({ type: 'CREATE_PRIVATELESSONS' }))
            .catch(err => dispatch({ type: 'CREATE_PRIVATELESSONS_ERROR', err }))
    }
}

export const editPrice = (price) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore()
        const uid = getState().firebase.auth.uid

        return firestore.collection('users_instructors').doc(uid).collection('private_lessons').doc('information').update({
            price: price,
        }).then(() => dispatch({ type: 'EDIT_PRICE_P', price }))
            .catch(err => dispatch({ type: 'EDIT_PRICE_ERROR_P', err }))
    }
}

export const editLevel = (level) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore()
        const uid = getState().firebase.auth.uid

        return firestore.collection('users_instructors').doc(uid).collection('private_lessons').doc('information').update({
            level: level
        }).then(() => dispatch({ type: 'EDIT_LEVEL_P', level }))
            .catch(err => dispatch({ type: 'EDIT_LEVEL_ERROR_P', err }))
    }
}

export const editDescription = (description) => {
    return (dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore()
        const uid = getState().firebase.auth.uid

        return firestore.collection('users_instructors').doc(uid).collection('private_lessons').doc('information').update({
            description: description
        }).then(() => dispatch({ type: 'EDIT_DESCRIPTION_P', description }))
            .catch(err => dispatch({ type: 'EDIT_DESCRIPTION_ERROR_P', err }))
    }
}

export const editPlaces = (places) => {
    return (dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore()
        const uid = getState().firebase.auth.uid

        return firestore.collection('users_instructors').doc(uid).collection('private_lessons').doc('information').update({
            places: places
        }).then(() => dispatch({ type: 'EDIT_PLACES_P', places }))
            .catch(err => dispatch({ type: 'EDIT_PLACES_ERROR_P', err }))
    }
}

export const editMax = (max) => {
    return (dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore()
        const uid = getState().firebase.auth.uid

        return firestore.collection('users_instructors').doc(uid).collection('private_lessons').doc('information').update({
            max: max
        }).then(() => dispatch({ type: 'EDIT_MAX_P', max }))
            .catch(err => dispatch({ type: 'EDIT_MAX_ERROR_P', err }))
    }
}

export const editMin = (min) => {
    return (dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore()
        const uid = getState().firebase.auth.uid

        return firestore.collection('users_instructors').doc(uid).collection('private_lessons').doc('information').update({
            min: min
        }).then(() => dispatch({ type: 'EDIT_MIN_P', min }))
            .catch(err => dispatch({ type: 'EDIT_MIN_ERROR_P', err }))
    }
}

export const editTimes = (times) => {
    return (dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore()
        const uid = getState().firebase.auth.uid

        return firestore.collection('users_instructors').doc(uid).collection('private_lessons').doc('information').update({
            times: times
        }).then(() => dispatch({ type: 'EDIT_TIMES_P', times }))
            .catch(err => dispatch({ type: 'EDIT_TIMES_ERROR_P', err }))
    }
}

export const editDates = (startDate, endDate) => {
    return (dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore()
        const uid = getState().firebase.auth.uid

        return firestore.collection('users_instructors').doc(uid).collection('private_lessons').doc('information').update({
            startDate: startDate,
            endDate: endDate
        }).then(() => dispatch({ type: 'EDIT_DATES_P', startDate, endDate }))
            .catch(err => dispatch({ type: 'EDIT_DATES_ERROR_P', err }))
    }
}
