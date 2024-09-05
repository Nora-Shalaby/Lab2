import "./App.css";
// import First from "./components/context/first/first";
// import Counter from "./components/counter/counter";
import Login_Signup from "./components/login&signup/login&signup/login&signup";
// import Cards from "./components/cards/cards";
// import GetExample from "./components/GETExample/GETExample";
// import PostExample from "./components/POSTExample/POSTExample";
import CounterUsingHooks from "./components/HOOKS/ProductsUsingHooks/CounterUsingHooks/CounterUsingHooks";
import Products from "./components/HOOKS/ProductsUsingHooks/Products/Products";
import Login from "./components/HOOKS/Login & Sign Up Using Hooks/Log In/LogInForm";
import SignUpForm from "./components/HOOKS/Login & Sign Up Using Hooks/Sign Up/SignUpForm";
import CounterWithButton from "./components/HOOKS/Lab  7/1/CounterWithButton";
import GreetingUpdate from "./components/HOOKS/Lab  7/2/GreetingUpdate";
import IncrementCounterEvrySecond from "./components/HOOKS/Lab  7/3/IncrementCounterEvrySecond";
import ListenerToWidowSize from "./components/HOOKS/Lab  7/4/ListenerToWidowSize";
import TrackStates from "./components/HOOKS/Lab  7/5/TrackStates";
import RenderComments from "./components/HOOKS/Lab  7/6/RenderComments";
import SearchCommentsById from "./components/HOOKS/Lab  7/7/SearchById";

function App() {
  return (
    <div className="App">
      {/* ********************Lab2******************* */}
      {/* <Counter /> */}
      {/* <Login_Signup /> */}

      {/* ******************** Lab4 ************************ */}
      {/* <Cards /> */}
      {/* <First /> */}

      {/* ******************** Lab 5************************* */}
      {/* <GetExample /> */}
      {/* <PostExample /> */}

      {/* ******************** Lab 6 ******************** */}
      {/* <CounterUsingHooks /> */}
      {/* <Products /> */}
      {/* <SignUpForm /> */}

      {/* ******************** Lab 7 *********************** */}
      {/* <CounterWithButton /> */}
      {/* <GreetingUpdate /> */}
      {/* <IncrementCounterEvrySecond /> */}
      {/* <ListenerToWidowSize /> */}
      {/* <TrackStates /> */}
      {/* <RenderComments /> */}
      <SearchCommentsById />
    </div>
  );
}

export default App;
