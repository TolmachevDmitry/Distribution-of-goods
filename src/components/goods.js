import React from 'react';

const Goods = (props) => {

    const { todos, tocreate, openTocreate, changeParameters, insertUserData, clearTocreate, 
        addUserParameter, changeDetailedInformatinoList } = props;

    return (
        <div id='datas' className="option" hidden={ todos.menu.activeOption != "Товары" }>

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
                        
                        case 'add-parameter-button': {
                            addUserParameter(tocreate)

                            break;
                        }

                        default:
                            console.log('Not registered submitter');
                    }
                } }>

                <div id='default-parameter-list' >
                    <div className='default-parameter' >
                        <label>Название: </label>
                        <input id='name' className='default-parameter-value' 
                            value={ tocreate.defaultParameters['name'] } ></input>
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

                    <button id='add-parameter-button' >Добавить характеристику</button>
                </div>

                <div id='creater-section' >
                    <input type='submit' id='add' value='Добавить' />
                    <input type='submit' id='cancel' value='Отмена' />
                </div>

            </form>

            <button id='create-button' hidden={ tocreate.isCreating }
                onClick={ () => openTocreate() } >Создать</button>

            <p hidden={ todos.userData.goods.length != 0 } >Нет товаров</p>

            <ol id='data-list' >
                {
                    todos.userData.goods.map((good, i) => {
                        return (
                            <li className='entity-exemplar' onClick={ev => console.log(ev)} >

                                <div>
                                    <div className='exemplar-tittle-block' onClick={(ev) => {
                                        changeDetailedInformatinoList(todos, i);
                                    }} >

                                        <p className='exemplar-tittle-text' >
                                            { good.defaultParameters['name'] }
                                        </p>
                                    </div>

                                    <div className="detailed-information" 
                                    hidden={
                                        todos.dataList.detailedElementNumber.indexOf(i) != -1
                                    }  > 
                                        
                                        {
                                            good.userParameters.map((userParam, j) => {
                                                return (
                                                    <div>
                                                        <p>{ userParam.key } : { userParam.value }</p>
                                                    </div>
                                                )
                                            })
                                        }

                                    </div>
                                </div>
    
                            </li>
                        )
                    })
                }
            </ol>
        </div>
    )
}

export default Goods;