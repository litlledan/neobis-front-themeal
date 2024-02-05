import Layout from "./Components/Layout/Layout";
import {Route, Routes} from "react-router-dom";
import Meal from "./pages/Meal/Meal";
import Description from "./pages/Description/Description";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="/" element={<Meal/>}/>
                <Route path={`/meal/:id`} element={<Description/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
