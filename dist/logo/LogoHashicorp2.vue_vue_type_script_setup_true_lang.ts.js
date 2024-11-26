import { defineComponent as l, computed as n, openBlock as m, createElementBlock as r, normalizeStyle as s, createElementVNode as i } from "vue";
const v = /* @__PURE__ */ l({
  __name: "LogoHashicorp2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, h = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (m(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "271",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 271",
      style: s(h.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#000",
          d: "M215.907 38.502 256 61.648v147.837l-106.71 61.564v-46.236l66.617-38.474zM149.289 0l40.093 23.146V174.11l-40.093 23.118v-43.64h-42.578v117.405l-40.093-23.202V96.94l40.093-23.146v43.946h42.578zm-42.578 0v46.236L40.093 84.71v147.837L0 209.401V61.564z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  v as _
};
