import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faExchangeAlt, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import Web3 from 'web3';
import './TokenTransfer.css';

const TokenTransfer = () => {
  const [destinatario, setDestinatario] = useState('');
  const [valor, setValor] = useState('');
  const [quantidadeCompra, setQuantidadeCompra] = useState('');
  const [quantidadeTroca, setQuantidadeTroca] = useState('');
  const [dataHoraAtual, setDataHoraAtual] = useState(new Date().toLocaleString());
  const [conexaoEstabelecida, setConexaoEstabelecida] = useState(false);
  const [numeroConta, setNumeroConta] = useState('');
  const [contaParaInserir, setContaParaInserir] = useState('');

  // Adicione o estado para a instância Web3
  const [web3, setWeb3] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDataHoraAtual(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Função para conectar a carteira
    const conectarCarteira = async () => {
      try {
        // Verifica se o MetaMask está instalado
        if (window.ethereum) {
          const novaInstanciaWeb3 = new Web3(window.ethereum);
          await window.ethereum.enable(); // Solicita permissão para acessar a carteira
          setWeb3(novaInstanciaWeb3);
          setConexaoEstabelecida(true);
        } else {
          alert('Por favor, instale o MetaMask para utilizar esta funcionalidade.');
        }
      } catch (error) {
        console.error('Erro ao conectar a carteira:', error);
      }
    };

    conectarCarteira();
  }, []);

  const comprarTokens = async () => {
    // Adicione lógica de compra de tokens aqui
  };

  const trocarTokens = async () => {
    // Adicione lógica de troca de tokens aqui
  };

  const transferirTokens = async () => {
    // Adicione sua lógica de transferência de tokens aqui
  };

  const handleConectarCarteira = () => {
    if (web3) {
      setConexaoEstabelecida(!conexaoEstabelecida);

      if (!conexaoEstabelecida) {
        // Substitua com a lógica real para obter o número da conta da carteira
        web3.eth.getAccounts().then((contas) => {
          setNumeroConta(contas[0]);
        });
      } else {
        setNumeroConta('');
      }
    }
  };

  const handleInserirConta = () => {
    setNumeroConta(contaParaInserir);
    setContaParaInserir('');
  };

  return (
    <div className="container">
      <h2>Carteira de Transferência de Tokens</h2>
      <div className={`connect-wallet-container ${conexaoEstabelecida ? 'connected' : ''}`}>
        <button className="connect-wallet-button" onClick={handleConectarCarteira}>
          Conectar Carteira
          <div className="connection-indicator"></div>
        </button>
        <p className="data-hora">{dataHoraAtual}</p>
        {conexaoEstabelecida && <p className="numero-conta">Número da Conta: {numeroConta}</p>}
      </div>

      {conexaoEstabelecida && (
        <div className="info-section">
          <p>Endereço:</p>
          <p>Saldo da Carteira:</p>
          <Form.Group controlId="formInserirConta" className="form-group">
            <Form.Label className="form-group-label">Inserir Conta:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite a conta"
              value={contaParaInserir}
              onChange={(e) => setContaParaInserir(e.target.value)}
              className="form-control"
            />
            <Button variant="primary" onClick={handleInserirConta} className="btn-primary">
              Inserir Conta
            </Button>
          </Form.Group>
        </div>
      )}

      <Form>
        <Form.Group controlId="formDestinatario" className="form-group">
          <h3 className="transfer-heading">Transferir Dinheiro</h3>
          <Form.Label className="form-group-label">Endereço do Destinatário:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite o endereço do destinatário"
            value={destinatario}
            onChange={(e) => setDestinatario(e.target.value)}
            className="form-control"
          />
        </Form.Group>

        <Form.Group controlId="formValor" className="form-group">
          <Form.Label className="form-group-label">Valor a Transferir:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite a quantidade de tokens"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            className="form-control"
          />
        </Form.Group>

        <Form.Group controlId="formCompra" className="form-group">
          <Form.Label className="form-group-label">Quantidade a Comprar:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite a quantidade de tokens a comprar"
            value={quantidadeCompra}
            onChange={(e) => setQuantidadeCompra(e.target.value)}
            className="form-control"
          />
        </Form.Group>

        <Form.Group controlId="formTroca" className="form-group">
          <Form.Label className="form-group-label">Quantidade a Trocar:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite a quantidade de tokens a trocar"
            value={quantidadeTroca}
            onChange={(e) => setQuantidadeTroca(e.target.value)}
            className="form-control"
          />
        </Form.Group>

        <Button variant="success" onClick={comprarTokens} className="btn-primary">
          <FontAwesomeIcon icon={faShoppingCart} /> Comprar Tokens
        </Button>

        <Button variant="info" onClick={trocarTokens} className="btn-primary">
          <FontAwesomeIcon icon={faExchangeAlt} /> Trocar Tokens
        </Button>

        <Button variant="primary" onClick={transferirTokens} className="btn-primary">
          <FontAwesomeIcon icon={faMoneyBill} /> Transferir Tokens
        </Button>
      </Form>
    </div>
  );
};

export default TokenTransfer;
