import { defineComponent as l, computed as p, openBlock as a, createElementBlock as o, normalizeStyle as d, createStaticVNode as m } from "vue";
const s = /* @__PURE__ */ l({
  __name: "LogoPouchdb",
  props: {
    width: {},
    height: {}
  },
  setup(e) {
    const t = e, i = p(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (n, h) => (a(), o("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "330",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 330",
      style: d(i.value)
    }, h[0] || (h[0] = [
      m('<g fill-opacity=".9"><path fill="#6CCB94" d="M18.752 0 0 91.459l53.782 50.743-34.943 62.289L89.94 329.677h77.785l71.406-125.186-35.245-62.29 51.96-50.742L238.738 0 165.6 97.41H92.372z"></path><path fill="#5DBD85" d="m18.839 204.49 34.942-62.288 75.044 62.29z"></path><path fill="#64C48C" d="m53.782 142.203 75.044 62.29L92.371 97.41z"></path><path fill="#6ECC95" d="m239.13 204.49-35.246-62.288-75.056 62.29z"></path><path fill="#5EBE86" d="M89.94 329.677h77.784l-38.897-125.186z"></path><path fill="#76D29C" d="m203.884 142.203-75.056 62.29L165.599 97.41z"></path><path fill="#74D09B" d="m238.74 0 17.102 91.46-51.958 50.743-38.286-44.793z"></path><path fill="#64C48C" d="m128.825 204.49 38.9 125.187 71.405-125.186z"></path><path fill="#58B880" d="M128.825 204.49 89.928 329.678 18.84 204.491z"></path><path fill="#5FBF87" d="M18.752 0 0 91.46l53.782 50.744L92.37 97.41z"></path><path fill="#6ECC95" d="m128.825 204.49 36.773-107.079H92.371z"></path></g>', 1)
    ]), 4));
  }
});
export {
  s as _
};
