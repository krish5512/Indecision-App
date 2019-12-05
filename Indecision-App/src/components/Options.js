import React from 'react';
import ReactDOM from 'react-dom';
import Option from './Option';

const Options = (props) => (
        <div>
        <div className="widget-header">
        <h3 className="widget-header__title">Your Options</h3>
        <button className="button button--link" onClick={props.handleDeleteOptions}>Remove All</button>
        </div>
        {
            props.options.length === 0 && <p className="widget__element">Please add option to get started</p>
        }
                 {              
        props.options.map((opt,index) => (
            <Option
             key={opt} 
             optionText={opt}          
             count={index + 1}
             handleDeleteSingleOption = {props.handleDeleteSingleOption}
             />))
        }                            
        </div>
        
    )

export default Options;

// class Options extends React.Component {    
//     render() {
//            return (
//                <div>
//                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                <p>Options Component here:</p>
//                {              
//                this.props.options.map((opt) => <Option key={opt} optionText={opt} />)              
//                }                            
//                </div>
//            )}
// }
