// import React, { useState } from "react";
import React from "react";

function Form({
  firstName,
  lastName,
  handleFirstNameChange,
  handleLastNameChange,
}) {
  return (
    <form>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}


// ---------------------------------------------------------------------
// function Form() {
//   const [newsletter, setNewsletter] = useState(false);

//   function handleNewsletterChange(event) {
//     // .checked, not .value!
//     setNewsletter(event.target.checked);
//   }

//   return (
//     <form>
//       <label htmlFor="newsletter">Subscribe to our Newsletter?</label>
//       <input
//         type="checkbox"
//         id="newsletter"
//         onChange={handleNewsletterChange}
//         // {/* checked instead of value */}
//         checked={newsletter}
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
// --------------------------------------------------------------------
// function Form() {
//   const [firstName, setFirstName] = useState("John");
//   const [lastName, setLastName] = useState("Henry");

//   function handleFirstNameChange(event) {
//     setFirstName(event.target.value);
//   }
  
//   function handleLastNameChange(event) {
//     setLastName(event.target.value);
//   }
//   function onSubmitHandler (e){
//     e.preventDefault()
//     console.log(`${firstName} ${lastName}`)
//   }

//   return (
//     <>
//     <form onSubmit={onSubmitHandler}>
//       <input type="text" onChange={handleFirstNameChange} value={firstName} />
//       <input type="text" onChange={handleLastNameChange} value={lastName} />

//       <button type="submit">Submit</button>
//     </form>
//     <p>Form says: {firstName} {lastName}</p>
//     </>
//   );
// }

export default Form;
