import React from 'react';
import renderer from 'react-test-renderer';

import VideoPlayer from '../video-player/video-player.jsx';
import movies from "../../mocks/movies";

const movie = movies[0];

describe(`VideoPlayer component`, () => {

  it(`Correctly renders`, () => {
    const VideoPlayerComponent = renderer
      .create(
          <VideoPlayer
            movie={movie}
          />,
          {
            createNodeMock: (element) => {
              if (element.type === `video`) {
                return {'current': {}};
              }
              return null;
            }
          }
      )
      .toJSON();
    expect(VideoPlayerComponent).toMatchSnapshot();
  });

});
