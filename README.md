# Multi-dimensional Latent Space Exploration

This React/Vite app is meant to be used to explore and annotate the latent representations of data used for training (variational) autoencoders.

It allows users to:
- Select 1–3 dimensions from a latent vector
- Visualize the selected dimensions as 2D or 3D scatter plots
- Interactively inspect and (optionally) annotate individual samples

---

## How to Use

### 1. Install dependencies

Make sure you have [Node.js](https://nodejs.org/) installed (v18 or later), then install project dependencies:

```bash
npm install
```

### 2. Start development server

Run the app locally:

```bash
npm run dev
```

The app will open at `http://localhost:5173`.

### 3. Interact with the latent space

Once running:

- Use the dropdowns to choose latent dimensions to plot (`z[0]`, `z[1]`, etc.)
- Toggle between **2D** and **3D** view
- Each point in the plot represents a data sample
- Hover over or click points to inspect their IDs

### 4. Use your own data

To visualize your own latent space data:

1. Open `src/data.js`
2. Replace the contents with your own array, formatted like this:

```js
export const sampleData = [
  { id: 'sample_1', z: [0.12, -0.33, 1.01, 0.56] },
  { id: 'sample_2', z: [0.05, 0.18, -0.62, -0.11] },
  // ...
];
```

Each object must have:
- a unique `id` (string)
- a `z` array containing numerical values (the latent vector)

All `z` arrays should have the same length.

---

## License

MIT License.