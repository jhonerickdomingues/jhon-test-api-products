/**
 * Config source: https://git.io/JfefC
 *
 * Feel free to let us know via PR, if you find something broken in this config
 * file.
 */

import type { CorsConfig } from "@ioc:Adonis/Core/Cors";

const corsConfig: CorsConfig = {
  enabled: true,
  origin: "*",
  methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  headers: true,
  exposeHeaders: [
    "cache-control",
    "content-language",
    "content-type",
    "expires",
    "last-modified",
    "pragma",
  ],
  credentials: false,
  maxAge: 90,
};

export default corsConfig;
