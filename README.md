# Task Manager

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

## 🛠️ Tech Stack

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

## 💻 Development

### Key Components

- **TaskContext**: Manages task state and operations
  - Task CRUD operations
  - Filtering logic
  - Drag and drop reordering

- **ThemeContext**: Handles theme switching
  - Light/Dark mode toggle
  - Theme persistence
  - CSS variable management

### Styling Approach

- Uses CSS variables for theming
- Styled Components for component-specific styles
- Smooth transitions and animations
- Responsive design principles

### State Management

- React Context API for global state
- Custom hooks for local storage
- Memoization for performance optimization

## 🎨 Design System

### Colors

- Primary: `#04b261` (Green)
- Primary Hover: `#039a54`
- Background: Light/Dark variants
- Text: Light/Dark variants
- Border: Light/Dark variants

### Typography

- System font stack for optimal performance
- Responsive font sizes
- Consistent spacing scale

## 🔄 Features in Detail

### Task Management

```typescript
interface Task {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}
```

### Drag and Drop

- Implemented using react-dnd
- Smooth animations during drag
- Visual feedback for drag state

### Theme Switching

- Persists across sessions
- Smooth transitions
- System-wide color variables
- Accessible color contrast

## 🚀 Performance Optimizations

- Memoized computations
- Efficient state updates
- Optimized re-renders
- Lazy loading where applicable

## 📱 Responsive Design

- Mobile-first approach
- Flexible layouts
- Adaptive spacing
- Touch-friendly interactions

## 🔒 Security

- Input sanitization
- XSS prevention
- Secure localStorage usage

## 🧪 Testing

To run tests:
```bash
npm test
```

## 📦 Build

To create a production build:
```bash
npm run build
```

## 🚀 Deployment

### Deploying to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Select the repository
6. Click "Deploy"

Vercel will automatically:
- Detect that it's a React application
- Install dependencies
- Build the project
- Deploy it to a global CDN

### Environment Variables

No environment variables are required for this project.

### Build Settings

The project is configured to work with Vercel's default build settings:
- Build Command: `npm run build`
- Output Directory: `build`
- Install Command: `npm install`

Made with ❤️ by Abhishek
