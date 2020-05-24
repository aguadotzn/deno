/* 
We don´t have a package.json file in deno. The modules for your app are directly allocated in your imports and downloaded in the first execution.
*/

// Import external modules from URLs
import { serve } from "https://deno.land/std@0.53.0/http/server.ts";

// Create server
const server = serve({ port: 8000 });
console.log("http://localhost:8000/");

// Asychronous for loop
for await (const request of server) {
  request.respond({ body: "Hello World\n" });
}
