# jossiecalderon.com

Personal website deployed on **Azure Static Web Apps** with a serverless visitor counter.

## Architecture
- **Frontend:** Static HTML/CSS/JS hosted on Azure Static Web Apps with managed TLS
- **API:** HTTP-triggered Azure Functions for visitor counter
- **Data:** Azure Cosmos DB to store a single counter document
- **Security:** **Managed identity and least-privilege RBAC** to access Cosmos DB

## Live site
- https://jossiecalderon.com

## Repo layout
- `/` — static site (index.html, assets)
- `/api` — Visitor counter
- `/infra` — Cosmos/RBAC

## CI/CD
Deployments are automated via **GitHub Actions**:
- Push to `main` → deploys frontend

## Notes
This project is intentionally small but production-minded: reduced attack surface (no VMs), managed TLS, and identity-based access to data.
