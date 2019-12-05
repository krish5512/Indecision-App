import React from 'react';
import ReactDOM from 'react-dom';

const Option = (props) =>  (
        <div className="option">
        <p className="option__text">{props.count}. {props.optionText}</p>
        <button className="button button--link"
        onClick={(e) => {
            props.handleDeleteSingleOption(props.optionText)
        }}>
        Remove
        </button>
       </div>  
);



// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//             <li>{this.props.optionText}</li>
//             </div>  
//         )}
// }


export default Option;