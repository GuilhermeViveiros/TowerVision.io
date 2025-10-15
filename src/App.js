// import React, { useState } from "react";
// import {
//   RadarChart,
//   PolarGrid,
//   PolarAngleAxis,
//   PolarRadiusAxis,
//   Radar,
//   Legend,
//   Tooltip as ReTooltip,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   ResponsiveContainer,
//   Cell,
// } from "recharts";

// // --- DATA ---
// // Use your vlmData, mtData, videoData here (same as in your example)
// const vlmData = [
//   { model: "Qwen2.5-VL-7B-Instruct", textVQA: 82.5, ocrBench: 84.5, ccOCR: 78.6, almEn: 83.1, almMulti: 83.6 },
//   { model: "CulturalPangea7B", textVQA: 69.8, ocrBench: 63.5, ccOCR: 51.7, almEn: 61.3, almMulti: 65.2 },
//   { model: "Llama3-Llava-Next-8B", textVQA: 64.8, ocrBench: 54.4, ccOCR: 40.9, almEn: 76.5, almMulti: 73.4 },
//   { model: "Aya-Vision-8B", textVQA: 66.9, ocrBench: 61.0, ccOCR: 46.3, almEn: 78.2, almMulti: 77.3 },
//   { model: "TowerVision-9B", textVQA: 73.6, ocrBench: 69.7, ccOCR: 56.3, almEn: 83.6, almMulti: 85.2 },
// ];

// const mtData = [
//   { model: "Qwen2.5-VL-7B-Instruct", enCs: 83.9, enDe: 97.1, enFr: 93.2, enDeCom: 74.7, enFrCom: 76.9, enRuCom: 77.2, enZhCom: 82.4 },
//   { model: "CulturalPangea7B", enCs: 80.0, enDe: 95.8, enFr: 92.1, enDeCom: 68.3, enFrCom: 77.3, enRuCom: 75.3, enZhCom: 79.3 },
//   { model: "Llama3-Llava-Next-8B", enCs: 79.1, enDe: 93.3, enFr: 88.1, enDeCom: 72.0, enFrCom: 74.4, enRuCom: 74.4, enZhCom: 73.5 },
//   { model: "Aya-Vision-8B", enCs: 94.4, enDe: 97.9, enFr: 95.3, enDeCom: 69.3, enFrCom: 76.9, enRuCom: 74.4, enZhCom: 76.2 },
//   { model: "TowerVision-2B", enCs: 90.3, enDe: 97.5, enFr: 94.7, enDeCom: 70.0, enFrCom: 74.3, enRuCom: 73.2, enZhCom: 76.6 },
//   { model: "TowerVision-9B", enCs: 95.1, enDe: 98.1, enFr: 95.6, enDeCom: 72.0, enFrCom: 78.8, enRuCom: 75.6, enZhCom: 77.4 },
// ];

// const videoData = [
//   { model: "LLaVA-Video-7B", ar: 38.8, bn: 30.4, zh: 43.2, en: 53.3, fr: 49.2, de: 45.4, hi: 34.2, ja: 33.4, ru: 38.2, si: 18.1, es: 45.7, sv: 39.8, ta: 21.9, ur: 33.8 },
//   { model: "VideoLLaMA3-7B", ar: 45.6, bn: 36.6, zh: 48.0, en: 52.9, fr: 47.1, de: 43.8, hi: 37.5, ja: 39.4, ru: 44.8, si: 25.1, es: 45.4, sv: 38.5, ta: 22.8, ur: 32.1 },
//   { model: "TowerVision-2B", ar: 18.9, bn: 19.5, zh: 21.7, en: 34.2, fr: 28.9, de: 28.3, hi: 25.1, ja: 22.2, ru: 24.8, si: 16.3, es: 30.4, sv: 27.1, ta: 16.1, ur: 19.9 },
//   { model: "TowerVision-9B", ar: 34.2, bn: 25.4, zh: 35.3, en: 46.7, fr: 41.1, de: 40.8, hi: 34.2, ja: 28.1, ru: 40.3, si: 19.8, es: 40.5, sv: 39.6, ta: 21.6, ur: 26.4 },
// ];

// // --- PROCESSING ---
// function avg(...nums) {
//   const valid = nums.filter((x) => typeof x === "number" && !isNaN(x));
//   return valid.length ? valid.reduce((a, b) => a + b, 0) / valid.length : 0;
// }

// function buildRadarData() {
//   const benchmarks = ["ALM-Bench", "Multi30k", "Commute", "CC-OCR", "OCRBench", "TextVQA"];
//   const combined = [];

//   for (const model of vlmData) {
//     const mt = mtData.find((m) => m.model === model.model);
//     const vid = videoData.find((v) => v.model === model.model);

//     combined.push({
//       model: model.model,
//       "ALM-Bench": avg(model.almEn, model.almMulti),
//       Commute: mt ? avg(mt.enDeCom, mt.enFrCom, mt.enRuCom, mt.enZhCom) : 0,
//       Multi30k: mt ? avg(mt.enCs, mt.enDe, mt.enFr) : 0,
//       "CC-OCR": model.ccOCR,
//       OCRBench: model.ocrBench,
//       TextVQA: model.textVQA,
//     });
//   }

//   for (const vid of videoData) {
//     if (!combined.find((x) => x.model === vid.model)) {
//       combined.push({
//         model: vid.model,
//         "ALM-Bench": 0,
//         Commute: 0,
//         Multi30k: 0,
//         "CC-OCR": 0,
//         OCRBench: 0,
//         TextVQA: 0,
//       });
//     }
//   }

//   return benchmarks.map((b) => {
//     const entry = { benchmark: b };
//     for (const model of combined) entry[model.model] = model[b];
//     return entry;
//   });
// }

// function buildBarData() {
//   const radarData = buildRadarData();
//   const result = [];
//   radarData.forEach((d) => {
//     const benchmark = d.benchmark;
//     Object.keys(d)
//       .filter((k) => k !== "benchmark")
//       .forEach((model) => result.push({ benchmark, model, score: d[model] }));
//   });
//   return result;
// }

// // --- COMPONENT ---
// export default function TowerBenchmarkDashboard() {
//   const [chartType, setChartType] = useState("radar");

//   const radarData = buildRadarData();
//   const barData = buildBarData();

//   const allModels = Object.keys(radarData[0]).filter((k) => k !== "benchmark");

//   // Map models to colors by family
//   const modelColorMap = {};
//   allModels.forEach((model) => {
//     if (model.includes("TowerVision") || model.includes("TowerVideo")) {
//       // Blues for Tower models
//       if (model.includes("TowerVision-2B")) modelColorMap[model] = "#60a5fa";
//       else if (model.includes("TowerVision-9B")) modelColorMap[model] = "#3b82f6";
//       else if (model.includes("TowerVideo-2B")) modelColorMap[model] = "#1e40af";
//       else if (model.includes("TowerVideo-9B")) modelColorMap[model] = "#1d4ed8";
//       else modelColorMap[model] = "#1e3a8a";
//     } else if (model.includes("Qwen")) {
//       // Greens for Qwen
//       modelColorMap[model] = "#10b981";
//     } else if (model.includes("Llama") || model.includes("LLaVA")) {
//       // Oranges for Llama/LLaVA
//       if (model.includes("Llama3-Llava-Next-8B")) modelColorMap[model] = "#f97316";
//       else if (model.includes("LLaVA-Video-7B")) modelColorMap[model] = "#ea580c";
//       else modelColorMap[model] = "#dc2626";
//     } else if (model.includes("Aya")) {
//       // Purple for Aya
//       modelColorMap[model] = "#8b5cf6";
//     } else if (model.includes("Cultural")) {
//       // Pink for Cultural
//       modelColorMap[model] = "#ec4899";
//     } else if (model.includes("ViMUL")) {
//       // Teal for ViMUL
//       modelColorMap[model] = "#14b8a6";
//     } else if (model.includes("VideoLLaMA")) {
//       // Red for VideoLLaMA
//       modelColorMap[model] = "#ef4444";
//     } else {
//       // Default gray for others
//       modelColorMap[model] = "#6b7280";
//     }
//   });

//   return (
//     <div className="p-8 flex flex-col items-center bg-gray-50 min-h-screen">
//       <h1 className="text-2xl font-bold mb-6 text-gray-800">
//         TowerVision, TowerVideo & Baselines — Unified Benchmark
//       </h1>

//       <div className="flex gap-4 mb-6 flex-wrap">
//         <button onClick={() => setChartType("radar")} className="px-4 py-2 bg-blue-500 text-white rounded">Radar</button>
//         <button onClick={() => setChartType("groupedBar")} className="px-4 py-2 bg-green-500 text-white rounded">Grouped Bar</button>
//         <button onClick={() => setChartType("stackedBar")} className="px-4 py-2 bg-yellow-500 text-white rounded">Stacked Bar</button>
//         <button onClick={() => setChartType("heatmap")} className="px-4 py-2 bg-purple-500 text-white rounded">Heatmap</button>
//       </div>

//       {chartType === "radar" && (
//         <div className="flex flex-col items-center">
//           <RadarChart outerRadius={160} width={750} height={450} data={radarData}>
//             <PolarGrid />
//             <PolarAngleAxis 
//               dataKey="benchmark" 
//               tick={{ fontWeight: 'bold', fontSize: 12, fill: '#000000' }}
//             />
//             <PolarRadiusAxis 
//               domain={[0, 100]} 
//               angle={90}
//               tick={{ fontSize: 10, fill: '#666666' }}
//               tickCount={6}
//             />
//             {allModels.map((model, i) => (
//               <Radar
//                 key={model}
//                 name={model}
//                 dataKey={model}
//                 stroke={modelColorMap[model]}
//                 strokeWidth={model === "TowerVision-9B" ? 2.2 : 1.5}
//                 fill={modelColorMap[model]}
//                 fillOpacity={0.04}
//                 dot={false}
//               />
//             ))}
//             <Legend
//               layout="horizontal"
//               verticalAlign="bottom"
//               align="center"
//               iconType="circle"
//               wrapperStyle={{
//                 paddingTop: 10,
//                 fontSize: 12,
//                 maxHeight: 120,
//                 overflowY: "auto",
//               }}
//             />
//             <ReTooltip />
//           </RadarChart>
//         </div>
//       )}

//       {chartType === "groupedBar" && (
//         <ResponsiveContainer width="90%" height={500}>
//           <BarChart data={barData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="benchmark" />
//             <YAxis domain={[0, 100]} />
//             <ReTooltip />
//             {allModels.map((model, i) => (
//               <Bar key={model} dataKey={(d) => (d.model === model ? d.score : 0)} name={model}>
//                 {barData.map((entry, idx) => (
//                   <Cell
//                     key={idx}
//                     fill={modelColorMap[entry.model]}
//                     fillOpacity={i >= baseColors.length ? 0.6 : 1} // lighter opacity for repeated colors
//                     stroke={i >= baseColors.length ? "#000" : null} // add border for duplicates
//                     strokeDasharray={i >= baseColors.length ? "4 2" : null} // dashed pattern
//                   />
//                 ))}
//               </Bar>
//             ))}
//           </BarChart>
//         </ResponsiveContainer>
//       )}

//       {chartType === "stackedBar" && (
//         <ResponsiveContainer width="90%" height={500}>
//           <BarChart data={barData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="benchmark" />
//             <YAxis domain={[0, 100]} />
//             <ReTooltip />
//             {allModels.map((model, i) => (
//               <Bar
//                 key={model}
//                 dataKey={(d) => (d.model === model ? d.score : 0)}
//                 name={model}
//                 stackId="a"
//                 fill={modelColorMap[model]}
//               />
//             ))}
//           </BarChart>
//         </ResponsiveContainer>
//       )}

//       {chartType === "heatmap" && (
//         <div className="text-gray-700 overflow-x-auto">
//           <table className="border-collapse border border-gray-300">
//             <thead>
//               <tr>
//                 <th className="border px-2 py-1">Model / Benchmark</th>
//                 {radarData.map((d) => (
//                   <th key={d.benchmark} className="border px-2 py-1">{d.benchmark}</th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {allModels.map((model) => (
//                 <tr key={model}>
//                   <td className="border px-2 py-1 font-bold">{model}</td>
//                   {radarData.map((d) => (
//                     <td
//                       key={d.benchmark}
//                       className="border px-2 py-1"
//                       style={{ backgroundColor: `rgba(59,130,246,${d[model] / 100})` }}
//                     >
//                       {d[model].toFixed(1)}
//                     </td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }

import React from 'react';
import './App.css';

import Abstract from './components/Abstract';
import ResultsSection from './components/ResultsSection';
import ModelStructureSection from './components/ModelStructureSection';
import DataSection from './components/DataSection';

function App() {
  return (
    <div className="App">
      <Abstract />
      <ResultsSection />
      <ModelStructureSection />
      <DataSection />
    </div>
  );
}

export default App;
