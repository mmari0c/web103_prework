import { useState, useEffect } from "react"
import { supabase } from "../client"
import { useParams } from "react-router"
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import "./ViewCreator.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";

const ViewCreator = () => {

   const { id } = useParams()
   const [creator, setCreator] = useState(null)

   useEffect( () => {
      console.log("Fetching creator with ID:", id);
      const fetchCreator = async () => {
         const { data } = await supabase
         .from('creators')
         .select()
         .eq('id', id)
         .single() 

         console.log("Fetched creator data:", data);
         setCreator(data)
      }
      fetchCreator()
   },[id]);

   return (
<div className="creator-view">
  {creator ? (
    <div className="creator-details">
      <div className="creator-helper">
         <button className="back-button" onClick={() => window.history.back()}>&larr;</button>
         <Link key={creator.id} state={creator}to={`/edit/${creator.id}`}>
            <FontAwesomeIcon icon={faPenToSquare} className="icon" />
         </Link>
      </div>
      <div className="creator-header">
        <img 
          src={creator.imageURL} 
          alt={creator.name} 
          className="creator-image"
        />
        <h2 className="creator-name">{creator.name}</h2>
      </div>

      <p className="creator-description">{creator.description}</p>

      <a 
        href={creator.url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="creator-link"
      >
        Visit Profile
      </a>
    </div>
  ) : (
    <p>Loading creator...</p>
  )}
</div>

   )
}

export default ViewCreator