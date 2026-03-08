# Simulador de Previdência Privada

![React](https://img.shields.io/badge/React-18.x-blue)
![Vite](https://img.shields.io/badge/Vite-4.x-646CFF)
![Tailwind](https://img.shields.io/badge/Tailwind-3.x-06B6D4)

Simulador financeiro desenvolvido com React, Vite e Tailwind CSS para cálculo de valor futuro de investimentos mensais em previdência privada. O projeto foca em fornecer uma interface rápida, intuitiva e precisa para projeções de juros compostos.

## Acesse o Projeto

**Link da aplicação online:** [https://coimbraitalo01.github.io/simulador-previdencia/](https://coimbraitalo01.github.io/simulador-previdencia/)

## Funcionalidades

- **Cálculo de Rendimentos**: Simulação baseada em juros compostos com aportes mensais
- **Processamento em Tempo Real**: Atualização instantânea dos cálculos conforme alteração dos inputs
- **Parâmetros de Simulação**:
  - Valor do aporte mensal
  - Período total de contribuição (em anos)
  - Taxa de retorno anual estimada
- **Interface Adaptável**: Design responsivo com suporte aos modos claro e escuro

## Stack Tecnológica

| Tecnologia | Finalidade |
|------------|------------|
| React | Biblioteca principal para construção da interface (v18+) |
| Vite | Ferramenta de build para desenvolvimento e otimização |
| Tailwind CSS | Framework utilitário para estilização e responsividade |
| React Hook Form | Gerenciamento de formulários e validação de dados |
| Jest | Execução de testes unitários para validar a lógica financeira |

## Como Executar Localmente

Para rodar o projeto em ambiente de desenvolvimento:

```bash
# Clonar o repositório
git clone https://github.com/Coimbraitalo01/simulador-previdencia.git

# Entrar no diretório
cd simulador-previdencia

# Instalar as dependências
npm install

# Iniciar o servidor de desenvolvimento
npm run dev
