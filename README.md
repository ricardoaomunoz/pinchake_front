# Pinchake Frontend

Vue 3 + Vuetify frontend for Pinchake. Includes public pages and an admin panel.

## Setup

```bash
yarn install
cp .env.example .env
```

## Run

```bash
yarn dev
```

## Docker

```bash
cp .env.example .env
docker compose up --build
```

## Admin

- Login: `/admin/login`
- Requires backend running at `VITE_API_URL`.
