<div align="center">
  <h1>App Sorte</h1>
  <p>Aplicativo mobile desenvolvido com React Native, Expo e TypeScript para simular o sorteio de um dado.</p>

  <p>
    <img src="https://github.com/joaovitor1-mg/App-Dados/blob/main/assets/visualizacao-projeto.jpg" alt="Visualização do aplicativo App Sorte" width="280" />
  </p>
</div>

## Sobre o projeto

O App Sorte é um aplicativo simples e didático criado para um trabalho acadêmico. Ao tocar no dado exibido na tela, o app realiza um novo sorteio entre os números de 1 a 6, atualiza a face correspondente e mostra o resultado para o usuário.

## Tecnologias utilizadas

- React Native
- Expo
- TypeScript

## Funcionalidades

- Exibição da face atual do dado
- Sorteio de um número de 1 a 6 ao tocar na imagem
- Bloqueio de repetição imediata do mesmo número
- Alteração dinâmica da cor de fundo conforme o valor sorteado

## Como rodar no celular

### 1. Clonar o repositório

```bash
git clone https://github.com/joaovitor1-mg/App-Dados.git
```

### 2. Entrar na pasta do app

```bash
cd App-Dados/Dados
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
git clone https://github.com/joaovitor1-mg/App-Dados.git
cd App-Dados/Dados
npm install
npx expo start
```

Se houver problema para abrir o projeto pela rede local, tente iniciar com:

```bash
npx expo start --tunnel
```
