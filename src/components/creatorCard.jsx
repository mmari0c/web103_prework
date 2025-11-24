import "./CreatorCard.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

import { Link } from "react-router";

const CreatorCard = ({ creator }) => {
   return (
      <div className="creator-card">
         <div className="card-header">
            <img src={creator.imageURL} alt={creator.name} />
            <div className="card-name">
                  <h3>{creator.name}</h3>
                  <Link key={creator.id} state={creator}to={`/edit/${creator.id}`}>
                  <FontAwesomeIcon icon={faPenToSquare} className="font-awesome" />
                  </Link>
            </div>
         </div>
         <p>{creator.description}</p>
         <FontAwesomeIcon icon={faYoutube} className="youtube-awesome" onClick={ () => window.open(creator.url, "_blank") } /> 
      </div> 
   )
}

export default CreatorCard