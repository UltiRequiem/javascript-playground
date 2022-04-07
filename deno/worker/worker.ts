/// <reference no-default-lib="true" />
/// <reference lib="deno.worker" />

self.onmessage = async (event) => {
  const { url, time } = event.data;

  await fetch(url);

  console.log(`Fetched "${url}", ${time}.`);
};
