import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import './App.css';




const Home = () => {


    return (
        <div  >
            <Link to={"/theWorld"}  >
                <Button variant="outline-light" className="home-btn" > Explore The World </Button>
            </Link>
            <img src="/earth1.png" alt="" style={{ height: "35rem", width: "40%", display: "flex", flexDirection: "column" }} />


        </div>
    )
}

export default Home