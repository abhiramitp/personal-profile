# Portfolio Website

A modern, responsive portfolio website built with React and Vite, showcasing projects, skills, and professional information.

## Features

- 🚀 **Fast Development** - Built with Vite for lightning-fast hot module replacement
- 📱 **Fully Responsive** - Optimized for all screen sizes from mobile to desktop
- ♿ **Accessible** - Built with accessibility best practices in mind
- 🎨 **Modern UI** - Clean, professional design with smooth animations
- ⚡ **Performance Optimized** - Optimized images, lazy loading, and efficient rendering

## Tech Stack

- **React 18.3** - Latest React with hooks and modern patterns
- **Vite 5.4** - Next-generation frontend tooling
- **Bootstrap 5.3** - Responsive CSS framework
- **React Bootstrap** - Bootstrap components for React
- **Material-UI Icons** - Icon library
- **React Feather** - Additional icon set

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd personal-profile
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── Components/
│   ├── Home/
│   │   ├── Card.jsx      # Project cards component
│   │   └── Skill.jsx     # Skills and more projects component
│   └── navbar/
│       ├── Header.jsx    # Header/profile section
│       ├── Sidebar.jsx   # Navigation sidebar
│       └── SidebarData.js # Sidebar navigation data
├── Assets/               # Images and static assets
├── App.js                # Main app component
├── App.css               # Global styles
└── main.jsx              # Application entry point
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Customization

### Updating Personal Information

1. **Profile Information**: Edit `src/Components/navbar/Header.jsx`
2. **Projects**: Update the `projects` array in `src/Components/Home/Card.jsx`
3. **Skills**: Modify skill arrays in `src/Components/Home/Skill.jsx`
4. **Contact Info**: Update contact details in `src/Components/navbar/Sidebar.jsx`
5. **Social Links**: Edit `SidebarIcon` array in `src/Components/navbar/SidebarData.js`

### Styling

Global styles are in `src/App.css`. CSS variables are defined at the top for easy theming:

```css
:root {
    --primary-bg: #161517;
    --accent-color: #207448;
    /* ... more variables */
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and proprietary.

## Contact

For questions or inquiries, please contact:
- Email: tpabhirami03@gmail.com
- Phone: 7594897220 / 7012927220
