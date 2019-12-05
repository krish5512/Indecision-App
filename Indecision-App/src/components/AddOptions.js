import React from 'react';
import ReactDOM from 'react-dom';



export default class AddOption extends React.Component{    
    state = {
        error : undefined
    };
    // constructor(props){
    //     super(props);
    //     this.addOption = this.addOption.bind(this);
    //     this.state = {
    //         error : undefined
    //     }
    // }
    addOption = (e) => {  
         e.preventDefault();
        const option = e.target.elements.options.value.trim();
        const error = this.props.addOption(option);
        this.setState(() => ({error : error }));
        
        if(!error)
        {
            e.target.elements.options.value = '';
        }
        // this.setState(() => {
        //     return {              
        //     error : error  //error: error  -- Both are same method to show
        //     };
        // });
         }
    render() {
        return (
            <div>
            {
                this.state.error && <p className="add-option-error">{this.state.error}</p>
            }
            <form className= "add-option" onSubmit={this.addOption}>
            <input className="add-option__input" type ="text" name="options">
            </input>
            <button className="button ">Add Options</button>
            </form>       
            </div>
        )}

}