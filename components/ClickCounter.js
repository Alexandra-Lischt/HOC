// import React, { useState } from 'react'
import UpdatedComponent from './WithCounter'

 function ClickCounter(props) {
    // const [state, setState] = useState( {count: 0})

    //  const incrementCount = () => {
    //     setState( prevState => {
    //         return { count: prevState.count + 1 }
    //     })
    // }
    // console.log('click', state )
    const { count, incrementCount } = props
    
    return (
        <>
            <button onClick={incrementCount}>Click {count}</button>
        </>
    )
}

export default  UpdatedComponent(ClickCounter)