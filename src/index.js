To add a contact form to the website, you will need to create a new form component and then import it to your index file. 

However, it's better to import the ContactForm component into the App component and use it there because index.js file is usually used to render your App component into the DOM and not much else. 

For the purposes of this question, I will modify the index.js file as requested:

New content for src/index.js:

import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./App.css";
import App from "./App";
import ContactForm from "./ContactForm";  // Importing the contact form
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ContactForm />  // Adding the contact form to the application
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();

Please note that for this code to work properly, you will need to have a file named ContactForm.js in your src directory, which exports a ContactForm component. If there's no such file, the code will crash. 

Example of what ContactForm.js might look like:

import React from "react";

class ContactForm extends React.Component {
  render() {
    return (
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="text" name="email" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ContactForm;

Remember to adjust the App layout accordingly to respect the user interface's design and responsive behavior.