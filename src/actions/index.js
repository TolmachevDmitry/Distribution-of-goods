"use strict"

export const changeMenu = ( optionName ) => {

    const txt = { activeOption: optionName }
 
    return {
        type: 'CHANGE_MENU',
        txt
    }
}

export const openTocreate = (optionName) => {

    let goodsArray = [];

    if (optionName != 'Товары') {
        goodsArray = [{ name: '', count: 0 }];
    }

    const txt = { isCreating: true, defaultParameters: {name: '', goods: goodsArray}, userParameters: [] };

    return {
        type: 'OPEN_TOCREATE',
        txt
    }
}

export const changeParameters = ( tocreate, className, id, value ) => {

    let { defaultParameters, userParameters } = tocreate;

    if ( className == 'default-parameter-name' && id.length ) {
        defaultParameters['name'] = value;
    }

    if ( className == 'default-parameter-good' && id.length ) {
        defaultParameters['goods'][id]['name'] = value;
    }

    if ( className == 'default-parameter-good-count' && id.length ) {
        defaultParameters['goods'][id]['count'] = value >= 0 ? value : 0;
    }

    if ( className == 'user-parameter-key' && id.length ) {
        userParameters[id]['key'] = value;
    }

    if ( className == 'user-parameter-value' && id.length ) {
        userParameters[id]['value'] = value;
    }

    const txt = { isCreating: tocreate.isCreating, defaultParameters, userParameters  };

    return {
        type: 'CHANGE_PARAMETERS',
        txt
    }
}

export const addGood = ( tocreate ) => {

    let { isCreating, defaultParameters, userParameters } = tocreate;

    defaultParameters['goods'].push({ name: '', count: 0 });

    const txt = { isCreating, defaultParameters, userParameters };

    return {
        type: 'ADD_GOOD',
        txt
    }
}

export const addUserParameter = ( tocreate ) => {

    let { isCreating, defaultParameters, userParameters } = tocreate;
    userParameters.push({ key: '', value: '' });
    
    const txt = { isCreating, defaultParameters, userParameters };

    return {
        type: 'ADD_USER_PARAMETER',
        txt
    }
}

let createDataObject = (defaultParameters, userParameters) => {
    return { defaultParameters, userParameters }
}

export const insertUserData = ( todos, tocreate ) => {

    let { providers, consumers, goods } = todos.userData;

    if (todos.menu.activeOption == 'Товары') {
        goods.push(createDataObject(tocreate.defaultParameters, tocreate.userParameters));
    }

    if (todos.menu.activeOption == 'Места производства') {
        const defPar = { name: 'Место производства' + (providers.length + 1), 
                         goods: tocreate.defaultParameters.goods };

        providers.push(createDataObject(defPar, tocreate.userParameters));
    }

    console.log(providers);

    if (todos.menu.activeOption == 'Места потребления') {
        const defPar = { name: 'Место потребления ' + (providers.length + 1), 
                         goods: tocreate.defaultParameters.goods };

        consumers.push(createDataObject(defPar, tocreate.userParameters));
    }

    const txt = { providers, consumers, goods };

    return {
        type: 'INSERT_USER_DATA',
        txt
    }
}

export const clearTocreate = () => {
    return {
        type: 'CLEAR_TOCREATE'
    }
}

export const clearTodo = () => {
    return {
        type: 'CLEAR_TODO'
    }
}

export const changeDetailedInformatinoList = (todos, number) => {
    
    let elNumber = todos.dataList.detailedElementNumber;

    let index = todos.dataList.detailedElementNumber.indexOf(number)

    if (index == -1) {
        elNumber.push(number);
    } else {
        elNumber.splice(index, 1);
    }

    const txt = { detailedElementNumber: elNumber };

    return {
        type: 'CHANGE_DETAILED_INFORMATION_LIST',
        txt
    }    
}

export const changeChosenList = (formap, listName) => {

    const { edited, chosenProviderName, chosenCastomerName } = formap;

    let { chosenList } = formap;

    if (chosenList == listName) {
        chosenList = '';
    } else {
        chosenList = listName;
    }

    const txt = { edited, chosenList, chosenProviderName, chosenCastomerName };

    return {
        type: 'CHANGE_CHOSEN_LIST',
        txt
    }
}

export const changeMapEdited = (formap) => {
    
    const { chosenList, chosenProviderName, chosenCastomerName, markers } = formap;

    let { edited } = formap;
    edited = !edited;

    const txt = { edited, chosenList, chosenProviderName, chosenCastomerName, markers };

    return {
        type: 'CHANGE_MAP_EDITED',
        txt
    }
}