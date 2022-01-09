// pass to deno.land/x/xkdc

async function* asyncGenerator() {
  for (let i = 1; i < 100; i++) {
    const response = await fetch(`https://xkcd.com/${i}/info.0.json`);
    yield response.json();
  }
}

for await (const num of asyncGenerator()) {
  console.log(num);
}
