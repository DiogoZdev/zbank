import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import './App.scss';

import Box from './components/Box';
import Icon from './components/Icon';


function App() {

  const account = {
    id:'5824',
    agency:'55852-8',
    balance:2800.35,
    savings:500,
    investments:1500,
    bclass:'A',

    addToBalance: function(toAdd) {
      this.balance += toAdd;
    },

    getBalance: function() {
      return this.balance;
    },

    withdraw: function(toWithdraw) {
      if (toWithdraw > this.balance){
        return ErrorEvent = () => {
          alert('Saldo insuficiente');
        }
      } else {
        this.balance -= toWithdraw;
      }
    },
  }

  let user = {
    name:'Diogo',
    surname:'Larsen',
    document:'123654789-12',
    agency:account.agency,
    account: account.id,
  }

  document.title = `Olá, ${user.name}`;

  return (
    <>
      <div className="wrapper">
        <div classname="screen">
          <div className="header">
              <div className="header-top row">
                <div className="welcome">
                  Olá, {user.name}! <br/>
                  {account.id} / {account.agency} {account.bclass}
                </div>
                <div className="menu">☰</div>
              </div>

              <div className="header-bottom">
                <div className="content-row">
                  <Icon type="pagar" />
                  <Icon type="transferir" />
                  <Icon type="pix" />
                  <Icon type="extrato" />
                </div>
              </div>
          </div>
          <main className="main">
            <div className="content-col">
              <Box title="Conta Corrente" value={parseFloat(account.balance).toFixed(2)}/>
              <Box title="Poupança" value={parseFloat(account.savings).toFixed(2)}/>
              <Box title="Investimentos" value={parseFloat(account.investments).toFixed(2)}/>
            </div>
          </main>
          <footer className="footer">
            <div className="content-col">

            </div>
          </footer>
        </div>
      </div>
    </>
  );
}


export default App;