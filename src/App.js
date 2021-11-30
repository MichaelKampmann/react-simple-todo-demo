import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo title='Learn React' />
      <Todo title='Master React' />
      <Todo title='Learn Next.js' />
      <Todo title='Master Next.js' />
      <Todo title='Make millions on Out of yarn' />
      <Todo title='Make millions on Shiba Inu' />
    </div>
  );
}

export default App;
