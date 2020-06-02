import React from "react";

const App = () => {
  const [subtitle, setSubtitle] = React.useState("subtitle");
  const [inputValue, setInputValue] = React.useState("");

  return (
    <div className="app">
      <h2>Hey y'all</h2>
      <h3>{subtitle}</h3>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.currentTarget.value)}
      />
      <button
        onClick={() => {
          setSubtitle(inputValue);
        }}
      >
        Update subtitle
      </button>
    </div>
  );
};

export default App;
