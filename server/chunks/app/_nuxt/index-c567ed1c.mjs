import { _ as __nuxt_component_0 } from './CourseCard-cc24b137.mjs';
import { e as useRuntimeConfig } from '../server.mjs';
import { ref, onMounted, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const runtimeConfig = /* @__PURE__ */ useRuntimeConfig();
    let url = `${runtimeConfig.public.apiBase}/courses`;
    console.log(runtimeConfig.public.apiBase);
    let data = ref(null);
    onMounted(async () => {
      let { data: cou } = await (await fetch(url)).json();
      data.value = cou;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_uiCourseCard = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><div class="text-4xl font-bold text-center p-6">Courses</div><div class="lg:mx-20 mb-20"><div class="grid grid-cols-1 md:grid-cols-3"><!--[-->`);
      ssrRenderList(unref(data), (co) => {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/courses/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-c567ed1c.mjs.map
