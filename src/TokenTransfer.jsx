import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faExchangeAlt, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
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

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDataHoraAtual(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(intervalId);
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

  // Adicione sua lógica para exibir número da conta da carteira de tokens após conectada aqui.
  const handleConectarCarteira = () => {
    // Adicione a lógica de conexão da carteira aqui
    // Atualize o estado de 'conexaoEstabelecida' com o resultado da conexão
    setConexaoEstabelecida(!conexaoEstabelecida); // Inverte o estado atual

    // Simule um número de conta ao se conectar (substitua com sua lógica real)
    if (!conexaoEstabelecida) {
      setNumeroConta('1234567890'); // Substitua com o número de conta real
    } else {
      setNumeroConta('');
    }
  };

  const handleInserirConta = () => {
    setNumeroConta(contaParaInserir);
    setContaParaInserir('');
  };

  return (
    <div className="container">
      <h2>Carteira de Transferência de Tokens</h2>
      <div className="connect-wallet-container">
        {conexaoEstabelecida ? (
          <button
            className={`connect-wallet-button ${conexaoEstabelecida ? 'connected' : ''}`}
            onClick={handleConectarCarteira}
          >
            Conectar Carteira
            {conexaoEstabelecida && <div className="connection-indicator"></div>}
          </button>
        ) : null}
        <p className="data-hora">{dataHoraAtual}</p>
        {conexaoEstabelecida && <p className="numero-conta">Número da Conta: {numeroConta}</p>}
      </div>
  
      {conexaoEstabelecida && (
        <div className="info-section">
          <p>Endereço:</p>
          <p>Saldo da Carteira:</p>
          {/* Adicionando o campo de inserir conta */}
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

      {/* Formulário de Transferência aqui */}
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

        {/* Seção de Compra */}
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

        {/* Seção de Troca */}
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

        {/* Botão de Compra */}
        <Button variant="success" onClick={comprarTokens} className="btn-primary">
          <FontAwesomeIcon icon={faShoppingCart} /> Comprar Tokens
        </Button>

        {/* Botão de Troca */}
        <Button variant="info" onClick={trocarTokens} className="btn-primary">
          <FontAwesomeIcon icon={faExchangeAlt} /> Trocar Tokens
        </Button>

        {/* Botão de Transferir Token */}
        <Button variant="primary" onClick={transferirTokens} className="btn-primary">
          <FontAwesomeIcon icon={faMoneyBill} /> Transferir Tokens
        </Button>
      </Form>
    </div>
  );
};

export default TokenTransfer;
