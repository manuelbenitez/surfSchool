const initState = {
    editError: null,
    private: {
        price: null,
        level: null,
        description: null,
        places: null,
        min: null,
        max: null,
        times: null
    }

}
const privateLessonsReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PRIVATELESSONS':
            console.log('ANDA A DORMIR')
            return {
                ...state,
                editError: null,
            }
        case 'CREATE_PRIVATELESSONS_ERROR':
            console.log('ARREGLALO')
            return {
                ...state,
                editError: null,
            }
        case 'EDIT_PRICE_P':
            console.log('price')
            return {
                ...state,
                private: { price: action.price },
                editError: null,
            }
        case 'EDIT_PRICE_ERROR_P':
            console.log('priceerror')
            return {
                ...state,
                editError: action.err.message
            }
        case 'EDIT_LEVEL_P':
            console.log('level')
            return {
                ...state,
                private: { level: action.level },
                editError: null,
            }
        case 'EDIT_LEVEL_ERROR_P':
            console.log('levelgerr')
            return {
                ...state,
                editError: action.err.message
            }
        case 'EDIT_DESCRIPTION_P':
            console.log('desc')
            return {
                ...state,
                private: { description: action.description },
                editError: null,
            }
        case 'EDIT_DESCRIPTION_ERROR_P':
            console.log('descerr')
            return {
                ...state,
                editError: action.err.message
            }
        case 'EDIT_PLACES_P':
            console.log('places')
            return {
                ...state,
                private: {places: action.places},
                editError: null,
            }
        case 'EDIT_PLACES_ERROR_P':
            console.log('palcelerr')
            return {
                ...state,
                editError: action.err.message
            }
        case 'EDIT_MAX_P':
            console.log('max')
            return {
                ...state,
                private: {max: action.max},
                editError: null,
            }
        case 'EDIT_MAX_ERROR_P':
            console.log('maxerr')
            return {
                ...state,
                editError: action.err.message
            }
        case 'EDIT_MIN_P':
            console.log('min')
            return {
                ...state,
                private: {min: action.min},
                editError: null,
            }
        case 'EDIT_MIN_ERROR_P':
            console.log('minerr')
            return {
                ...state,
                editError: action.err.message
            }
        case 'EDIT_TIMES_P':
            console.log('times')
            return {
                ...state,
                private: {times: action.times},
                editError: null,
            }
        case 'EDIT_MAX_TIMES_P':
            console.log('timeserr')
            return {
                ...state,
                editError: action.err.message
            }
        default:
            return state
    }
}

export default privateLessonsReducer