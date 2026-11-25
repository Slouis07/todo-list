import { useState } from "react";
import "./App.css";
import Header from "./shared/Header";
import Logon from "./features/Logon";
import TodosPage from "./features/Todos/TodosPage";

function App() {
  const [email, setEmail] = useState(
    sessionStorage.getItem("email") || ""
  );

  const [token, setToken] = useState(
    sessionStorage.getItem("token") || ""
  );

  function handleSetEmail(newEmail) {
    sessionStorage.setItem("email", newEmail);
    setEmail(newEmail);
  }

  function handleSetToken(newToken) {
    sessionStorage.setItem("token", newToken);
    setToken(newToken);
  }

  return (
    <div>
      <Header
        token={token}
        onSetToken={handleSetToken}
        onSetEmail={handleSetEmail}
      />

      {token ? (
        <TodosPage token={token} />
      ) : (
        <Logon
          onSetEmail={handleSetEmail}
          onSetToken={handleSetToken}
        />
      )}
    </div>
  );
}

export default App;
