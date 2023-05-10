import { _ as __nuxt_component_0 } from './nuxt-link-e5124028.mjs';
import { mergeProps, withCtx, createVNode, createTextVNode, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _imports_0 } from './bg-34056f5c.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'ufo';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'defu';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'cookie-es';
import 'qs';
import 'highlight.js';
import 'markdown-it';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex" }, _attrs))}><div class=""><div class="bg-gray-100"><div class="h-screen w-64"><div class="flex h-full flex-grow flex-col overflow-y-auto rounded-br-lg rounded-tr-lg bg-white pt-5 shadow-md"><div class="flex mt-10 items-center px-4"><img class="h-12 w-auto max-w-full align-middle"${ssrRenderAttr("src", _imports_0)} alt=""><div class="flex ml-3 flex-col"><h3 class="font-medium">MSFDA</h3><p class="text-xs text-gray-500">user</p></div></div><span class="ml-3 mt-10 mb-2 block text-xs font-semibold text-gray-500">Analytics</span><div class="flex mt-3 flex-1 flex-col"><div class=""><nav class="flex-1">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/admin/profile",
    class: "flex cursor-pointer items-center py-2 px-4 text-sm font-medium outline-none transition-all border-l-rose-600 duration-100 ease-in-out focus:border-l-4 hover:border-l-4 hover:text-rose-600"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="iconify mr-4 h-6 w-6 align-middle" data-icon="basil:heart-outline"${_scopeId}></span> Profile `);
      } else {
        return [
          createVNode("span", {
            class: "iconify mr-4 h-6 w-6 align-middle",
            "data-icon": "basil:heart-outline"
          }),
          createTextVNode(" Profile ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/admin/dashboard",
    title: "",
    class: "flex cursor-pointer items-center py-2 px-4 text-sm font-medium outline-none transition-all duration-100 ease-in-out focus:border-l-4 border-l-rose-600 hover:border-l-4 hover:text-rose-600"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="iconify mr-4 h-5 w-5 align-middle" data-icon="basil:layout-outline"${_scopeId}></span> Dashboard `);
      } else {
        return [
          createVNode("span", {
            class: "iconify mr-4 h-5 w-5 align-middle",
            "data-icon": "basil:layout-outline"
          }),
          createTextVNode(" Dashboard ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="relative transition"><input class="peer hidden" type="checkbox" id="menu-1" checked><button class="flex peer relative w-full items-center border-l-rose-600 py-3 px-4 text-sm font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:text-rose-600 focus:border-l-4"><span class="flex mr-5 w-5"></span> Analytics <label for="menu-1" class="absolute inset-0 h-full w-full cursor-pointer"></label></button><svg xmlns="http://www.w3.org/2000/svg" class="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-600 transition peer-checked:rotate-180 peer-hover:text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path></svg><ul class="duration-400 flex m-2 max-h-0 flex-col overflow-hidden rounded-xl bg-gray-100 font-medium transition-all duration-300 peer-checked:max-h-96"><li class="flex m-2 cursor-pointer border-l-rose-600 py-3 pl-5 text-sm text-gray-600 transition-all duration-100 ease-in-out hover:border-l-4 hover:text-rose-600"><span class="mr-5"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg></span> Feedback </li><li class="flex m-2 cursor-pointer border-l-rose-600 py-3 pl-5 text-sm text-gray-600 transition-all duration-100 ease-in-out hover:border-l-4 hover:text-rose-600"><span class="mr-5"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg></span> Refunds </li></ul></div></nav><span class="ml-3 mt-10 mb-2 block text-xs font-semibold text-gray-500">Product Mangement</span><nav class="flex-1"><a href="#" class="flex cursor-pointer items-center border-l-rose-600 py-2 px-4 text-sm font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-l-rose-600 hover:text-rose-600 focus:border-l-4"><svg class="mr-4 h-5 w-5 align-middle" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" class=""></path></svg> Products </a><a href="#" class="flex cursor-pointer items-center border-l-rose-600 py-2 px-4 text-sm font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-l-rose-600 hover:text-rose-600 focus:border-l-4"><svg class="mr-4 h-5 w-5 align-middle" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg> Orders </a><a href="#" class="flex cursor-pointer items-center border-l-rose-600 py-2 px-4 text-sm font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-l-rose-600 hover:text-rose-600 focus:border-l-4"><svg class="mr-4 h-5 w-5 align-middle" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg> Suppliers </a></nav><span class="ml-3 mt-10 mb-2 block text-xs font-semibold text-gray-500">Content Management</span><nav class="flex-1">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/blogs",
    class: "flex cursor-pointer items-center border-l-rose-600 py-2 px-4 text-sm font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-l-rose-600 hover:text-rose-600 focus:border-l-4"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg class="mr-4 h-5 w-5 align-middle" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"${_scopeId}></path></svg> Blogs `);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            class: "mr-4 h-5 w-5 align-middle",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            "stroke-width": "2"
          }, [
            createVNode("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
            })
          ])),
          createTextVNode(" Blogs ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</nav></div></div></div></div></div></div><div class="w-full">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/admin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const admin = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { admin as default };
//# sourceMappingURL=admin-0d3e8ce3.mjs.map
