function App() {
 
    const [title, setTitle] = React.useState("Initial Title (React)");
    const [reactUpdateCount, setReactUpdateCount] =React.useState(0);
    const [vanillaUpdateCount, setVanillaUpdateCount]=React.useState(0);
    const changeTitleReact = () => {
      setTitle("Updated Title (React)");
      document.title = "Updated Title (React)"; 
      setReactUpdateCount(reactUpdateCount + 1); 
    };
    const changeTitleVanilla = () => {
      document.title = "Updated Title (Vanilla JS)";
      setVanillaUpdateCount(vanillaUpdateCount + 1); 
    };
  
    return (
      <div className="App">
        <h1>{title}</h1>
        <button onClick={changeTitleVanilla}>Change Title (Vanilla JS)</button>
        <button onClick={changeTitleReact}>Change Title (React)</button>
        <p>Vanilla JS Updates: {vanillaUpdateCount}</p>
        <p>React Updates: {reactUpdateCount}</p>
      </div>
    );
  }
  const root = ReactDOM.createRoot(document.getElementById("root"))
  root.render(<App />)