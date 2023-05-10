import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';

const _sfc_main = {
  __name: "Select",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true,
      default: ["please provide data"]
    },
    label: {
      type: String,
      default: "label",
      required: true
    },
    names: {
      type: String,
      required: true
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: emits }) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-6" }, _attrs))}>`);
      if (props.label) {
        _push(`<label for="" class="text-xs sm:text-lg font-medium text-gray-600">${ssrInterpolate(props.label)}</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<select id="" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"${ssrRenderAttr("value", props.modelValue)}${ssrRenderAttr("name", __props.names)} required><option selected>Select a option</option><!--[-->`);
      ssrRenderList(props.options, (val, index) => {
        _push(`<option${ssrRenderAttr("value", val)}>${ssrInterpolate(val)}</option>`);
      });
      _push(`<!--]--></select></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Select.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main;

export { __nuxt_component_1 as _ };
//# sourceMappingURL=Select-f0fd6a50.mjs.map
