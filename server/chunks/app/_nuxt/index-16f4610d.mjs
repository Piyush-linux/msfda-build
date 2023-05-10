import { _ as __nuxt_component_0$1 } from './nuxt-link-e5124028.mjs';
import { withAsyncContext, mergeProps, unref, useSSRContext, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { e as useRuntimeConfig } from '../server.mjs';
import 'ufo';
import 'ofetch';
import 'hookable';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'h3';
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

const _sfc_main$1 = {
  __name: "Blogcard",
  __ssrInlineRender: true,
  props: {
    tit: String,
    des: String,
    pub: String,
    links: String
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "blg" }, _attrs))}><div><p class="pt-12 mb-3 text-sm font-normal text-gray-500">${ssrInterpolate(props.pub)}</p><h2 class="mb-2 text-xl font-extrabold leading-snug tracking-tight text-gray-800 md:text-3xl"><a href="#" class="text-gray-900 hover:text-purple-700">${ssrInterpolate(props.tit)}</a></h2><p class="mb-4 text-base font-normal text-gray-600">${ssrInterpolate(props.des)}</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/blogs/${props.links}`,
        class: "btn btn-light btn-sm bg-emerald-300 p-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Continue Reading`);
          } else {
            return [
              createTextVNode("Continue Reading")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Blogcard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$1;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const runtimeConfig = /* @__PURE__ */ useRuntimeConfig();
    let url = `${runtimeConfig.public.apiBase}/blogs?populate=Author`;
    let { data: blgs } = ([__temp, __restore] = withAsyncContext(async () => ([__temp, __restore] = withAsyncContext(() => fetch(url)), __temp = await __temp, __restore(), __temp).json()), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_uiBlogcard = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><section class="w-full px-4 py-24 mx-auto max-w-7xl md:w-3/4 lg:w-2/4"><div class="mb-12 text-left md:text-center"><h2 class="mb-2 text-3xl font-extrabold leading-tight text-gray-900">MSFDA Blog \u{1F4D7}</h2><p class="text-lg text-gray-500">Everything comes directly from the desk of the respective engineers, creators and managers at Skcript.</p></div><div class="flex flex-col space-y-12 divide-y divide-gray-200"><!--[-->`);
      ssrRenderList(unref(blgs), (blg) => {
        _push(ssrRenderComponent(_component_uiBlogcard, {
          tit: blg.attributes.title,
          des: blg.attributes.description,
          pub: blg.attributes.Author.Published,
          links: blg.id
        }, null, _parent));
      });
      _push(`<!--]--></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blogs/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-16f4610d.mjs.map
