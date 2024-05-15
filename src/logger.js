export const logger = (store) => (next) => (action) => {
    let result;

    console.groupCollapsed("despatching", action.type)
    console.log("prew state", store.getState());
    console.log("action", action);

    result = next(action);

    console.log("next state", store.getState());
    console.groupEnd()

    return result
}
