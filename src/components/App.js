import React, { Component } from 'react';
import Canvas from './Canvas';
import Pixel from './Pixel';

import './App.scss';

class App extends Component {

  state = {
    pixels: [...new Array(256)].map((_, index) => ({ index, active: false })),
  }

  togglePixel = (index) => {
    this.setState((state) => {
      const { pixels } = state;
      return {
        pixels: pixels.map((pixel, i) => (
          i === index ? { ...pixel, active: !pixel.active } : pixel
        )),
      };
    });
  }

  handlePixelClick = (event) => {
    const index = parseInt(event.target.dataset.index);
    this.togglePixel(index);
  }

  render() {
    const { pixels } = this.state;
    return (
      <div className="app">
        <Canvas>
          {pixels.map((pixel) => (
            <Pixel
              {...pixel}
              data-index={pixel.index}
              key={pixel.index}
              onClick={this.handlePixelClick}
            />
          ))}
        </Canvas>
      </div>
    );
  }
}

export default App;
