import React, { useState } from 'react';

export const ItemCartContext = React.createContext();

const ItemCartProvider = (props) => {
    const [quantity, setQuantity] = useState(0);
    const [pId, setPId] = useState();

    const state = {
        quantity,
        setQuantity,
        pId,
        setPId,
    }

    return (
        <ItemCartContext.Provider value={state}>
            {props.children}
        </ItemCartContext.Provider>
    );
}

export default ItemCartProvider;