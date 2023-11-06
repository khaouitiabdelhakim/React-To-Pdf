import React from "react";
import html2canvas from "html2canvas";
import jsPdf from "jspdf";

import "./styles.css";

function App() {
  const printPDF = () => {
    const domElement = document.getElementById("root");
    html2canvas(domElement, {
      onclone: document => {
        document.getElementById("print").style.visibility = "hidden";
      },
      scale: 1, // Increase the scale for higher resolution (e.g., 2 for 2x DPI)
   
    }).then(canvas => {
      const imgData = canvas.toDataURL("image/png",1);
      const pdf = new jsPdf();
      pdf.addImage(imgData, "JPEG", 10, 10);
      pdf.save(`${new Date().toISOString()}.pdf`);
    });
  };

  return (
    <div className="App">
      <h1>Generate PDF</h1>
      <h1>Sample Report</h1>

        <h2>Table Example</h2>
        <table>
          <thead>
            <tr>
              <th>Header 1</th>
              <th>Header 2</th>
              <th>Header 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Data 1</td>
              <td>Data 2</td>
              <td>Data 3</td>
            </tr>
            <tr>
              <td>Data 4</td>
              <td>Data 5</td>
              <td>Data 6</td>
            </tr>
          </tbody>
        </table>

        <h2>Description List Example</h2>
        <dl>
          <dt>Term 1</dt>
          <dd>Description for Term 1.</dd>

          <dt>Term 2</dt>
          <dd>Description for Term 2.</dd>
        </dl>

        <h2>Unordered List Example</h2>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>

        <h2>Ordered List Example</h2>
        <ol>
          <li>Step 1</li>
          <li>Step 2</li>
          <li>Step 3</li>
        </ol>
      <button id="print" onClick={printPDF}>
        Download Rapport
      </button>
    </div>
  );
}

export default App;
