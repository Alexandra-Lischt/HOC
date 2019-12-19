// import React, { useState } from 'react'
import UpdatedComponent from './WithCounter'

 function HoverCounter(props) {
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
            <h2 onMouseOver={incrementCount}>Click {count}</h2>
        </>
    )
}

export default  UpdatedComponent(HoverCounter)