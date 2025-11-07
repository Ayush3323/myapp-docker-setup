# Docker Practice Project

This project is a full-stack application used to learn and practice Docker containerization. It consists of a React frontend and Node.js backend, both containerized using Docker.

## Project Structure

```
├── client/                 # React frontend (Vite)
│   ├── src/               # Source files
│   ├── public/            # Static files
│   └── package.json       # Frontend dependencies
├── server/                # Node.js backend
│   ├── index.js          # Server entry point
│   └── package.json      # Backend dependencies
└── docker/               # Docker configuration files (to be added)
```

## Prerequisites

- Node.js
- npm or yarn
- Docker
- Docker Compose

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   # Install client dependencies
   cd client
   npm install

   # Install server dependencies
   cd ../server
   npm install
   ```

## Docker Setup (Coming Soon)

The project will include:
- Dockerfile for the React frontend
- Dockerfile for the Node.js backend
- Docker Compose file to orchestrate both services
- Production-ready Docker configurations
- Development environment with hot-reload support

## Development Without Docker

### Frontend
```bash
cd client
npm run dev
```

### Backend
```bash
cd server
npm start
```

## Docker Commands (To Be Implemented)

- Building images
- Running containers
- Managing volumes
- Network configuration
- Docker Compose usage

## Learning Objectives

- [ ] Create Dockerfiles for both frontend and backend
- [ ] Set up multi-container applications using Docker Compose
- [ ] Implement development and production configurations
- [ ] Handle environment variables in Docker
- [ ] Configure Docker networks
- [ ] Manage Docker volumes for persistent data
- [ ] Optimize Docker images
- [ ] Implement CI/CD with Docker

## Contributing

Feel free to contribute to this project by creating pull requests or reporting issues.

## License

This project is open source and available under the MIT License.