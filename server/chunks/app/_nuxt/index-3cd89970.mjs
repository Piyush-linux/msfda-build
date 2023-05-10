import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-e5124028.mjs';
import { mergeProps, withCtx, createTextVNode, unref, useSSRContext, createVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { c as c1 } from './c1-0357d73e.mjs';
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
import '../server.mjs';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'cookie-es';
import 'qs';
import 'highlight.js';
import 'markdown-it';

const _sfc_main$1 = {
  __name: "Hovercard",
  __ssrInlineRender: true,
  props: {
    uuid: Number,
    tit: String,
    desc: String,
    image: String
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: `/centre/${__props.uuid}`,
        class: "group relative block bg-black"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img alt="Developer"${ssrRenderAttr("src", __props.image)} class="absolute inset-0 h-96 w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"${_scopeId}><div class="relative p-4 sm:p-6 lg:p-8"${_scopeId}><p class="text-xl font-bold text-white sm:text-2xl"${_scopeId}>${ssrInterpolate(props.tit)}</p><div class="mt-20"${_scopeId}><div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"${_scopeId}><p class="text-sm text-white"${_scopeId}>${ssrInterpolate(props.desc)}</p></div></div></div>`);
          } else {
            return [
              createVNode("img", {
                alt: "Developer",
                src: __props.image,
                class: "absolute inset-0 h-96 w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
              }, null, 8, ["src"]),
              createVNode("div", { class: "relative p-4 sm:p-6 lg:p-8" }, [
                createVNode("p", { class: "text-xl font-bold text-white sm:text-2xl" }, toDisplayString(props.tit), 1),
                createVNode("div", { class: "mt-20" }, [
                  createVNode("div", { class: "translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100" }, [
                    createVNode("p", { class: "text-sm text-white" }, toDisplayString(props.desc), 1)
                  ])
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/web/Hovercard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$1;
const _imports_0 = "" + buildAssetsURL("bg.1fdab618.png");
const _imports_1 = "" + buildAssetsURL("dec.b607d5a0.png");
const _imports_2 = "" + buildAssetsURL("FLAME.c8120920.png");
const _imports_3 = "" + buildAssetsURL("HBSU.4b9f2394.png");
const _imports_4 = "" + buildAssetsURL("ICT.0ac12ab1.png");
const _imports_5 = "" + buildAssetsURL("IEEE.2d820542.png");
const _imports_6 = "" + buildAssetsURL("IISER.5e5f4aa0.png");
const _imports_7 = "" + buildAssetsURL("IOC.a6e97155.png");
const _imports_8 = "" + buildAssetsURL("HP.08e4339b.png");
const _imports_9 = "" + buildAssetsURL("iph.9f414779.png");
const _imports_10 = "" + buildAssetsURL("jj.b0d50722.png");
const _imports_11 = "" + buildAssetsURL("KKSU.87c0d1c0.png");
const _imports_12 = "" + buildAssetsURL("MNLU.e61c7c76.png");
const _imports_13 = "" + buildAssetsURL("NFB.bf44b8f0.png");
const _imports_14 = "" + buildAssetsURL("NIRMAN.e9c51436.png");
const _imports_15 = "" + buildAssetsURL("PPT.9677cc90.png");
const _imports_16 = "" + buildAssetsURL("pt.d6672727.jpg");
const _imports_17 = "" + buildAssetsURL("RI.d24abc64.png");
const _imports_18 = "" + buildAssetsURL("RID.f0e08a9b.png");
const _imports_19 = "" + buildAssetsURL("SANT.5a45f2ad.png");
const _imports_20 = "" + buildAssetsURL("siu.5f0ae0c2.png");
const _imports_21 = "" + buildAssetsURL("SNDT.f2b9ccc5.jpg");
const _imports_22 = "" + buildAssetsURL("TI.7c805fc3.png");
const c2 = "" + buildAssetsURL("c2.3e6d537b.jpg");
const c3 = "" + buildAssetsURL("c3.32adc785.jpg");
const c4 = "" + buildAssetsURL("c4.a1a298f4.jpg");
const c5 = "" + buildAssetsURL("c5.0f969f1b.jpg");
const c7 = "" + buildAssetsURL("c7.72d6f977.jpg");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    let centre = [{
      id: 1,
      image: c1,
      title: "Centre for multidiciplinary",
      desc: "The Centre will carry out trainings in learning opportunities with a multi-disciplinary approach. In line with the NEP, 2020, the Centre will enable institutions and faculty to provide open, creative, and critical learning opportunities by inter-connecting various streams of arts and science."
    }, {
      id: 2,
      image: c2,
      title: "Centre for Leadership Development",
      desc: "This Centre will focus on training of senior faculty of HEIs who are in leadership positions or are likely to assume leadership positions. The various aspects of NEP, 2020 will be discussed with them and they will be motivated to translate the policy features into actuality within their institutions."
    }, {
      id: 3,
      image: c3,
      title: "Centre for Inclusion and Diversity",
      desc: "The Centre will sensitize the faculty, students and HEIs to diversity and inclusion as a non-negotiable value."
    }, {
      id: 4,
      image: c4,
      title: "Centre for Innovation and Cutting Edge Technology",
      desc: "The Centre will foster innovation culture in HEIs. It will develop tools and methodologies to nurture innovation, incubation and entrepreneurial ecosystem and impart trainings in this field. It will focus on research and analysis and strengthen the participant\u2019s understanding as an entrepreneur, leader and/or explorer in new fields and ideas."
    }, {
      id: 5,
      image: c5,
      title: "Centre for Resources",
      desc: "The Centre will be developed as a studio hosting a library, an audio-visual room, a performance space with required technical and other resources and provision for regular updating of resources like books, journals, periodicals, films, audio files, etc."
    }, {
      id: 7,
      image: c7,
      title: "Centre for Evaluation and Assessment",
      desc: "The Centre is aimed at complementing and enhancing the working of other Centres and to build capacities in the system for higher quality in assessment and evaluation."
    }];
    let approaches = [{
      icon: "uim:object-ungroup",
      tit: "Experiential learning, creativity and innovation",
      desc: "The faculty will be encouraged to adopt pedagogies that promote discovery, questioning and experiential learning by the students. This approach, which is also being focused in school education, will enable development of creative individuals who are intelligent, confident, sensitive and are able to address problems."
    }, {
      icon: "uim:rocket",
      tit: "Learning beyond knowledge",
      desc: "Knowledge can lead to intelligence, but by itself is not intelligence. The educators will be nudged towards appreciating this fact, so that they assume the right roles within the overarching purpose of \u2018learning\u2019. The HEIs will be encouraged to promote a congenial learning environment, which is free from fear and promotes critical thinking, discussion and co- learning among teachers and students."
    }, {
      icon: "uim:dialpad",
      tit: "Multidisciplinary Education",
      desc: "A multidisciplinary approach will promoted. The HEIs will be encouraged to recognize and promote creative arts at par with science and management subjects. Also, the training will promote integration with vocational education as envisaged in the NEP 2020 and work towards correcting the social status hierarchy associated with vocational education."
    }, {
      icon: "uim:chart-pie",
      tit: "Scientific and rational thinking",
      desc: "The NEP 2020 envisions discovery-based style of learning with emphasis on scientific method and critical thinking. Article 51 of the Constitution inter alia mentions that it shall be the fundamental duty of every citizen to develop scientific temper, humanism and spirit of enquiry and reform. MSFDA will promote training which is focused on rational thinking."
    }, {
      icon: "uim:signal-alt-3",
      tit: "Networking with practitioners, expert institutions, HEIs",
      desc: "Recognizing the strength and importance of experiential and hands-on learning, the MSFDA will work as a collaborative institute that will not only provide training to faculty, but will also serve as facilitative platform to connect the HEIs with best practicing individuals, practitioners, institutions, and resources."
    }, {
      icon: "uim:star-half-alt",
      tit: "Diversity and inclusion",
      desc: "The NEP 2020 envisions increased access, equity and inclusion in higher education by creating greater opportunities. The MSFDA will promote diversity and inclusion as a non-negotiable fundamental principal in all aspects of higher education. The training accordingly, will focus on sensitizing faculty towards this aspect and skilling them with comprehensive understanding of diversity and inclusion ."
    }];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_webHovercard = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><section class="text-gray-600 body-font"><div class="container mx-auto flex px-5 pt-10 lg:py-24 items-center justify-center flex-col"><img class="lg:w-1/2 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero"${ssrRenderAttr("src", _imports_0)}><div class="text-center lg:w-2/3 w-full"><div class="buttons flex justify-center mt-1">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/courses",
        class: "m-1 btn text-white bg-blue-500 p-2 rounded-2xl px-4 shadow-lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Courses`);
          } else {
            return [
              createTextVNode("Courses")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/register",
        class: "m-1 btn text-white bg-lime-500 p-2 rounded-2xl px-4 shadow-lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Registration`);
          } else {
            return [
              createTextVNode("Registration")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#partner",
        class: "m-1 btn text-white bg-amber-500 p-2 rounded-2xl px-4 shadow-lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Knowleage`);
          } else {
            return [
              createTextVNode("Knowleage")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#upcoming",
        class: "m-1 btn text-white bg-rose-500 p-2 rounded-2xl px-4 shadow-lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Upcoming`);
          } else {
            return [
              createTextVNode("Upcoming")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section><section class="bg-white"><div class="container px-6 py-12 mx-auto"><hr><h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-4xl my-8 text-center">C E N T R E</h1><div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-6"><!--[-->`);
      ssrRenderList(unref(centre), (cen, i) => {
        _push(`<div class="">`);
        _push(ssrRenderComponent(_component_webHovercard, {
          tit: cen.title,
          desc: cen.desc,
          uuid: cen.id,
          image: cen.image,
          class: "h-96"
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></section><div id="upcoming"></div><section><div class="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8"><div class="grid grid-cols-1 gap-4 md:grid-cols-2"><div class="bg-rose-500 p-8 md:p-12 lg:px-16 lg:py-24"><div class="mx-auto max-w-xl text-center"><h2 class="text-2xl font-bold text-white md:text-3xl"> V I S I O N </h2><p class="hidden text-white/90 sm:mt-4 sm:block text-justify"> The Vision of MSFDA is &quot;Transforming higher educational landscape, through continuos professional development of teachers in Higher Education Institutes (HEIs) of Maharashtra &quot; <br> MSFDA is in a unique position to influence reforms in the higher education as envisaged by the NEP 2020 by engaging with and motivating the faculty. The focus of trainings and the USP of MSFDA is development of holistic learning and overall development as a human being. This will be critical for societal change. </p><div class="mt-4 md:mt-8">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: "inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-rose-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Know us better `);
          } else {
            return [
              createTextVNode(" Know us better ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2"><img alt="Student" src="https://images.unsplash.com/photo-1621274790572-7c32596bc67f?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=654&amp;q=80" class="h-40 w-full object-cover sm:h-56 md:h-full"><img alt="Student" src="https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=774&amp;q=80" class="h-40 w-full object-cover sm:h-56 md:h-full"></div></div></div></section><section class="bg-white"><div class="container px-6 py-10 mx-auto"><hr><h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl mt-8">Approaches</h1><div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3"><!--[-->`);
      ssrRenderList(unref(approaches), (apr) => {
        _push(`<div class="p-8 space-y-3 border-2 border-blue-400 rounded-md"><span class="iconify h-9 w-9 inline-block text-blue-400"${ssrRenderAttr("data-icon", apr.icon)}></span><h1 class="text-xl font-semibold text-gray-700 capitalize">${ssrInterpolate(apr.tit)}</h1><p class="text-gray-500">${ssrInterpolate(apr.desc)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><div class=""><section id="partner"><div class="px-5 py-24 mx-auto lg:px-16"><div class="mx-auto text-center"><hr><h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl mt-8">Knowledge Partner</h1><div class="grid grid-cols-3 gap-4 lg:space-y-10 mx-auto lg:grid-cols-4"><div><img class="h-20 mx-auto lg:h-28"${ssrRenderAttr("src", _imports_1)} alt="Figma"></div><div><img class="h-20 mx-auto lg:h-28"${ssrRenderAttr("src", _imports_2)} alt="Figma"></div><div><img class="h-20 mx-auto lg:h-28"${ssrRenderAttr("src", _imports_3)} alt="Figma"></div><div><img class="h-20 mx-auto lg:h-28"${ssrRenderAttr("src", _imports_4)} alt="Figma"></div><div><img class="h-20 mx-auto lg:h-28"${ssrRenderAttr("src", _imports_5)} alt="Figma"></div><div><img class="h-20 mx-auto lg:h-28"${ssrRenderAttr("src", _imports_6)} alt="Figma"></div><div><img class="h-20 mx-auto lg:h-28"${ssrRenderAttr("src", _imports_7)} alt="Figma"></div><div><img class="h-20 mx-auto lg:h-28"${ssrRenderAttr("src", _imports_8)} alt="Figma"></div><div><img class="h-20 mx-auto lg:h-28"${ssrRenderAttr("src", _imports_9)} alt="Figma"></div><div><img class="h-20 mx-auto lg:h-28"${ssrRenderAttr("src", _imports_10)} alt="Figma"></div><div><img class="h-20 mx-auto lg:h-28"${ssrRenderAttr("src", _imports_11)} alt="Figma"></div><div><img class="mh-20 mx-auto lg:h-28"${ssrRenderAttr("src", _imports_12)} alt="Figma"></div><div><img class="h-20 mx-auto lg:h-28"${ssrRenderAttr("src", _imports_13)} alt="Figma"></div><div><img class="h-20 mx-auto lg:h-28"${ssrRenderAttr("src", _imports_14)} alt="Figma"></div><div><img class="h-20 mx-auto lg:h-28"${ssrRenderAttr("src", _imports_15)} alt="Figma"></div><div><img class="h-20 mx-auto lg:h-28"${ssrRenderAttr("src", _imports_16)} alt="Figma"></div><div><img class="h-20 mx-auto lg:h-28"${ssrRenderAttr("src", _imports_17)} alt="Figma"></div><div><img class="h-20 mx-auto lg:h-28"${ssrRenderAttr("src", _imports_18)} alt="Figma"></div><div><img class="h-20 mx-auto lg:h-28"${ssrRenderAttr("src", _imports_19)} alt="Figma"></div><div><img class="h-20 mx-auto lg:h-28"${ssrRenderAttr("src", _imports_20)} alt="Figma"></div><div><img class="h-20 mx-auto lg:h-28"${ssrRenderAttr("src", _imports_21)} alt="Figma"></div><div><img class="h-20 mx-auto lg:h-28"${ssrRenderAttr("src", _imports_22)} alt="Figma"></div></div></div></div></section></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-3cd89970.mjs.map
