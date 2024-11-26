import { defineComponent as l, computed as m, openBlock as n, createElementBlock as s, normalizeStyle as r, createElementVNode as o } from "vue";
const c = /* @__PURE__ */ l({
  __name: "LogoCordova",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const e = h, i = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (n(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "245",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 245",
      style: r(i.value)
    }, t[0] || (t[0] = [
      o("g", null, [
        o("path", {
          fill: "#444",
          d: "M232.727 244.364h-41.454l2.909-34.91h-20.364l-2.909 34.91H85.091l-2.91-34.91H61.819l2.91 34.91H23.272L0 93.09 58.182 0h139.636L256 93.09zM186.182 46.545h-37.403L151.273 64h-46.546l2.494-17.455H69.818L46.545 93.091l11.637 93.09h139.636l11.637-93.09zm-20.364 108.742c-3.213 0-5.818-9.69-5.818-21.643S162.605 112 165.818 112s5.818 9.69 5.818 21.644-2.605 21.643-5.818 21.643m-73.454 1.804c-3.213 0-5.819-9.69-5.819-21.644s2.606-21.643 5.819-21.643 5.818 9.69 5.818 21.643-2.605 21.644-5.818 21.644"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};
