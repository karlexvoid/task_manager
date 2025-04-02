import React from 'react';
import styled from 'styled-components';
import { TaskProvider } from './context/TaskContext';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import ThemeToggle from './components/ThemeToggle';
import GlobalStyles from './styles/GlobalStyles';

const AppContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const AppTitle = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  color: var(--text-color);
  font-size: 2.5rem;
  font-weight: 700;

  span {
    color: var(--primary-color);
  }
`;

const AppContent: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <AppContainer>
      <GlobalStyles />
      <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      <AppTitle>
        Task <span>Manager</span>
      </AppTitle>
      <TaskProvider>
        <TaskForm />
        <TaskFilter />
        <TaskList />
      </TaskProvider>
    </AppContainer>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
