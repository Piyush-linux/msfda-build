import { _ as __nuxt_component_0$1 } from './nuxt-link-e5124028.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, toDisplayString } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
  __name: "CourseCard",
  __ssrInlineRender: true,
  props: {
    uuid: Number,
    tit: String,
    desc: String,
    date: String
    // pub:String ,
    // path:String 
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        href: `/courses/${__props.uuid}`,
        class: "relative block overflow-hidden rounded-lg border-2 shadow-lg border-gray-200 p-4 sm:p-6 lg:p-8 h-full"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-blue-300 to-lime-300"${_scopeId}></span><div class="sm:flex sm:justify-between sm:gap-4"${_scopeId}><div${_scopeId}><h3 class="text-lg font-bold text-gray-900 sm:text-xl"${_scopeId}>${ssrInterpolate(props.tit)}</h3></div></div><div class="mt-4"${_scopeId}><p class="max-w-[40ch] text-sm text-gray-500 text-justify"${_scopeId}>${ssrInterpolate(props.desc.slice(0, 100))}... </p></div><dl class="mt-6 flex gap-4 sm:gap-6"${_scopeId}><div class="flex flex-col-reverse"${_scopeId}><dt class="text-sm font-medium text-gray-600"${_scopeId}>Published</dt><dd class="text-xs text-gray-500"${_scopeId}>${ssrInterpolate(props.date)}</dd></div><div class="flex flex-col-reverse"${_scopeId}><dt class="text-sm font-medium text-gray-600"${_scopeId}>Reading Time</dt><dd class="text-xs text-gray-500"${_scopeId}>3 minute</dd></div></dl>`);
          } else {
            return [
              createVNode("span", { class: "absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-blue-300 to-lime-300" }),
              createVNode("div", { class: "sm:flex sm:justify-between sm:gap-4" }, [
                createVNode("div", null, [
                  createVNode("h3", { class: "text-lg font-bold text-gray-900 sm:text-xl" }, toDisplayString(props.tit), 1)
                ])
              ]),
              createVNode("div", { class: "mt-4" }, [
                createVNode("p", { class: "max-w-[40ch] text-sm text-gray-500 text-justify" }, toDisplayString(props.desc.slice(0, 100)) + "... ", 1)
              ]),
              createVNode("dl", { class: "mt-6 flex gap-4 sm:gap-6" }, [
                createVNode("div", { class: "flex flex-col-reverse" }, [
                  createVNode("dt", { class: "text-sm font-medium text-gray-600" }, "Published"),
                  createVNode("dd", { class: "text-xs text-gray-500" }, toDisplayString(props.date), 1)
                ]),
                createVNode("div", { class: "flex flex-col-reverse" }, [
                  createVNode("dt", { class: "text-sm font-medium text-gray-600" }, "Reading Time"),
                  createVNode("dd", { class: "text-xs text-gray-500" }, "3 minute")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/CourseCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main;

export { __nuxt_component_0 as _ };
//# sourceMappingURL=CourseCard-cc24b137.mjs.map
