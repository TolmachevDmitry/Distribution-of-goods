"use strict"

const initialState = {
    menu        : { activeOption: '' },
    userData    : { providers : [], consumers: [], goods : [] },            
    taskSolve   : { currentPlan : [], plans : [] },
    dataList    : { detailedElementNumber : [] }
};

export const todosReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'CHANGE_MENU': {
            return {
                ...state,
                menu: action.txt
            }
        }

        case 'INSERT_USER_DATA': {
            return {
                ...state,
                userData: action.txt
            }
        }

        case 'DELETE_USER_DATA': {
            return {
                ...state,
                userData: action.txt
            }
        }

        case 'CHANGE_DETAILED_INFORMATION_LIST' : {
            return {
                ...state,
                dataList: action.txt
            }
        }

        default:
            return state;

    }
}
