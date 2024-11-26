import { defineComponent as i, computed as p, openBlock as e, createElementBlock as g, normalizeStyle as s, createStaticVNode as y } from "vue";
const r = /* @__PURE__ */ i({
  __name: "LogoSketch2",
  props: {
    width: {},
    height: {}
  },
  setup(l) {
    const o = l, n = p(() => ({
      width: o.width || "1em",
      height: o.height || "1em",
      minWidth: o.width || "1em",
      minHeight: o.height || "1em"
    }));
    return (h, t) => (e(), g("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "232",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 232",
      style: s(n.value)
    }, t[0] || (t[0] = [
      y('<g><polygon fill="#FDB300" points="127.9998 0.0002 55.8548 7.6282 -0.0002 82.6072 127.9998 231.6622 255.9998 82.6072 200.1458 7.6282"></polygon><polygon fill="#EB6C00" points="0 82.6076 128 231.6616 51.846 82.6076"></polygon><polygon fill="#EB6C00" points="204.1533 82.6076 128.0003 231.6616 255.9993 82.6076"></polygon><polygon fill="#FDAD00" points="51.8463 82.6076 128.0003 231.6616 204.1543 82.6076"></polygon><polygon fill="#FDD231" points="55.8548 7.6282 51.8458 82.6072 127.9998 0.0002"></polygon><polygon fill="#FDD231" points="204.1533 82.6076 200.1453 7.6276 128.0003 0.0006"></polygon><polygon fill="#FDAD00" points="204.1542 82.6076 255.9992 82.6076 200.1452 7.6276"></polygon><polygon fill="#FDAD00" points="0 82.6076 51.846 82.6076 55.855 7.6276"></polygon><polygon fill="#FEEEB7" points="127.9998 0.0002 51.8458 82.6072 204.1538 82.6072"></polygon></g>', 1)
    ]), 4));
  }
});
export {
  r as _
};
