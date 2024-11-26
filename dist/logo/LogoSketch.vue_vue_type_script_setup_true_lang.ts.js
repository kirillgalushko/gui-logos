import { defineComponent as h, computed as d, openBlock as o, createElementBlock as p, normalizeStyle as n, createStaticVNode as m } from "vue";
const c = /* @__PURE__ */ h({
  __name: "LogoSketch",
  props: {
    width: {},
    height: {}
  },
  setup(l) {
    const e = l, i = d(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (a, t) => (o(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      fill: "none",
      viewBox: "0 0 32 32",
      style: n(i.value)
    }, t[0] || (t[0] = [
      m('<path fill="#FDB300" fill-rule="evenodd" d="M8.11 4.79 16 4l7.89.79L30 12.558 16 28 2 12.558z" clip-rule="evenodd"></path><path fill="#EA6C00" d="M7.67 12.558 16 28 2 12.558zm16.66 0L16 28l14-15.442"></path><path fill="#FDAD00" fill-rule="evenodd" d="M7.67 12.558h16.66L16 28" clip-rule="evenodd"></path><path fill="#FDD231" d="m16 4-7.89.79-.44 7.768zm0 0 7.891.79.439 7.768"></path><path fill="#FDAD00" d="M30 12.558 23.891 4.79l.438 7.768zm-28 0L8.109 4.79l-.438 7.768"></path><path fill="#FEEEB7" fill-rule="evenodd" d="m16 4-8.33 8.558h16.66" clip-rule="evenodd"></path>', 6)
    ]), 4));
  }
});
export {
  c as _
};
