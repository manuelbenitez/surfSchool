const initState = {
    editError: null,
    cualifications: null,
    languages: null,
    group: {},
    private: {},

}
const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case 'EDIT_FULLNAME':
            console.log('fn')
            return {
                ...state,
                editError: null,
            }
        case 'EDIT_FULLNAME_ERROR':
            console.log('fnerror')
            return {
                ...state,
                editError: action.err.message
            }
        case 'EDIT_LANGUAGES':
            console.log('lang')
            return {
                ...state,
                languages: action.languages,
                editError: null,
            }
        case 'EDIT_LANGUAGES_ERROR':
            console.log('langerr')
            return {
                ...state,
                editError: action.err.message
            }
        case 'EDIT_DESCRIPTION':
            console.log('desc')
            return {
                ...state,
                editError: null,
            }
        case 'EDIT_DESCRIPTION_ERROR':
            console.log('descerr')
            return {
                ...state,
                editError: action.err.message
            }
        case 'EDIT_CUALIFICATIONS':
            console.log('cual')
            return {
                ...state,
                editError: null,
                cualifications: action.cualifications,
            }
        case 'EDIT_CUALIFICATIONS_ERROR':
            console.log('cualerr')
            return {
                ...state,
                editError: action.err.message
            }
        case 'EDIT_DATEOFBIRTH':
            console.log('dob')
            return {
                ...state,
                editError: null,
            }
        case 'EDIT_DATEOFBIRTH_ERROR':
            console.log('doberr')
            return {
                ...state,
                editError: action.err.message
            }
        default:
            return state
    }
}

export default profileReducer