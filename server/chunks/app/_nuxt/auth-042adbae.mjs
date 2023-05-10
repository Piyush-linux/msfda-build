import { h as defineNuxtRouteMiddleware, i as useStrapiUser, j as useCookie, n as navigateTo } from '../server.mjs';
import 'vue';
import 'ofetch';
import 'hookable';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'h3';
import 'ufo';
import 'destr';
import 'cookie-es';
import 'ohash';
import 'qs';
import 'highlight.js';
import 'markdown-it';
import 'vue/server-renderer';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const auth = /* @__PURE__ */ defineNuxtRouteMiddleware((to, _from) => {
  const user = useStrapiUser();
  console.log("--mid--");
  console.log(user);
  if (!user.value) {
    useCookie("redirect", { path: "/" }).value = to.fullPath;
    return navigateTo("/admin/login");
  }
});

export { auth as default };
//# sourceMappingURL=auth-042adbae.mjs.map
