import { defineComponent as n, computed as m, openBlock as r, createElementBlock as s, normalizeStyle as c, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ n({
  __name: "LogoParse",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, h = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (r(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: c(h.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#169CEE",
          d: "M149.333 159.147H86.4c-9.173 0-14.507 5.653-14.507 13.76 0 7.253 4.907 12.373 11.947 12.373 8.213 0 12.907-5.653 13.333-13.76h18.24c-.96 19.84-13.333 30.4-31.786 30.4-17.28 0-30.187-11.733-30.187-29.227 0-18.24 13.547-30.933 33.92-30.933h62.293c21.014 0 37.014-15.467 37.014-36.267 0-21.013-14.294-35.84-34.667-35.84-20.16 0-36.48 14.72-36.48 41.92v17.814H97.067v-17.814c0-36.053 23.146-59.413 55.253-59.413 30.613 0 52.907 21.973 52.907 53.12.213 31.147-23.68 53.867-55.894 53.867M128 256c71.573 0 128-56.64 128-128S199.573 0 128 0 0 56.853 0 128c0 71.36 56.427 128 128 128"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
