import { useState, useEffect } from "react";
import { supabase } from "../client";
import { useParams, useLocation } from "react-router";
import "./EditCreator.css";

const EditCreator = () => {

   const { id } = useParams();
   const { state } = useLocation();

   const [creatorAttributes, setCreatorAttributes] = useState({ name: "", imageURL: "", description: "", url: "" });
   
   useEffect(() => {
      if (state) {
         setCreatorAttributes({
            name: state.name || "",
            imageURL: state.imageURL || "",
            description: state.description || "",
            url: state.url || ""
         });

         return;
      }

      const fetchCreator = async () => {
         const { data } = await supabase
            .from('creators')
            .select()
            .eq('id', id)
            .single();

         setCreatorAttributes({
            name: data.name || "",
            imageURL: data.imageURL || "",
            description: data.description || "",
            url: data.url || ""
         });
      };

      fetchCreator();
   }, [id, state]);

   const handleChange = (e) => {
      console.log(e.target.name, e.target.value);
  
      const { name, value } = e.target;
      setCreatorAttributes( (prevData) => {
        return { ...prevData, [name]: value }
      })
   }

   const editCreator = async (e) => {
      e.preventDefault();

      await supabase
      .from('creators')
      .update({name: creatorAttributes.name, imageURL: creatorAttributes.imageURL, description: creatorAttributes.description, url: creatorAttributes.url})
      .eq('id', id)
      .select();
      
      window.location = "/creators";
   }

   const deleteCreator = async () => {
      await supabase
      .from('creators')
      .delete()
      .eq('id', id);

      window.location = "/creators";
   }

   return (
         <div className="add-creator-container">
         <button className="back-button" type="button" onClick={() => window.history.back()}>←</button>
         <form className="add-creator-form">
            <label htmlFor="name">Name</label>
            <input value={creatorAttributes.name}id="name" type="text" name="name" onChange={handleChange} />

            <label htmlFor="imageURL">Image</label>
            <input value={creatorAttributes.imageURL}id="imageURL" type="text" name="imageURL" onChange={handleChange}/>

            <label htmlFor="description">Description</label>
            <textarea value={creatorAttributes.description} id="description" type="text" name="description" onChange={handleChange}>
            </textarea>

            <label htmlFor="url">Social Media Link</label>
            <input value={creatorAttributes.url}type="text" id="url" name="url" onChange={handleChange} />

            <div className="edit-buttons">
               <button className="home-button" type="submit" onClick={editCreator}>Edit Creator</button>
               <button className="delete-button" type="button" onClick={deleteCreator}>
                  Delete Creator
               </button>
            </div>

         </form>
      </div>

   )
}

export default EditCreator