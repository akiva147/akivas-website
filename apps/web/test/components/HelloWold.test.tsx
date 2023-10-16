import * as React from 'react';
import { vi } from 'vitest';
import { HelloWorld } from '../../src/components/Notes';
import { render } from '../test-util';

vi.mock('../../src/auth/msal.config.ts', () => ({
    agamimMsal: {
        getActiveAccount: () => ({
            username: 'test',
        }),
        logoutFromLoggedInUser: vi.fn(),
    },
}));

describe('<Hello World />', () => {
    it('should render', () => {
        const { getByText } = render(<HelloWorld />);
        expect(getByText('Lior Vainer', { exact: false })).toBeInTheDocument();
    });

    it('should display username', () => {
        const { getByText } = render(<HelloWorld />);
        expect(getByText('test')).toBeInTheDocument();
    });
});
