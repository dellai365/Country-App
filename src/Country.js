import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
const Country = (props) => {


    return (
        <div className='card'>
            <div className='card-inner'>
                <div className='card-front'>
                    <img src={props.flag} alt='' />
                </div>
                <div className='card-back'>
                    <h1>{props.name}</h1>
                    <ul>
                        <li>
                            <strong>Capital:</strong> {props.capital}
                        </li>
                        <li>
                            <strong>Language🗣️:  </strong> {props.lang}
                        </li>
                        <li>
                            <strong>Region🌍:</strong> {props.region}
                        </li>
                        <li>
                            <strong>Population👫:  </strong> {props.population}
                        </li>
                        <li>
                            <strong>currency💰:  </strong> {props.cur}
                        </li>
                    </ul>
                </div>
            </div>
        </div>


        /* <Card style={{ width: '12rem',backgroundColor:"chartreuse" }}>
             <Card.Img variant="top" src={props.flag} style={{ width: "12em", height: "7em" }} />
             <Card.Body>
                 <Card.Title>{props.name}</Card.Title>
                 <Card.Text>
                     {props.region}
                 </Card.Text>
                 <Card.Text>
                     🗣️ {props.lang}
                 </Card.Text>
                 <Card.Text>
                     👫 {props.population}
                 </Card.Text>
             </Card.Body>
             <ListGroup className="list-group-flush">
                 <ListGroupItem> 💰 {props.cur}</ListGroupItem>
 
             </ListGroup>
 
 
         </Card>*/
    )
}

export default Country