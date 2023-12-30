# doctorlab

## Overview

"doctorlab" is a project that consists of multiple packages and services. It is organized using Yarn workspaces, allowing for better code organization and management.

## Project Structure

The project is structured into two main types of directories:

- `packages`: Contains shared packages/modules used across the project.
- `services`: Contains individual services/apps within the project.

## Getting Started

### Prerequisites

- Node.js
- npm or Yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd doctorlab
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

### Running the Project

To start the project, you can use the provided npm scripts:

```bash
npm start
```

This command concurrently starts the root service and the app service.

Alternatively, you can start them individually:

```bash
npm run start:root
```

```bash
npm run start:app
```

## Contributing

If you'd like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature/bugfix: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Create a pull request.
