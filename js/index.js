// Random Quote Machine - freeCodeCamp Project
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      React.createElement("div", { class: "container" },
      React.createElement(Box, { initialQuote: "Mulher sofre", initialAuthor: "Rosa, Karen" })));


  }}


class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: props.initialQuote,
      author: props.initialAuthor };

  }

  changeQuote() {
    const quotesList = [
    { quote: "De grao em grao a galinha enche o pipo",
      author: "Rosa, Kaio" },
    { quote: "Paranoia",
      author: "Rosa, Karen" },
    { quote: "Mulher sofre",
      author: "Rosa, Karen" },
    { quote: "Love Yourself",
      author: "BTS, Johnny" },
    { quote: "Que loca!",
      author: "Rosa , Karen" },
    { quote: "Ai a vaca...",
      author: "Rosa , Kamila" },
    { quote: "Sabia que o sarara sabia sarara",
      author: "Rosa , Kamila" },
    { quote: "É uma Larry Shipper",
      author: "Rosa , Kamila" },
    { quote: "Minha cabeça ta coçando para cachorro",
      author: "Rosa , Kamila" },
    { quote: "Gonzaguinha...",
      author: "Rosa , Kamila" },
    { quote: "Choro de rico é igual agua benta",
      author: "Rosa ,Karen " },
    { quote: "Mila show",
      author: "Rosa , Kamila " },
    { quote: "Super uper",
      author: "Rosa , Kaio" },
    { quote: "Sal sifufu",
      author: "Rosa , Jocilia" }];

    let randomIndex = Math.floor(Math.random() * quotesList.length);
    this.setState(quotesList[randomIndex]);

  }
  render() {
    return (
      React.createElement("div", { id: "quote-box" },
      React.createElement("div", { id: "quote-text" },
      React.createElement("h1", { id: "text" }, "\"", this.state.quote, "\""),
      React.createElement("h2", { id: "author" }, "- ", this.state.author)),

      React.createElement("div", { id: "btns-display" },
      React.createElement("a", { id: "tweet-quote", href: "https://twitter.com/intent/tweet" }, " ", React.createElement("i", { class: "fab fa-twitter-square fa-3x" })),
      React.createElement("button", { id: "new-quote", onClick: this.changeQuote.bind(this) }, "new quote"))));



  }}


ReactDOM.render(React.createElement(App, null), document.getElementById("app"));