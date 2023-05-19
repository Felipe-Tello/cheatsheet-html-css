import { Link, Route, Routes, BrowserRouter} from "react-router-dom";
import BasicCSS from "./components/BasicCSS";
import BasicCSSProperties from "./components/BasicCSSProperties";
import BasicHTML from "./components/BasicHTML";
import BasicHTMLForms from "./components/BasicHTMLForms";
import BasicHTMLTags from "./components/BasicHTMLTags";
import Navigation from "./components/Navigation";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Navigation></Navigation>
                <Routes>
                    <Route path='/' element={<BasicHTML />}></Route>
                    <Route path='/html' element={<BasicHTML />}></Route>
                    <Route path='/html/tags' element={<BasicHTMLTags />}></Route>
                    <Route path='/html/forms' element={<BasicHTMLForms />}></Route>
                    <Route path='/css' element={<BasicCSS />}></Route>
                    {/* <Route path='/css/properties' element={<BasicCSSProperties />}></Route> */}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
