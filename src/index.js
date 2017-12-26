import React from "react";
import { render } from "react-dom";

const Button = ({ handleClick, name}) => {

  return <button onClick={handleClick}>{name}</button>;

}

const Result = ({res}) => {
  return <div>{res}</div>;
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  addOne = () => {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  };

  addFive = () => {
    this.setState(prevState => ({ counter: prevState.counter + 5 }));
  };

  render() {
    const myBttons = [
      { 
        handleClick: () => this.setState(prevState => ({ counter: prevState.counter + 1 })),
        name: '+1'
      },
      {
        handleClick: () => this.setState(prevState => ({ counter: prevState.counter + 10 })),
        name: '+10'
      },
      {
        handleClick: () => this.setState(prevState => ({ counter: prevState.counter + 100 })),
        name: '+100'
      }
    ].map(a => {
        //var a = { handleClick, name };
        return <Button {...a}  />
      });


    return (
      <div>
        <Button handleClick={this.addOne} name='+1'/>
        <Button handleClick={this.addFive} name='+5'/>
        {myBttons}
        <Result res={this.state.counter}/>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
