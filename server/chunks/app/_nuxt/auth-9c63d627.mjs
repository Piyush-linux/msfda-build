import { _ as __nuxt_component_0 } from './Input-69fed829.mjs';
import { ref, mergeProps, unref, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _imports_0 } from './hero-da2f1708.mjs';
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
import 'ufo';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _sfc_main = {
  __name: "auth",
  __ssrInlineRender: true,
  setup(__props) {
    let username = ref("");
    let password = ref("");
    let user = ref("");
    let form_submit = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_uiInput = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "my-20" }, _attrs))}><div class="flex mx-10 justify-center"><div class="w-1/2"><img${ssrRenderAttr("src", _imports_0)} alt="" class="mx-auto"></div><div class="w-1/2"><div class="flex flex-col shadow-2xl p-6 m-6 rounded-2xl"><div class="text-2xl font-bold">Admin Panel</div>`);
      _push(ssrRenderComponent(_component_uiInput, {
        names: "username",
        label: "username",
        type: "text",
        class: "mt-3",
        placeholder: "username",
        modelValue: unref(username),
        "onUpdate:modelValue": ($event) => isRef(username) ? username.value = $event : username = $event
      }, null, _parent));
      _push(ssrRenderComponent(_component_uiInput, {
        names: "password",
        label: "password",
        type: "text",
        class: "mt-3",
        placeholder: "password",
        modelValue: unref(password),
        "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : password = $event
      }, null, _parent));
      _push(`<button class="button w-full bg-rose-500 mt-6 p-3 text-white font-bold uppercase"> submit </button></div></div><div class="relative" style="${ssrRenderStyle(unref(form_submit) ? null : { display: "none" })}"><div class="modal fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"><div class="flex p-10 h-screen w-full bg-gray-100 flex-col items-center"><div class=""><img src="https://ouch-cdn2.icons8.com/eaQUPhS0khcGoYtrmLbPMRoyQdtvr1yCV96chhh5a0o/rs:fit:912:912/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNjY1/L2RhMjM0OGM5LWEw/N2YtNGE4YS05Y2Yw/LWExY2IxMzkxODNk/Zi5zdmc.png" class="mx-auto h-96"></div><a${ssrRenderAttr("href", `/api/programs?username=${unref(user).username}&password=${unref(user).password}`)} download="programs.xlsx" class="mt-6 bg-orange-600 p-3 text-white font-bold">Download!</a></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/auth.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=auth-9c63d627.mjs.map
