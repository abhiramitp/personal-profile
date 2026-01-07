# Quick Setup Guide

## Fixing the Current Error

The error you're seeing is because:
1. The old Create React App (CRA) dev server is still running
2. It's looking for `public/index.html` and `src/index.js` which we removed
3. We've migrated to Vite, which uses `index.html` (root) and `src/main.jsx`

## Steps to Fix:

1. **Stop all running dev servers:**
   - Close any terminal windows running `npm start`
   - Press `Ctrl+C` in any running terminal
   - Close your IDE/editor if files are locked

2. **Clean and reinstall:**
   ```bash
   # Delete node_modules (if not locked)
   Remove-Item -Recurse -Force node_modules
   
   # Delete package-lock.json
   Remove-Item -Force package-lock.json
   
   # Install fresh dependencies
   npm install
   ```

3. **Start with Vite (NOT npm start):**
   ```bash
   npm run dev
   ```
   
   **DO NOT use `npm start`** - that's for the old CRA setup!

## What Changed:

- ✅ Migrated from Create React App to Vite
- ✅ `index.html` moved from `public/` to root
- ✅ `src/index.js` → `src/main.jsx`
- ✅ All scripts updated to use Vite

## New Commands:

- `npm run dev` - Start development server (Vite)
- `npm run build` - Build for production
- `npm run preview` - Preview production build

The old `npm start` command will still work but uses Vite now.

