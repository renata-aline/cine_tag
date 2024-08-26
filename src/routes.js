import Start from "pages/Start";
import { BrowserRouter, Routes ,Route} from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Start/>}></Route>  
        </Routes>

        </BrowserRouter>
    )
}

export default AppRoutes;