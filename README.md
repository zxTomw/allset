# 🧺 菜齐了 Monorepo

A Turborepo-based monorepo containing:

* **apps/api/** — NestJS backend API
* **apps/mobile/** — Expo-managed React Native app
* **libs/** — Shared TypeScript libraries and utilities

## Tech Stack

* **Monorepo Tool**: Turborepo v2.5.3
* **Package Manager**: Yarn workspaces
* **Backend**: NestJS (TypeScript)
* **Mobile**: Expo (React Native + TypeScript)

## Prerequisites

* Node.js v16 or later
* Yarn

## Installation

First, clone the repository. Then install dependencies:

```bash
cd caiqile

# Install dependencies
yarn install
```

## Development

Run all services in watch mode:

```bash
yarn dev
```

* **API**: `yarn workspace api dev` (runs `nest start --watch`)
* **Mobile**: `yarn workspace mobile dev` (runs `expo start`)

To run individually:

```bash
# API only
yarn workspace api dev

# Mobile only
yarn workspace mobile dev
```

## Build

Build all projects:

```bash
yarn build
```

Build a specific project:

```bash
yarn workspace api build
yarn workspace mobile build
```

## Available Scripts

| Command                     | Description                          |
| --------------------------- | ------------------------------------ |
| `yarn dev`                  | Run `dev` script in all workspaces   |
| `yarn build`                | Run `build` script in all workspaces |
| `yarn lint`                 | Run `lint` script in all workspaces  |
| `yarn test`                 | Run `test` script in all workspaces  |
| `yarn workspace api dev`    | Start NestJS API in watch mode       |
| `yarn workspace mobile dev` | Start Expo development server        |

## Directory Structure

```
caiqile/
├─ apps/
│  ├─ api/      # NestJS backend
│  └─ mobile/   # Expo React Native app
├─ libs/        # Shared TypeScript libraries
├─ turbo.json   # Turborepo configuration
├─ package.json # Yarn workspaces + root scripts
└─ yarn.lock    # Locked dependencies
```
