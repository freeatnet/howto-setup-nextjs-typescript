import { within, render, RenderResult } from '@testing-library/react';
import * as React from 'react';

import Home from '../../pages/index';

let documentBody: RenderResult;
describe('<Home />', () => {
  beforeEach(() => {
    documentBody = render(<Home />);
  });

  it('provides a link to Next.js homepage', () => {
    const { getByText } = documentBody;
    const welcomeTo = getByText('Welcome to');
    const nextJsLink = within(welcomeTo).getByText(/Next.js/);

    expect(nextJsLink.getAttribute('href')).toMatch(/nextjs.org/);
  });

  it('provides a link to Next.js documentation', () => {
    const { getByText } = documentBody;
    const documentationText = getByText(/Documentation/);
    // Fair approximation, though looking up the tree may be more robust.
    const documentationParent = documentationText.parentElement;
    if (!documentationParent) {
      throw new Error('Failed to look up the parentElement');
    }

    expect(documentationParent.tagName).toBe('A');
    expect(documentationParent.getAttribute('href')).toMatch(
      /nextjs.org\/docs/
    );
  });
});
