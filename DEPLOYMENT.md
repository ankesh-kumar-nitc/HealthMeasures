# Deployment Guide

This guide covers deploying Health Measures — Natural Recuperation to
production using free-tier services: **MongoDB Atlas** (database),
**Render** (backend), and **Vercel** (frontend).

## 1. Database — MongoDB Atlas

1. Create a free account at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas).
2. Create a free **M0** cluster.
3. Under **Database Access**, create a database user (username + password).
4. Under **Network Access**, add `0.0.0.0/0` (allow access from anywhere) —
   or restrict to Render's IP ranges for tighter security.
5. Click **Connect → Drivers**, copy the connection string. It looks like:
   Keep this safe — it's needed for the backend's `MONGO_URL`.

## 2. Backend — Render

1. Sign in to [render.com](https://render.com) with GitHub.
2. **New → Web Service**, select this repository.
3. Configure:
   - **Root Directory:** `backend`
   - **Build Command:** `pip install -r requirements.txt`
   - **Start Command:** `uvicorn server:app --host 0.0.0.0 --port $PORT`
4. Add environment variables:
   | Key | Value |
   |---|---|
   | `MONGO_URL` | Your Atlas connection string |
   | `DB_NAME` | `health_measures` |
   | `CORS_ORIGINS` | Your frontend URL once deployed (or `*` while testing) |
5. Deploy. Render gives you a URL like:
   `https://healthmeasures-backend.onrender.com`

> Note: Render's free tier spins down after inactivity, so the first
> request after idle time may take ~30–60 seconds (cold start).

## 3. Frontend — Vercel

1. Sign in to [vercel.com](https://vercel.com) with GitHub.
2. **Add New → Project**, select this repository.
3. Configure:
   - **Root Directory:** `frontend`
   - **Framework Preset:** Create React App
4. Add environment variable:
   | Key | Value |
   |---|---|
   | `REACT_APP_BACKEND_URL` | Your Render backend URL from step 2 |
5. Deploy. Vercel gives you a URL like:
   `https://health-measures.vercel.app`

## 4. Final step — lock down CORS

Once the frontend URL is live, go back to the Render backend's environment
variables and set `CORS_ORIGINS` to the exact Vercel URL instead of `*`,
then redeploy the backend. This prevents other sites from calling your API.

## Local development

For running the project locally instead, see the main [README.md](./README.md).
