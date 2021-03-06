import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: 'is-primary',
      size: null,
    };

    this.colors = [
      'is-primary',
      'is-link',
      'is-info',
      'is-success',
      'is-danger',
      'is-warning',
      'is-white',
      'is-light',
      'is-dark',
      'is-black',
      'is-text',
      null,
    ];

    this.sizes = ['is-large', 'is-medium', 'is-small', null];
  }

  handleButtonClick = e => {
    const sizes = this.sizes.filter(s => s !== this.state.size);
    const colors = this.colors.filter(c => c !== this.state.color);

    this.setState({
      color: colors[Math.floor(Math.random() * this.colors.length)],
      size: sizes[Math.floor(Math.random() * this.sizes.length)],
    });
  };

  render() {
    return (
      <div className="container">
        <bm-button size={this.state.size} color={this.state.color} onClick={this.handleButtonClick}>
          Click Me!
        </bm-button>

        <style jsx>{`
          .container {
            margin: 0 auto;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
          }
        `}</style>
      </div>
    );
  }
}

export default Home;
