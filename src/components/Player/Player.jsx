import { Component } from 'react';
import { PlayerWrapper, StyledPlayer } from './Player.styled';

export class Player extends Component {
  state = {
    isVideoLoaded: false,
  };
  componentDidUpdate(prevProps) {
    if (prevProps.url !== this.props.url) {
      this.setState({ isVideoLoaded: false });
    }
  }
  render() {
    const { url } = this.props;
    const { isVideoLoaded } = this.state;
    const playerSize = isVideoLoaded ? '100%' : 0;
    const showLoader = url && !isVideoLoaded;
    return (
      <>
        {showLoader && <h2>Загружаем видео...</h2>}
        <PlayerWrapper>
          <StyledPlayer
            url={url}
            width={playerSize}
            height={playerSize}
            onReady={() => this.setState({ isVideoLoaded: true })}
            controls
          />
        </PlayerWrapper>
      </>
    );
  }
}
