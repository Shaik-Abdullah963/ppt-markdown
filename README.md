# PPT-Markdown

A minimal slide-deck app: write slides in Markdown, parse to an AST, and render in React + Express + SQLite.

## Project structure

- `backend/` — Express API & Sequelize models  
- `frontend/` — React app & components  
- `db/` — SQLite files & migrations  

## Getting started

```bash
# clone, then:
cd ppt-markdown

# backend
cd backend && npm install

# frontend
cd ../frontend && npm install
