# [Ultimate Tic-Tac-Toe](https://tic-tac-toe.jacobsullivan.dev) [![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

An online version of [ultimate tic-tac-toe](https://en.wikipedia.org/wiki/Ultimate_tic-tac-toe) written in React and TypeScript. This repository serves as a monorepo powered by [Turborepo](https://turborepo.org/) for the client application, the server application, as well as packages shared between the two. View the [Table of Contents](#title-of-contents) below for more information.

Currently deployed at [tic-tac-toe.jacobsullivan.dev](https://tic-tac-toe.jacobsullivan.dev).

## Demo

_Demo coming soon._

## Tech Stack

**Client:** TypeScript, React, Context API, Custom Hooks, SASS

**Server:** TypeScript, Node, Express, WebSocket API

**DevOps:** Turborepo, GitHub Actions, Vercel, Heroku

## Table of Contents

[Client Application](https://github.com/MrJacobSullivan/ultimate-tic-tac-toe-monorepo/tree/main/apps/client) - A React application written in TypeScript and SASS. Game state is handled via the React Context API and custom hooks. All components are tested using React Testing Library.

[Server Application](https://github.com/MrJacobSullivan/ultimate-tic-tac-toe-monorepo/tree/main/apps/server) - A _WIP_ backend server to allow realtime multiplayer games. Utilizes Express, TypeScript, and the WebSocket API. **This functionality is still a work in progress.**

[Game Engine](https://github.com/MrJacobSullivan/ultimate-tic-tac-toe-monorepo/tree/main/packages/engine) - A custom engine to handle the logic of the ultimate tic-tac-toe game. The engine can handle adding a move to a game that is underway. It can also derive game state when given an array of moves made. Because this project utilizes a monorepo, the types and functions implemented in this package are available to both the client application as well as the server application.

[Misc. Packages](https://github.com/MrJacobSullivan/ultimate-tic-tac-toe-monorepo/tree/main/packages) - Miscellaneous packages that provide universal configeration files for TypeScript and Jest as well as the [opinionated CSS reset from TailwindCSS](https://tailwindcss.com/docs/preflight).

## Authors

- [@MrJacobSullivan](https://github.com/MrJacobSullivan)
