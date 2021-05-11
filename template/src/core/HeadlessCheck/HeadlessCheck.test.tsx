import React from 'react';

import { render } from '../../../testUtils';
import { HeadlessCheck } from './HeadlessCheck';

describe('<HeadlessCheck />', () => {
  test('return default app component', () => {
    const { toJSON } = render(<HeadlessCheck />);

    expect(toJSON()).not.toBeNull();
  });

  test('return headless app component', () => {
    const { toJSON } = render(<HeadlessCheck isHeadless />);

    expect(toJSON()).toBeNull();
  });
});
