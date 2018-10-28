import React from 'react';
import PropTypes from 'prop-types';

import MobileClient from './MobileClient';

import './MobileCompany.css';

class MobileCompany extends React.PureComponent {

  static propTypes = {
    clients:PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        secondName: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
      })
    )
  };

  state = {
    clients: this.props.clients,
    filteredClients: this.props.clients,
    currentClientId: null,
    workMode: 0
  };

  defineNewId = () => {
    let maxId = this.state.clients.reduce((isMax, item) => (isMax > item ? isMax : item) );
    return maxId.id+1
  }

  currentClient = null

  addClient = () => {
    this.state.workMode !== 1 && 
      this.setState({
        workMode: 1
      });
    this.currentClient = {id:this.defineNewId(), name:"", secondName:"", balance:0}
  }

  changeValue = (EO) => { 

    let key = EO.target.name;
    let val = EO.target.value;

    key == "balance"
    ? this.currentClient[key] = +val
    : this.currentClient[key] = val;
  }

  cancelEdit = () => {
    this.setState({
      workMode: 0
    });
  }

  editClient = (id) => {
    let clientEdited = this.state.clients.filter(c => {
      return c.id == id
    });
    this.currentClient = clientEdited[0];

    this.setState({
      workMode: 2,
      currentClientId: id
    });

    console.log(this.state.currentClientId)

  }

  saveValue = (EO) => {
    EO.preventDefault();

    if(this.state.workMode == 1) {
      let newFilteredClients = [...this.state.clients, this.currentClient];
      
      this.setState({
        filteredClients: [...newFilteredClients],
        clients: [...newFilteredClients],
        workMode: 0
      });
    }

    if(this.state.workMode == 2) {
      let newFilteredClients = [...this.state.clients];
      newFilteredClients.forEach((c, i) => {
        c.id == this.currentClient.id && (newFilteredClients[i] = this.currentClient)
      });

      this.setState({
        filteredClients: newFilteredClients,
        clients: newFilteredClients,
        workMode: 0
      });
    }

    console.log(this.state.workMode)
  }
  
  deleteClient = (id) => {
    let newFilteredClients = [...this.state.clients];
    newFilteredClients.forEach((c, i) => {
      if (c.id == id) {
        newFilteredClients.splice(i, 1);
        return;
      }
    });
    this.setState({
      filteredClients: newFilteredClients,
      clients: newFilteredClients
    })
  }

  showActive = () => {
    if (this.state.filter != "showActive") {
      let newFilteredClients = this.state.clients.filter(c => {
        return c.balance > 0;
      });
      this.setState({
        filteredClients: newFilteredClients,
        filter: "showActive"
      })
    }
  }

  showBlocked = () => {
    if (this.state.filter != "showBlocked") {
      let newFilteredClients = this.state.clients.filter(c => {
        return c.balance <= 0;
      });
      this.setState({
        filteredClients: newFilteredClients,
        filter: "showBlocked"
      })
    }
  }

  showAll = () => {
    if (this.state.filter != "showAll") {
      this.setState({
        filteredClients: [...this.state.clients],
        filter: "showAll"
      })
    }
  }
  
  render() {

    console.log("MobileCompany render");

    var clientsCode=this.state.filteredClients.map( client => {

      return (
        <MobileClient 
          key={client.id} 
          clientInfo={client} 
          cbDeleted={this.deleteClient}
          cbEdited={this.editClient}
        />);
      }
    );

    return (
      <div className='MobileCompany'>
        <div className="Buttons">
          <input type="button" value="Show Active" onClick={this.showActive}/>
          <input type="button" value="Show Blocked" onClick={this.showBlocked}/>
          <input type="button" value="Clear filter" onClick={this.showAll}/>
        </div>
        <div className='MobileCompanyName'>Mobile company</div>
        <div className='MobileCompanyClients'>
          {clientsCode}
        </div>

        {
          this.state.workMode == 0 && 
          (
            <div className="Buttons">
              <input type="button" value="Add" onClick={this.addClient}/>
            </div>
          )
        }

        {
          this.state.workMode == 1 && 
          (
          <form className="EditClient">
            <input type="text" name="name" placeholder="Name" onChange={this.changeValue}/>
            <input type="text" name="secondName" placeholder="Second Name" onChange={this.changeValue}/>
            <input type="text" name="balance" placeholder="Balance" onChange={this.changeValue}/>

            <div>
              <input type="submit" value="Save" onClick={this.saveValue}/>
              <input type="button" value="Cancel" onClick={this.cancelEdit}/>
            </div>
            
          </form>
          )

        }

        {
          this.state.workMode == 2 && 
          (          
          <form className="EditClient">
            <input type="text" name="name" defaultValue={this.currentClient.name} onChange={this.changeValue}/>
            <input type="text" name="secondName" defaultValue={this.currentClient.secondName} onChange={this.changeValue}/>
            <input type="text" name="balance" defaultValue={this.currentClient.balance} onChange={this.changeValue}/>

            <div>
              <input type="submit" value="Save" onClick={this.saveValue}/>
              <input type="button" value="Cancel" onClick={this.cancelEdit}/>
            </div>
            
          </form>
          )

        }

      </div>
    );

  }

}

export default MobileCompany;
