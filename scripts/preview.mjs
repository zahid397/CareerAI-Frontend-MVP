// Local tooling only: serves the exported frontend files. No API or application backend.
import { createServer } from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { resolve, extname, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../out/", import.meta.url)).replace(
  /\/$/,
  "",
);
const port = Number(process.env.PORT || 3000);
if (!Number.isInteger(port) || port < 1 || port > 65535)
  throw new Error("PORT must be between 1 and 65535.");
if (!existsSync(resolve(root, "index.html")))
  throw new Error("Run npm run build first to create out/.");
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
};

const server = createServer((request, response) => {
  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(405, { Allow: "GET, HEAD" });
    response.end();
    return;
  }
  try {
    const url = new URL(request.url || "/", "http://localhost");
    let target = resolve(root, `.${decodeURIComponent(url.pathname)}`);
    if (target !== root && !target.startsWith(root + sep)) {
      response.writeHead(403);
      response.end();
      return;
    }
    if (existsSync(target) && statSync(target).isDirectory()) {
      if (!url.pathname.endsWith("/")) {
        response.writeHead(308, { Location: url.pathname + "/" + url.search });
        response.end();
        return;
      }
      target = resolve(target, "index.html");
    }
    let status = 200;
    if (!existsSync(target) || !statSync(target).isFile()) {
      target = resolve(root, "404.html");
      status = 404;
    }
    response.writeHead(status, {
      "Content-Type": types[extname(target)] || "application/octet-stream",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    });
    if (request.method === "HEAD") {
      response.end();
      return;
    }
    createReadStream(target)
      .on("error", () => response.destroy())
      .pipe(response);
  } catch {
    response.writeHead(400);
    response.end("Invalid file path.");
  }
});
server.on("error", (error) => {
  console.error(error.message);
  process.exitCode = 1;
});
server.listen(port, "127.0.0.1", () =>
  console.log(`CareerAI preview: http://localhost:${port}`),
);
