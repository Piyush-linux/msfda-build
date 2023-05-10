import { _ as __nuxt_component_0$1 } from './nuxt-link-e5124028.mjs';
import { useSSRContext, mergeProps, ref, withCtx, createTextVNode, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
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

const _sfc_main$2 = {
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    let mbl = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><header aria-label="Site Header" class="bg-white"><div class="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8"><a class="block text-teal-600" href="/"><span class="sr-only">Home</span><img${ssrRenderAttr("src", _imports_0)} class="w-16"></a><div class="flex flex-1 items-center justify-end md:justify-between"><nav aria-label="Site Nav" class="hidden md:block"><ul class="flex items-center gap-6 text-sm uppercase font-medium"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "text-gray-500 transition hover:text-gray-500/75",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Home `);
          } else {
            return [
              createTextVNode(" Home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/courses",
        class: "text-gray-500 transition hover:text-gray-500/75"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Courses `);
          } else {
            return [
              createTextVNode(" Courses ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: "text-gray-500 transition hover:text-gray-500/75"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` About `);
          } else {
            return [
              createTextVNode(" About ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "text-gray-500 transition hover:text-gray-500/75",
        to: "/blogs"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Blog `);
          } else {
            return [
              createTextVNode(" Blog ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></nav><div class="flex items-center gap-4"><div class="sm:flex sm:gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "block rounded-md bg-blue-400 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-500",
        href: "/register"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Register `);
          } else {
            return [
              createTextVNode(" Register ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-sky-600 transition hover:text-teal-600/75 sm:block",
        to: "/admin/auth"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Admin `);
          } else {
            return [
              createTextVNode(" Admin ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class=""><div style="${ssrRenderStyle(unref(mbl) == false ? null : { display: "none" })}"><button class="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"><span class="sr-only">Toggle menu</span><span class="iconify h-5 w-5" data-icon="ion:menu"></span></button></div><div style="${ssrRenderStyle(unref(mbl) == true ? null : { display: "none" })}"><button class="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"><span class="sr-only">Toggle menu</span><span class="iconify h-5 w-5" data-icon="charm:cross"></span></button></div></div></div></div></div><div style="${ssrRenderStyle(unref(mbl) ? null : { display: "none" })}" class="bg-gray-100"><ul class="flex flex-col items-center gap-6 text-sm uppercase font-medium py-5"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "text-gray-500 transition hover:text-gray-500/75",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Home `);
          } else {
            return [
              createTextVNode(" Home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/courses",
        class: "text-gray-500 transition hover:text-gray-500/75"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Courses `);
          } else {
            return [
              createTextVNode(" Courses ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: "text-gray-500 transition hover:text-gray-500/75"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` About `);
          } else {
            return [
              createTextVNode(" About ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "text-gray-500 transition hover:text-gray-500/75",
        to: "/blogs"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Blog `);
          } else {
            return [
              createTextVNode(" Blog ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></header></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/web/Navbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$2;
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<footer${ssrRenderAttrs(mergeProps({
    "aria-label": "Site Footer",
    class: "bg-gray-100 mt-10"
  }, _attrs))}><hr><div class="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8"><div class="flex justify-center text-teal-600"><img${ssrRenderAttr("src", _imports_0)} alt="" class="h-20"></div><p class="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500"> Maharashtra State Faculty Development Academy (MSFDA), 412-B, Bhamburda, Bahirat Patil Chowk, Model Colony, Shivajinagar, Pune - 411016. </p><nav aria-label="Footer Nav" class="mt-12"><ul class="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12"><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "text-gray-700 transition hover:text-gray-700/75 hover:underline tracking-widest"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Home `);
      } else {
        return [
          createTextVNode(" Home ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/about",
    class: "text-gray-700 transition hover:text-gray-700/75 hover:underline tracking-widest"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` About `);
      } else {
        return [
          createTextVNode(" About ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/courses",
    class: "text-gray-700 transition hover:text-gray-700/75 hover:underline tracking-widest"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Courses `);
      } else {
        return [
          createTextVNode(" Courses ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/blogs",
    class: "text-gray-700 transition hover:text-gray-700/75 hover:underline tracking-widest"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Blogs `);
      } else {
        return [
          createTextVNode(" Blogs ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/register",
    class: "text-gray-700 transition hover:text-gray-700/75 hover:underline tracking-widest"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Register `);
      } else {
        return [
          createTextVNode(" Register ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></nav><ul class="mt-12 flex justify-center gap-6 md:gap-8"><li><a href="https://www.linkedin.com/company/msfda/" rel="noreferrer" target="_blank" class="text-gray-700 transition hover:text-gray-700/75"><span class="sr-only">linkdin</span><span class="iconify h-7 w-7" data-icon="mdi:linkedin"></span></a></li><li><a href="https://www.facebook.com/MSFDA.Official/" rel="noreferrer" target="_blank" class="text-gray-700 transition hover:text-gray-700/75"><span class="sr-only">Facebook</span><span class="iconify h-7 w-7" data-icon="mdi:facebook"></span></a></li><li><a href="https://www.instagram.com/msfda_official/?hl=en" rel="noreferrer" target="_blank" class="text-gray-700 transition hover:text-gray-700/75"><span class="sr-only">Instagram</span><span class="iconify h-7 w-7" data-icon="mdi:instagram"></span></a></li><li><a href="https://mobile.twitter.com/msfda_official" rel="noreferrer" target="_blank" class="text-gray-700 transition hover:text-gray-700/75"><span class="sr-only">Twitter</span><span class="iconify h-7 w-7" data-icon="mdi:twitter"></span></a></li><li><a href="https://www.youtube.com/@msfda4213" rel="noreferrer" target="_blank" class="text-gray-700 transition hover:text-gray-700/75"><span class="sr-only">Youtube</span><span class="iconify h-7 w-7" data-icon="mdi:youtube"></span></a></li><li><a href="https://goo.gl/maps/7ncpCenJ6jYmpWCQ6" rel="noreferrer" target="_blank" class="text-gray-700 transition hover:text-gray-700/75"><span class="sr-only">location</span><span class="iconify h-7 w-7" data-icon="mdi:map-marker"></span></a></li></ul></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/web/Foo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_webNavbar = __nuxt_component_0;
  const _component_webFoo = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_webNavbar, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_webFoo, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-256c2e9b.mjs.map
