import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditorPage from "./pages/EditorPage";
import Home from "./pages/Home/Home";
import DefaultLayout from "./components/Layout/DefaultLayout";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route element={<DefaultLayout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/write" element={<EditorPage />} />
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
