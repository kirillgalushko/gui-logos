import { defineComponent as l, computed as n, openBlock as c, createElementBlock as h, normalizeStyle as m, createElementVNode as s } from "vue";
const a = /* @__PURE__ */ l({
  __name: "LogoAwsLambda",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, i = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (c(), h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      fill: "none",
      viewBox: "0 0 16 16",
      style: m(i.value)
    }, t[0] || (t[0] = [
      s("path", {
        fill: "#FA7E14",
        d: "M7.983 8.37c-.053.073-.098.133-.141.194L5.775 11.5q-.96 1.365-1.924 2.73a.13.13 0 0 1-.092.051q-1.36-.011-2.719-.028c-.01 0-.02-.003-.04-.006l.025-.053 5.446-8.146c.092-.138.188-.273.275-.413a.17.17 0 0 0 .018-.124q-.252-.773-.508-1.543c-.073-.22-.15-.44-.218-.66-.022-.072-.059-.094-.134-.093q-.854.002-1.704.001c-.108 0-.108 0-.108-.103L4.09 1.092c0-.075.026-.092.099-.092q1.714.003 3.43 0a.1.1 0 0 1 .076.017.1.1 0 0 1 .045.061l3.92 9.51q.329.794.654 1.59c.026.064.053.076.12.056.6-.178 1.2-.352 1.8-.531.075-.023.102-.008.126.064q.307.93.62 1.858l.02.073q-.064.025-.124.043l-4.085 1.25c-.065.02-.085 0-.106-.054l-1.25-3.048-1.226-2.984-.183-.449c-.01-.026-.023-.048-.043-.087z"
      }, null, -1)
    ]), 4));
  }
});
export {
  a as _
};
