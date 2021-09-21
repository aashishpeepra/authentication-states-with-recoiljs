import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/AuthExample/Home";
import BoxWrapper from "./hoc/boxWrapper/boxWrapper";
import Login from "./Components/Auth/Login";
import Posts from "./Components/AuthExample/Posts";

function App() {
  return (
    <div className="App">
      <h1>Authentication Example </h1>
      <p>
        A general need is to show different values inside components based on a gloabl userData value. Examples can include color theme property, account credentials, content data and more.
      </p>
      <section className="block" id="AuthExample">
        
        <BoxWrapper source="/Components/Auth/Login">
          <Login />
        </BoxWrapper>
        <BoxWrapper source="/Components/AuthExample/Home.js">
          <Home />
        </BoxWrapper>
        <BoxWrapper source="/Components/AuthExample/Posts">
          <Posts />
        </BoxWrapper>
      </section>
    </div>
  );
}

export default App;
