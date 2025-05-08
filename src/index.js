In order to implement the contact form in your React.js website, the best practice would be to create a new React component for the Contact Form and use it within the App component. The src/index.js may not need any changes as modifications would happen in the App component where we will add the new ContactForm component.

However, here is an example of what a basic contact form component could look like:

import React from 'react';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', message: '' };
  }

  handleInputChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = (event) => {
    alert('A form was submitted by: ' + this.state.name);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" onChange={this.handleInputChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" onChange={this.handleInputChange} />
        </label>
        <label>
          Message:
          <textarea name="message" onChange={this.handleInputChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ContactForm;

Now, you just have to include this component in the component where you want the form to appear. Typically, this would be in the App.js file, like so:

import React from "react";
import ContactForm from "./ContactForm";  // assuming the ContactForm.js is in the same directory as App.js

function App() {
  return (
    <div className="app">
      {/* Your existing components */}
      <ContactForm />
      {/* Your existing components */}
    </div>
  );
}

export default App;

If you follow this approach, there would be no changes in src/index.js file. You need to create a new file named ContactForm.js and place the respective code and modify the App.js file to include ContactForm component. This is a basic example and might need changes as per your exact requirement.