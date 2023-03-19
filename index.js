const ITEMS_AMOUNT = 1000;
const SAMPLE_SIZE = 100;

const items = Array.from(Array(ITEMS_AMOUNT), (_, index) => ({
  key: index,
  value: index * 10,
}));

const objContainer = {};
const arrContainer = [];
const mapContainer = new Map();
const setContainer = new Set();
const sampleItems = [];

for (let i = SAMPLE_SIZE; i >= 0; i--) {
  const index = Math.floor(Math.random() * ITEMS_AMOUNT);
  const item = items[index];
  sampleItems.push(item);
  objContainer[item.key] = item;
  arrContainer.push(item);
  mapContainer.set(item.key, item);
  setContainer.add(item);
}

sampleItems.sort((a, b) => a.key - b.key);

log = (func, label) => {
  // console.log(label);
  console.time(label);
  func();
  console.timeEnd(label);
};

// посик элемента в разных коллекциях

// добавить в сравнение ещё и findIndex
console.log("---------------------");

log(() => {
  items.forEach((item) => mapContainer.get(item.key));
}, "search in Map");


log(() => {
  items.forEach((item) => objContainer[item.key]);
}, "search in object");

log(() => {
  items.forEach((item) =>
    arrContainer.find((containerItem) => containerItem.key === item.key)
  );
}, "search in array");


console.log("---------------------");
// check if element exist Map vs Set vs object

log(() => {
  items.forEach((item) => setContainer.has(item));
}, "search in Set");

log(() => {
  items.forEach((item) => mapContainer.has(item));
}, "search in Map");

log(() => {
  items.forEach((item) => objContainer[item.key]);
}, "search in object");

console.log("---------------------");
// array vs object.keys
console.log("---------------------");


log(() => {
  arrContainer.slice();
}, "slice");

log(() => {
  arrContainer.forEach((item) => item);
}, "forEach");

log(() => {
  for (let i = 0; i < arrContainer.length; i++) {
    arrContainer[i];
  }
}, "for");

log(() => {
  arrContainer.map((item) => item);
}, "map");


log(() => {
  Object.keys(objContainer);
}, "Object.keys");

log(() => {
  Object.values(objContainer);
}, "Object.values");

log(() => {
  Object.entries(objContainer);
}, "Object.entries");

log(() => {
  Object.keys(objContainer).forEach((key) => objContainer[key]);
}, "Object.keys + forEach ");

log(() => {
  Object.values(objContainer).forEach((value) => value);
}, "Object.values + forEach");

log(() => {
  Object.entries(objContainer).forEach((entrie) => entrie[1]);
}, "Object.entries + forEach");

log(() => {
  for (const property in objContainer) {
    property;
  }
}, "for...in");

console.log("----------");

console.log("----- array.from vs ... -----");

log(() => {
  [...mapContainer];
}, "[...mapContainer]");

log(() => {
  Array.from(mapContainer);
}, "Array.from Map");

log(() => {
  [...setContainer];
}, "[...setContainer]");

log(() => {
  Array.from(setContainer);
}, "Array.from Set");

console.log("----------");

console.log("----- Object.assign vs ... -----");

log(() => {
  arrContainer.map((item) => ({ ...item }));
}, "map + spread");

log(() => {
  arrContainer.map((item) =>  Object.assign({}, item));
}, "map + Object.assign");

// ... vs object.aasign


