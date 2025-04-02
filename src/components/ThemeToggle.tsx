import React from 'react';
import styled from 'styled-components';

const ToggleButton = styled.button`
  position: fixed;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem;
  border-radius: 50%;
  background-color: var(--background-color);
  border: 1px solid var(--border-color);
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;

  &:hover {
    background-color: var(--hover-color);
  }
`;

const Icon = styled.span`
  font-size: 1.2rem;
  color: var(--text-color);
`;

interface ThemeToggleProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, toggleTheme }) => {
  return (
    <ToggleButton onClick={toggleTheme} aria-label="Toggle theme">
      <Icon>{isDark ? '☀️' : '🌙'}</Icon>
    </ToggleButton>
  );
};

export default ThemeToggle;

/*
  The theme switcher! 

  - Simple circular button in the top-right corner
  - Shows sun (☀️) in dark mode and moon (🌙) in light mode
  - Smooth hover effect
  - Fixed position so it's always accessible
  - Helps users switch between light and dark themes

*/ 