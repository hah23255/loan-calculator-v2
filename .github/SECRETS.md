<!--
  This file documents the required repository secrets for GitHub Actions workflows.
  Keep this as documentation only. Do NOT place executable workflow files in `.github/workflows/`
  that contain only documentation — GitHub will try to parse them as workflows which can cause errors.
-->

# Required repository secrets

Add these secrets in: Repository Settings → Secrets and variables → Actions

| Secret name | Description |
|-------------|-------------|
| `NETLIFY_AUTH_TOKEN` | Netlify personal access token used by CI to deploy the site. Set to a Netlify personal access token with the scopes required for deployments. |
| `NETLIFY_SITE_ID` | Netlify site ID for the target deployment site. This tells deployment scripts which site to update. |

Notes

- Mark both secrets as "Repository" secrets (or Org secrets if you prefer sharing across repos).
- Keep tokens scoped to the minimum required permissions.
- If you have environment-specific secrets (staging/production), document them here as well.

Example: in GitHub go to `Settings -> Secrets and variables -> Actions -> New repository secret` and add the values above.

If you intended this to be an actual workflow file, instead create a YAML workflow in `.github/workflows/` with a top-level `name`, `on`, and `jobs` keys. Workflows cannot declare repository secrets inside the YAML; secrets must be added via the repository or organization settings.
