import React from 'react';
import PropTypes from 'prop-types';

import './MobileClient.css';

class MobileClient extends React.PureComponent {

  static propTypes = {
    id: PropTypes.number.isRequired,
    clientInfo: PropTypes.shape({
      name: PropTypes.string.isRequired,
      secondName: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired
    })
  };

  state = {
    name:this.props.clientInfo.name,
    secondName:this.props.clientInfo.secondName,
    balance:this.props.clientInfo.balance,
  };
  
  editClient = (EO) => {
    EO.stopPropagation();
    this.props.cbEdited(this.props.id);   
  }
  
  deleteClient = (EO) => {
    EO.stopPropagation();
    this.props.cbDeleted(this.props.id);   
  }

  componentWillReceiveProps = (newProps) => {
    const { name, secondName, balance } = this.state;
    const newClientInfo = newProps.clientInfo;

    if (name !== newClientInfo.name || secondName !== newClientInfo.secondName || balance !== newClientInfo.balance) {
      this.setState({
        name: newClientInfo.name,
        secondName: newClientInfo.secondName,
        balance: newClientInfo.balance
      });
    }
  };

  render() {

    console.log("MobileClient id="+this.props.id+" render");
    
    return (
      <div className='MobileClient'>
        <span className='MobileClientName'>{this.state.name+" "+this.state.secondName}</span>
        <span className='MobileClientBalance'>{this.state.balance}</span>
        <span className="MobileClientBtn">
          <input type="button" value="Edit" onClick={this.editClient}/>
        </span>
        <span className="MobileClientBtn">
          <input type="button" value="Delete" onClick={this.deleteClient}/>
        </span>
      </div>
    );

  }

}

export default MobileClient;
