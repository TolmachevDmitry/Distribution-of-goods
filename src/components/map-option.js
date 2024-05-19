"use strict"

import React from 'react';

import L from 'leaflet';

import '../styles/map-option-style.css';

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';

const MapOption = (props) => {
    
    const { todos, formap, changeChosenList, changeMapEdited } = props;

    const listName1 = 'Пункты поставок';
    const listName2 = 'Потребители';

    let icon = new Icon({
        // iconUrl     :   'https://unpkg.com/leaflet@1.5.0/dist/images/marker-icon.png',
        iconUrl     :   '/farm.png',
        iconSize    :   [24, 24],
        iconAnchor  :   [12, 24]
    });

    return todos.menu.activeOption == 'Карта' ? 
    (
        <div id='map-option' className='option' >

            <div id='list-section' >
                <div id='map-provider-list' class='map-object-list' onClick={ev => {
                    changeChosenList(formap, 'Пункты поставок');
                }} >

                    <div className='map-object-tittle-1' >
                        <p className='map-object-tittle-2' >{ listName1 }</p>
                    </div>
                    <div class='dropdown-block' style={{ display: formap.chosenList == listName1 ? 'block' : 'none' }} >
                        <ul>
                            {
                                todos.userData.goods.map((provider, i) => {
                                    return (
                                        <li>{ provider.defaultParameters['name'] }</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>

                <div class='map-object-list' onClick={ev => {
                    changeChosenList(formap, 'Потребители');
                }} >

                    <div className='map-object-tittle-1' >
                        <p className='map-object-tittle-2' >{ listName2 }</p>
                    </div>
                    <div class='dropdown-block' style={{ display: formap.chosenList == listName2 ? 'block' : 'none' }} >
                        <ul>
                            {
                               todos.userData.consumers.map((consumer, i) => {
                                    return (
                                        <li>{ consumer.defaultParameters['name'] }</li>
                                    )
                                }) 
                            }
                        </ul>
                    </div>
                </div>
            </div>

            <div id='map-zone' >
                <MapContainer zoom={10} center={[ 51.40, 39.12 ]} >
                    <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    <Marker position={[ 51.40, 39.12 ]} icon={ icon } >
                        <Popup>...</Popup>
                    </Marker>
                </MapContainer>

                <div id='change-mod-editing' >
                    <label>Редактировать местположение объектов</label>
                    <input type='checkbox' onClick={ev => changeMapEdited(formap)} />
                </div>
            </div>

        </div>
    ) : null;
}

export default MapOption;