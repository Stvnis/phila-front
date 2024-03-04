import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import { subscribe } from '@phila-front/mocks';
import { Subscribe } from './Subscribe';

describe('Subscribe', () => {
  test('Should render Subscribe', () => {
    const dom = render(<Subscribe {...subscribe} />);

    expect(dom.getByTestId('subscribe')).toBeDefined();
  });
});
