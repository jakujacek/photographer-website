import React from 'react';
import {Link} from 'react-router'

class Contact extends React.Component {
   constructor() {
       super();
       this.state = {
           name: '',
           email: '',
           info: '',
           errors: [],
           success: "Email was sent successfully",
           errorStyle: {
               display: "none"
           },
           successStyle: {
               display: "none"
           }
       }
   }

   handleNameChange = event => {
       this.setState({
           name: event.target.value
       })
   }

   handleForWhoChange = event => {
       this.setState({
           forWho: event.target.value
       })
   }

   handleEmailChange = event => {
       this.setState({
           email: event.target.value
       })
   }

   handleInfoChange = event => {
       this.setState({
           info: event.target.value
       })
   }

   handleFormSubmit = event => {
       event.preventDefault()
       if (this.state.errors.length > 0) {

       }
       let arr = this.state.errors.slice()
       if (this.state.name.length === 0) {
           arr.push("Error, name is required field.")
       }
       if (this.state.email.indexOf('@') === -1) {
           arr.push("Error, please enter a valid email address.")
       }
       this.setState({
           errors: arr
       }, () => {
           if (this.state.errors.length !== 0) {
               this.setState({
                   errorStyle: {
                       display: "block",
                       color: "tomato"
                   }
               })
           } else {
               this.setState({
                   successStyle: {
                       display: "block",
                       color: "#44813B"
                   }
               })
           }
       })
   }
   componentDidUpdate() {
     if(this.state.errors.length > 0) {
       this.errorVanish = setTimeout(()=> {
         this.setState({
           errors: []
         })
       }, 3000)
     }
   }
   componentWillUnmount() {
     clearTimeout(this.errorVanish);
   }
   render() {
       return <div className="contact">
            <div className="opacityImage"></div>
           <div className="logo"><Link to="/"
           className="logoLink">Awwgraphy</Link></div>
           <div className="book">
               <div className="contactTitle">
                    <h1 className="title">Get in Touch</h1>
                   <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit
                   </p>
               </div>
               <form onSubmit={this.handleFormSubmit} className="form">
                   <input type="text" value={this.state.name} onChange={this.handleNameChange}
                   placeholder="Name" className="formInput"/>
                   <input type="text"  value={this.state.email} onChange={this.handleEmailChange}
                    placeholder="Email" className="formInput"/>
                    <input type="text"  value={this.state.subject} onChange={this.handleSubjectChange}
                     placeholder="Subject" className="formInput"/>
                   <textarea  value={this.state.info} onChange={this.handleInfoChange}
                    placeholder="Your Message" className="formMessage"/>
                   <input type="submit" value='Submit' className="submitButton"/>
                   <div style={this.state.errorStyle} className="error">
                       <ul>
                       {this.state.errors.map((error, i) => {
                            return <li key={i}>
                                 {error}
                            </li>
                        })
                       }
                       </ul>
                   </div>
                   <div style={this.state.successStyle} className="success">{this.state.success}</div><br/>
               </form>
           </div>
       </div>
   }
}

export default Contact;
