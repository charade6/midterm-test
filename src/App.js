import React from 'react'

class App extends React.Component {
  state = {
    fruits: null
  }
  apple = () => {
    this.setState({fruits: "사과."})
  }
  orange = () => {
    this.setState({fruits: "오렌지."})
  }
  banana = () => {
    this.setState({fruits: "바나나."})
  }
  render() {
    return (
      <div>
        <h1>어떤 과일을 좋아하나요? {this.state.fruits}</h1>
        <button onClick={this.apple}>사과</button>
        <button onClick={this.orange}>오렌지</button>
        <button onClick={this.banana}>바나나</button>
      </div>
    )
  }
}

export default App