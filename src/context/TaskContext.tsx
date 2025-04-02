import React, { createContext, useContext, useCallback, useMemo, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export interface Task {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

interface TaskContextType {
  tasks: Task[];
  filteredTasks: Task[];
  filter: 'all' | 'completed' | 'pending';
  addTask: (text: string) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
  filterTasks: (filter: 'all' | 'completed' | 'pending') => void;
  reorderTasks: (dragIndex: number, hoverIndex: number) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', []);
  const [filter, setFilter] = useState<'all' | 'completed' | 'pending'>('all');

  const addTask = useCallback((text: string) => {
    if (!text.trim()) return;
    
    const newTask: Task = {
      id: Date.now().toString(),
      text: text.trim(),
      completed: false,
      createdAt: new Date(),
    };
    
    setTasks(prevTasks => [...prevTasks, newTask]);
  }, [setTasks]);

  const toggleTask = useCallback((id: string) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }, [setTasks]);

  const deleteTask = useCallback((id: string) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  }, [setTasks]);

  const filterTasks = useCallback((newFilter: 'all' | 'completed' | 'pending') => {
    setFilter(newFilter);
  }, []);

  const reorderTasks = useCallback((startIndex: number, endIndex: number) => {
    setTasks(prevTasks => {
      const result = Array.from(prevTasks);
      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);
      return result;
    });
  }, [setTasks]);

  const filteredTasks = React.useMemo(() => {
    let filtered = [...tasks];
    
    // Apply filter based on current filter state
    switch (filter) {
      case 'completed':
        filtered = filtered.filter(task => task.completed);
        break;
      case 'pending':
        filtered = filtered.filter(task => !task.completed);
        break;
      default:
        // For 'all', just return all tasks without sorting
        break;
    }
    
    return filtered;
  }, [tasks, filter]);

  const value = useMemo(
    () => ({
      tasks,
      filteredTasks,
      filter,
      addTask,
      toggleTask,
      deleteTask,
      filterTasks,
      reorderTasks,
    }),
    [tasks, filteredTasks, filter, addTask, toggleTask, deleteTask, filterTasks, reorderTasks]
  );

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};

/*
  This is the main task management logic. Here's what this file does:

  - Keeps track of all tasks in localStorage so they don't disappear on refresh
  - Handles adding new tasks, marking them complete/incomplete, and deleting them
  - Manages the filter state (all/pending/completed)
  - Sorts incomplete tasks to the top of the list
  - Lets you drag and drop tasks to reorder them

  The context makes all this functionality available to any component that needs it.
*/ 