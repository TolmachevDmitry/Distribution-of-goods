import React from 'react';
import { connect } from 'react-redux';

import Menu from '../components/menu.js';
import Entities from '../components/entities.js';
import MapOption from '../components/map-option.js';
import Plan from '../components/plan.js';

import { changeMenu, openTocreate, changeParameters, clearTocreate, insertUserData, 
         addUserParameter, addGood, changeDetailedInformatinoList, changeChosenList, 
         changeMapEdited } from '../actions/index.js';


let App = (props) => {

    const {
        todos, tocreate, formap, changeMenu, openTocreate, changeParameters, clearTocreate, insertUserData,
        addUserParameter, addGood, changeDetailedInformatinoList, changeChosenList, changeMapEdited
    } = props;

    return (
        <div>
            <Menu changeMenu={ changeMenu } />
            <Entities todos={ todos } openTocreate={ openTocreate } tocreate={ tocreate.tocreate } 
                clearTocreate={ clearTocreate } changeParameters={ changeParameters } 
                insertUserData={ insertUserData } addUserParameter={ addUserParameter }
                addGood={ addGood } changeDetailedInformatinoList={ changeDetailedInformatinoList } />
            <MapOption todos={ todos } formap={ formap.formap } changeChosenList={ changeChosenList }
                changeMapEdited={ changeMapEdited } />
            <Plan todos={ todos } />
        </div>
    )
}

const mapStateToProps = (store) => {
    return {
        todos: store.todos,
        tocreate: store.tocreate,
        formap: store.formap
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeMenu: (optionName) => dispatch(changeMenu(optionName)),
        insertUserData: (todos, tocreate) => dispatch(insertUserData(todos, tocreate)),
        openTocreate: (optionName) => dispatch(openTocreate(optionName)),
        changeParameters: (tocreate, className, id, value) => dispatch(changeParameters(tocreate, className, id, value)),
        addUserParameter: (tocreate) => dispatch(addUserParameter(tocreate)),
        addGood: (tocreate) => dispatch(addGood(tocreate)),
        clearTocreate: () => dispatch(clearTocreate()),
        changeDetailedInformatinoList: (todos, number) => dispatch(changeDetailedInformatinoList(todos, number)),
        changeChosenList: (formap, listName) => dispatch(changeChosenList(formap, listName)),
        changeMapEdited: (formap) => dispatch(changeMapEdited(formap))
    }
}

App = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default App;
