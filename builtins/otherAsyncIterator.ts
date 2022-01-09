async function* streamAsyncIterable(stream: ReadableStream<Uint8Array>) {
  const reader = stream.getReader();

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done || !value) return;
      yield value;
    }
  } finally {
    reader.releaseLock();
  }
}

async function getResponseSize(url: string) {
  const response = await fetch(url);

  if (!response.body) throw new Error("the response body is null.");

  let responseSize = 0;

  for await (const chunk of streamAsyncIterable(response.body)) {
    if (chunk) responseSize += chunk.length;
  }

  return responseSize;
}

const responseSize = await getResponseSize(
  "https://jsonplaceholder.typicode.com/photos",
);

console.log(`Response Size: ${responseSize} bytes`);
