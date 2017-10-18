function importAll (r) {
  r.keys().forEach(r);
}
importAll(require.context('./nested', true, /yes\.js$/));
console.log('index.js loaded');