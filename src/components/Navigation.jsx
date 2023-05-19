import { Link } from "react-router-dom";


const Navigation = () => {
    return (
        <div>
            <ul className="nav nav-tabs" id="myTab" role="tablist" style={{display:"flex", justifyContent:"center"}}>
                <li className="nav-item" role="presentation">
                    <Link className="nav-link active" to="/html">HTML(Basics)</Link>
                </li>
                <li className="nav-item" role="presentation">
                    <Link className="nav-link active" to="/html/tags">HTML(Tags)</Link>
                </li>
                <li className="nav-item" role="presentation">
                    <Link className="nav-link active" to="/html/forms">HTML(Forms)</Link>
                </li>
                <li className="nav-item" role="presentation">
                    <Link className="nav-link active" to="/css">CSS(Basics)</Link>
                </li>
                <li className="nav-item" role="presentation">
                    <Link className="nav-link active" to="/css/properties">CSS(Properties)</Link>
                </li>
            </ul>
        </div>
    );
}
 
export default Navigation;