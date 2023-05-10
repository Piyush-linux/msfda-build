import { u as useStrapi } from './useStrapi-cd4d5c46.mjs';
import { withAsyncContext, ref, mergeProps, unref, useSSRContext, computed, reactive, toRef, getCurrentInstance, onServerPrefetch } from 'vue';
import { hash } from 'ohash';
import { u as useNuxtApp, a as useRequestFetch, c as createError } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
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

const getDefault = () => null;
function useAsyncData(...args) {
  var _a2, _b, _c, _d, _e, _f;
  var _a;
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  options.server = (_a2 = options.server) != null ? _a2 : true;
  options.default = (_b = options.default) != null ? _b : getDefault;
  options.lazy = (_c = options.lazy) != null ? _c : false;
  options.immediate = (_d = options.immediate) != null ? _d : true;
  const nuxt = useNuxtApp();
  const getCachedData = () => nuxt.isHydrating ? nuxt.payload.data[key] : nuxt.static.data[key];
  const hasCachedData = () => getCachedData() !== void 0;
  if (!nuxt._asyncData[key]) {
    nuxt._asyncData[key] = {
      data: ref((_f = (_e = getCachedData()) != null ? _e : (_a = options.default) == null ? void 0 : _a.call(options)) != null ? _f : null),
      pending: ref(!hasCachedData()),
      error: toRef(nuxt.payload._errors, key)
    };
  }
  const asyncData = { ...nuxt._asyncData[key] };
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    if (nuxt._asyncDataPromises[key]) {
      if (opts.dedupe === false) {
        return nuxt._asyncDataPromises[key];
      }
      nuxt._asyncDataPromises[key].cancelled = true;
    }
    if (opts._initial && hasCachedData()) {
      return getCachedData();
    }
    asyncData.pending.value = true;
    const promise = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxt));
        } catch (err) {
          reject(err);
        }
      }
    ).then((_result) => {
      if (promise.cancelled) {
        return nuxt._asyncDataPromises[key];
      }
      let result = _result;
      if (options.transform) {
        result = options.transform(_result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
    }).catch((error) => {
      var _a3;
      var _a22;
      if (promise.cancelled) {
        return nuxt._asyncDataPromises[key];
      }
      asyncData.error.value = error;
      asyncData.data.value = unref((_a3 = (_a22 = options.default) == null ? void 0 : _a22.call(options)) != null ? _a3 : null);
    }).finally(() => {
      if (promise.cancelled) {
        return;
      }
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = createError(asyncData.error.value);
      }
      delete nuxt._asyncDataPromises[key];
    });
    nuxt._asyncDataPromises[key] = promise;
    return nuxt._asyncDataPromises[key];
  };
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxt.hook("app:created", () => promise);
    }
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _key = opts.key || hash([autoKey, unref(opts.baseURL), typeof request === "string" ? request : "", unref(opts.params || opts.query)]);
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useFetch] key must be a string: " + _key);
  }
  if (!request) {
    throw new Error("[nuxt] [useFetch] request is missing.");
  }
  const key = _key === autoKey ? "$f" + _key : _key;
  const _request = computed(() => {
    let r = request;
    if (typeof r === "function") {
      r = r();
    }
    return unref(r);
  });
  if (!opts.baseURL && typeof _request.value === "string" && _request.value.startsWith("//")) {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    watch,
    immediate,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    immediate,
    watch: watch === false ? [] : [_fetchOptions, _request, ...watch || []]
  };
  let controller;
  const asyncData = useAsyncData(key, () => {
    var _a;
    (_a = controller == null ? void 0 : controller.abort) == null ? void 0 : _a.call(controller);
    controller = typeof AbortController !== "undefined" ? new AbortController() : {};
    const isLocalFetch = typeof _request.value === "string" && _request.value.startsWith("/");
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (!opts.$fetch && isLocalFetch) {
      _$fetch = useRequestFetch();
    }
    return _$fetch(_request.value, { signal: controller.signal, ..._fetchOptions });
  }, _asyncDataOptions);
  return asyncData;
}
const _sfc_main = {
  __name: "dashboard",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useStrapi();
    let { data: list } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/user", "$XEnCT6sdYP")), __temp = await __temp, __restore(), __temp);
    let view_show = ref(false);
    ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white-100 w-full p-10" }, _attrs))}><div class="w-max mx-auto mt-8 max-w-screen-lg px-2"><div class="sm:flex sm:items-center sm:justify-between flex-col sm:flex-row"><p class="flex-1 text-base font-bold text-gray-900">Latest Payments</p><div class="mt-4 sm:mt-0"><div class="flex items-center justify-start sm:justify-end"><div class="flex items-center"><label for="" class="mr-2 flex-shrink-0 text-sm font-medium text-gray-900"> Sort by: </label><select name="" class="sm: mr-4 block w-full whitespace-pre rounded-lg border p-1 pr-10 text-base outline-none focus:shadow sm:text-sm"><option class="whitespace-no-wrap text-sm">Date</option></select><select name="" class="sm: mr-4 block w-full whitespace-pre rounded-lg border p-1 pr-10 text-base outline-none focus:shadow sm:text-sm"><option class="whitespace-no-wrap text-sm">Course</option></select></div><button type="button" class="inline-flex cursor-pointer items-center rounded-lg border border-gray-400 bg-white py-2 px-3 text-center text-sm font-medium text-gray-800 shadow hover:bg-gray-100 focus:shadow"><svg class="mr-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" class=""></path></svg> Export to CSV </button></div></div></div><div class="mt-6 overflow-hidden rounded-xl border shadow overflow-y-scroll h-96"><table class="min-w-full border-separate border-spacing-y-2 border-spacing-x-2"><thead class="hidden border-b lg:table-header-group"><tr class=""><td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Name</td><td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Email</td><td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Number</td><td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Status</td><td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">View</td></tr></thead><tbody class="lg:border-gray-300"><!--[-->`);
      ssrRenderList(unref(list), (itm) => {
        _push(`<tr class=""><td class="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">${ssrInterpolate(itm.name)}</td><td class="whitespace-no-wrap py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">${ssrInterpolate(itm.email)}</td><td class="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">${ssrInterpolate(itm.number)}</td><td class="whitespace-no-wrap py-4 text-gray-500 sm:px-6 lg:table-cell"><div style="${ssrRenderStyle(null)}" class="inline-flex items-center font-bold rounded-full bg-emerald-400 py-2 px-3 text-xs text-white"> Active </div><div style="${ssrRenderStyle({ display: "none" })}" class="inline-flex items-center font-bold rounded-full bg-rose-400 py-2 px-3 text-xs text-white"> Inactive </div></td><td class="whitespace-no-wrap py-4 text-gray-500 sm:px-6 lg:table-cell"><button class="w-full text-center button font-bold rounded-md bg-sky-400 py-2 px-3 text-xs text-white">v i e w</button></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div><div style="${ssrRenderStyle(unref(view_show) ? null : { display: "none" })}" class="fixed inset-0 z-10 overflow-y-auto bg-gray-50 w-full flex items-center justify-center"><div class="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg"><div class="px-4 py-5 sm:px-6"><h3 class="text-lg leading-6 font-medium text-gray-900"> User database </h3><p class="mt-1 max-w-2xl text-sm text-gray-500"> Details and informations about user. </p></div><div class="border-t border-gray-200"><dl><div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"><dt class="text-sm font-medium text-gray-500"> Full name </dt><dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"> Mickael Poulaz </dd></div><div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"><dt class="text-sm font-medium text-gray-500"> Best techno </dt><dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"> React JS </dd></div><div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"><dt class="text-sm font-medium text-gray-500"> Email address </dt><dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"> m.poul@example.com </dd></div><div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"><dt class="text-sm font-medium text-gray-500"> Salary </dt><dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"> $10,000 </dd></div><div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"><dt class="text-sm font-medium text-gray-500"> About </dt><dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"> To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself </dd></div></dl></div><div class=""><button class="btn bg-rose-500 hover:bg-rose-400 text-white p-3 w-full font-bold">back</button></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=dashboard-243a636c.mjs.map
