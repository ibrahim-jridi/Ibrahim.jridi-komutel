import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Contact = () => {
    const [valuesInput, setValues] = useState({});

const MyValuesInput = (event) => {
    let res = valuesInput;
    res[event.target.name] = event.target.value;
    setValues(res);
  };

const handleFormSubmit = async (event) => {
    event.preventDefault();

      
      await axios.post(
        "http://localhost:8080/contact",
        valuesInput
      );   
      toast("Contact a été ajouté avec succès ", {
        type: "success",
      });
  
  };

  return (
    <div >
        <table className="table">
        <div className="contact">
        <form  onSubmit={handleFormSubmit}>
        <ToastContainer></ToastContainer>
          <thead>
            <tr>
              <th className="td1 text-center">Contacts</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="td1">Nom</td>
              <td className="td2">
                {" "}
                <input
                  type="text"
                  className="form-control"
                  id="Nom"
                  placeholder="Nom"
                  name="nom"
                  required
                  onChange={MyValuesInput}
                  pattern="[a-zA-Z' ']{3,}"
                />
              </td>
            </tr>
            <tr>
              <td className="td1">Adresse</td>
              <td className="td2">
                {" "}
                <input
                  type="text"
                  className="form-control"
                  id="Adresse"
                  placeholder="Adresse"
                  name="adresse"
                  required
                  onChange={MyValuesInput}
                  pattern="[0-9a-zA-Z.+_]{0,}"
                />
              </td>
            </tr>
            <tr>
              <td className="td1">Ville</td>
              <td className="td2">
                {" "}
                <input
                  type="text"
                  className="form-control"
                  id="Ville"
                  placeholder="Ville"
                  name="ville"
                  required
                  onChange={MyValuesInput}
                  pattern="[a-zA-Z]{3,}"
                />
              </td>
            </tr>

            <tr>
              <td className="td1">Pays</td>
              <td className="td2">
              <select
                   className="form-control"
                  aria-label="Default select example"
                  name="pays"
                  onChange={MyValuesInput}
                  required
                >
                  //<option value="" selected="true" disabled="disabled">Sélectionnez un pays</option>
				  <option value="Tunisie">Tunisie</option>
				  <option value="Portugal">Portugal</option>
				  <option value="France">France</option>
                  <option value="USA" selected="true">USA</option>
                  <option value="Canada">Canada</option>
                  <option value="Allemagne">Allemagne</option>
                  <option value="Italie">Italie</option>
                  <option value="Angleterre">Angleterre</option>
                  <option value="Espagne">Espagne</option>
                  <option value="Belgique">Belgique</option>
                  
                </select>
              

              </td>
            </tr>


            <tr>
              <td className="td1">Téléphone</td>
              <td className="td2">
                {" "}
                <input
                  type="text"
                  className="form-control"
                  id="Telephone"
                  placeholder="Téléphone"
                  name="telephone"
                  required
                  onChange={MyValuesInput}
                  pattern="[0-9+]{8,15}"
                  />
              </td>
            </tr>

            <tr>
              <td className="td1">Début Contrat</td>
              <td className="td2">
                {" "}
                <input type="Date" 
                  className="form-control" 
                  id="DebutContrat" 
                  name="debut_de_contract"
                  required
                  onChange={MyValuesInput}
                />
              </td>
            </tr>
            <div className="btn">
            <button type="reset" className="btn btn-primary">
              Annuler
            </button>
            
            <button type="submit" className="btn btn-primary" id="confirmer" >
              Confirmer
            </button>
            </div>
          </tbody>
          </form>

          </div>
        </table>
     
    
    </div>
  );
};

export default Contact;
