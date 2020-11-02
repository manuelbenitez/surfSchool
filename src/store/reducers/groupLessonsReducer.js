const initState = {
    editError: null,
    group: {
        price: null,
        level: null,
        description: null,
        places: null,
        min: null,
        max: null,
        times: null
    }

}
const groupLessonsReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_GROUPLESSONS':
            console.log('ANDA A DORMIR')
            return{
                ...state,
                editError: null,
            }
        case 'CREATE_GROUPLESSONS_ERROR':
            console.log('ARREGLALO')
            return{
                ...state,
                editError: null,
            }
        case 'EDIT_PRICE_G':
            console.log('price')
            return {
                ...state,
                group: {price: action.price},
                editError: null,
            }
        case 'EDIT_PRICE_ERROR_G':
            console.log('priceerror')
            return {
                ...state,
                editError: action.err.message
            }
        case 'EDIT_LEVEL_G':
            console.log('level')
            return {
                ...state,
                level: action.level,
                editError: null,
            }
        case 'EDIT_LEVEL_ERROR_G':
            console.log('levelgerr')
            return {
                ...state,
                editError: action.err.message
            }
        case 'EDIT_DESCRIPTION_G':
            console.log('desc')
            return {
                ...state,
                description: action.description,
                editError: null,
            }
        case 'EDIT_DESCRIPTION_ERROR_G':
            console.log('descerr')
            return {
                ...state,
                editError: action.err.message
            }
        case 'EDIT_PLACES_G':
            console.log('places')
            return {
                ...state,
                places: action.places,
                editError: null,
            }
        case 'EDIT_PLACES_ERROR_G':
            console.log('palcelerr')
            return {
                ...state,
                editError: action.err.message
            }
        case 'EDIT_MAX_G':
            console.log('max')
            return {
                ...state,
                max: action.max,
                editError: null,
            }
        case 'EDIT_MAX_ERROR_G':
            console.log('maxerr')
            return {
                ...state,
                editError: action.err.message
            }
        case 'EDIT_MIN_G':
            console.log('min')
            return {
                ...state,
                min: action.min,
                editError: null,
            }
        case 'EDIT_MIN_ERROR_G':
            console.log('minerr')
            return {
                ...state,
                editError: action.err.message
            }
        case 'EDIT_TIMES_G':
            console.log('times')
            return {
                ...state,
                times: action.times,
                editError: null,
            }
        case 'EDIT_MAX_TIMES_G':
            console.log('timeserr')
            return {
                ...state,
                editError: action.err.message
            }
        default:
            return state
    }
}

export default groupLessonsReducer