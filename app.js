//Function Component
function WelcomeFunc({ name, children }) {
  // name  est une proprieté (props)

  return (
    <div>
      <h1>Bonjour {name} </h1>
      <p>{children}</p>
    </div>
  );
}

//Class Components
class Welcome extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Bonjour {this.props.name} </h1>
        <p>{this.props.children}</p>
      </div>
    );
  }
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    this.timer = null;
  }
  //Determiner le moment ou le composant à été monté
  componentDidMount() {
    this.timer = window.setInterval(this.tick.bind(this), 1000);
  }
  //Permet de savoir quand est ce qu'un composant est supprimé
  componentwillUnmount() {
    window.clearInterval(this.timer);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    const date = new Date();
    return (
      <div>
        Il est {this.state.date.toLocaleDateString()}{" "}
        {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}

class InCrementer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { n: props.start, timer: null };
  }
  //J'attends que le component soit monté
  //Et lorsque qu'il est monté je vais démarré mon time
  componentDidMount() {
    this.play();
  }
  //Je vais ecouter le component
  //Et lorque qu'il est non monté  je supprime mon timer
  componentwillUnmount() {
    window.clearInterval(this.state.timer);
  }

  increment() {
    this.setState((state, props) => ({ n: state.n + props.step }));
  }

  pause() {
    window.clearInterval(this.state.timer);
    this.setState({
      timer: null,
    });
  }

  play() {
    this.setState({
      timer: window.setInterval(this.increment.bind(this), 1000),
    });
  }
  render() {
    console.log(this.state.n);
    return (
      <div>
        Valeur : {this.state.n}
        <button
          onClick={
            this.state.timer ? this.pause.bind(this) : this.play.bind(this)
          }
        >
          {this.state.timer ? "Pause" : "Play"}
        </button>{" "}
        :{/* <button onClick={this.play.bind(this)}>Play</button> */}
      </div>
    );
  }
}

InCrementer.defaultProps = {
  start: 0,
  step: 1,
};

function Home() {
  return (
    <div>
      <Welcome name="Dorothée" />
      <Welcome name="Pierre" />
      <Welcome name="Paul" />
      <Clock />
      <InCrementer />
    </div>
  );
}
//Name est un attribut et devient une props de Welcome
ReactDOM.render(<Home />, document.querySelector("#app"));
