import { defineComponent as l, computed as n, openBlock as m, createElementBlock as s, normalizeStyle as r, createElementVNode as i } from "vue";
const c = /* @__PURE__ */ l({
  __name: "LogoWebsocket",
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
    return (p, t) => (m(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "193",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 193",
      style: r(h.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#231F20",
          d: "M192.44 144.645h31.78V68.339l-35.805-35.804-22.472 22.472 26.497 26.497zm31.864 15.931H113.452L86.954 134.08l11.237-11.236 21.885 21.885h45.028l-44.357-44.441 11.32-11.32 44.357 44.358v-45.03l-21.801-21.801 11.152-11.153L110.685 0H0l31.696 31.696v.084h65.74l23.227 23.227-33.96 33.96L63.476 65.74V47.712h-31.78v31.193l55.007 55.007L64.314 156.3l35.805 35.805H256z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};
