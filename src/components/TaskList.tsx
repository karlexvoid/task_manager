import React, { useEffect, useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styled, { keyframes } from 'styled-components';
import { useTaskContext } from '../context/TaskContext';
import { Task } from '../context/TaskContext';

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-20px);
  }
`;

const TaskListContainer = styled.div`
  margin-top: 1rem;
`;

const TaskItem = styled.div<{ $isDragging: boolean; $isEntering?: boolean; $isExiting?: boolean; $completed: boolean }>`
  display: flex;
  align-items: center;
  padding: 1rem;
  margin-bottom: 0.5rem;
  background-color: ${props => props.$completed ? 'var(--background-color)' : 'var(--primary-color)'};
  border: 1px solid var(--border-color);
  border-radius: 4px;
  box-shadow: ${props => props.$isDragging ? '0 2px 8px var(--shadow-color)' : 'none'};
  transition: all 0.2s ease;
  cursor: move;
  animation: ${props => {
    if (props.$isEntering) return slideIn;
    if (props.$isExiting) return slideOut;
    return 'none';
  }} 0.3s ease forwards;
  position: relative;
  overflow: hidden;
  opacity: ${props => props.$completed ? 0.7 : 1};
  transform: ${props => props.$completed ? 'scale(0.98)' : 'scale(1)'};

  &:hover {
    transform: ${props => props.$completed ? 'scale(0.98)' : 'scale(1.02)'};
    box-shadow: 0 4px 12px var(--shadow-color);
  }
`;

const TaskText = styled.span<{ $completed: boolean }>`
  flex: 1;
  text-decoration: ${props => props.$completed ? 'line-through' : 'none'};
  color: ${props => props.$completed ? 'var(--text-color)' : 'white'};
  opacity: ${props => props.$completed ? 0.6 : 1};
  transition: all 0.2s ease;
  font-weight: ${props => props.$completed ? 'normal' : '500'};
  letter-spacing: ${props => props.$completed ? 'normal' : '0.5px'};
`;

const TaskActions = styled.div`
  display: flex;
  gap: 0.5rem;
  opacity: 0;
  transition: opacity 0.2s ease;
  ${TaskItem}:hover & {
    opacity: 1;
  }
`;

const ActionButton = styled.button<{ $completed?: boolean }>`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: ${props => props.$completed ? 'var(--primary-color)' : 'white'};
  color: ${props => props.$completed ? 'white' : 'var(--primary-color)'};
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 500;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px var(--shadow-color);
  }

  &:active {
    transform: translateY(0);
  }
`;

interface DraggableTaskItemProps {
  task: Task;
  index: number;
  moveTask: (dragIndex: number, hoverIndex: number) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
  isEntering?: boolean;
  isExiting?: boolean;
}

const DraggableTaskItem: React.FC<DraggableTaskItemProps> = ({ 
  task, 
  index, 
  moveTask, 
  toggleTask, 
  deleteTask,
  isEntering,
  isExiting 
}) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'TASK',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: 'TASK',
    hover: (item: { index: number }) => {
      if (item.index === index) {
        return;
      }
      moveTask(item.index, index);
      item.index = index;
    },
  });

  return (
    <TaskItem
      ref={(node) => {
        drag(node);
        drop(node);
      }}
      $isDragging={isDragging}
      $isEntering={isEntering}
      $isExiting={isExiting}
      $completed={task.completed}
    >
      <TaskText $completed={task.completed}>
        {task.text}
      </TaskText>
      <TaskActions>
        <ActionButton onClick={() => toggleTask(task.id)} $completed={task.completed}>
          {task.completed ? 'Undo' : 'Complete'}
        </ActionButton>
        <ActionButton onClick={() => deleteTask(task.id)} $completed={task.completed}>
          Delete
        </ActionButton>
      </TaskActions>
    </TaskItem>
  );
};

const TaskList: React.FC = () => {
  const { filteredTasks, toggleTask, deleteTask, reorderTasks } = useTaskContext();
  const [enteringTasks, setEnteringTasks] = useState<Set<string>>(new Set());
  const [exitingTasks, setExitingTasks] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (filteredTasks.length > 0) {
      const newTask = filteredTasks[filteredTasks.length - 1];
      setEnteringTasks(prev => new Set(prev).add(newTask.id));
      const timer = setTimeout(() => {
        setEnteringTasks(prev => {
          const next = new Set(prev);
          next.delete(newTask.id);
          return next;
        });
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [filteredTasks]);

  const handleDelete = (id: string) => {
    setExitingTasks(prev => new Set(prev).add(id));
    setTimeout(() => {
      deleteTask(id);
    }, 300);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <TaskListContainer>
        {filteredTasks.map((task: Task, index: number) => (
          <DraggableTaskItem
            key={task.id}
            task={task}
            index={index}
            moveTask={reorderTasks}
            toggleTask={toggleTask}
            deleteTask={handleDelete}
            isEntering={enteringTasks.has(task.id)}
            isExiting={exitingTasks.has(task.id)}
          />
        ))}
      </TaskListContainer>
    </DndProvider>
  );
};

export default TaskList;

/*

  - Each task is a draggable card that you can move around
  - Incomplete tasks stand out with a green background
  - Completed tasks are slightly faded and smaller
  - Tasks slide in when added and slide out when deleted
  - Hover over a task to see the complete/delete buttons
  - Drag and drop tasks to reorder them

*/ 