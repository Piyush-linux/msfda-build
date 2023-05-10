import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';

const _sfc_main = {
  __name: "Input",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    label: {
      type: String,
      default: null
    },
    names: {
      type: String,
      default: ""
    },
    max: {
      type: String,
      default: "40"
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: emits }) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-6" }, _attrs))}><div class="w-full space-y-1">`);
      if (props.label) {
        _push(`<label for="" class="text-xs sm:text-lg font-medium text-gray-600">${ssrInterpolate(props.label)}</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<input id="basic" class="block p-2 w-full rounded-md border-2 border-gray-500 text-sm transition disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75"${ssrRenderAttr("value", props.modelValue)}${ssrRenderAttr("type", props.type)}${ssrRenderAttr("placeholder", props.placeholder)}${ssrRenderAttr("name", props.names)}${ssrRenderAttr("maxlength", props.max)} required></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Input.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main;

export { __nuxt_component_0 as _ };
//# sourceMappingURL=Input-69fed829.mjs.map
