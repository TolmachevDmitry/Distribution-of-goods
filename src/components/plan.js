import React from 'react';

import '../styles/plan-option-style.css';

const Plan = (props) => {

    const { todos } = props;

    return todos.menu.activeOption == 'План перевозок' ?
    (
        <div id='plan' className='option' >
            <div id='rates-table' >
                <p></p>

            </div>

            <button id='build-disttransportation-plan' >Построить план перевозок</button>

            <div id='solution-table' >
                
            </div>
        </div>
    ) : null;
}

export default Plan;