// Random Quote Machine - freeCodeCamp Project
class App extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div class="container">
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
      {quote :"De grao em grao a galinha enche o pipo",
      author: "Rosa, Kaio"},
       {quote :"Paranoia",
      author: "Rosa, Karen"},
       {quote :"Mulher Sofre",
      author: "Rosa, Karen"},
       {quote :"Love Yourself",
      author: "BTS, Johnny"},
       {quote :"Que loca!",
      author: "Rosa , Karen"},
      {quote :"Ai a vaca...",
      author: "Rosa , Kamila"},
      {quote :"Sabia que o sarara sabia sarara",
      author: "Rosa , Kamila"},
      {quote :"I am a Larry Shipper",
      author: "Rosa , Kamila"},
      {quote :"Minha cabeça ta coçando para cachorro",
      author: "Rosa , Kamila"},
      {quote :"Gonzaguinha...",
      author: "Rosa , Kamila"},
      {quote :"Choro de rico é igual agua benta..",
      author: "Rosa ,Karen "},
      {quote :"Mila show",
      author: "Rosa , Kamila "},
      {quote :"Super uper",
      author: "Rosa , Kaio"},
      {quote :"Sal sifufu",
      author: "Rosa , Jocilia"}
    ];
    let randomIndex = Math.floor(Math.random()*quotesList.length);
    this.setState(quotesList[randomIndex]);
    
  }
  render() {
    return ( 
      <div id="quote-box">
        <h1 id="text">"{this.state.quote}"</h1>
        <h2 id="author">- {this.state.author}</h2>
        <div id="btns-display">
          <button><a id="tweet-quote" href="https://twitter.com/intent/tweet">tweet this quote</a></button>
         <button id="new-quote" onClick={this.changeQuote.bind(this)}>new quote</button>   
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
