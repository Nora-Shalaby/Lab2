import { MyConsumer } from "../context";
function Fifth() {
  return (
    <>
      <h1> Fifth</h1>
      <MyConsumer>{(value) => <h2>Hello, {value}</h2>}</MyConsumer>
    </>
  );
}
export default Fifth;
