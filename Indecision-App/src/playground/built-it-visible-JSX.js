let visible = false;
const appRoot = document.getElementById('app');
const showDetails = () => {
   visible = !visible;
   renderPage();
    console.log('Button is working'); 
          
}

const renderPage = () => {
const template = (
    <div> 
    <h1>Visibility Toggle</h1>
    <button onClick={showDetails}>
    {visible ? 'Hide Details' : 'Show Details'}
    </button>
    {visible && (
        <div>
        <p>Data is now visible</p>
        </div>)}
    </div>
 )

ReactDOM.render(template,appRoot);
};

renderPage();