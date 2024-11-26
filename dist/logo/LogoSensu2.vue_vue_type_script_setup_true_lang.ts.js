import { defineComponent as h, computed as m, openBlock as l, createElementBlock as s, normalizeStyle as r, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ h({
  __name: "LogoSensu2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, n = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (l(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: r(n.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#73CC58",
          d: "M256 127.948 128.052 0 0 127.948 128.052 256zM128.052 34.023l47.1 47.17c-15.43-4.149-31.3-6.281-47.162-6.281a179 179 0 0 0-47.162 6.28zM86.104 179.857a86.4 86.4 0 0 1 41.948-10.766c14.913 0 29.235 3.75 41.947 10.766l-41.947 41.948zm101.389-17.493a110.7 110.7 0 0 0-59.503-17.335 110.6 110.6 0 0 0-59.51 17.335l-33.019-33.02c26.704-19.618 58.85-30.267 92.639-30.267 33.79 0 65.9 10.58 92.639 30.268z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
