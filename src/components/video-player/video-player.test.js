import React from 'react';
import renderer from 'react-test-renderer';

import VideoPlayer from '../video-player/video-player.jsx';

const movie = {
  'id': `1`,
  'title': `What We Do in the Shadows`,
  'src': `img/what-we-do-in-the-shadows.jpg`,
  'link': `movie-page.html`,
  'preview': `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
};

describe(`VideoPlayer component`, () => {

  it(`Correctly renders`, () => {
    const VideoPlayerComponent = renderer
      .create(
          <VideoPlayer movie={movie}/>,
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
