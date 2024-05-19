"use strict"

const initialState = {
    tocreate : { isCreating : false, defaultParameters : {name: '', goods: []}, userParameters : [] }
};

export const tocreateReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'OPEN_TOCREATE': {
            return {
                ...state,
                tocreate: action.txt
            }
        }

        case 'CHANGE_PARAMETERS': {
            return {
                ...state,
                tocreate: action.txt
            }
        }

        case 'ADD_USER_PARAMETER': {
            return {
                ...state,
                tocreateReducer: action.txt
            }
        }

        case 'ADD_GOOD': {
            return {
                ...state,
                tocreateReducer: action.txt
            }
        }

        case 'CLEAR_TOCREATE': {
            return {
                ...state,
                tocreate: { isCreating: false, defaultParameters: {name: '', goods: []}, userParameters: [] }
            }
        }

        default:
            return state;  

    }
}