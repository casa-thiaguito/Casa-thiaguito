// Los productos iniciales empiezan vacíos para que tu cliente cargue los suyos
const productosBase = [];

// Cargar productos creados desde la web
const productosLocales = JSON.parse(localStorage.getItem("mis_productos_custom")) || [];

// Lista unificada
const productos = [...productosBase, ...productosLocales];
