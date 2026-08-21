# Health Measures — Natural Recuperation

Marketing site for Health Measures, a natural recuperation service that
bridges the gap between hospital discharge and everyday life, run in
partnership with NHS Primary Care Networks.

## Stack

- **Frontend** — React (Create React App via CRACO), Tailwind CSS, shadcn/ui
- **Backend** — FastAPI, MongoDB (Motor)

## Project structure

```
frontend/   React app — components, pages, and UI primitives
backend/    FastAPI service exposing the /api routes
```

## Getting started

### Frontend

```bash
cd frontend
yarn install
yarn start
```

### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn server:app --reload
```

The backend expects a `.env` file in `backend/` with `MONGO_URL` and
`DB_NAME` set for your MongoDB instance.

