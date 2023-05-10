import { _ as __nuxt_component_0 } from './Input-69fed829.mjs';
import { _ as __nuxt_component_1 } from './Select-f0fd6a50.mjs';
import { e as useRuntimeConfig } from '../server.mjs';
import { ref, withAsyncContext, mergeProps, unref, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle, ssrRenderAttr, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const runtimeConfig = /* @__PURE__ */ useRuntimeConfig();
    ref();
    let centreOption = ([__temp, __restore] = withAsyncContext(async () => ([__temp, __restore] = withAsyncContext(() => fetch(`${runtimeConfig.public.apiBase}/centres`)), __temp = await __temp, __restore(), __temp).json()), __temp = await __temp, __restore(), __temp);
    let activeStep = ref(1);
    let date = ref(null);
    ref(null);
    let coursenameOption = ref("");
    ref("");
    let coursename = ref(null);
    ref("");
    ref(null);
    let name = ref("");
    let email = ref("");
    let number = ref("");
    let gender = ref("Male");
    let age = ref("");
    let district = ref("Ahmednagar");
    let work = ref("Teacher");
    let designation = ref("Assistant professor");
    let designationOther = ref("");
    let experience = ref("Less than 1");
    let subject = ref("");
    let appointment = ref("Other");
    let streamOption = [" Science", "Humanities", "Commerce", "Management", "Law", "Fine Arts / Performance Arts", "Engineering and Technology", "Education", "Architecture", "Vocational", "Other"];
    let stream = ref("");
    let streamOther = ref("");
    let year = ref("");
    let yearOption = ["FY", "SY", "TY", "Final Year"];
    let college = ref("");
    let aidedOption = ["Government (affiliated) | \u0936\u093E\u0938\u0915\u0940\u092F (\u0938\u0902\u0932\u0917\u094D\u0928)", "Government (autonomous) | \u0936\u093E\u0938\u0915\u0940\u092F (\u0938\u094D\u0935\u093E\u092F\u0924\u094D\u0924)", "Private (aided) | \u0916\u093E\u091C\u0917\u0940 (\u0905\u0928\u0941\u0926\u093E\u0928\u093F\u0924)", "Private (unaided) | \u0916\u093E\u091C\u0917\u0940 (\u0935\u093F\u0928\u093E\u0905\u0928\u0941\u0926\u093E\u0928\u093F\u0924)", "Private (autonomous) | \u0916\u093E\u091C\u0917\u0940 (\u0938\u094D\u0935\u093E\u092F\u0924\u094D\u0924)", "Other"];
    let aidedOther = ref("");
    let aided = ref("");
    let address = ref("");
    let university = ref("---");
    let universityOther = ref("");
    let p_name = ref("");
    let p_email = ref("");
    let p_number = ref("");
    let form_submit = ref(false);
    let districtOption = ["Ahmednagar", "Akola", "Amravati", "Aurangabad", "Beed", "Bhandara", "Buldhana", "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai city", "Mumbai subarban", "Nagpur", "Nanded", "Nandurbar", "Nashik", "Osmanabad", "Palghar", "Parbhani", "Pune", "Raigad", "Ratnagiri", "Sangli", "Satara", "Sindhudurg", "Solapur", "Thane", "Wardha", "Washim", "Yavatmal"];
    let universityOption = ["Karmaveer Bhaurao Patil University Satara", "Savitribai Phule Pune University, Pune", "Sant Gadge Baba Amravati University, Amravati", "Dr. Babasaheb Ambedkar Marathwada University, Aurangabad", "Rashtrasant Tukdoji Maharaj Nagpur University, Nagpur", "Gondwana University, Gadchiroli", "Kavayitri Bahinabai Chaudhari North Maharashtra University, Jalgaon", "Kavi Kulguru Sanskrit Vishwavidyalaya, Ramtek", "Swami Ramanand Teerth Marathwada University, Nanded", "Shivaji University, Kolhapur", "Mumbai University, Mumbai", "Smt. Nathibai Damodar Thakersey Women's University, Mumbai", "Punyashlok Ahilyadevi Holkar Solapur University, Solapur", "Maharashtra National Law University", "Homi Bhabha State University", "Other"];
    let notify_validate = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_uiInput = __nuxt_component_0;
      const _component_uiSelect = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "my-20 mx-10" }, _attrs))}><div><h2 class="sr-only">Steps</h2><div><p class="text-md font-medium text-gray-500">${ssrInterpolate(unref(activeStep))}/5 - PROGRESS</p><div class="mt-4 overflow-hidden rounded-full bg-gray-200"><div style="${ssrRenderStyle(unref(activeStep) == 1 ? null : { display: "none" })}" class="h-2 w-1/6 rounded-full bg-blue-500"></div><div style="${ssrRenderStyle(unref(activeStep) == 2 ? null : { display: "none" })}" class="h-2 w-2/6 rounded-full bg-blue-500"></div><div style="${ssrRenderStyle(unref(activeStep) == 3 ? null : { display: "none" })}" class="h-2 w-3/6 rounded-full bg-blue-500"></div><div style="${ssrRenderStyle(unref(activeStep) == 4 ? null : { display: "none" })}" class="h-2 w-4/6 rounded-full bg-blue-500"></div><div style="${ssrRenderStyle(unref(activeStep) == 5 ? null : { display: "none" })}" class="h-2 w-full rounded-full bg-blue-500"></div></div></div></div><form><div id="steps" class="text-center"><div class="flex w-full mt-20 justify-center"><div class="w-full sm:w-1/2 text-left"><div class="" style="${ssrRenderStyle(unref(activeStep) == 1 ? null : { display: "none" })}"><div class="text-3xl font-bold">Course</div><div class="field" style="${ssrRenderStyle({ "visibility": "collapse", "display": "table" })}"><div class="dummy mb-3"><label for="" class="label">Test : Course Name</label><input type="text" class="input"${ssrRenderAttr("value", unref(coursename))} name="coursename"><div class="field"><label class="label"> Test : Date Selected ! </label><div class="control"><input type="text" class="input"${ssrRenderAttr("value", unref(date))} name="date" placeholder="date"></div></div></div></div><div class="mt-6"><label for="" class="text-xs sm:text-lg font-medium text-gray-600"> Centre </label><select id="" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" name="centreid" required><option selected value="Select option">Select option</option><!--[-->`);
      ssrRenderList(unref(centreOption).data, (val, index) => {
        _push(`<option${ssrRenderAttr("value", val.id)}>${ssrInterpolate(val.attributes.name)}</option>`);
      });
      _push(`<!--]--></select></div><div class="mt-6"><label for="" class="text-xs sm:text-lg font-medium text-gray-600"> Course </label><select id="" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" name="courseid" required><option selected value="Select option">Select option</option><!--[-->`);
      ssrRenderList(unref(coursenameOption).data, (val, index) => {
        _push(`<option${ssrRenderAttr("value", val.attributes.courseid)}>${ssrInterpolate(val.attributes.name)}</option>`);
      });
      _push(`<!--]--></select></div></div><div class="" style="${ssrRenderStyle(unref(activeStep) == 2 ? null : { display: "none" })}"><div class="font-bold text-3xl"> Personal </div>`);
      _push(ssrRenderComponent(_component_uiInput, {
        names: "name",
        label: "Your name (as required on certificate) | \u0924\u0941\u092E\u091A\u0947 \u0928\u093E\u0935 (\u092A\u094D\u0930\u092E\u093E\u0923\u092A\u0924\u094D\u0930\u093E\u0935\u0930 \u0906\u0935\u0936\u094D\u092F\u0915\u0924\u0947\u0928\u0941\u0938\u093E\u0930) ",
        type: "text",
        class: "mt-3",
        placeholder: "Last First Middle",
        modelValue: unref(name),
        "onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : name = $event
      }, null, _parent));
      _push(ssrRenderComponent(_component_uiInput, {
        names: "email",
        label: "Your email | \u0924\u0941\u092E\u091A\u093E \u0908\u092E\u0947\u0932 ",
        type: "email",
        placeholder: "example@gmail.com",
        modelValue: unref(email),
        "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : email = $event
      }, null, _parent));
      _push(ssrRenderComponent(_component_uiSelect, {
        names: "gender",
        label: "Gender | \u0932\u093F\u0902\u0917 ",
        options: ["Male", "Female", "Other", "Prefer not to say"],
        modelValue: unref(gender),
        "onUpdate:modelValue": ($event) => isRef(gender) ? gender.value = $event : gender = $event
      }, null, _parent));
      _push(ssrRenderComponent(_component_uiInput, {
        names: "number",
        label: "Your WhatsApp number | \u0924\u0941\u092E\u091A\u093E WhatsApp \u0928\u0902\u092C\u0930 ",
        type: "text",
        placeholder: "123",
        modelValue: unref(number),
        "onUpdate:modelValue": ($event) => isRef(number) ? number.value = $event : number = $event,
        max: "10"
      }, null, _parent));
      _push(ssrRenderComponent(_component_uiInput, {
        names: "age",
        label: "Age | \u0935\u092F (in years) ",
        type: "text",
        placeholder: "age",
        modelValue: unref(age),
        "onUpdate:modelValue": ($event) => isRef(age) ? age.value = $event : age = $event,
        max: "2"
      }, null, _parent));
      _push(ssrRenderComponent(_component_uiSelect, {
        names: "district",
        label: "District ",
        options: unref(districtOption),
        modelValue: unref(district),
        "onUpdate:modelValue": ($event) => isRef(district) ? district.value = $event : district = $event
      }, null, _parent));
      _push(`</div><div class="" style="${ssrRenderStyle(unref(activeStep) == 3 ? null : { display: "none" })}"><div class="font-bold text-3xl"> Professional </div>`);
      _push(ssrRenderComponent(_component_uiSelect, {
        names: "work",
        label: "Profile | \u0915\u093E\u092E\u093E\u091A\u0947 \u0938\u094D\u0935\u0930\u0942\u092A",
        options: ["Teacher", "Non-teaching staff", "Student", "Management"],
        modelValue: unref(work),
        "onUpdate:modelValue": ($event) => isRef(work) ? work.value = $event : work = $event,
        class: "mt-3"
      }, null, _parent));
      if (unref(work) == "Student") {
        _push(`<div class="mb-3">`);
        if (unref(stream) != "Other") {
          _push(`<div>`);
          _push(ssrRenderComponent(_component_uiSelect, {
            names: "stream",
            label: "Stream",
            options: unref(streamOption),
            modelValue: unref(stream),
            "onUpdate:modelValue": ($event) => isRef(stream) ? stream.value = $event : stream = $event,
            class: "mt-3"
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<div>`);
          _push(ssrRenderComponent(_component_uiSelect, {
            label: "Stream",
            options: unref(streamOption),
            modelValue: unref(stream),
            "onUpdate:modelValue": ($event) => isRef(stream) ? stream.value = $event : stream = $event,
            class: "mt-3"
          }, null, _parent));
          _push(ssrRenderComponent(_component_uiInput, {
            names: "stream",
            type: "text",
            class: "mt-2",
            placeholder: "Specifiy Your Stream",
            modelValue: unref(streamOther),
            "onUpdate:modelValue": ($event) => isRef(streamOther) ? streamOther.value = $event : streamOther = $event
          }, null, _parent));
          _push(`</div>`);
        }
        _push(ssrRenderComponent(_component_uiSelect, {
          names: "year",
          label: "Year",
          options: unref(yearOption),
          modelValue: unref(year),
          "onUpdate:modelValue": ($event) => isRef(year) ? year.value = $event : year = $event,
          class: "mt-3"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div>`);
        if (unref(designation) != "Other") {
          _push(`<div>`);
          _push(ssrRenderComponent(_component_uiSelect, {
            names: "designation",
            label: "Designation | \u092A\u0926",
            options: ["Assistant professor", "Associate professor", "Professor", "Superintendent", "Principal/Dean", "Vice chancellor", "Other"],
            modelValue: unref(designation),
            "onUpdate:modelValue": ($event) => isRef(designation) ? designation.value = $event : designation = $event,
            class: "mt-3"
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<div>`);
          _push(ssrRenderComponent(_component_uiSelect, {
            label: "Designation | \u092A\u0926",
            options: ["Assistant professor", "Associate professor", "Professor", "Superintendent", "Principal/Dean", "Vice chancellor", "Other"],
            modelValue: unref(designation),
            "onUpdate:modelValue": ($event) => isRef(designation) ? designation.value = $event : designation = $event,
            class: "mt-3"
          }, null, _parent));
          _push(ssrRenderComponent(_component_uiInput, {
            names: "designation",
            type: "text",
            class: "mt-2",
            placeholder: "Specifiy Your Designation",
            modelValue: unref(designationOther),
            "onUpdate:modelValue": ($event) => isRef(designationOther) ? designationOther.value = $event : designationOther = $event
          }, null, _parent));
          _push(`</div>`);
        }
        _push(ssrRenderComponent(_component_uiSelect, {
          names: "experience",
          label: "Number of years of teaching experience | \u0905\u0927\u094D\u092F\u093E\u092A\u0928 \u0905\u0928\u0941\u092D\u0935\u093E\u091A\u094D\u092F\u093E \u0935\u0930\u094D\u0937\u093E\u0902\u091A\u0940 \u0938\u0902\u0916\u094D\u092F\u093E",
          options: ["Less than 1", "1-2", "3-5", "5-10", "More than 10", "not applicable"],
          modelValue: unref(experience),
          "onUpdate:modelValue": ($event) => isRef(experience) ? experience.value = $event : experience = $event,
          class: "mt-3"
        }, null, _parent));
        if (unref(work) != "Non-teaching staff" && unref(work) != "Management") {
          _push(`<div>`);
          _push(ssrRenderComponent(_component_uiInput, {
            names: "subject",
            label: "Subject(s) you teach/ learn | \u0935\u093F\u0937\u092F (\u0924\u0941\u092E\u094D\u0939\u0940 \u0936\u093F\u0915\u0935\u0924\u093E/ \u0936\u093F\u0915\u0924\u093E)",
            type: "text",
            class: "mt-2",
            modelValue: unref(subject),
            "onUpdate:modelValue": ($event) => isRef(subject) ? subject.value = $event : subject = $event
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_uiSelect, {
          names: "appointment",
          label: "Nature of appointment | \u0928\u093F\u092F\u0941\u0915\u094D\u0924\u0940\u091A\u0947 \u0938\u094D\u0935\u0930\u0942\u092A",
          options: ["Permanent/ \u0915\u093E\u092F\u092E", "CHB", "Ad-hoc", "Other"],
          modelValue: unref(appointment),
          "onUpdate:modelValue": ($event) => isRef(appointment) ? appointment.value = $event : appointment = $event,
          class: "mt-3"
        }, null, _parent));
        _push(`</div>`);
      }
      _push(`<div class="is-block mt-3 txt-bold"> All Fields are mandatory ! </div></div><div class="" style="${ssrRenderStyle(unref(activeStep) == 4 ? null : { display: "none" })}"><div class="font-bold text-3xl"> Institute </div>`);
      _push(ssrRenderComponent(_component_uiInput, {
        names: "college",
        label: "College Name | \u092E\u0939\u093E\u0935\u093F\u0926\u094D\u092F\u093E\u0932\u092F\u093E\u091A\u0947 \u0928\u093E\u0935 \u092A\u093F\u0928\u0915\u094B\u0921\u0938\u0939",
        type: "text",
        class: "mt-2",
        modelValue: unref(college),
        "onUpdate:modelValue": ($event) => isRef(college) ? college.value = $event : college = $event
      }, null, _parent));
      if (unref(aided) != "Other") {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_uiSelect, {
          names: "aided",
          label: "College: Aided/ unaided/autonomous |  \u092E\u0939\u093E\u0935\u093F\u0926\u094D\u092F\u093E\u0932\u092F: \u0905\u0928\u0941\u0926\u093E\u0928\u093F\u0924/\u0935\u093F\u0928\u093E\u0905\u0928\u0941\u0926\u093E\u0928\u093F\u0924/\u0938\u094D\u0935\u093E\u092F\u0924\u094D\u0924",
          options: unref(aidedOption),
          modelValue: unref(aided),
          "onUpdate:modelValue": ($event) => isRef(aided) ? aided.value = $event : aided = $event,
          class: "mt-3"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_uiSelect, {
          label: "College: Aided/ unaided/autonomous |  \u092E\u0939\u093E\u0935\u093F\u0926\u094D\u092F\u093E\u0932\u092F: \u0905\u0928\u0941\u0926\u093E\u0928\u093F\u0924/\u0935\u093F\u0928\u093E\u0905\u0928\u0941\u0926\u093E\u0928\u093F\u0924/\u0938\u094D\u0935\u093E\u092F\u0924\u094D\u0924",
          options: unref(aidedOption),
          modelValue: unref(aided),
          "onUpdate:modelValue": ($event) => isRef(aided) ? aided.value = $event : aided = $event,
          class: "mt-3"
        }, null, _parent));
        _push(ssrRenderComponent(_component_uiInput, {
          names: "aided",
          type: "text",
          class: "mt-2",
          placeholder: "Specifiy",
          modelValue: unref(aidedOther),
          "onUpdate:modelValue": ($event) => isRef(aidedOther) ? aidedOther.value = $event : aidedOther = $event
        }, null, _parent));
        _push(`</div>`);
      }
      _push(ssrRenderComponent(_component_uiInput, {
        names: "address",
        label: "College address with pin code | \u092A\u093F\u0928 \u0915\u094B\u0921\u0938\u0939 \u092E\u0939\u093E\u0935\u093F\u0926\u094D\u092F\u093E\u0932\u092F\u093E\u091A\u093E \u092A\u0924\u094D\u0924\u093E",
        type: "text",
        class: "mt-2",
        modelValue: unref(address),
        "onUpdate:modelValue": ($event) => isRef(address) ? address.value = $event : address = $event,
        max: "100"
      }, null, _parent));
      if (unref(university) != "Other") {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_uiSelect, {
          names: "university",
          label: "University affiliation | \u0935\u093F\u0926\u094D\u092F\u093E\u092A\u0940\u0920 \u0938\u0902\u0932\u0917\u094D\u0928\u0924\u093E",
          options: unref(universityOption),
          modelValue: unref(university),
          "onUpdate:modelValue": ($event) => isRef(university) ? university.value = $event : university = $event,
          class: "mt-3"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_uiSelect, {
          label: "University affiliation | \u0935\u093F\u0926\u094D\u092F\u093E\u092A\u0940\u0920 \u0938\u0902\u0932\u0917\u094D\u0928\u0924\u093E",
          options: unref(universityOption),
          modelValue: unref(university),
          "onUpdate:modelValue": ($event) => isRef(university) ? university.value = $event : university = $event,
          class: "mt-3"
        }, null, _parent));
        _push(ssrRenderComponent(_component_uiInput, {
          names: "university",
          type: "text",
          class: "mt-2",
          placeholder: "Specifiy Your University",
          modelValue: unref(universityOther),
          "onUpdate:modelValue": ($event) => isRef(universityOther) ? universityOther.value = $event : universityOther = $event
        }, null, _parent));
        _push(`</div>`);
      }
      _push(ssrRenderComponent(_component_uiInput, {
        names: "p_name",
        label: "Name of the Principal | \u092A\u094D\u0930\u093E\u091A\u093E\u0930\u094D\u092F \u0928\u093E\u0935",
        type: "text",
        class: "mt-2",
        modelValue: unref(p_name),
        "onUpdate:modelValue": ($event) => isRef(p_name) ? p_name.value = $event : p_name = $event
      }, null, _parent));
      _push(ssrRenderComponent(_component_uiInput, {
        names: "p_email",
        label: "Email of the Principal | \u092A\u094D\u0930\u093E\u091A\u093E\u0930\u094D\u092F \u0908\u092E\u0947\u0932",
        type: "email",
        class: "mt-2",
        modelValue: unref(p_email),
        "onUpdate:modelValue": ($event) => isRef(p_email) ? p_email.value = $event : p_email = $event
      }, null, _parent));
      _push(ssrRenderComponent(_component_uiInput, {
        names: "p_number",
        label: "Contact number of the Principal | \u092A\u094D\u0930\u093E\u091A\u093E\u0930\u094D\u092F \u0938\u0902\u092A\u0930\u094D\u0915 \u0928\u0902\u092C\u0930",
        type: "text",
        class: "mt-2",
        modelValue: unref(p_number),
        "onUpdate:modelValue": ($event) => isRef(p_number) ? p_number.value = $event : p_number = $event,
        max: "10"
      }, null, _parent));
      _push(`<div class="is-block mt-3 txt-bold"> All Fields are mandatory ! </div></div><div class="w-full" style="${ssrRenderStyle(unref(activeStep) == 5 ? null : { display: "none" })}"><div class="text-4xl font-bold mb-4">${ssrInterpolate(unref(coursename))}</div><div class="border-emerald-500"><div class="border-2 rounded-md p-6 shadow-2xl mt-5"><div class="font-bold text-3xl mb-6"> Personnel </div><div class="content is-medium"><div class="font-bold mt-2"> Name : </div> ${ssrInterpolate(unref(name))} <div class="font-bold mt-2"> Number : </div> ${ssrInterpolate(unref(number))} <div class="font-bold mt-2"> Email : </div> ${ssrInterpolate(unref(email))} <div class="font-bold mt-2"> Gender : </div> ${ssrInterpolate(unref(gender))} <div class="font-bold mt-2"> Age : </div> ${ssrInterpolate(unref(age))} <br><div class="font-bold mt-2"> District : </div> ${ssrInterpolate(unref(district))}</div></div><div class="border-2 rounded-md p-6 shadow-2xl mt-5"><div class="font-bold text-3xl mb-6"> Institute </div><div class="content is-medium"><div class="font-bold mt-2"> College : </div> ${ssrInterpolate(unref(college))} <div class="font-bold mt-2"> Aided : </div> ${ssrInterpolate(unref(aided))} <div class="font-bold mt-2"> Address : </div> ${ssrInterpolate(unref(address))} <div class="font-bold mt-2"> University : </div> ${ssrInterpolate(unref(university) != "Other" ? unref(university) : unref(universityOther))} <div class="font-bold mt-2"> Principal Name : </div> ${ssrInterpolate(unref(p_name))} <div class="font-bold mt-2"> Principal Email : </div> ${ssrInterpolate(unref(p_email))} <div class="font-bold mt-2"> Principal Number : </div> ${ssrInterpolate(unref(p_number))}</div></div></div></div><div class="buttons mt-6"><button class="button m-1 is-dark p-2 px-4 font-medium rounded-md bg-gray-800 text-white" type="button" style="${ssrRenderStyle(unref(activeStep) != 1 ? null : { display: "none" })}">B a c k</button><button class="button m-1 is-dark p-2 px-4 font-medium rounded-md bg-gray-800 text-white" type="button" style="${ssrRenderStyle(unref(activeStep) != 5 ? null : { display: "none" })}">N e x t</button><button style="${ssrRenderStyle(unref(activeStep) == 5 ? null : { display: "none" })}" class="button m-1 is-dark p-2 px-4 font-medium rounded-md bg-gray-800 text-white" type="submit">S U B M I T</button></div></div></div></div></form><div style="${ssrRenderStyle(unref(notify_validate) ? null : { display: "none" })}" class="relative flex justify-center bg-opacity-70"><div class="fixed inset-0 z-10 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true"><div class="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0"><span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">\u200B</span><div class="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform rounded-lg rtl:text-right sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6"><div class="rounded-lg p-8 shadow-2xl bg-white"><h2 class="text-lg font-bold">Please Fill All Details !</h2><p class="mt-2 text-sm text-gray-500"> Doing that could have cause some issues elsewhere, are you 100% sure it&#39;s OK? </p><div class="mt-4 flex gap-2"><button type="button" class="rounded bg-rose-400 px-4 py-2 text-sm font-medium text-white"> Sure </button></div></div></div></div></div></div><div style="${ssrRenderStyle(unref(form_submit) ? null : { display: "none" })}" class="relative flex justify-center bg-opacity-70"><div class="fixed inset-0 z-10 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true"><div class="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0"><span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">\u200B</span><div class="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl rtl:text-right sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6"><div><div class="flex items-center justify-center"><button class="button"><span class="iconify text-lime-500 h-9 w-9" data-icon="ic:round-library-add-check"></span></button></div><div class="mt-2 text-center"><h3 class="text-2xl font-semibold leading-6 text-gray-800 capitalize" id="modal-title"> Form Submitted </h3><p class="mt-2 text-sm text-gray-500"> Thank You ! </p></div></div><div class="mt-5 sm:flex sm:items-center sm:justify-evenly justify-center"><button class="w-full px-4 py-2 mt-2 text-sm font-bold tracking-wide text-white bg-sky-500 rounded-md sm:w-auto sm:mt-0 hover:bg-sky-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"> HOME </button><button class="w-full px-4 py-2 mt-2 text-sm font-bold tracking-wide text-white bg-sky-500 rounded-md sm:w-auto sm:mt-0 hover:bg-sky-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"> COURSES </button><button class="w-full px-4 py-2 mt-2 text-sm font-bold tracking-wide text-white bg-sky-500 rounded-md sm:w-auto sm:mt-0 hover:bg-sky-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"> ABOUT </button></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/register/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-72ebd166.mjs.map
