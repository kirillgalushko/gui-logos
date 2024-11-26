import { defineComponent as m, computed as n, openBlock as r, createElementBlock as p, normalizeStyle as s, createElementVNode as i } from "vue";
const g = /* @__PURE__ */ m({
  __name: "LogoAutoprefixer",
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
    return (l, t) => (r(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "193",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 193",
      style: s(h.value)
    }, t[0] || (t[0] = [
      i("g", { fill: "#DD3835" }, [
        i("path", { d: "M62.26 192.232h30.902l9.543-32.72h47.717l9.544 32.72h32.72L128.154 0zm65.894-108.613 16.36 52.716h-32.72zm127.7 70.893-3.18-13.179-67.26-6.816 8.635 23.177zM70.44 136.335 3.181 143.15 0 156.331l62.26 3.18z" })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
