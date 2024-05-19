import React from 'react';

let emptyListLable = (name) => {
    switch (name) {
        case 'Места производства': {
            return 'Нет мест производства';
        }

        case 'Места потребления': {
            return 'Нет мест потребления';
        }

        case 'Товары': {
            return 'Нет товаров';
        }

        default: {
            return '';
        }
    }
}

let getActualList = (optionName, userData) => {
    switch (optionName) {
        case 'Места производства': {
            return userData.providers;
        }

        case 'Места потребления': {
            return userData.consumers;
        }

        case 'Товары': {
            return userData.goods;
        }

        default: {
            return [];
        }
    }
}

const Entities = (props) => {

    const { todos, tocreate, openTocreate, changeParameters, insertUserData, clearTocreate, 
            addUserParameter, addGood, changeDetailedInformatinoList } = props;

    const optionName = todos.menu.activeOption;
    const goalOptionName = ["Места производства", "Места потребления", "Товары"];

    const actualList = getActualList(optionName, todos.userData);

    return goalOptionName.indexOf(optionName) != -1 ?
    (
        <div id='datas' className="option" >

            <form className='create-field' hidden={ !tocreate.isCreating } onChange={ e => 
                    changeParameters(tocreate, e.target.className, e.target.id, e.target.value) }
                onSubmit={ e => {
                    e.preventDefault();

                    switch (e.nativeEvent.submitter.id) {
                        case 'add': {
                            insertUserData(todos, tocreate);
                            clearTocreate();

                            break;
                        };

                        case 'cancel': {
                            clearTocreate();

                            break;
                        }

                        case 'add-good-button': {
                            addGood(tocreate)

                            break;
                        }
                        
                        case 'add-user-parameter-button': {
                            addUserParameter(tocreate)

                            break;
                        }

                        default:
                            console.log('Not registered submitter');
                    }
                } }>

                <div id='default-parameter-list' >
                    <div className='default-parameter' hidden={ optionName != 'Товары' } >
                        <label>Название: </label>
                        <input id='name' className='default-parameter-name' 
                            value={ tocreate.defaultParameters['name'] } ></input>
                    </div>
                    
                    <div className='default-parameter' hidden={ optionName == 'Товары' } >
                        {
                            tocreate.defaultParameters.goods.map((goodForPlace, i) => {
                                return (
                                    <div className='good-for-place' >
                                        <input list='good-now' autocomplete='off' id={ i } className='default-parameter-good' placeholder='Товар' ></input>
                                        <datalist id='good-now' >
                                            {
                                                todos.userData.goods.map((good, j) => {
                                                    return (
                                                        <option value={ good.defaultParameters['name'] }></option>
                                                    )
                                                })
                                            }
                                        </datalist>

                                        <input type='number' id={ i } autocomplete='off' className='default-parameter-good-count' placeholder='Количество' 
                                            value={ goodForPlace['count'] } ></input>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div id='user-paremeters-list'>
                    <p hidden={ !tocreate.userParameters.length } >Настройки по вашему усмотрению:</p>

                    {
                        tocreate.userParameters.map((uParam, i) => {
                            return (
                                <div className='user-parameter' >
                                    <input id={ i } className='user-parameter-key' value={ uParam.key } 
                                        placeholder={ 'Название характеристики ' + (i + 1) } />
                                    <input id={ i } className='user-parameter-value' valye={ uParam.value } 
                                        placeholder={ 'Значение характеристики ' + (i + 1) } />
                                </div>
                            )
                        })
                    }

                    <button id='add-user-parameter-button' className='add-parameter-button' 
                        hidden={ optionName != 'Товары' } >Добавить характеристику</button>
                    <button id='add-good-button' className='add-parameter-button' 
                        hidden={ optionName == 'Товары' } >Добавить товар</button>
                </div>

                <div id='creater-section' >
                    <input type='submit' id='add' value='Добавить' />
                    <input type='submit' id='cancel' value='Отмена' />
                </div>

            </form>

            <button id='create-button' hidden={ tocreate.isCreating }
                onClick={ () => openTocreate(optionName) } >Создать</button>

            <p hidden={ actualList.length != 0 } >{ emptyListLable(optionName) }</p>

            <ol id='data-list' >
                {
                    actualList.map((elem, i) => {
                        return (
                            <li className='entity-exemplar' onClick={ev => console.log(ev)} >

                                <div>
                                    <div className='exemplar-tittle-block' onClick={(ev) => {
                                        changeDetailedInformatinoList(todos, i);
                                    }} >

                                        <p className='exemplar-tittle-text' >
                                            { elem.defaultParameters['name'] }
                                        </p>
                                    </div>

                                    <div className="detailed-information" 
                                    hidden={
                                        todos.dataList.detailedElementNumber.indexOf(i) != -1
                                    }  > 

                                        <div>
                                        {
                                            elem.defaultParameters['goods'].map((g, j) => {
                                                return (
                                                    <div>
                                                        <p>{g.name} - {g.count} шт</p>
                                                    </div>
                                                )
                                            })
                                        }
                                        </div>
                                        
                                        <div>
                                        {
                                            elem.userParameters.map((userParam, j) => {
                                                return (
                                                    <div>
                                                        <p>{ userParam.key } : { userParam.value }</p>
                                                    </div>
                                                )
                                            })
                                        }
                                        </div>

                                    </div>
                                </div>

                            </li>
                        )
                    })
                }
            </ol>
        </div>
    ) 
        : null;
}

export default Entities;