import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import { donate } from '@phila-front/mocks';
import { Donate } from './Donate';

describe('Donate', () => {
  test('Should render Donate', () => {
    const dom = render(<Donate {...donate} />);

    expect(dom.getByTestId('donate')).toBeDefined();
  });
});
