import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import AccordionCard from '../AccordionCard';
import { BookOpen } from 'lucide-react';

describe('AccordionCard', () => {
  const defaultProps = {
    title: 'Test Accordion',
    children: <div>Test content</div>
  };

  it('renders with title and closed by default', () => {
    render(<AccordionCard {...defaultProps} />);

    expect(screen.getByText('Test Accordion')).toBeInTheDocument();
    expect(screen.getByText('Test content')).toBeInTheDocument();

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-expanded', 'false');
  });

  it('opens when defaultOpen is true', () => {
    render(<AccordionCard {...defaultProps} defaultOpen={true} />);

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-expanded', 'true');
  });

  it('toggles open/closed when clicked', async () => {
    render(<AccordionCard {...defaultProps} />);

    const button = screen.getByRole('button');

    // Initially closed
    expect(button).toHaveAttribute('aria-expanded', 'false');

    // Click to open
    fireEvent.click(button);
    await waitFor(() => {
      expect(button).toHaveAttribute('aria-expanded', 'true');
    });

    // Click to close
    fireEvent.click(button);
    await waitFor(() => {
      expect(button).toHaveAttribute('aria-expanded', 'false');
    });
  });

  it('toggles when Enter key is pressed', async () => {
    render(<AccordionCard {...defaultProps} />);

    const button = screen.getByRole('button');

    // Press Enter to open
    fireEvent.keyDown(button, { key: 'Enter' });
    await waitFor(() => {
      expect(button).toHaveAttribute('aria-expanded', 'true');
    });

    // Press Enter to close
    fireEvent.keyDown(button, { key: 'Enter' });
    await waitFor(() => {
      expect(button).toHaveAttribute('aria-expanded', 'false');
    });
  });

  it('toggles when Space key is pressed', async () => {
    render(<AccordionCard {...defaultProps} />);

    const button = screen.getByRole('button');

    // Press Space to open
    fireEvent.keyDown(button, { key: ' ' });
    await waitFor(() => {
      expect(button).toHaveAttribute('aria-expanded', 'true');
    });
  });

  it('does not toggle on other key presses', () => {
    render(<AccordionCard {...defaultProps} />);

    const button = screen.getByRole('button');

    // Press other key
    fireEvent.keyDown(button, { key: 'Tab' });
    expect(button).toHaveAttribute('aria-expanded', 'false');
  });

  it('renders with icon when provided', () => {
    render(
      <AccordionCard
        {...defaultProps}
        icon={<BookOpen data-testid="book-icon" />}
      />
    );

    expect(screen.getByTestId('book-icon')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <AccordionCard {...defaultProps} className="custom-class" />
    );

    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('has proper accessibility attributes', () => {
    render(<AccordionCard {...defaultProps} />);

    const button = screen.getByRole('button');
    const content = screen.getByRole('region');

    expect(button).toHaveAttribute('aria-expanded');
    expect(button).toHaveAttribute('aria-controls');
    expect(content).toHaveAttribute('aria-labelledby');
    expect(content).toHaveAttribute('role', 'region');
  });

  it('rotates chevron icon when opened/closed', async () => {
    render(<AccordionCard {...defaultProps} />);

    const button = screen.getByRole('button');
    const chevron = button.querySelector('svg');

    // Initially should not have rotate-180 class
    expect(chevron).not.toHaveClass('rotate-180');

    // Click to open
    fireEvent.click(button);
    await waitFor(() => {
      expect(chevron).toHaveClass('rotate-180');
    });

    // Click to close
    fireEvent.click(button);
    await waitFor(() => {
      expect(chevron).not.toHaveClass('rotate-180');
    });
  });
});