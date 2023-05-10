import { b as useStrapiAuth } from '../server.mjs';
import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    useStrapiAuth();
    let eml = ref("");
    let psw = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><section class="bg-gray-50"><div class="px-4 py-20 mx-auto max-w-7xl"><a href="/" title="MSFDA" class="flex items-center justify-start sm:justify-center"><span class="text-3xl">MSFDA</span><span class="sr-only">msfda</span></a><div class="w-full px-0 pt-5 pb-6 mx-auto mt-4 mb-0 space-y-4 bg-transparent border-0 border-gray-200 rounded-lg md:bg-white md:border sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 md:px-6 sm:mt-8 sm:mb-5"><div class="pb-1 space-y-4"><label class="block"><span class="block mb-1 text-xs font-medium text-gray-700">Your Email</span><input${ssrRenderAttr("value", unref(eml))} class="form-input border-b-2 border-b-black w-full p-3 focus:outline-none" type="email" placeholder="Ex. james@bond.com" required></label><label class="block"><span class="block mb-1 text-xs font-medium text-gray-700">Your Password</span><input${ssrRenderAttr("value", unref(psw))} class="form-input border-b-2 border-b-black w-full p-3 focus:outline-none" type="password" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" required></label><div class="flex items-center justify-between"><button class="mt-5 btn w-full bg-emerald-500 p-3 text-white font-bold">L O G I N</button></div></div></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-ed42d599.mjs.map
