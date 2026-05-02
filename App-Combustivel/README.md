<div align="center">
  <h1>Gasolina ou Álcool?</h1>
  <p>Aplicativo mobile desenvolvido com React Native, Expo e TypeScript para comparar os preços da gasolina e do álcool.</p>

  <p>
    <img src="https://github.com/joaovitor1-mg/App-Dados/blob/main/assets/visualizacao.jpg" alt="Visualização do aplicativo Gasolina ou Álcool?" width="220" />
  </p>
</div>

## Sobre o projeto

O Gasolina ou Álcool? é um aplicativo simples e didático criado para um trabalho acadêmico. O usuário informa o preço da gasolina e o preço do álcool, toca no botão de cálculo e recebe a recomendação de qual combustível compensa mais, com base na regra de 70%.

## Tecnologias utilizadas

- React Native
- Expo
- TypeScript

## Funcionalidades

- Exibição de uma interface simples, limpa e fácil de usar
- Campo para digitar o preço da gasolina
- Campo para digitar o preço do álcool
- Aceita valores com vírgula ou ponto
- Validação dos campos com alerta em caso de erro
- Cálculo automático da proporção entre os combustíveis
- Recomendação final informando se compensa mais usar álcool ou gasolina

## Como rodar no celular

### 1. Clonar o repositório

```bash
git clone [URL_DO_SEU_REPOSITORIO]
```

### 2. Entrar na pasta do app

```bash
cd App-Combustivel
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Iniciar o projeto com Expo

```bash
npx expo start
```

### 5. Abrir no celular

1. Instale o aplicativo `Expo Go` no seu celular.
2. Conecte o celular e o computador na mesma rede Wi-Fi.
3. Com o Expo iniciado, escaneie o QR Code exibido no terminal ou no navegador.
4. Aguarde o carregamento do aplicativo no celular.

## Observação importante

Na primeira execução, não basta apenas rodar `git clone` e `npx expo start`. O fluxo correto é:

```bash
git clone [URL_DO_SEU_REPOSITORIO]
cd App-Combustivel
npm install
npx expo start
```

Se houver problema para abrir o projeto pela rede local, tente iniciar com:

```bash
npx expo start --tunnel
```
