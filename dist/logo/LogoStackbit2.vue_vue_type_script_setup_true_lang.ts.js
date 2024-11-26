import { defineComponent as h, computed as n, openBlock as m, createElementBlock as r, normalizeStyle as s, createElementVNode as i } from "vue";
const a = /* @__PURE__ */ h({
  __name: "LogoStackbit2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, l = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (m(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "257",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 257",
      style: s(l.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#FF364E",
          d: "m177.246 78.768 61.363 30.971a31.48 31.48 0 0 1 17.29 25.637l.101 2.494v70.9a47.263 47.263 0 0 1-44.57 47.184l-2.676.077H.158l78.682-78.783h98.406zM255.856 0l-78.608 78.769H78.84v98.479l-61.52-30.885A31.51 31.51 0 0 1 .099 120.71L0 118.218V47.334A47.263 47.263 0 0 1 44.162.102l3.1-.102z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  a as _
};
