function suffix() {
  switch (Deno.build.os) {
    case "windows":
      return "dll";
    case "darwin":
      return "dylib";
    case "linux":
      return "so";
    default:
      throw new Error("Unsupported OS");
  }
}

const dylib = Deno.dlopen(`./libadd.${suffix()}`, {
  add: {
    parameters: ["isize", "isize"] as const,
    result: "isize",
    nonblocking: true,
  },
});

export const add = dylib.symbols.add;
