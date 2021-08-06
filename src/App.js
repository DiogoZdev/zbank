import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import './App.scss';
import logo from './zbank.svg';

import Box from './components/Box';
import Icon from './components/Icon';
import Input from './components/Input';
import Button from './components/Button';


function App() {

  const account = {
    branch:'1234',
    accountID:'12435-6',
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
    branch:account.branch,
    account: account.accountID,
  }

  document.title = `zBank - ${user.name}`;

  return (
    <>
      <div className="wrapper">
        <div className="login-panel">
          <div className="login-panel-content">
            <div className="logo-area"><img src={logo} alt="zbank icon"/></div>
            <Input type="number" placeholder="CPF"/>
            <Input type="password" placeholder="Senha"/>
            <Button value="Acessar" action="login"/>
          </div>
        </div>
        <div classname="screen">
          <div className="header">
              <div className="header-top row">
                <div className="welcome">
                  Olá, {user.name}! <br/>
                  {account.accountID} / {account.branch} {account.bclass}
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
              <Box title="Conta Corrente" value={parseFloat(account.balance).toFixed(2)} btnInfo="Ver extrato"/>
              <Box title="Poupança" value={parseFloat(account.savings).toFixed(2)} btnInfo="Mais detalhes"/>
              <Box title="Investimentos" value={parseFloat(account.investments).toFixed(2)} btnInfo="Ver aplicações"/>
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