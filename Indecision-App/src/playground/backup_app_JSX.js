console.log('App is runnning');

const app = {
    title : 'Indecision App',
    subtitle : 'Put your life in the hands of a computer',
    options : []
};

const onFormSubmit= (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option)
    {
        app.options.push(option);
        e.target.elements.option.value = '';
        arrayRendered();
    }
    console.log('Form submitted')
}
const onMakeDecision =() => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  
  const option = app.options[randomNum];
  alert(option);
  }
const appRoot = document.getElementById('app');
const arrayRendered = () =>
{
    const template = (
        <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are some options' : 'No options'}</p>
        <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do...?</button>
        <button onClick={removeAllData}>Remove All</button>       
        <ol>
        {
            app.options.map((option) => <li><p key={option}>{option}</p></li>)
            }
        </ol>
        <form onSubmit= {onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Options</button>
        </form>
        </div>
    );
    ReactDOM.render(template,appRoot);
};


const removeAllData = () => {
    app.options=[];
    arrayRendered();
    console.log('All Data removed');
};

arrayRendered();




