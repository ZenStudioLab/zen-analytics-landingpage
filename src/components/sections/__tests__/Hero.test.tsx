import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Hero from '../Hero';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/theme';
import React from 'react';

// Mock next/dynamic
vi.mock('next/dynamic', () => ({
  default: vi.fn((loader) => {
    const DynamicComponent = () => <div data-testid="mock-video-player">Video Player Mock</div>;
    return DynamicComponent;
  }),
}));

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

describe('Hero Component', () => {
  it('renders the hero title', () => {
    render(<Hero />, { wrapper: TestWrapper });
    const title = screen.getByTestId('hero-title');
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(/All-in-one analytics tool/i);
  });

  it('renders the CTA button', () => {
    render(<Hero />, { wrapper: TestWrapper });
    const ctaButton = screen.getByTestId('hero-cta-button');
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton).toHaveTextContent(/Install Now/i);
  });

  it('renders social proof text', () => {
    render(<Hero />, { wrapper: TestWrapper });
    expect(screen.getByText(/5.0 · 500\+ installs on Chrome Web Store/i)).toBeInTheDocument();
  });
});
