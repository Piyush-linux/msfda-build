import { _ as __nuxt_component_0 } from './nuxt-link-e5124028.mjs';
import { d as useRoute, e as useRuntimeConfig } from '../server.mjs';
import { withAsyncContext, computed, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './hero-da2f1708.mjs';
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
    const { id } = useRoute().params;
    console.log(id);
    let url = `${runtimeConfig.public.apiBase}/courses/${id}?populate=centre,partner`;
    const { data } = ([__temp, __restore] = withAsyncContext(async () => ([__temp, __restore] = withAsyncContext(() => fetch(url)), __temp = await __temp, __restore(), __temp).json()), __temp = await __temp, __restore(), __temp);
    let formatDate = computed(() => {
      let input = data.attributes.date;
      var datePart = input.match(/\d+/g), year = datePart[0].substring(2), month = datePart[1], day = datePart[2];
      return day + "/" + month + "/" + year;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><section><div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-20"><div class="flex flex-wrap items-center mx-auto max-w-7xl"><div class="w-full lg:max-w-lg lg:w-1/2 rounded-xl"><div class="relative w-full"><iframe class="w-full h-96 rounded-2xl" src="https://www.youtube.com/embed/GF2vIaPG7iM" title="Deccan College   MSFDA AV Clip" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div><div class="flex flex-col items-start mt-12 mb-12 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0"><h1 class="mb-8 text-4xl text-center sm:text-left font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">${ssrInterpolate(unref(data).attributes.name)}</h1><p class="mb-1 text-base text-center leading-relaxed sm:text-left text-gray-500">${ssrInterpolate(unref(data).attributes.about)}</p><div class="mt-0 lg:mt-1 w-full sm:flex"><div class="p-5 bg-white shadow-lg rounded-2xl sm:w-36 m-3"><div class="flex items-center"><span class="iconify w-5 h-5" data-icon="material-symbols:attach-money"></span><p class="ml-2 text-gray-700 text-md"> mode </p></div><div class="flex flex-col justify-start"><p class="my-4 text-2xl font-bold text-left text-gray-800">${ssrInterpolate(unref(data).attributes.mode)}</p><div class="relative h-2 bg-gray-200 rounded w-28"><div class="absolute top-0 left-0 w-2/3 h-2 bg-emerald-400 rounded"></div></div></div></div><div class="p-5 bg-white shadow-lg rounded-2xl sm:w-36 m-3"><div class="flex items-center"><span class="iconify w-5 h-5" data-icon="ic:baseline-access-time"></span><p class="ml-2 text-gray-700 text-md"> Duration </p></div><div class="flex flex-col justify-start"><p class="my-4 text-2xl font-bold text-left text-gray-800">${ssrInterpolate(unref(data).attributes.duration)}</p><div class="relative h-2 bg-gray-200 rounded w-28"><div class="absolute top-0 left-0 w-2/3 h-2 bg-emerald-400 rounded"></div></div></div></div><div class="p-5 bg-white shadow-lg rounded-2xl sm:w-36 m-3"><div class="flex items-center"><span class="iconify w-5 h-5" data-icon="material-symbols:date-range-rounded"></span><p class="ml-2 text-gray-700 text-md"> Date </p></div><div class="flex flex-col justify-start"><p class="my-4 text-2xl font-bold text-left text-gray-800">${ssrInterpolate(unref(formatDate))}</p><div class="relative h-2 bg-gray-200 rounded w-28"><div class="absolute top-0 left-0 w-2/3 h-2 bg-emerald-400 rounded"></div></div></div></div></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/register/${unref(id)}?coursename=${unref(data).attributes.name}&courseid=${unref(data).attributes.courseid}&centreid=${unref(data).attributes.centre.data.id}&date=${unref(data).attributes.date}`,
        class: "w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="button p-4 rounded-2xl text-white font-bold bg-emerald-400 mt-6 w-full"${_scopeId}> R E G I S T E R </button>`);
          } else {
            return [
              createVNode("button", { class: "button p-4 rounded-2xl text-white font-bold bg-emerald-400 mt-6 w-full" }, " R E G I S T E R ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section><div class="flex mx-1 sm:mx-10 px-10 mb-20 flex-col-reverse sm:flex-row"><div class="w-full sm:w-1/3 p-5"><div class="max-w-sm pb-5 mx-auto mt-4 overflow-hidden rounded-lg shadow-lg"><div class="h-40 bg-gradient-to-br from-sky-400 to-blue-600"><div class="flex justify-center"><span class="mt-10 text-4xl font-extrabold text-white">M S F D A</span></div><div class="flex justify-center"><img class="object-cover w-24 h-24 mt-4 border-4 border-blue-600 rounded-full"${ssrRenderAttr("src", _imports_0)}></div></div><div class="px-6 py-4"><div class="flex justify-center mt-8 mb-4 text-xl font-medium">MSFDA</div><div class="flex my-1 text-gray-600"><svg class="h-5 mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg><span>${ssrInterpolate(unref(data).attributes.centre.data.attributes.co_email)}</span></div><div class="flex text-gray-600"><svg class="h-5 mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg><span>+91 1234567890</span></div></div></div></div><div class="w-full sm:w-2/3"><div class="container flex flex-col w-full p-6 divide-y rounded-md divide-white bg-rose-500 text-white"><h4 class="font-bold mb-3">ELIGIBILITY</h4><div class="p-4 space-y-2 text-sm text-white font-bold text-justify"><p>${ssrInterpolate(unref(data).attributes.eligibility)}</p></div></div><div class="container flex mt-6 flex-col w-full p-6 divide-y rounded-md divide-white bg-rose-500 text-white"><h4 class="font-bold mb-3">OVERVIEW</h4><div class="p-4 space-y-2 text-sm text-white font-bold text-justify"><p>${ssrInterpolate(unref(data).attributes.overview)}</p></div></div><div class="container flex mt-6 flex-col w-full p-6 divide-y rounded-md divide-white bg-rose-500 text-white"><h4 class="font-bold mb-3">Knowledge Partner</h4><div class="p-4 space-y-2 text-sm text-white font-bold text-justify"><p>${ssrInterpolate(unref(data).attributes.partner.about)}</p></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/courses/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-121d5c1a.mjs.map
