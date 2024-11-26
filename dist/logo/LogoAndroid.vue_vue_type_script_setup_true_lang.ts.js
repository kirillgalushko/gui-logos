import { defineComponent as n, computed as a, openBlock as h, createElementBlock as m, normalizeStyle as d, createElementVNode as l } from "vue";
const s = /* @__PURE__ */ n({
  __name: "LogoAndroid",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, o = a(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, t) => (h(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      fill: "none",
      viewBox: "0 0 32 32",
      style: d(o.value)
    }, t[0] || (t[0] = [
      l("path", {
        fill: "#87C527",
        "fill-rule": "evenodd",
        d: "M12.592 3.884A6.97 6.97 0 0 1 16 3c1.237 0 2.4.321 3.409.884l.737-.738a.5.5 0 0 1 .708.708l-.593.592A6.99 6.99 0 0 1 23 10H9a6.99 6.99 0 0 1 2.739-5.554l-.593-.592a.5.5 0 0 1 .708-.708zM14 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0m5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2",
        "clip-rule": "evenodd"
      }, null, -1),
      l("path", {
        fill: "#87C527",
        d: "M5 12.5a1.5 1.5 0 0 1 3 0v6a1.5 1.5 0 0 1-3 0zM12 24v3.5a1.5 1.5 0 0 0 3 0V24h2v3.5a1.5 1.5 0 0 0 3 0V24h1a2 2 0 0 0 2-2V11H9v11a2 2 0 0 0 2 2zm12-11.5a1.5 1.5 0 0 1 3 0v6a1.5 1.5 0 0 1-3 0z"
      }, null, -1)
    ]), 4));
  }
});
export {
  s as _
};
