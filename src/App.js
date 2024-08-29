import "./App.css";
import First from "./components/context/first/first";
// import Counter from "./components/counter/counter";
// import Login_Signup from "./components/login&signup/login&signup/login&signup";
// import Cards from "./components/cards/cards";
import GetExample from "./components/GETExample/GETExample";
import PostExample from "./components/POSTExample/POSTExample";

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Login_Signup /> */}
      {/* <Cards /> */}
      {/* <First /> */}
      <GetExample />
      <PostExample />
    </div>
  );
}

export default App;
