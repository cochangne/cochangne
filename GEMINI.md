# Project Rules & Constraints

## GitHub Pages Deployment Compatibility (Mandatory)
All modifications to this project must ensure the application remains 100% compatible with and deployable to **GitHub Pages**:

1. **Static Site Constraints**:
   - The application must remain a purely client-side static web application (HTML, CSS, JavaScript).
   - Do NOT introduce any server-side dependencies (e.g. Node.js backend APIs, Express, Python backends, SSR frameworks) that require a persistent running backend server.
   - All state must be handled on the client side (e.g., `localStorage`, in-memory, or static JSON/assets).

2. **Relative Paths & Assets**:
   - Always use relative file paths (e.g., `./assets/...` or relative to the root/current file) for scripts, stylesheets, images, audio, and data files so assets load properly under GitHub Pages sub-paths (e.g. `https://<username>.github.io/<repo>/`).
   - Do NOT use absolute root paths like `/script.js` or `/images/...` which break when hosted under repository sub-paths.

3. **Case Sensitivity**:
   - Ensure all asset names and imports strictly match case (GitHub Pages/Linux servers are case-sensitive, unlike macOS default filesystems).

4. **Zero-Build / Static Readiness**:
   - Any updates must keep `index.html` and static files immediately previewable and functional upon pushing to GitHub Pages without requiring unsupported build steps unless an automated GitHub Actions workflow is explicitly configured.
