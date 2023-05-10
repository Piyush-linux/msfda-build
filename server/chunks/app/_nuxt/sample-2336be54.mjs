import { u as useStrapi } from './useStrapi-cd4d5c46.mjs';
import { withAsyncContext, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import '../server.mjs';
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
  __name: "sample",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { find } = useStrapi();
    try {
      const res = ([__temp, __restore] = withAsyncContext(() => find("blogs")), __temp = await __temp, __restore(), __temp);
      console.log("---blog");
      console.log(res);
    } catch (e) {
      console.log(e);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white-100 w-full p-10" }, _attrs))}><div class="w-max mx-auto mt-8 max-w-screen-lg px-2"><div class="sm:flex sm:items-center sm:justify-between flex-col sm:flex-row"><p class="flex-1 text-base font-bold text-gray-900">Latest Payments</p><div class="mt-4 sm:mt-0"><div class="flex items-center justify-start sm:justify-end"><div class="flex items-center"><label for="" class="mr-2 flex-shrink-0 text-sm font-medium text-gray-900"> Sort by: </label><select name="" class="sm: mr-4 block w-full whitespace-pre rounded-lg border p-1 pr-10 text-base outline-none focus:shadow sm:text-sm"><option class="whitespace-no-wrap text-sm">Date</option></select><select name="" class="sm: mr-4 block w-full whitespace-pre rounded-lg border p-1 pr-10 text-base outline-none focus:shadow sm:text-sm"><option class="whitespace-no-wrap text-sm">Course</option></select></div><button type="button" class="inline-flex cursor-pointer items-center rounded-lg border border-gray-400 bg-white py-2 px-3 text-center text-sm font-medium text-gray-800 shadow hover:bg-gray-100 focus:shadow"><svg class="mr-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" class=""></path></svg> Export to CSV </button></div></div></div><div class="mt-6 overflow-hidden rounded-xl border shadow overflow-y-scroll h-96"><table class="min-w-full border-separate border-spacing-y-2 border-spacing-x-2"><thead class="hidden border-b lg:table-header-group"><tr class=""><td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Name</td><td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Email</td><td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Number</td><td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Status</td><td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">View</td></tr></thead><tbody class="lg:border-gray-300"></tbody></table></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/sample.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=sample-2336be54.mjs.map
