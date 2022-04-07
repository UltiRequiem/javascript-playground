const localStorageDB = "denoTesting";

// deno-lint-ignore no-explicit-any
export const inputToDB = (data: any) => {
  const previousData = queryDB();

  localStorage.setItem(
    localStorageDB,
    JSON.stringify({ ...previousData, ...data })
  );
};

export const queryDB = () => {
  return JSON.parse(localStorage.getItem(localStorageDB) || "{}");
};

/* inputToDB({
  name: "Deno",
  age: Math.random() * 100,
});
 */

console.log(queryDB());
