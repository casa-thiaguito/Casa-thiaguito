// Base de datos inicial fija
const productosBase = [
  {id:1, nombre:"Reflector luz fria 200w", img:"luz fria 200w.jpg", precio:130000, cat:"iluminacion"},
  {id:2, nombre:"Reflector luz fria 20w", img:"luz fria 20w.jpg", precio:45000, cat:"iluminacion"},
  {id:3, nombre:"Reflector luz fria 50w", img:"luz fria 50w.jpg", precio:75000, cat:"iluminacion"},
  {id:4, nombre:"Reflector LED 50W luz fria", img:"led50w.jpg", precio:85000, cat:"iluminacion"},
  {id:5, nombre:"Reflector Rgb 50w", img:"rgb50w.jpg", precio:95000, cat:"iluminacion"},
  {id:6, nombre:"Reflector luz fria 500w", img:"500w.jpg", precio:290000, cat:"iluminacion"},
  {id:7, nombre:"Reflector luz fria 300w", img:"300w.jpg", precio:200000, cat:"iluminacion"},
  {id:8, nombre:"Reflector luz fria 100w", img:"100w.jpg", precio:180000, cat:"iluminacion"},
  {id:9, nombre:"Reflector luz calida 30w", img:"30wcalida.jpg", precio:65000, cat:"iluminacion"}
];

// Cargar productos creados desde el Panel de Administración local
const productosLocales = JSON.parse(localStorage.getItem("mis_productos_custom")) || [];

// Lista unificada exportada para todo el sitio
const productos = [...productosBase, ...productosLocales];
