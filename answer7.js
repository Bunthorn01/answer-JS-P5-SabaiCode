
function filterProps(object, ...propsToFilter) {
    return Object.fromEntries(
        Object.entries(object).filter(([key, value]) => !propsToFilter.includes(key))
    );
}
const object = { 
    a: 1, 
    b: 2, 
    c: 3, 
    d: 4,
    e: 5
};
console.log(filterProps(object, "b", "d", "e"));
