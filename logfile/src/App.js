import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditorPage from "./pages/Write/EditorPage";
import Home from "./pages/Home/Home";
import DefaultLayout from "./components/Layout/DefaultLayout";
import ArticleHome from "./pages/Article/AritcleHome";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route element={<DefaultLayout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/write" element={<EditorPage />} />
                        <Route path="/article" element={<ArticleHome />} />
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
