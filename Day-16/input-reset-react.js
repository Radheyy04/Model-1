<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>React Reset App</title>

  <!-- React CDN -->
  <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

  <!-- Babel CDN -->
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

  <style>
    body {
      margin: 0;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: "Segoe UI", sans-serif;
      background: linear-gradient(135deg, #1e293b, #0f172a);
    }

    .container {
      width: 350px;
      padding: 35px;
      background: #ffffff;
      border-radius: 20px;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
      text-align: center;
    }

    h2 {
      margin-bottom: 25px;
      color: #0f172a;
      font-size: 28px;
    }

    input {
      width: 90%;
      padding: 12px;
      font-size: 16px;
      border: 2px solid #cbd5e1;
      border-radius: 10px;
      outline: none;
      transition: 0.3s;
    }

    input:focus {
      border-color: #3b82f6;
      box-shadow: 0 0 10px rgba(59, 130, 246, 0.4);
    }

    button {
      width: 100%;
      margin-top: 20px;
      padding: 12px;
      font-size: 16px;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      background: #3b82f6;
      color: white;
      transition: all 0.3s ease;
    }

    button:hover {
      background: #2563eb;
      transform: translateY(-2px);
    }

    button:active {
      transform: scale(0.98);
    }
  </style>
</head>

<body>

  <div id="root"></div>

  <script type="text/babel">
    function App() {
      const [text, setText] = React.useState("");

      const handleReset = () => {
        setText("");
      };

      return (
        <div className="container">
          <h2>Input Box App</h2>

          <input
            type="text"
            placeholder="Write something..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <button onClick={handleReset}>
            Reset
          </button>
        </div>
      );
    }

    ReactDOM.createRoot(
      document.getElementById("root")
    ).render(<App />);
  </script>

</body>
</html>
