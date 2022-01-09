export const cleanNullableValues = (array) => array.filter(Boolean);

const someValues = [1, 'a', true, {}, [], undefined, null];
const notNullableValues = cleanNullableValues(someValues);

console.log(notNullableValues)
