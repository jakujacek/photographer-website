import React from 'react';

class Contact extends React.Component {
   constructor() {
       super();
       this.state = {
           name: '',
           forWho: '',
           email: '',
           info: '',
           errors: [],
           success: "Dziękujemy za wiadomość. Wysłano do: ",
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
       let arr = this.state.errors.slice()
       if (this.state.name.length === 0) {
           arr.push("Imię i nazwisko ma zostać wypełnione")
       }
       if (this.state.email.indexOf('@') === -1) {
           arr.push("Pole email nie jest prawidłowo wypełnione")
       }
       if (this.state.info.length === 0) {
           arr.push("Proszę wypełnić pole wiadomości")
       }
       if (this.state.forWho.length === 0) {
           arr.push("Proszę ustawić wydział")
       }
       this.setState({
           errors: arr
       }, () => {
           if (this.state.errors.length !== 0) {
               this.setState({
                   errorStyle: {
                       display: "block",
                       color: "red"
                   }
               })
           } else {
               this.setState({
                   successStyle: {
                       display: "block",
                       color: "green"
                   }
               })
           }
       })
   }

   render() {
       return <div className="form">
           <div style={this.state.errorStyle}>
               <ul>
               {this.state.errors.map(error => {
                    return <li>
                         {error}
                    </li>
                })
               }
               </ul>
           </div>
           <div style={this.state.successStyle}>{this.state.success} {this.state.forWho}</div><br/>
           <form onSubmit={this.handleFormSubmit}>
               <input type="text" value={this.state.name} onChange={this.handleNameChange}
               placeholder="Wpisz Imię i Nazwisko"/><br/>
               <input type="text"  value={this.state.email} onChange={this.handleEmailChange}
                placeholder="Wpisz adres e-mail"/><br/>
               <textarea  value={this.state.info} onChange={this.handleInfoChange}
                placeholder="Wpisz wiadomość:"/><br/>
               <input type="submit" value='Wyślij'/>
           </form>
       </div>
   }
}

export default Contact;
