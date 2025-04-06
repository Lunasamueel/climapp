# 🌦️ App de Clima - React Native + Expo

Este é um aplicativo mobile desenvolvido com **React Native** e **Expo**, que permite ao usuário buscar e visualizar informações climáticas detalhadas de qualquer cidade do mundo, de forma simples e intuitiva.

## 📱 Funcionalidades

- **Tela Inicial** com uma interface amigável e limpa.
- **Barra de pesquisa dinâmica**, onde o usuário pode digitar o nome da cidade desejada.
- **Consulta à API OpenWeatherMap** em tempo real.
- **Exibição de dados detalhados do clima**, como:
  - Temperatura atual
  - Sensação térmica
  - Clima (ensolarado, nublado, etc.)
  - Umidade
  - Velocidade do vento
  - Localização (nome da cidade e país)
- Interface em **português** com temperaturas em **graus Celsius**.

## 🔧 Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Axios](https://axios-http.com/) para requisições HTTP
- [OpenWeatherMap API](https://openweathermap.org/api) para dados climáticos

## 📦 Instalação e Execução

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo

# Instale as dependências
npm install
# ou
yarn
🔑 Configuração da API
Adicione sua chave da API do OpenWeatherMap no app.config.js ou arquivo .env, dependendo de como estiver configurado seu projeto:

js
Copiar
Editar
extra: {
  API_KEY: "SUA_CHAVE_AQUI"
}
▶️ Executar o app
bash
Copiar
Editar
npx expo start
Abra o app no seu dispositivo físico com o Expo Go ou em um emulador Android/iOS.
