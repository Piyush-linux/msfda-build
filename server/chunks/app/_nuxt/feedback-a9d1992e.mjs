import { mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { BarChart, LineChart } from 'vue-chart-3';
import { Chart, registerables } from 'chart.js';

const _sfc_main = {
  __name: "feedback",
  __ssrInlineRender: true,
  setup(__props) {
    Chart.register(...registerables);
    const data = {
      labels: [
        "Food",
        "Venue",
        "Review"
      ],
      datasets: [
        {
          label: "Feedback",
          backgroundColor: "#f87979",
          data: [40, 20, 55]
        }
      ]
    };
    const options = {
      responsive: true,
      maintainAspectRatio: true
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><div class="flex gap-6"><div class="w-1/2 h-64 shadow-2xl p-6">`);
      _push(ssrRenderComponent(unref(BarChart), {
        chartData: data,
        options,
        height: 300
      }, null, _parent));
      _push(`</div><div class="w-1/2 h-64 shadow-2xl p-6">`);
      _push(ssrRenderComponent(unref(LineChart), {
        chartData: data,
        options,
        height: 300
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/feedback.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=feedback-a9d1992e.mjs.map
