import React, { useState } from 'react';
import styled from 'styled-components';
import { useTaskContext } from '../context/TaskContext';

const Form = styled.form`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border: 2px solid var(--border-color);
  border-radius: 4px;
  font-size: 1rem;
  transition: all 0.2s ease;
  background-color: var(--background-color);
  color: var(--text-color);

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(4, 178, 97, 0.1);
  }
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--primary-hover);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const ErrorMessage = styled.div`
  color: #ff4444;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

const TaskForm: React.FC = () => {
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const { addTask } = useTaskContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!text.trim()) {
      setError('Task cannot be empty');
      return;
    }

    addTask(text);
    setText('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
      />
      <Button type="submit" disabled={!text.trim()}>
        Add Task
      </Button>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Form>
  );
};

export default TaskForm;

/*
  The task input form! 

  - Clean and simple form with a nice input field
  - The input field has a subtle focus effect with a green glow
  - The add button has a satisfying hover animation
  - Prevents empty tasks from being added
  - Clears the input after adding a task

*/ 