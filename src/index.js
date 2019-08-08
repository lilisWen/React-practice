import React, { createContext } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const themContext = React.createContext();
function Box(props) {
  return <div className={`box ${props.them}`}>{props.children}</div>;
}
function Button(props) {
  return <button className={`${props.them}`}>button</button>;
}
function Input(props) {
  return <input />;
}
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      them: "green"
    };
  }
  changColor = () => {
    if (this.state.them === "green") {
      this.setState({
        them: "red"
      });
    } else {
      this.setState({
        them: "green"
      });
    }
  };
  render() {
    return (
      <themContext.Provider value={this.state.them}>
        <div className="App">
          <button onClick={this.changColor}>换肤</button>
          <themContext.Consumer>
            {them => (
              <div>
                <Box them={them}>
                  <Button them={them} />
                </Box>
                <Box them={them}>
                  <Input them={them} />
                </Box>
              </div>
            )}
          </themContext.Consumer>
        </div>
      </themContext.Provider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
