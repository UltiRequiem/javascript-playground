function generateFetches(urls, { timesPerURL }) {
  return Promise.all(
    urls.map((url) =>
      Promise.all(Array.from({ length: timesPerURL }, () => fetch(url)))
    ),
  );
}

const responses = await generateFetches([
  "https://joke.deno.dev",
  "https://xkcd.com/info.0.json",
], {
  timesPerURL: 100,
});

responses.forEach(async (response) => {
  const data = await Promise.all(response.map((r) => r.json()));
  console.log(data);
});
