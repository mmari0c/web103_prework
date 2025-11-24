import { useEffect, useState } from "react"
import { supabase } from "../client"
import { Link } from "react-router"
import CreatorCard from "../components/creatorCard"
import "./ShowCreators.css"


const ShowCreators = () => {
   
   const [creators, setCreators] = useState([]) 

   useEffect( () => {
      const fetchCreators = async () => {
         const { data } = await supabase
         .from('creators')
         .select()

         setCreators(data)
      }
      fetchCreators()
   }, []);
   
   return (
      <div>
         <h2>Your Creators</h2>
         {creators && creators.length > 0 ? (
            <div className="creator-list">
               {creators.map( (creator) => (
                  <Link key={creator.id} to={`/creator/${creator.id}`}>
                     <CreatorCard key={creator.id} creator={creator} />
                  </Link>
               ))}
            </div>
         ) : (
            <p>No creators found. <Link to="/add">Add a creator</Link> to get started!</p>
         )   
         }
      </div>
   )
}

export default ShowCreators