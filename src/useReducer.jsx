import React, { useReducer, useState } from 'react'

function UseReducer(reducer, standartState) {
    const [state, setState] = useState(standartState)

    return [state, (action) => {
        setState(reducer(state, action));
    }]
}

export default UseReducer