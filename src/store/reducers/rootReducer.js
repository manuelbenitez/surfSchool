import authReducer from './authReducer'
import profileReducer from './profileReducer'
import groupLessonsReducer from './groupLessonsReducer'
import privateLessonsReducer from './privateLessonsReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    group: groupLessonsReducer,
    private: privateLessonsReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,

})

export default rootReducer