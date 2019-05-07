// Start React App
class App extends React.Component {
  render() {
    return (
      React.createElement("div", { class: "centered" },
      React.createElement(Box, null),
      React.createElement(QuoteButton, null)));


  }}


class Box extends React.Component {
  render() {
    return (
      React.createElement("div", null,
      React.createElement("h1", null, "\"Here's the div\"")));


  }}


class QuoteButton extends React.Component {
  render() {
    return (
      React.createElement("div", null,
      React.createElement("button", null, "Select a quote")));


  }}


ReactDOM.render(React.createElement(App, null), document.getElementById('app'));