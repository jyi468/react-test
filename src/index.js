import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();

//const element = <h1>Hello, world!</h1>;
//ReactDOM.render(element, document.getElementById('root'));

/*function tick() {
    ReactDOM.render(
        <Clock />,
        document.getElementById('root')
    );
}*/

class Clock extends React.Component {
    constructor(props) {
        super(props);
        // Initialize using this.state
        this.state = {date: new Date()};
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    };

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        // set state using this.setState
        this.setState({
            date: new Date()
        });
    }
}

function App() {
    return (
        <div>
            <Clock />
            <Clock />
            <Clock />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

// setInterval(tick, 1000);

// valid functional component - equal to below
// props argument example: {name: "Josh"}
/*function Welcome1(props) {
    return (<h1>Hello, {props.name}</h1>);
}

// valid class component - equal to above
class Welcome2 extends React.Component {
    render() {
        return (<h1>Hello, {this.props.name}</h1>);
    }
}

function App() {
    return (
        <div>
            <Welcome1 name={"Abe"}/>
            <Welcome2 name={"John"}/>
        </div>
    );
}*/

/**
 * Nested components
 */
/*function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo author={props.author}/>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

function Avatar(props) {
    return (
        <img className="Avatar"
             src={props.author.avatarUrl}
             alt={props.author.name}
        />
    );
}

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar author={props.author}/>
            <div className="UserInfo-name">
                {props.author.name}
            </div>
        </div>
    );
}*/

// Pure function
/*function sum(a,b) {
    return a + b;
}*/

// Impure function (changes its own input)
/*function withdraw(account, amount) {
    account.total -= amount;
}*/

//ReactDOM.render(<App/>, document.getElementById('root'));