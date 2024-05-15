import React from 'react';

const Plan = (props) => {

    const { todos } = props;

    return todos.menu.activeOption == 'План перевозок' ?
    (
        <div id='plan' className='option' >
            <div id='rates-table' >

            </div>

            <button id='build-disttransportation-plan' >Построить план перевозок</button>

            <div id='solution-table' >

            </div>
        </div>
    ) : null;
}

export default Plan;