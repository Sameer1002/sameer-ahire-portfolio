# Fix Vercel build (npm install failed)

Vercel is building an **old GitHub commit** that still has `@mui/lab`. Upload or push these files to  
https://github.com/Sameer1002/sameer-ahire-portfolio

## Required files (repo root)

1. **`.npmrc`** (new file)
   ```
   legacy-peer-deps=true
   ```

2. **`vercel.json`** (new or replace)
   ```json
   {
     "installCommand": "npm install --legacy-peer-deps",
     "buildCommand": "npm run build",
     "framework": "nextjs"
   }
   ```

3. **`package.json`** — remove these lines if present:
   - `"@mui/lab": ...`
   - `"ag-grid-react": ...`

4. **`package-lock.json`** — replace with the one from this project after running `npm install` locally.

## After uploading

1. Vercel → Deployments → **Redeploy** (or push a new commit).
2. Project Settings → General → **Node.js Version**: **20.x**
3. Root Directory: leave empty if the Next.js app is at the repo root.

## Quick push from this folder (if you init git)

```bash
git init
git remote add origin https://github.com/Sameer1002/sameer-ahire-portfolio.git
git add .
git commit -m "Fix Vercel npm install for React 19"
git push -u origin main
```
