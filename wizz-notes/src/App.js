import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import NotesPage from "./pages/NotesPage";
import NotePage from "./pages/NotePage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<NotesPage />} exact />
            <Route element={<NotePage />} path="/note/:id" exact />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
