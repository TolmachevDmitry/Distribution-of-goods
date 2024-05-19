"use strict"

import React from 'react';


const Menu = (props) => {

    const { changeMenu } = props;

    const names = ["Места производства", "Места потребления", "Товары", "Карта", "План перевозок"];

    return (
        <div id='main-menu' >
            <nav id='menu-list' >
                <ul>
                    {
                        names.map((name, i) => {
                            return (
                                <li>
                                    <a href="#" onClick={ ev => changeMenu(name) }>
                                        <p className='option-name' >{ name }</p>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
		    </nav>
        </div>
    )
}

export default Menu;