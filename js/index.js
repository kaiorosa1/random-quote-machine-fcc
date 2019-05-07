// Start React App
class App extends React.Component {
  render() {
    return (
      <div class="centered">
        <Box initialQuote="Initial quote"/>
      </div>
    );
  }
}

class Box extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      quote: props.initialQuote
    }
  }
  
  changeQuote(){
    
    this.setState({
      quote :"Another Quote"
    });
    
  }
  render() {
    return (
      <div>
        <h1>{this.state.quote}</h1>
        <button onClick={this.changeQuote.bind(this)}>select a quote</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
