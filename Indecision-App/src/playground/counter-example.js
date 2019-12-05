let count = 0;
const addOne=() => {
    count++;
    renderCounterApp();
    console.log('addOne',count);
};
const minusOne= () => {
    count--;
    renderCounterApp();
    console.log('minusOne');

};
const resetAll = () => {
    count = 0;
    renderCounterApp();
    console.log ('Reset Done');
};
const appRoot = document.getElementById('app');


const renderCounterApp = () => {
    const templateTwo = (
        <div>
        <h1>Count : {count}  </h1>
        <button onClick = {addOne}>+1</button>
        <button onClick = {minusOne}> -1</button>
        <button onClick = {resetAll}>Reset</button>
     </div>
    );

    ReactDOM.render(templateTwo,appRoot);
};

renderCounterApp(); 
// const temp = (
//     <div>
//         <h1>Indecision App</h1>
//         <p>This is Something</p>
//         <h6>Try this also</h6>
//         <ol>
//         <li>Item One</li>
//         <li>Item Two</li>
//         </ol>
//     </div>
// );

// const userObject = {
//     name : 'Krishna Kumar',
//     age : 25,
//     location : 'Delhi',
//     cities : ['Del','Bel','GDC'],
//     printCitiesLived() { 
//         return this.cities.map((city) => this.name + ' has lived in ' + city);
//     }
// };

// console.log(userObject.printCitiesLived());
// const currentLocation = (locationValue) => {
//     if(locationValue){
//         return locationValue;
//     }
//     else
//     {
//         return undefined;
//     }
// };



// const template = (
//     <div>
//     <h1> Name : {userObject.name}</h1>
//     <p> Age : 25</p>
//     <h2>Location : {currentLocation('Delhi')}</h2>
//     </div>
// )