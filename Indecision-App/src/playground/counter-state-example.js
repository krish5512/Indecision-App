class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.resetAll = this.resetAll.bind(this);
        this.state = {
            count : 0
        }
    }
    componentDidMount()
    {
            const count = parseInt(localStorage.getItem('count'),10);
            this.setState(() => ({count}));
    }
    componentDidUpdate(prevState,prevProps)
    {
            localStorage.setItem('count',this.state.count);
    }
    addOne()
    {
        this.setState(() => {
            return {
                count : this.state.count + 1
            }
        })
    }
    minusOne()
    {
        this.setState(() => {
            return {
                count : this.state.count - 1
            }
        })
    }
    resetAll()
    {
        this.setState(() => {
            return {
                count : 0
            }
        })
    }
    render() {
        return(
            <div>
            <h1>Count : {this.state.count}</h1>               
            <button onClick={this.addOne}>+1</button>
            <button onClick={this.minusOne}>-1</button>
            <button onClick={this.resetAll}>Reset</button>
            </div>
        )}
}
// Counter.defaultProps = {    //default count value if now limit is set
//     count : 0
// }
ReactDOM.render(<Counter />,document.getElementById('app'));