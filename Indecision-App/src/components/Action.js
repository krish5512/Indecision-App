import React from 'react';
import ReactDOM from 'react-dom';

const Action = (props) => (
        <div>
        <button
        className="big-button"
         onClick={props.handlePicks} disabled={!props.hasOptions}>
         What should I do.. ?
         </button>            
        </div>
    )

export default Action;

// class Action extends React.Component {
//       render() {
//         return (                                 Class Based
//             <div>
//             <button onClick={this.props.handlePicks} disabled={!this.props.hasOptions}>
//              What should I do.. ?
//              </button>            
//             </div>
//         )}
// }

