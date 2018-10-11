import React from 'react';
import CardKeeper from './CardKeeper';

class App extends React.Component {
    constructor() {
        super();
    }
}

render() {
    return (
        <ButtonToolbar>
        <OverlayTrigger placement="left" overlay={tooltip}>
          <Button bsStyle="default">Holy guacamole!</Button>
        </OverlayTrigger>
    
        <OverlayTrigger placement="top" overlay={tooltip}>
          <Button bsStyle="default">Holy guacamole!</Button>
        </OverlayTrigger>
    
        <OverlayTrigger placement="bottom" overlay={tooltip}>
          <Button bsStyle="default">Holy guacamole!</Button>
        </OverlayTrigger>
    
        <OverlayTrigger placement="right" overlay={tooltip}>
          <Button bsStyle="default">Holy guacamole!</Button>
        </OverlayTrigger>
      </ButtonToolbar>
    )
}

export default App;