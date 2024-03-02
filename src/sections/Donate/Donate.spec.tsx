import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import { Donate } from './Donate';

describe('Donate', () => {
  test('Should render Donate', () => {
    const dom = render(
      <Donate title="title"
        slogan="slogan1"
        text="text"
        button={{
          title: 'string',
          link: '/',
        }}
        images={[]}
      />
    );

    expect(dom.getByTestId('donate')).toBeDefined();
    expect(dom.getByText('slogan1')).toBeDefined();
  });
});