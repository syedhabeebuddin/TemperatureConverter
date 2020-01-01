import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

class SayWelcome extends React.Component{
  render(){
    return( <h1>Hellow , {this.props.name}</h1>);
  }
}

class PrintHello extends React.Component{
  render(){
    return(
      <SayWelcome name="PP" />
    );
  }
}

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state ={date : new Date()};
  }

  componentDidMount(){
    this.timerId = setInterval(
      () => this.tick(),1000
    );

  }

  componentWillUnmount(){
    clearInterval(this.timerId);
  }

  tick(){
    this.setState({
      date: new Date()
    });
  }

  render(){
    return(
      <div>
        <h1>hello, world !!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

//Prevent Link default behavior
function ActionLink(){
  function handleClick(e){
    e.preventDefault();
    console.log('The link was clicked');
  }

  return(
    <a href="#" onClick={handleClick}> 
      Click me
    </a>
  );
}

class ToggleButton extends React.Component{
  constructor(props){
    super(props);
    this.state = {isToggleOn : true};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState(
     state =>({ isToggleOn : !state.isToggleOn})
    );
  }

  render(){
    return(
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

class Greeting extends React.Component{
  constructor(props){
    super(props);
    this.props.isLoggedIn = props.isLoggedIn;
  }
}

class LoginControl extends React.Component{
  constructor(props){
    super(props);
    
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state={isLoggedIn : true};
  }

  handleLoginClick(){
    this.setState(
      {isLoggedIn : false}
    );
  }

  handleLogoutClick(){
    this.setState({isLoggedIn : true});
  }

  render(){
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if(isLoggedIn){
      button = <button onClick={this.handleLoginClick}>Logout</button>
    }else{
      button = <button onClick={this.handleLogoutClick}>Login</button>
    }

    return(
     <div>
       {button}
     </div>
    );
  }

}

function MailBox(props){
  const unreadMessages=props.unreadMessages;
  return(
   <div>
     <h1>Hello</h1>
     {unreadMessages.length > 0 &&
       <h2>
         You have {unreadMessages.length} unread messages.
       </h2>
    }
   </div>
  );
}

class DisplayMailBox extends React.Component{
  render(){
    const messages=['aaa','bbbb','cccc'];
    return(
      <MailBox unreadMessages={messages} ></MailBox>

    );
  }
}

function WarningBanner(props){
  if(!props.warn){
    return null;
  }

  return(
    <div className="warning">
      Warning !
    </div>
  );
}

class Page extends React.Component{
  constructor(props){
    super(props);
    this.state = {showWarning : true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick(){
    this.setState(state => ({ 
      showWarning : !this.state.showWarning
    }));
  }

  render(){
    return(
      <div>
        <WarningBanner warn={this.state.showWarning} ></WarningBanner>
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? "Hide" : "show"}
        </button>
      </div>
    );
  }
}

function ListItems(){
  const numbers=[1,2,3,4];
  const listOfItems = numbers.map(
    (number) => <li key={number.toString()}>{number * 2}</li>
  );

  return(
    <ul>{listOfItems}</ul>
  );
}

//Forms
class NameForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {value : ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({value : event.target.value})
  }

  handleSubmit(event){
    alert('A name was submitted :' + this.state.value);
    event.preventDefault();
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange}></input>
        </label>
        <input type="submit" value="Submit"></input>
      </form>
    );
  }
}

class EssayForm extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      value : 'Please write some content here...',
      essw : 'here it comes:'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({value : event.target.value});
  }

  handleSubmit(event){
    this.setState({essw  : this.state.value})
    event.preventDefault();
  }

  render(){
    return(
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay:
          <textarea value={this.state.value} onChange={this.handleChange}></textarea>
        </label>
        <input type="submit" value="Submit"></input>        
      </form>
      
      <h3>
        {this.state.essw}
      </h3>
      </div>
    );
  }
}

//dropdown
class FlavorForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {value : 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event){
    this.setState({value : event.target.value});
  }

  handleSubmit(event){
    //this.setState()
    event.preventDefault();
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favourite flavor :
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grape Fruit</option>
            <option value="lime">Lime</option>
            <option value="mango">Mango</option>
            <option value="coconut">Coconut</option>
            <option value="grapes">Grapes</option>
          </select>
        </label>
        <input type="submit" value="Submit"></input>
      </form>
    );
  }
}

//Handling multiple selections:
class Reservation extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isGoing : true,
      numberOfGuests : 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event){
    const target = event.target;
    const value = target.type === 'checkbox' ?target.checked :target.value;
    const name = target.name;

    this.setState({
      [name] : value
    });
  }

  render(){
    return(
      <form>
        <label>
          Is going : 
          <input name="isGoing" type="checkbox" 
              onChange={this.handleInputChange} checked={this.state.isGoing} ></input>
          
        </label>
        <br/>
        <label>
          Number Of Guests:
          <input name="numberOfGuests" type="number" 
             value={this.state.numberOfGuests} onChange={this.handleInputChange}></input>
        </label>
      </form>
    );
  }
}

//Lifting State Up
function BoilingVerdict(props){
 if(props.celcius >= 100){
   return <p>The water would boil.</p>
 }else{
   return <p>The water would not boil.</p>
 }
}

class Calculator extends React.Component{
  constructor(props){
    super(props);
    //this.handleChange = this.handleChange.bind(this);
    this.state = {temperature : '', scale : 'c'};

    this.handleCelciusChange = this.handleCelciusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }

  handleCelciusChange(temperature){
   this.setState({scale : 'c',temperature});
  }

  handleFahrenheitChange(temperature){
    this.setState({scale : 'f',temperature});
  }

  handleChange(e){
    this.setState({temperature : e.target.value});
  }

  render(){
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celcius = scale === 'f' ? tryConvert(temperature,toCelcius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature,toFahrenheit) : temperature;

    return(
      /*
      <fieldset>
        <legend>Enter Temperature in Celcius : </legend>
        <input value={this.state.temperature} onChange={this.handleChange}></input>
        <BoilingVerdict celcius={parseFloat(this.state.temperature)} />
      </fieldset> */
      <div>
        <TemperatureInput scale='c' temperature={celcius} 
           onTemperatureChange={this.handleCelciusChange}></TemperatureInput>

        <TemperatureInput scale='f' temperature={fahrenheit} 
           onTemperatureChange = {this.handleFahrenheitChange}></TemperatureInput>

           <BoilingVerdict celcius={parseFloat(celcius)}></BoilingVerdict>
      </div>
    );
  }
}

const scaleNames ={
  c: 'Celcius',
  f: 'Fahrenheit'
};

class TemperatureInput extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state ={temperature : ''};
  }

  handleChange(e){
    //this.setState({temperature : e.target.value});
    this.props.onTemperatureChange(e.target.value);
  }

  render(){
    //const temperature = this.state.temperature;
    const temperature = this.props.temperature;
    const scale = this.props.scale;

    return(
      <fieldset>
        <legend>Enter Temperature in {scaleNames[scale]}</legend>
        <input value={temperature} onChange={this.handleChange}></input>
      </fieldset>

    );
  }
}

function toCelcius(fahrenheit){
 return (fahrenheit-32) * 5 / 9;
}

function toFahrenheit(celcius){
  return (celcius * 9 / 5) + 32;
}

function tryConvert(temperature , convert){
 const input = parseFloat(temperature);
 if(Number.isNaN(input)){
   return '';
 }
 const output = convert(input);
 const rounded = Math.round(output * 1000) / 1000;
 return rounded.toString();

}

//Composition
function FancyBorder(props){
 return(
   <div className={'FancyBorder FancyBorder-' + props.color}>
     {props.children}
   </div>
 );
}

function Dialogue(props){
  return(
    <FancyBorder color="blue">
      <h1 className="Dialogue-title">
        {props.title}
      </h1>
      <p className="Dialogue-message">
        {props.message}
      </p>

      {props.children}
    </FancyBorder>
  );
}

function WelcomeDialogue(){
  return(
    <Dialogue title="Welcome" message="Thanks for visting space craft.">
    </Dialogue>

    /*
    <FancyBorder color='blue'>
     <h1 className="Dialogue-title">
      Welcome
     </h1>
     <p className="Dialogue-message">
       Thanks for visting space craft.
     </p>
    </FancyBorder>*/
  );
}

class SignUpDialogue extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state={login : ''};
  }

  handleChange(e){
    this.setState({ login : e.target.value});
  }

  handleSignUp(){
    alert('Welcome..');
  }

  render(){
    return(
      <Dialogue title="Login Window" message="AAAA">
        <input value={this.state.login} onChange={this.handleChange}></input>
        <button onClick={this.handleSignUp}>
         Sign Me Up!
        </button>
      </Dialogue>
    );
  }
}

//export default App;
//export default Welcome;
//export default PrintHello;
//export default Clock;
//export default ActionLink;
//export default ToggleButton;
//export default LoginControl;
//export default DisplayMailBox;
//export default Page;
//export default ListItems;
//export default NameForm;
//export default EssayForm;
//export default FlavorForm;
//export default Reservation;
//export default Calculator;
//export default WelcomeDialogue;
export default SignUpDialogue;
