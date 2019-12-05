console.log('app is running');
class Visible extends React.Component {
    constructor (props)
     {
    super(props)
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
        visible : false
    };
    }
    handleToggleVisibility() {
       
        this.setState((curState) => {
            return {
            visible : ! curState.visible
            }
        })
      
    }

    render(){
    return (
        <div>
        <h1>Visibility</h1>        
        <button onClick={this.handleToggleVisibility}>
        {this.state.visible ? 'Hide Details':'Show Details'}
        </button>
        {this.state.visible && (
                 <div>
            <h3>Data is visible</h3>
            </div>
        )}
        </div>
    )}
}

ReactDOM.render(<Visible />,document.getElementById('app'));






