# grafana-loki-nestjs

## Description

This project implements a sidecar for log collection and monitoring using Grafana Loki and Promtail in a NestJS application. The goal is to enhance the observability of the application by efficiently capturing and visualizing logs.

## Requirements

- Node.js
- Docker and Docker Compose

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/LPocay/grafana-loki-nestjs.git
    cd grafana-loki-nestjs
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

## Configuration

1. Configure Promtail:
    - Review and adjust the `promtail-config.yml` file as needed to suit your environment.
2. Create a `.env` file with the following environment variables:
    ```bash
    LOG_LEVEL=debug
    ```
## Usage

1. Start the services with Docker Compose:
    ```bash
    docker-compose up
    ```

## Endpoints

The NestJS application ([http://localhost:3001](http://localhost:3001)) includes two main endpoints for demonstration purposes:

1. **GET /**: Returns a greeting message and log an info message.
2. **GET /fail**: Generates an intentional error to test log capturing.

## Log Visualization

1. Open Grafana in your browser at [http://localhost:3000](http://localhost:3000).
