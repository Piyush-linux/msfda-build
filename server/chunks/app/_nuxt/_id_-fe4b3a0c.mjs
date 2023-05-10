import { _ as __nuxt_component_0 } from './CourseCard-cc24b137.mjs';
import { d as useRoute, e as useRuntimeConfig } from '../server.mjs';
import { ref, withAsyncContext, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { c as c1 } from './c1-0357d73e.mjs';
import './nuxt-link-e5124028.mjs';
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
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';

const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const runtimeConfig = /* @__PURE__ */ useRuntimeConfig();
    const route = useRoute();
    const { id } = route.params;
    ref("");
    let url = `${runtimeConfig.public.apiBase}/centres?filters[slug][$eq]=${id}&populate=courses`;
    let { data } = ([__temp, __restore] = withAsyncContext(async () => ([__temp, __restore] = withAsyncContext(() => fetch(url)), __temp = await __temp, __restore(), __temp).json()), __temp = await __temp, __restore(), __temp);
    console.log(data);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_uiCourseCard = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><section class="lg:py-12 lg:flex lg:justify-center"><div class="overflow-hidden bg-white lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl"><div class="lg:w-1/3"><img${ssrRenderAttr("src", unref(c1))} alt="" class="h-full"></div><div class="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-2/3"><h2 class="text-2xl font-semibold text-gray-800 md:text-3xl">${ssrInterpolate(unref(data)[0].attributes.name)}</h2><p class="mt-4 text-gray-500">${ssrInterpolate(unref(data)[0].attributes.content)}</p></div></div></section><div class="lg:mx-20 mb-20"><div class="grid grid-cols-1 md:grid-cols-3"><!--[-->`);
      ssrRenderList(unref(data)[0].attributes.courses.data, (co) => {
        _push(`<div class="p-3">`);
        _push(ssrRenderComponent(_component_uiCourseCard, {
          tit: co.attributes.name,
          uuid: co.id,
          desc: co.attributes.about,
          date: co.attributes.date
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/centre/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-fe4b3a0c.mjs.map
