// Start React App
class App extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div class="centered">
        <Box initialQuote="Mulher Sofre" initialAuthor="Rosa, Karen"/>
      </div>
    );
  }
}

class Box extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      quote: props.initialQuote,
      author: props.initialAuthor
    }
  }
  
  changeQuote(){
    const quotesList =[
      {quote :"We'll never fall apart cuz we fit together right.",
      author: "Lovato, Demi"},
       {quote :"Paranoica",
      author: "Rosa, Karen"},
       {quote :"Like Neon lights",
      author: "Lovato, Demi"},
       {quote :"Love Yourself",
      author: "BTS, Johnny"},
       {quote :"Love is beautiful",
      author: "LastName , First Name"}
    ];
    let randomIndex = Math.floor(Math.random()*quotesList.length);
    this.setState(quotesList[randomIndex]);
    
  }
  render() {
    return (
      <div id="quote-box">
        <h1 id="text">"{this.state.quote}"</h1>
        <h2 id="author">- {this.state.author}</h2>
        <button><a id="tweet-quote" href="https://twitter.com/intent/tweet">tweet this quote</a></button>
        <button id="new-quote" onClick={this.changeQuote.bind(this)}>new quote</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
