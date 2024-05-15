import React from 'react';

const Providers = (props) => {

    const { menu, providers } = props;

    return (
        <div className="option" hidden={ menu.activeOption != "Места производства" }>
            <p hidden={ providers.length != 0 } >Нет поставщиков</p>
        </div>
    )
}

export default Providers;