"use strict"

const initialState = {
    formap : { edited : false, chosenList: '', chosenProviderName : '', chosenCastomerName : '' }
};

export const formapReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'CHANGE_EDITED': {
            return {
                ...state,
                formap: action.txt
            }
        }

        case 'CHANGE_CHOSEN_LIST': {
            return {
                ...state,
                formap: action.txt
            }
        }

        default:
            return state;

    }
}