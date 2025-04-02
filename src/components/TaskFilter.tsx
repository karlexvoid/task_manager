import React from 'react';
import styled from 'styled-components';
import { useTaskContext } from '../context/TaskContext';

const FilterContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  justify-content: center;
`;

const FilterButton = styled.button<{ $active: boolean }>`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: ${props => props.$active ? 'var(--primary-color)' : 'transparent'};
  color: ${props => props.$active ? 'white' : 'var(--text-color)'};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${props => props.$active ? 'var(--primary-color)' : 'var(--hover-color)'};
  }
`;

const TaskFilter: React.FC = () => {
  const { filter, filterTasks } = useTaskContext();

  return (
    <FilterContainer>
      <FilterButton
        $active={filter === 'all'}
        onClick={() => filterTasks('all')}
      >
        All
      </FilterButton>
      <FilterButton
        $active={filter === 'pending'}
        onClick={() => filterTasks('pending')}
      >
        Pending
      </FilterButton>
      <FilterButton
        $active={filter === 'completed'}
        onClick={() => filterTasks('completed')}
      >
        Completed
      </FilterButton>
    </FilterContainer>
  );
};

export default TaskFilter;

/*
  The filter buttons! 

  - Simple and clean filter buttons
  - Active filter is highlighted in green
  - Smooth hover transitions
  - Centered layout for better visibility
  - Helps users focus on what they need to see

*/ 