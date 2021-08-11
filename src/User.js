import React, { useState } from 'react'

const User = (props) => {
    const [ state, setState ] = useState(0);
    const data = { name: 'sandeep',
                age: 22
             }

    return (
        <>
            <h2> User name: {props.name} </h2>
            <button onClick={() => props.alert(data)}> Click me! </button>
        </>
    )
}

export default User;



