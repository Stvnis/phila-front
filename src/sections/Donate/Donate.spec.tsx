import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import { Donate } from './Donate';

describe('Donate', () => {
  test('Should render Donate', () => {
    const dom = render(<Donate />);
    dom.debug();
    expect(dom.getByTestId('donate')).toBeDefined();
  });
});