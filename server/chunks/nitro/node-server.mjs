globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'node:http';
import { Server } from 'node:https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseStatus, setResponseHeader, getRequestHeaders, createError, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import defu, { defuFn } from 'defu';
import { hash } from 'ohash';
import { parseURL, withoutBase, joinURL, withQuery, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage, prefixStorage } from 'unstorage';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"envPrefix":"NUXT_","routeRules":{"/__nuxt_error":{"cache":false},"/_nuxt/**":{"headers":{"cache-control":"public, max-age=31536000, immutable"}}}},"public":{"apiBase":"","strapi":{"url":"http://localhost:1337","prefix":"/api","version":"v4","cookie":{},"auth":{},"cookieName":"msfda","devtools":false}},"strapi":{"url":"http://localhost:1337","prefix":"/api","version":"v4","cookie":{},"auth":{},"cookieName":"msfda","devtools":false}};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
overrideConfig(_runtimeConfig);
const runtimeConfig = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => runtimeConfig;
deepFreeze(appConfig);
function getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject(obj[key])) {
      if (isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

storage.mount('/assets', assets$1);

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  event.node.res.end(await res.text());
});

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-n8egyE9tcb7sKGr/pYCaQ4uWqxI\"",
    "mtime": "2023-05-10T11:26:28.915Z",
    "size": 4286,
    "path": "../public/favicon.ico"
  },
  "/_nuxt/CourseCard.e2a70df6.js": {
    "type": "application/javascript",
    "etag": "\"4cc-HSnYkcvzCJyxSRGblqYtAaAUrAE\"",
    "mtime": "2023-05-10T11:26:28.915Z",
    "size": 1228,
    "path": "../public/_nuxt/CourseCard.e2a70df6.js"
  },
  "/_nuxt/FLAME.c8120920.png": {
    "type": "image/png",
    "etag": "\"1aa4-PRqvekOpm4LMKx41g4eNxviCd4A\"",
    "mtime": "2023-05-10T11:26:28.915Z",
    "size": 6820,
    "path": "../public/_nuxt/FLAME.c8120920.png"
  },
  "/_nuxt/HBSU.4b9f2394.png": {
    "type": "image/png",
    "etag": "\"4fb8-z5iM92RbdphGgo+Bl2UitNGb8vA\"",
    "mtime": "2023-05-10T11:26:28.915Z",
    "size": 20408,
    "path": "../public/_nuxt/HBSU.4b9f2394.png"
  },
  "/_nuxt/HP.08e4339b.png": {
    "type": "image/png",
    "etag": "\"1b331-vS+YHVthjATlstRcLqRzKXijgN4\"",
    "mtime": "2023-05-10T11:26:28.915Z",
    "size": 111409,
    "path": "../public/_nuxt/HP.08e4339b.png"
  },
  "/_nuxt/ICT.0ac12ab1.png": {
    "type": "image/png",
    "etag": "\"956a-ZT6RSzQsegi4Lgrrw1CdUC7suiE\"",
    "mtime": "2023-05-10T11:26:28.915Z",
    "size": 38250,
    "path": "../public/_nuxt/ICT.0ac12ab1.png"
  },
  "/_nuxt/IEEE.2d820542.png": {
    "type": "image/png",
    "etag": "\"158d8-DSJ7TKgO5NzoGAVE6pi4uXlhvQQ\"",
    "mtime": "2023-05-10T11:26:28.915Z",
    "size": 88280,
    "path": "../public/_nuxt/IEEE.2d820542.png"
  },
  "/_nuxt/IISER.5e5f4aa0.png": {
    "type": "image/png",
    "etag": "\"65c2-6hdWEBvdgJYrkMci6CIHAAPU8ZA\"",
    "mtime": "2023-05-10T11:26:28.912Z",
    "size": 26050,
    "path": "../public/_nuxt/IISER.5e5f4aa0.png"
  },
  "/_nuxt/IOC.a6e97155.png": {
    "type": "image/png",
    "etag": "\"d459-CUV5nmiJE99pgBuXojPuEV8miRU\"",
    "mtime": "2023-05-10T11:26:28.912Z",
    "size": 54361,
    "path": "../public/_nuxt/IOC.a6e97155.png"
  },
  "/_nuxt/Input.4803216a.js": {
    "type": "application/javascript",
    "etag": "\"3d1-oz/EVDSlzKu1kiqECo5y2WqT1u0\"",
    "mtime": "2023-05-10T11:26:28.912Z",
    "size": 977,
    "path": "../public/_nuxt/Input.4803216a.js"
  },
  "/_nuxt/KKSU.87c0d1c0.png": {
    "type": "image/png",
    "etag": "\"42eec-pXbdHanFnODGejU6q+jJUHR4WQw\"",
    "mtime": "2023-05-10T11:26:28.912Z",
    "size": 274156,
    "path": "../public/_nuxt/KKSU.87c0d1c0.png"
  },
  "/_nuxt/MNLU.e61c7c76.png": {
    "type": "image/png",
    "etag": "\"5bcd-PgApgu137x2TjJ8aDNv1VyLLhDo\"",
    "mtime": "2023-05-10T11:26:28.912Z",
    "size": 23501,
    "path": "../public/_nuxt/MNLU.e61c7c76.png"
  },
  "/_nuxt/NFB.bf44b8f0.png": {
    "type": "image/png",
    "etag": "\"33b1-8TlDLtEQi4Eyzc/bQ2iy3qlBToU\"",
    "mtime": "2023-05-10T11:26:28.912Z",
    "size": 13233,
    "path": "../public/_nuxt/NFB.bf44b8f0.png"
  },
  "/_nuxt/NIRMAN.e9c51436.png": {
    "type": "image/png",
    "etag": "\"ca1c-MBrO76F6+NUjLm2Lo3ss97VcqGk\"",
    "mtime": "2023-05-10T11:26:28.912Z",
    "size": 51740,
    "path": "../public/_nuxt/NIRMAN.e9c51436.png"
  },
  "/_nuxt/PPT.9677cc90.png": {
    "type": "image/png",
    "etag": "\"1078d-vKP7EsAyb9feK9Yq3ghWXLVplos\"",
    "mtime": "2023-05-10T11:26:28.912Z",
    "size": 67469,
    "path": "../public/_nuxt/PPT.9677cc90.png"
  },
  "/_nuxt/RI.d24abc64.png": {
    "type": "image/png",
    "etag": "\"5168-qtaaDgj03yrY5QRNjeVGHOfrLt4\"",
    "mtime": "2023-05-10T11:26:28.912Z",
    "size": 20840,
    "path": "../public/_nuxt/RI.d24abc64.png"
  },
  "/_nuxt/RID.f0e08a9b.png": {
    "type": "image/png",
    "etag": "\"10197-C9xv+FTiUUyOOWK1OmW9UPcXI90\"",
    "mtime": "2023-05-10T11:26:28.912Z",
    "size": 65943,
    "path": "../public/_nuxt/RID.f0e08a9b.png"
  },
  "/_nuxt/SANT.5a45f2ad.png": {
    "type": "image/png",
    "etag": "\"15019-F0LgbtJ+EjJV50LVQh6v+dJOYfs\"",
    "mtime": "2023-05-10T11:26:28.912Z",
    "size": 86041,
    "path": "../public/_nuxt/SANT.5a45f2ad.png"
  },
  "/_nuxt/SNDT.f2b9ccc5.jpg": {
    "type": "image/jpeg",
    "etag": "\"433c-Wh5UMlM+fwdgUx74rHaxPmmYnGg\"",
    "mtime": "2023-05-10T11:26:28.912Z",
    "size": 17212,
    "path": "../public/_nuxt/SNDT.f2b9ccc5.jpg"
  },
  "/_nuxt/Select.0e819d89.js": {
    "type": "application/javascript",
    "etag": "\"3a6-3D0cjZKL1ODFoy2yckGukmla1lM\"",
    "mtime": "2023-05-10T11:26:28.912Z",
    "size": 934,
    "path": "../public/_nuxt/Select.0e819d89.js"
  },
  "/_nuxt/TI.7c805fc3.png": {
    "type": "image/png",
    "etag": "\"15fa7-G/pXLnhIBXO1CawIS4Jq1F7A0NQ\"",
    "mtime": "2023-05-10T11:26:28.912Z",
    "size": 90023,
    "path": "../public/_nuxt/TI.7c805fc3.png"
  },
  "/_nuxt/_id_.0f512c1f.js": {
    "type": "application/javascript",
    "etag": "\"4b8-k9C5pGkMjXkHXZpXFz9XDRPdIUk\"",
    "mtime": "2023-05-10T11:26:28.912Z",
    "size": 1208,
    "path": "../public/_nuxt/_id_.0f512c1f.js"
  },
  "/_nuxt/_id_.339717be.js": {
    "type": "application/javascript",
    "etag": "\"588-+FeVah9HgRejUwjH8NZoz54AO8Q\"",
    "mtime": "2023-05-10T11:26:28.912Z",
    "size": 1416,
    "path": "../public/_nuxt/_id_.339717be.js"
  },
  "/_nuxt/_id_.8c9020e4.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1d9-uPOSiEZggOIR08EVqFRjAx+zeB0\"",
    "mtime": "2023-05-10T11:26:28.912Z",
    "size": 473,
    "path": "../public/_nuxt/_id_.8c9020e4.css"
  },
  "/_nuxt/_id_.a233c5df.js": {
    "type": "application/javascript",
    "etag": "\"17fc-sA+s2ZBCoMwlidacR/w1B1/q4+o\"",
    "mtime": "2023-05-10T11:26:28.912Z",
    "size": 6140,
    "path": "../public/_nuxt/_id_.a233c5df.js"
  },
  "/_nuxt/_id_.e5947094.js": {
    "type": "application/javascript",
    "etag": "\"4ac2-8WWD3pceJJRmHFpW/1b57qGTtgY\"",
    "mtime": "2023-05-10T11:26:28.912Z",
    "size": 19138,
    "path": "../public/_nuxt/_id_.e5947094.js"
  },
  "/_nuxt/about.64203da3.js": {
    "type": "application/javascript",
    "etag": "\"2dba-23nbIS1jMoh8oO3pPpksZuBYWzg\"",
    "mtime": "2023-05-10T11:26:28.909Z",
    "size": 11706,
    "path": "../public/_nuxt/about.64203da3.js"
  },
  "/_nuxt/admin.f8a490de.js": {
    "type": "application/javascript",
    "etag": "\"191a-DSz408D/o0m945oCkjlDdPYD8mw\"",
    "mtime": "2023-05-10T11:26:28.909Z",
    "size": 6426,
    "path": "../public/_nuxt/admin.f8a490de.js"
  },
  "/_nuxt/auth.1f1d4462.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"15f-CL0LrGtRjSUDZq4WeXrnlzScV6c\"",
    "mtime": "2023-05-10T11:26:28.909Z",
    "size": 351,
    "path": "../public/_nuxt/auth.1f1d4462.css"
  },
  "/_nuxt/auth.b110a4e0.js": {
    "type": "application/javascript",
    "etag": "\"e8-d+Cq5Bv7kxx2oGpOH1ptHQebJLE\"",
    "mtime": "2023-05-10T11:26:28.909Z",
    "size": 232,
    "path": "../public/_nuxt/auth.b110a4e0.js"
  },
  "/_nuxt/auth.befb4a71.js": {
    "type": "application/javascript",
    "etag": "\"85c-SBeB2rVHDYKmvxOI/+iLOUwLjrY\"",
    "mtime": "2023-05-10T11:26:28.909Z",
    "size": 2140,
    "path": "../public/_nuxt/auth.befb4a71.js"
  },
  "/_nuxt/bg.0866a58f.js": {
    "type": "application/javascript",
    "etag": "\"67-hzoNHKeAL88IVDR2mHuVjK4qr2Q\"",
    "mtime": "2023-05-10T11:26:28.909Z",
    "size": 103,
    "path": "../public/_nuxt/bg.0866a58f.js"
  },
  "/_nuxt/bg.1fdab618.png": {
    "type": "image/png",
    "etag": "\"d3f3-HRKtIAqsRcwwehFEnlVpJLiUqHc\"",
    "mtime": "2023-05-10T11:26:28.909Z",
    "size": 54259,
    "path": "../public/_nuxt/bg.1fdab618.png"
  },
  "/_nuxt/bg.e4e9d75e.png": {
    "type": "image/png",
    "etag": "\"5ec2-HeGvw/309Hf2kpjYlDD4dyiQU6A\"",
    "mtime": "2023-05-10T11:26:28.909Z",
    "size": 24258,
    "path": "../public/_nuxt/bg.e4e9d75e.png"
  },
  "/_nuxt/c1.02ff48ff.js": {
    "type": "application/javascript",
    "etag": "\"67-YfwMFZZiDIMSVHCXw2ZAhh3z/ug\"",
    "mtime": "2023-05-10T11:26:28.909Z",
    "size": 103,
    "path": "../public/_nuxt/c1.02ff48ff.js"
  },
  "/_nuxt/c1.03aaabd7.jpg": {
    "type": "image/jpeg",
    "etag": "\"bac2-IWWJ54xECIUhfcgi95duAlpyM2c\"",
    "mtime": "2023-05-10T11:26:28.909Z",
    "size": 47810,
    "path": "../public/_nuxt/c1.03aaabd7.jpg"
  },
  "/_nuxt/c2.3e6d537b.jpg": {
    "type": "image/jpeg",
    "etag": "\"2867-mWJDiGBg03mpJZhS24qVjApasac\"",
    "mtime": "2023-05-10T11:26:28.909Z",
    "size": 10343,
    "path": "../public/_nuxt/c2.3e6d537b.jpg"
  },
  "/_nuxt/c3.32adc785.jpg": {
    "type": "image/jpeg",
    "etag": "\"d6de-xsGe1I4AZyAPd2PBwouR5+06jNM\"",
    "mtime": "2023-05-10T11:26:28.909Z",
    "size": 55006,
    "path": "../public/_nuxt/c3.32adc785.jpg"
  },
  "/_nuxt/c4.a1a298f4.jpg": {
    "type": "image/jpeg",
    "etag": "\"42f0-Lpl0aET4ZKElhp2c6rk9fZRllGI\"",
    "mtime": "2023-05-10T11:26:28.909Z",
    "size": 17136,
    "path": "../public/_nuxt/c4.a1a298f4.jpg"
  },
  "/_nuxt/c5.0f969f1b.jpg": {
    "type": "image/jpeg",
    "etag": "\"d282-1zfubQ6eFdKUet0kD06PsqNU6DQ\"",
    "mtime": "2023-05-10T11:26:28.909Z",
    "size": 53890,
    "path": "../public/_nuxt/c5.0f969f1b.jpg"
  },
  "/_nuxt/c6.e1b44415.jpg": {
    "type": "image/jpeg",
    "etag": "\"a6b4-1t2eyBj61xD3+dqSu520e55xEbk\"",
    "mtime": "2023-05-10T11:26:28.909Z",
    "size": 42676,
    "path": "../public/_nuxt/c6.e1b44415.jpg"
  },
  "/_nuxt/c7.72d6f977.jpg": {
    "type": "image/jpeg",
    "etag": "\"802f-DFyAQ60IUNaiahBQjm2gxBTRb3c\"",
    "mtime": "2023-05-10T11:26:28.909Z",
    "size": 32815,
    "path": "../public/_nuxt/c7.72d6f977.jpg"
  },
  "/_nuxt/dashboard.c6edd73e.js": {
    "type": "application/javascript",
    "etag": "\"15b4-+jR6ydpHqD+umrp6KXHWlINO2i4\"",
    "mtime": "2023-05-10T11:26:28.909Z",
    "size": 5556,
    "path": "../public/_nuxt/dashboard.c6edd73e.js"
  },
  "/_nuxt/dec.b607d5a0.png": {
    "type": "image/png",
    "etag": "\"860c-kik+FiH8aMZtgNXtXEXp2xzXkLE\"",
    "mtime": "2023-05-10T11:26:28.909Z",
    "size": 34316,
    "path": "../public/_nuxt/dec.b607d5a0.png"
  },
  "/_nuxt/default.27082e87.js": {
    "type": "application/javascript",
    "etag": "\"18cf-7THOYSWqhDOJXBl5uTYYNvglSzw\"",
    "mtime": "2023-05-10T11:26:28.909Z",
    "size": 6351,
    "path": "../public/_nuxt/default.27082e87.js"
  },
  "/_nuxt/entry.10578471.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"9144-3zg50rNGrZvWnFndyZ43uSEsDqk\"",
    "mtime": "2023-05-10T11:26:28.909Z",
    "size": 37188,
    "path": "../public/_nuxt/entry.10578471.css"
  },
  "/_nuxt/entry.113fea92.js": {
    "type": "application/javascript",
    "etag": "\"15ad3e-DcReTBI4QrD7hkYjh43iESsMs10\"",
    "mtime": "2023-05-10T11:26:28.909Z",
    "size": 1420606,
    "path": "../public/_nuxt/entry.113fea92.js"
  },
  "/_nuxt/error-component.98463a08.js": {
    "type": "application/javascript",
    "etag": "\"18bd1-XpqVjqHRQ/GnkiD1vkNA3EhRc58\"",
    "mtime": "2023-05-10T11:26:28.905Z",
    "size": 101329,
    "path": "../public/_nuxt/error-component.98463a08.js"
  },
  "/_nuxt/feedback.091862dd.js": {
    "type": "application/javascript",
    "etag": "\"5135-5Z+EJNt7u2dCYli9VKfAelJ7l1c\"",
    "mtime": "2023-05-10T11:26:28.905Z",
    "size": 20789,
    "path": "../public/_nuxt/feedback.091862dd.js"
  },
  "/_nuxt/fetch.bc3dd659.js": {
    "type": "application/javascript",
    "etag": "\"2c5d-iZBT90GdVKXSmD5heWK6sH2OJBI\"",
    "mtime": "2023-05-10T11:26:28.905Z",
    "size": 11357,
    "path": "../public/_nuxt/fetch.bc3dd659.js"
  },
  "/_nuxt/form.0e341cc9.js": {
    "type": "application/javascript",
    "etag": "\"139e-R6292rr8hmnkxpF51cr9P9NyuFo\"",
    "mtime": "2023-05-10T11:26:28.905Z",
    "size": 5022,
    "path": "../public/_nuxt/form.0e341cc9.js"
  },
  "/_nuxt/gal1.22751743.jpg": {
    "type": "image/jpeg",
    "etag": "\"29c723-8JJZxmJrtI0sB6gHHhnC9lzeSUA\"",
    "mtime": "2023-05-10T11:26:28.905Z",
    "size": 2737955,
    "path": "../public/_nuxt/gal1.22751743.jpg"
  },
  "/_nuxt/gal3.b6867f05.png": {
    "type": "image/png",
    "etag": "\"26794e-EKRRsi0rYIo5YYbGBezK0xdLD68\"",
    "mtime": "2023-05-10T11:26:28.902Z",
    "size": 2521422,
    "path": "../public/_nuxt/gal3.b6867f05.png"
  },
  "/_nuxt/hero.4dac7e5e.js": {
    "type": "application/javascript",
    "etag": "\"69-CeDYZT13iVOga1/xFcWkB+hB9RA\"",
    "mtime": "2023-05-10T11:26:28.899Z",
    "size": 105,
    "path": "../public/_nuxt/hero.4dac7e5e.js"
  },
  "/_nuxt/hero.5f03cc6a.png": {
    "type": "image/png",
    "etag": "\"720d-owaPwPLt/oZv/POxQYDFKwsJxwQ\"",
    "mtime": "2023-05-10T11:26:28.899Z",
    "size": 29197,
    "path": "../public/_nuxt/hero.5f03cc6a.png"
  },
  "/_nuxt/index.55675010.js": {
    "type": "application/javascript",
    "etag": "\"325-cSqNob9ZTQjMmxav8tCvwBtaEuM\"",
    "mtime": "2023-05-10T11:26:28.899Z",
    "size": 805,
    "path": "../public/_nuxt/index.55675010.js"
  },
  "/_nuxt/index.5eec4a09.js": {
    "type": "application/javascript",
    "etag": "\"4e6c-U8O5V4ElG2eDMujkgtem5rYbSGk\"",
    "mtime": "2023-05-10T11:26:28.899Z",
    "size": 20076,
    "path": "../public/_nuxt/index.5eec4a09.js"
  },
  "/_nuxt/index.763ce1a8.js": {
    "type": "application/javascript",
    "etag": "\"323f-Kp1rZtZs+hyvrnAne7fpXwaGnVc\"",
    "mtime": "2023-05-10T11:26:28.899Z",
    "size": 12863,
    "path": "../public/_nuxt/index.763ce1a8.js"
  },
  "/_nuxt/index.d5a77c8e.js": {
    "type": "application/javascript",
    "etag": "\"6b3-SmAQwIvcsXEt9plI12v8Jhm5jR8\"",
    "mtime": "2023-05-10T11:26:28.899Z",
    "size": 1715,
    "path": "../public/_nuxt/index.d5a77c8e.js"
  },
  "/_nuxt/iph.9f414779.png": {
    "type": "image/png",
    "etag": "\"a4c5-aCCkl6ATsuOmjnt4oqDEKdUr1Iw\"",
    "mtime": "2023-05-10T11:26:28.899Z",
    "size": 42181,
    "path": "../public/_nuxt/iph.9f414779.png"
  },
  "/_nuxt/jj.b0d50722.png": {
    "type": "image/png",
    "etag": "\"1486-HWtbBUif8N9qnf6/LsT1JYOrifQ\"",
    "mtime": "2023-05-10T11:26:28.899Z",
    "size": 5254,
    "path": "../public/_nuxt/jj.b0d50722.png"
  },
  "/_nuxt/login.06ef6a4b.js": {
    "type": "application/javascript",
    "etag": "\"6c6-OpOmzQ8HtUQBNUrBkBCuOGRw8pM\"",
    "mtime": "2023-05-10T11:26:28.899Z",
    "size": 1734,
    "path": "../public/_nuxt/login.06ef6a4b.js"
  },
  "/_nuxt/nuxt-link.8da644ca.js": {
    "type": "application/javascript",
    "etag": "\"10dc-2ZsBaNBSEWWNTlCLFuD/cbwXZbU\"",
    "mtime": "2023-05-10T11:26:28.899Z",
    "size": 4316,
    "path": "../public/_nuxt/nuxt-link.8da644ca.js"
  },
  "/_nuxt/profile.5d7ab8dd.js": {
    "type": "application/javascript",
    "etag": "\"4cf-W6gzlozl9UV6LDT94yk/6B7VXcQ\"",
    "mtime": "2023-05-10T11:26:28.895Z",
    "size": 1231,
    "path": "../public/_nuxt/profile.5d7ab8dd.js"
  },
  "/_nuxt/pt.d6672727.jpg": {
    "type": "image/jpeg",
    "etag": "\"1048-kCWaPtTc47pk3UzMpc9RUjeap2k\"",
    "mtime": "2023-05-10T11:26:28.895Z",
    "size": 4168,
    "path": "../public/_nuxt/pt.d6672727.jpg"
  },
  "/_nuxt/sample.24048cd6.js": {
    "type": "application/javascript",
    "etag": "\"9ef-yAsaAjlivAtvQCUq3RWeFRCHIvI\"",
    "mtime": "2023-05-10T11:26:28.895Z",
    "size": 2543,
    "path": "../public/_nuxt/sample.24048cd6.js"
  },
  "/_nuxt/siu.5f0ae0c2.png": {
    "type": "image/png",
    "etag": "\"23307-sVUQQHuwfAtiKviSasQCkDpBSy0\"",
    "mtime": "2023-05-10T11:26:28.895Z",
    "size": 144135,
    "path": "../public/_nuxt/siu.5f0ae0c2.png"
  },
  "/_nuxt/useStrapi.cc9fff7f.js": {
    "type": "application/javascript",
    "etag": "\"270-QS8egjmGDFfLGhXN9jBFsy+M0SE\"",
    "mtime": "2023-05-10T11:26:28.859Z",
    "size": 624,
    "path": "../public/_nuxt/useStrapi.cc9fff7f.js"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.node.res.removeHeader("cache-control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_FAZG3D = () => import('../admin.post.mjs');
const _lazy_1kz8O0 = () => import('../register.post.mjs');
const _lazy_KaxncU = () => import('../list.mjs');
const _lazy_fr1c1h = () => import('../programs.get.mjs');
const _lazy_n2VgXS = () => import('../user.mjs');
const _lazy_PsLTD7 = () => import('../handlers/renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/api/auth/admin', handler: _lazy_FAZG3D, lazy: true, middleware: false, method: "post" },
  { route: '/api/auth/register', handler: _lazy_1kz8O0, lazy: true, middleware: false, method: "post" },
  { route: '/api/list', handler: _lazy_KaxncU, lazy: true, middleware: false, method: undefined },
  { route: '/api/programs', handler: _lazy_fr1c1h, lazy: true, middleware: false, method: "get" },
  { route: '/api/user', handler: _lazy_n2VgXS, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_PsLTD7, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_PsLTD7, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: $fetch });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const s = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const i = s.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${i.family === "IPv6" ? `[${i.address}]` : i.address}:${i.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
{
  process.on(
    "unhandledRejection",
    (err) => console.error("[nitro] [dev] [unhandledRejection] " + err)
  );
  process.on(
    "uncaughtException",
    (err) => console.error("[nitro] [dev] [uncaughtException] " + err)
  );
}
const nodeServer = {};

export { useRuntimeConfig as a, getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
