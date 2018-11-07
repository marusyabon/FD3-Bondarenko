"use strict";

import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, configure  } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


import MobileCompany from '../components/MobileCompany';

configure({ adapter: new Adapter() });

describe('>>>>MOBILE COMPANY functions', () => {

  let clientsArr=[ 
    {id:101, secondName:"Иванов", name:"Иван", balance:200}, 
    {id:105, secondName:"Сидоров", name:"Сидор", balance:250}, 
    {id:110, secondName:"Петров", name:"Пётр", balance:180},
    {id:120, secondName:"Григорьев", name:"Григорий", balance:220},
    {id:121, secondName:"Павлов", name:"Павел", balance:-20},
    {id:122, secondName:"Сергеев", name:"Сергей", balance:-320},
    {id:123, secondName:"Юрьев", name:"Юрий", balance:0},
  ];  
  
  let wrapper;
  let company = <MobileCompany clients={clientsArr}/>;

  beforeEach(()=>{
    wrapper = shallow(company)
  })

  it('ADD CLIENT', () => {
    wrapper.instance().addClient();
    wrapper.instance().saveValue();

    let clients = wrapper.state('clients');

    expect(clients.length).toEqual(8);
    expect(clients[clients.length-1].id).toEqual(124);
  });

  it('CHANGE CLIENT', () => {
    wrapper.instance().editClient(120);
    wrapper.instance().currentClient.secondName = 'Власов';
    wrapper.instance().currentClient.balance = 150;

    let editingClient = wrapper.state('clients')[3];

    expect(editingClient.name).toEqual('Григорий');
    expect(editingClient.secondName).toEqual('Власов');
    expect(editingClient.balance).toEqual(150);
  });

  it('DELETE CLIENT', () => {
    wrapper.instance().deleteClient(101);
    expect(wrapper.state('clients').length).toEqual(6);
    expect(wrapper.state('clients')[0].id).toEqual(105);
  });

  it('SHOW ACTIVE', () => {
    wrapper.instance().showActive();
    expect(wrapper.state('filteredClients').length).toEqual(4);
    expect(wrapper.state('filteredClients')[2].balance).toEqual(180);
  });

  it('SHOW BLOCKED', () => {
    wrapper.instance().showBlocked();
    expect(wrapper.state('filteredClients').length).toEqual(3);
    expect(wrapper.state('filteredClients')[0].name).toEqual('Павел');
  });

  //SNAPSHOT
  let component = renderer.create(company);

  it('CHECK RENDER', () => {
    let componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();
  });
})