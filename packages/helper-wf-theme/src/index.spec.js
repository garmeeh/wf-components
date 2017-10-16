import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import wfTheme from '.';

describe('Theme', () => {
  it('exports the theme object', () => {
    const expected = expect.objectContaining({
      primary: expect.any(String),
      secondary: expect.any(String)
    });

    expect(wfTheme).toEqual(expected);
  });
});
