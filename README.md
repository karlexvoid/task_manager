# Task Manager - LimeTray Assignment Submission

A modern, responsive task management application built with React and TypeScript. Features a beautiful UI with smooth animations, drag-and-drop functionality, and theme switching capabilities.

## 🚀 Features

- **Task Management**
  - Add, complete, and delete tasks
  - Drag and drop reordering
  - Persistent storage using localStorage
  - Filter tasks by status (All/Pending/Completed)

- **User Interface**
  - Clean, modern design
  - Smooth animations for adding/removing tasks
  - Responsive layout
  - Visual distinction between completed and incomplete tasks
  - Hover effects and transitions

- **Theme Support**
  - Light/Dark mode toggle
  - Theme persistence across sessions
  - Smooth theme transitions
  - System-wide color variables

## 🛠️ Tech Stacks

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Styling**: Styled Components
- **State Management**: React Context API
- **Drag and Drop**: react-dnd
- **Local Storage**: Custom hook with localStorage

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/task-manager.git
```

2. Navigate to the project directory:
```bash
cd task-manager
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm start
```

## 🔧 Project Structure

```
task-manager/
├── src/
│   ├── components/
│   │   ├── TaskForm.tsx      # Task input form
│   │   ├── TaskList.tsx      # List of tasks with drag-drop
│   │   ├── TaskFilter.tsx    # Filter buttons
│   │   └── ThemeToggle.tsx   # Theme switcher
│   ├── context/
│   │   ├── TaskContext.tsx   # Task state management
│   │   └── ThemeContext.tsx  # Theme state management
│   ├── styles/
│   │   ├── GlobalStyles.ts   # Global CSS variables
│   │   └── theme.ts          # Theme configuration
│   ├── hooks/
│   │   └── useLocalStorage.ts # Custom localStorage hook
│   ├── App.tsx
│   └── index.tsx
├── public/
├── package.json
└── README.md
```




### Environment Variables

No environment variables are required for this project.

### Build Settings

The project is configured to work with Vercel's default build settings:
- Build Command: `npm run build`
- Output Directory: `build`
- Install Command: `npm install`
