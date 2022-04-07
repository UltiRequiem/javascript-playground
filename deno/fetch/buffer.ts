const response = await fetch("https://example.com");

const body = new Uint8Array(await response.arrayBuffer());

await Deno.stdout.write(body);
