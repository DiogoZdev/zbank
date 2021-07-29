import React, { useState } from 'react';
import styled from 'styled-components';
import styles from './App.css';



const Wrapper = styled.div`
  display: block;
  overflow: hidden;
  background-color: #fff;
  margin-top: 3rem;
  width: 450px;
  aspect-ratio: 1/1.8;
  border: 1rem #222 solid;
  border-radius: 2.5rem;
`;

const Screen = styled.div``;
const Header = styled.div``;
const Icon = styled.div``;
const Main = styled.div``;
const Content = styled.div``;
const Box = styled.div``;
const Footer = styled.div``;

function App() {

  let account = {
    id:'5824',
    agency:'55852-8',
    balance:0,
    savings:0,
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


  return (
    <>
      <Wrapper>
        <Screen classname="screen">
          <Header className="header">
              <div className="header-top row">
                <div className="welcome">
                  Olá, {user.name}! <br/>
                  {account.id} / {account.agency}
                </div>
                <div className="menu">☰</div>
              </div>

              <div className="header-bottom">
                <Content className="content-row">
                  <Icon className="square-icon">
                    <div className="icon-icon">$</div>
                    <div className="icon-title">pagar</div>
                  </Icon>
                  <Icon className="square-icon">
                    <div className="icon-icon">$</div>
                    <div className="icon-title">transferir</div>
                  </Icon>
                  <Icon className="square-icon">
                    <div className="icon-icon">$</div>
                    <div className="icon-title">pix</div>
                  </Icon>
                  <Icon className="square-icon">
                    <div className="icon-icon">$</div>
                    <div className="icon-title">extrato</div>
                  </Icon>
                </Content>
              </div>
          </Header>
          <Main className="main">
            <div className="content-col">
              <Box className="content-box"><h2>Conta Corrente</h2></Box>
              <Box className="content-box"><h2>Poupança</h2></Box>
              <Box className="content-box"><h2>Investimentos</h2></Box>
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
