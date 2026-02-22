import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(), // deprecated
        removeListener: vi.fn(), // deprecated
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
    })),
});

// Mock Next.js router
vi.mock('next/router', () => ({
    useRouter: vi.fn(() => ({
        push: vi.fn(),
        replace: vi.fn(),
        prefetch: vi.fn(),
        query: {},
        asPath: '',
        pathname: '',
    })),
}));

// Mock next/navigation
vi.mock('next/navigation', () => ({
    useRouter: vi.fn(() => ({
        push: vi.fn(),
        replace: vi.fn(),
        prefetch: vi.fn(),
        back: vi.fn(),
        forward: vi.fn(),
        refresh: vi.fn(),
    })),
    usePathname: vi.fn(() => ''),
    useSearchParams: vi.fn(() => new URLSearchParams()),
}));

// Mock next/font/google
vi.mock('next/font/google', () => ({
    Plus_Jakarta_Sans: () => ({
        style: {
            fontFamily: 'mock-font',
        },
    }),
}));
