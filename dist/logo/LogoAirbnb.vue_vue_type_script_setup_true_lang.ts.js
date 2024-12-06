import { defineComponent as i, computed as o, openBlock as s, createElementBlock as m, normalizeStyle as n, createElementVNode as h } from "vue";
const d = /* @__PURE__ */ i({
  __name: "LogoAirbnb",
  props: {
    width: {},
    height: {}
  },
  setup(c) {
    const e = c, l = o(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, t) => (s(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      "xml:space": "preserve",
      width: "800",
      height: "800",
      version: "1.1",
      viewBox: "0 0 44 48",
      style: n(l.value)
    }, t[0] || (t[0] = [
      h("path", {
        d: "m43.2 33.5-.2-.6c-.2-.4-.3-.8-.5-1.1-.2-.4-.3-.8-.5-1.1l-.6-1.2-.1-.1C38 22.2 34.6 15.3 31.2 8.7l-.1-.3c-.4-.7-.8-1.4-1.1-2.2l-.2-.2c-.4-.8-.9-1.6-1.6-2.4-1.5-1.9-3.8-3-6.2-3s-4.6 1-6.2 2.9c-.7.9-1.2 1.8-1.7 2.6-.4.7-.7 1.5-1.1 2.2l-.1.3C9 16.1 5.6 22.9 2.7 29.3l-.1.1c-.2.4-.4.8-.5 1.2-.2.4-.3.7-.5 1.1-.2.5-.5 1.1-.7 1.7-.6 1.8-.8 3.5-.6 5.2.5 3.6 2.9 6.6 6.3 8 1.2.5 2.5.8 3.9.8.4 0 .9-.1 1.3-.1 1.6-.2 3.3-.7 4.8-1.6 1.8-1 3.5-2.4 5.5-4.5 1.9 2 3.7 3.4 5.5 4.5 1.5.9 3.1 1.4 4.8 1.6.3 0 .8.1 1.3.1 1.4 0 2.8-.3 3.9-.8 3.3-1.3 5.7-4.4 6.3-8 .1-1.5-.1-3.2-.7-5.1m-25.5-8.7c.1-.6.3-1.2.6-1.7.8-1.2 2.1-1.8 3.6-1.8 1.6 0 2.9.7 3.6 1.8.4.5.6 1.1.7 1.7.1.8.1 1.7-.1 2.6-.5 2.2-1.9 4.9-4.2 7.9-2.2-2.9-3.7-5.6-4.2-7.9-.1-1-.1-1.8 0-2.6M30 28.4c.3-1.4.4-2.7.2-4.1-.2-1.2-.6-2.4-1.3-3.3-1.5-2.2-4-3.5-6.9-3.5-2.8 0-5.3 1.3-6.9 3.5-.7 1-1.1 2.1-1.3 3.3-.2 1.3-.1 2.7.2 4.1.7 3 2.5 6.4 5.4 10.1-1.7 1.9-3.3 3.2-4.8 4.1-1.1.6-2.2 1-3.3 1.1s-2.2 0-3.3-.4c-2.1-.9-3.6-2.8-3.9-5-.1-1.3 0-2.3.5-3.5.1-.3.2-.6.4-.9.1-.2.1-.3.2-.5.3-.7.7-1.5 1-2.3V31c3.4-7.2 6.8-14.2 10.1-20.6l.1-.3c.2-.3.4-.7.6-1.1s.4-.7.6-1.1c.4-.8.8-1.4 1.2-1.9q1.35-1.5 3.3-1.5c1.95 0 2.4.5 3.3 1.5.4.5.8 1.1 1.2 1.9.2.3.4.7.5 1.1.2.4.4.7.5 1l.1.3c3.5 6.8 6.8 13.7 10 20.5l.1.2c.2.4.3.7.5 1.1s.4.8.5 1.1c.1.2.1.3.2.5.2.3.3.6.4.9q.6 1.8.3 3.3c-.3 2.2-1.8 4.1-3.9 5-1 .4-2.1.6-3.2.4-1.1-.1-2.2-.5-3.3-1.1-1.5-.8-3-2.1-4.8-4.1 3-3.3 4.8-6.7 5.5-9.7",
        style: { fill: "#ff5a5f" }
      }, null, -1)
    ]), 4));
  }
});
export {
  d as _
};