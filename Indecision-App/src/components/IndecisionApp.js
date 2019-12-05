import React from 'react';
import AddOption from './AddOptions';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options : [],
        selectedOption : undefined
    };
    // constructor (props) {
    //     super(props);
    //     this.handleDeleteOption = this.handleDeleteOption.bind(this);
    //     this.handlePick = this.handlePick.bind(this);
    //     this.addOptionHandle = this.addOptionHandle.bind(this);
    //     this.handleDeleteSingleOption = this.handleDeleteSingleOption.bind(this);

    // }

    componentDidMount() {
        try {
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
        if(options){
        this.setState(() => ({options}));        
        }
    }
    catch(e)
    {
        ///Do nothing at all
    }
    }
    componentDidUpdate(prevProps,prevState)
    {
        if(prevState.options.length !== this.state.options.length)
        {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        console.log('saving data');
        }

    }
    componentWillUnmount() {
        console.log('Component Will Unmount');
    }
    handleDeleteOption = () => {       
        this.setState(() => ({options : [] }) );


        // this.setState(() => {
        //     return {
        //         options : []   // simple method 
        //     };
        // });
       
    }
    handleSelectedOption = () => {
        this.setState(()=>({  selectedOption : undefined}));
    }
    handleDeleteSingleOption = (optiontoRemove) => {
    this.setState((prevState) => {
     return {
        options : prevState.options.filter((option) => {
                return optiontoRemove !== option
        })
    }}
        )
}
    handlePick = () => {
       const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({ selectedOption : option}));   

    }
    addOptionHandle = (option) => {
        console.log(option);
        if(!option) {
            
            return 'Enter valid value to add item';
        }
        else if(this.state.options.indexOf(option) > -1)
        {
            return 'this item already exists';
            
        }    
        else {    
        
        this.setState((prevState) => ({ options : prevState.options.concat(option)}));

        // this.setState((prevState) => {
        //     return {
        //         options : prevState.options.concat(option)
        //     }

        // });
    }
  
    }
    render() {
        const subtitle = "Put Your Lifes in Hands of Computer";        
        return (
            <div>
            <Header 
            subtitle={subtitle}/>
                <div className="container">
            <Action
             hasOptions={this.state.options.length > 0} 
             handlePicks={this.handlePick}/>
            <div className="widget">
            <Options 
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOption}
            handleDeleteSingleOption={this.handleDeleteSingleOption}/>
            <AddOption 
            addOption = {this.addOptionHandle} />  
            </div>
            <OptionModal 
            selectedOption = {this.state.selectedOption}
            handleSelectedOption = {this.handleSelectedOption}/>
            </div>
            </div>
        )}
}



// ------ Stateless Functional Component -----
// const User = (props) => {

//     return (
//         <div>
//         <p>Name : {props.name}</p>
//         <p>Age : {props.age}</p>
//         </div>
//     );
// };