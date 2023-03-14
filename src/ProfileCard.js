import "./Style.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function ProfileCard(props) {
  console.log(props.id)
  return (
    <div className="container">
      <div className="cards">
        {/* absolute path */}
        <img src={props.image} alt="coverimage" />

        <h4>{props.title}</h4>
        <p className="user">{props.username}</p>
        <p className="des">{props.description}</p>
        <div class="container bg-light">
          <div class="col-md-12 text-center">
            <Button type="Button" class="btn btn-primary">
             <Link to={`/product/${props.id}`} style={{color: "White", textDecoration: "none"}}>View Details</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
