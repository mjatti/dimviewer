import React, { useState } from 'react';
import Plot from 'react-plotly.js';
import { sampleData } from './data';

const DIM_OPTIONS = ['z[0]', 'z[1]', 'z[2]', 'z[3]'];

function App() {
  const [dimX, setDimX] = useState('z[0]');
  const [dimY, setDimY] = useState('z[1]');
  const [dimZ, setDimZ] = useState('z[2]');
  const [show3D, setShow3D] = useState(true);

  const getDimIndex = (dimStr) => parseInt(dimStr.replace('z[', '').replace(']', ''));

  const x = sampleData.map((d) => d.z[getDimIndex(dimX)]);
  const y = sampleData.map((d) => d.z[getDimIndex(dimY)]);
  const z = sampleData.map((d) => d.z[getDimIndex(dimZ)]);
  const labels = sampleData.map((d) => d.id);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Latent Space Visualizer</h2>

      <div>
        <label>X:</label>
        <select value={dimX} onChange={(e) => setDimX(e.target.value)}>
          {DIM_OPTIONS.map((d) => <option key={d}>{d}</option>)}
        </select>

        <label>Y:</label>
        <select value={dimY} onChange={(e) => setDimY(e.target.value)}>
          {DIM_OPTIONS.map((d) => <option key={d}>{d}</option>)}
        </select>

        <label>Z:</label>
        <select value={dimZ} onChange={(e) => setDimZ(e.target.value)}>
          {DIM_OPTIONS.map((d) => <option key={d}>{d}</option>)}
        </select>

        <label style={{ marginLeft: '20px' }}>
          <input
            type="checkbox"
            checked={show3D}
            onChange={(e) => setShow3D(e.target.checked)}
          />
          Show 3D
        </label>
      </div>

      <div style={{ marginTop: '30px' }}>
        {show3D ? (
          <Plot
            data={[
              {
                x,
                y,
                z,
                text: labels,
                type: 'scatter3d',
                mode: 'markers+text',
                marker: { size: 5 },
                textposition: 'top center'
              }
            ]}
            layout={{ width: 700, height: 500, title: '3D Latent Space' }}
          />
        ) : (
          <Plot
            data={[
              {
                x,
                y,
                text: labels,
                type: 'scatter',
                mode: 'markers+text',
                marker: { size: 8 },
                textposition: 'top center'
              }
            ]}
            layout={{ width: 700, height: 500, title: '2D Latent Space' }}
          />
        )}
      </div>
    </div>
  );
}

export default App;