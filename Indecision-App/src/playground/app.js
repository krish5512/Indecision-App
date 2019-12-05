class IndecisionApp extends React.Component {
    constructor (props) {
        super(props);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.addOptionHandle = this.addOptionHandle.bind(this);
        this.handleDeleteSingleOption = this.handleDeleteSingleOption.bind(this);
        this.state = {
            options : []
        }
    }

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
    handleDeleteOption () {
       
        this.setState(() => ({options : [] }) );
        // this.setState(() => {
        //     return {
        //         options : []   // simple method 
        //     };
        // });
       
    }
handleDeleteSingleOption(optiontoRemove) {
    this.setState((prevState) => {
     return {
        options : prevState.options.filter((option) => {
                return optiontoRemove !== option
        })
    }}
        )
}
    handlePick() {
       const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
         alert(option);       

    }
    addOptionHandle (option)
    {
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

            <Action
             hasOptions={this.state.options.length > 0} 
             handlePicks={this.handlePick}/>

            <Options 
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOption}
            handleDeleteSingleOption={this.handleDeleteSingleOption}/>

            <AddOption 
            addOption = {this.addOptionHandle} />  
            </div>
        )}
}
const Header = (props) => {
    return (
        <div>
        <h1>{props.title}</h1>            
        {
          props.subtitle && <h2>{props.subtitle}</h2> 
        }
        </div>
    )
}

Header.defaultProps = {
    title : 'Indecision'
}

// class Header extends React.Component{
//     render() {
//         return (
//         <div>
//         <h1>{this.props.title}</h1>            
//         <h2>{this.props.subtitle}</h2>
//         </div>
//     )}
// }

const Action = (props) => {
    return (
        <div>
        <button onClick={props.handlePicks} disabled={!props.hasOptions}>
         What should I do.. ?
         </button>            
        </div>
    )
}

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

const Options = (props) => {
    return (
        <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {
            props.options.length === 0 && <p>Please add option to get started</p>
        }
                 {              
        props.options.map((opt) => (
            <Option
             key={opt} 
             optionText={opt}          
             handleDeleteSingleOption = {props.handleDeleteSingleOption}
             />))
        }                            
        </div>
    )
}

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


const Option = (props) => 
{
    return (
        <div>
        <li>
        {props.optionText}
        <button onClick={(e) => {
            props.handleDeleteSingleOption(props.optionText)
        }}>
        Remove
        </button>
        </li>

        </div>  
    )

}

// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//             <li>{this.props.optionText}</li>
//             </div>  
//         )}
// }

class AddOption extends React.Component{    
    constructor(props){
        super(props);
        this.addOption = this.addOption.bind(this);
        this.state = {
            error : undefined
        }
    }
    addOption(e)
    {   e.preventDefault();
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
                this.state.error && <p>{this.state.error}</p>
            }
            <form onSubmit={this.addOption}>
            <input type ="text" name="options">
            </input>
            <button>Add Options</button>
            </form>       
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
ReactDOM.render (<IndecisionApp />,document.getElementById('app'));


