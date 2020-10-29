export const editGeneralInfo = (userInfo) => {
    return(dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore()
        const uid = getState().firebase.auth.uid
        firestore.collection('users_instructors').doc(uid).update({
            fullName: userInfo.fullName,
            languages: userInfo.languages,
            description: userInfo.description,
            cualifications: userInfo.cualifications,
            dateOfBirth: userInfo.dateOfBirth,
        }).then(() => dispatch({type: 'EDIT_GENERALINFO'}))
        .catch(err => dispatch({type: 'EDIT_GENERALINFOERROR', err}))
    }
}
