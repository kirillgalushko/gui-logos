import { defineComponent as a, computed as m, openBlock as n, createElementBlock as r, normalizeStyle as s, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ a({
  __name: "LogoRabbitmq2",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const e = h, o = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (n(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "257",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 257",
      style: s(o.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#F60",
          d: "M245.734 102.437h-81.911a10.2 10.2 0 0 1-10.263-10.263v-81.91a10.2 10.2 0 0 0-10.263-10.2h-30.66a10.2 10.2 0 0 0-10.264 10.2v81.91a10.2 10.2 0 0 1-10.263 10.263H61.45a10.2 10.2 0 0 1-10.263-10.263v-81.91A10.2 10.2 0 0 0 40.924 0H10.199A10.2 10.2 0 0 0 0 10.263v235.535a10.2 10.2 0 0 0 10.263 10.263h235.47a10.2 10.2 0 0 0 10.264-10.263V112.893a10.2 10.2 0 0 0-10.263-10.456m-41.18 86.979a15.33 15.33 0 0 1-15.33 15.394h-20.526a15.33 15.33 0 0 1-15.33-15.394v-20.462a15.33 15.33 0 0 1 15.33-15.394h20.525a15.33 15.33 0 0 1 15.33 15.394z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
