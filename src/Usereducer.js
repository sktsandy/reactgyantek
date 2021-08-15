import React,{ useReducer } from 'react'

// const Usereducer = () => {
//     const [state, setstate] = useState(0);
//     return (
//         <>
//             <h2> {state} </h2>
//             <div className="count_btn">
//                 <button onClick = {() =>{
//                   setstate(state + 1) ; 
//                 }}> Increment </button>
//                 <button onClick={() =>{
//                     setstate(state - 1) ; 
//                 }}> Decrement </button>
//             </div>
//         </>
//     )
// }
const initialState = 0;
const reducer = (state, action) => {
    if(action.type === 'INC'){
        return state + 1;
    }
    if(action.type === 'DEC'){
        if(state >= 1) {
            return state -1;        }
    }
    return state;

}

const Usereducer = () => {
const [state, dispatch] = useReducer(reducer, initialState )
    return (
        <>
            <h2> {state} </h2>
            <div className="count_btn">
                <button onClick = {() =>{
                  dispatch ({ type : 'INC' })
                }}> Increment </button>
                <button onClick={() =>{
                   dispatch ({ type : 'DEC' })  
                }}> Decrement </button>
            </div>
        </>
    )
}

export default Usereducer;
