import "./AddCreator.css";
import { useState} from "react";
import { supabase } from "../client";

const AddCreator = () => {

   const [creatorAttributes, setCreatorAttributes] = useState({ name: "", imageURL: "", description: "", url: "" });

   const handleChange = (e) => {
      const { name, value } = e.target;
      setCreatorAttributes ( prevState => {
         return {
            ...prevState,
            [name]: value
         }
      })
   }

   const createCreator = async (e) => {
      e.preventDefault();

      await supabase
      .from('creators')
      .insert({name: creatorAttributes.name, imageURL: creatorAttributes.imageURL, description: creatorAttributes.description, url: creatorAttributes.url})
      .select();
      
      window.location = "/creators";
   }

   return (
      <div className="add-creator-container">
         <h2>Add Creator</h2>
         <form className="add-creator-form">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="name" onChange={handleChange} />

            <label htmlFor="imageURL">Image (Optional)</label>
            <input id="imageURL" type="text" name="imageURL" onChange={handleChange}/>

            <label htmlFor="description">Description</label>
            <textarea id="description" type="text" name="description" onChange={handleChange}>
            </textarea>

            <label htmlFor="url">YouTube Link</label>
            <input type="text" id="url" name="url" onChange={handleChange} />

            <button className="home-button" type="submit" onClick={createCreator}>Add Creator</button>
         </form>
      </div>
   )
}

export default AddCreator