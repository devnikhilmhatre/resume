# Resume App

A simple React + Vite resume website that renders a personal resume from a JSON file.

## Project Structure

- `src/main.jsx` – app entry point and page composition
- `src/data.json` – resume content for name, summary, contact, skills, experience, education, and projects
- `src/components/` – reusable class-based React components for each resume section
- `src/index.css` – all styling for the resume layout and print view

## Resume Data

The resume content lives in [src/data.json](src/data.json). You can update the following sections there:

- `name`
- `summary`
- `contact`
- `skills`
- `experience`
- `education`
- `projects`

Each experience entry can include:
- `company`
- `role`
- `stack`
- `startDate`
- `endDate`
- `summary`
- `highlights`

## Development

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Notes

- The app includes a print-friendly layout and an "Export PDF" button.
- The UI is composed from class-based React components under `src/components/`.
