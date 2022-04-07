export function handler(req: Request): Response {
  let response, socket: WebSocket;

  const upgrade = req.headers.get("upgrade") || "";

  if (upgrade) {
    ({ response, socket } = Deno.upgradeWebSocket(req));
  } else {
    return new Response("request isn't trying to upgrade to websocket.");
  }

  socket.onopen = () => console.log("socket opened");

  socket.onmessage = (e) => {
    console.log("socket message:", e.data);
    socket.send(new Date().toString());
  };

  socket.onclose = () => console.log("socket closed");

  return response;
}
