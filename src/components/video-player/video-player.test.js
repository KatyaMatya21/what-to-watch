import React from 'react';
import renderer from 'react-test-renderer';

import movies from "../../mocks/movies";

import VideoPlayer from './video-player.jsx';

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
