import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import './App.scss';

import Box from './components/Box';
import Icon from './components/Icon';


const Wrapper = styled.div`
  display: block;
  overflow: hidden;
  background-color: #fff;

  margin: 2rem auto;
  width: 450px;
  aspect-ratio: 9/16;
  border: 1rem #222 solid;
  border-radius: 2.5rem;

  @media (max-width:450px){
    width:100%;
    border:none;
  }
`;

const Screen = styled.div``;
const Header = styled.div``;
const Main = styled.div``;
const Content = styled.div``;
const Footer = styled.div``;

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
      <Wrapper>
        <Screen classname="screen">
          <Header className="header">
              <div className="header-top row">
                <div className="welcome">
                  Olá, {user.name}! <br/>
                  {account.id} / {account.agency} {account.bclass}
                </div>
                <div className="menu">☰</div>
              </div>

              <div className="header-bottom">
                <Content className="content-row">
                  <Icon type="pagar" />
                  <Icon type="transferir" />
                  <Icon type="pix" />
                  <Icon type="extrato" />
                </Content>
              </div>
          </Header>
          <Main className="main">
            <div className="content-col">
              <Box title="Conta Corrente" value={parseFloat(account.balance).toFixed(2)}/>
              <Box title="Poupança" value={parseFloat(account.savings).toFixed(2)}/>
              <Box title="Investimentos" value={parseFloat(account.investments).toFixed(2)}/>
            </div>
          </Main>
          <Footer className="footer">
            <div className="content-col">

            </div>
          </Footer>
        </Screen>
      </Wrapper>
    </>
  );
}


export default App;