import React, { useState } from 'react'

const UpdatedComponent = OriginalComponent => {

    function NewComponent() {
        const [state, setState] = useState( {count: 0})
        const incrementCount = () => {
            setState( prevState => {
                return { count: prevState.count + 1 }
            })
        }

        console.log('click', state )
        const { count } = state

        return (
            <OriginalComponent  count={count} incrementCount={incrementCount}/>
        )
    }
    return NewComponent;
}

export default UpdatedComponent;


