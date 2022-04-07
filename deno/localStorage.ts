const localStorageDB = "denoTesting";

const inputToDB = (data: any) => {
  const previousData = queryDB();

  localStorage.setItem(
    localStorageDB,
    JSON.stringify({ ...previousData, ...data })
  );
};

const queryDB = () => {
  return JSON.parse(localStorage.getItem(localStorageDB) || "{}");
};

/* inputToDB({
  name: "Deno",
  age: Math.random() * 100,
});
 */

console.log(queryDB());
