import { u as useNuxtApp, d as useRoute, e as useRuntimeConfig } from '../server.mjs';
import { withAsyncContext, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const runtimeConfig = /* @__PURE__ */ useRuntimeConfig();
    const nuxtApp = useNuxtApp();
    const route = useRoute();
    let url = `${runtimeConfig.public.apiBase}/blogs/${route.params.id}?populate=Author`;
    let { data } = ([__temp, __restore] = withAsyncContext(async () => ([__temp, __restore] = withAsyncContext(() => fetch(url)), __temp = await __temp, __restore(), __temp).json()), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><article class="px-4 py-24 mx-auto max-w-7xl" itemid="#" itemscope itemtype="http://schema.org/BlogPosting"><div class="w-full mx-auto mb-10 text-left md:w-3/4 lg:w-1/2"><div class="pb-6 mb-6 border-b border-gray-200"><h1 class="mb-3 text-3xl font-bold text-gray-900 md:leading-tight md:text-4xl" itemprop="headline" title="Rise of Tailwind - A Utility First CSS Framework">${ssrInterpolate(unref(data).attributes.title)}</h1><p class="text-base text-gray-500">${ssrInterpolate(unref(data).attributes.Author.Published)} \u2014 Written by ${ssrInterpolate(unref(data).attributes.Author.username)}</p></div></div><div class="w-full mx-auto prose md:w-3/4 lg:w-1/2"><p class="blgg text-justify"><div>${unref(nuxtApp).$mdit.render(unref(data).attributes.content)}</div></p><hr class="mt-6"></div></article></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blogs/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-4a2fe916.mjs.map
