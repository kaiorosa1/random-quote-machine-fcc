// Random Quote Machine - freeCodeCamp Project
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      React.createElement("div", { class: "container" },
      React.createElement(Box, { initialQuote: "'The only way you are going to have success is to have lots of failures first", initialAuthor: "Sergey Brin" })));


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
    { quote: "We are what we repeatedly do. Excellence then, is not an act but a habit!",
      author: "Aristotle" },
    { quote: "Anyone who has never made a mistake has never tried anything new",
      author: "Albert Einstein" },
    { quote: "Tomorrow becomes never. No matter how small the task, take the first step now!",
      author: "Tim Ferriss" },
    { quote: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney" }];


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