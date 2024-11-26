import { defineComponent as i, computed as m, openBlock as h, createElementBlock as r, normalizeStyle as s, createElementVNode as e } from "vue";
const g = /* @__PURE__ */ i({
  __name: "LogoStackoverflow",
  props: {
    width: {},
    height: {}
  },
  setup(l) {
    const t = l, n = m(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (p, o) => (h(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      version: "1.1",
      viewBox: "-5 0 48 48",
      style: s(n.value)
    }, o[0] || (o[0] = [
      e("g", {
        fill: "none",
        "fill-rule": "evenodd",
        stroke: "none",
        "stroke-width": "1"
      }, [
        e("g", null, [
          e("g", null, [
            e("path", {
              fill: "#FF810F",
              d: "m25.086 41.592-19.111.01-.002-4.048 19.11-.01zM38 18.671 34.73 0l-4.02.692 3.269 18.67zM25.546 32.355l-19.03-1.739-.375 4.031 19.03 1.737zm1.255-5.282-18.455-4.92-1.06 3.91 18.456 4.919zm2.41-4.63-16.462-9.627-2.074 3.486 16.462 9.627zm4.036-2.834L22.479 3.952l-3.372 2.28 10.768 15.656z"
            }),
            e("polygon", {
              fill: "#BEBCBC",
              points: "28.3315807 28.2784283 28.3315807 44.8243495 3.2648427 44.8243495 3.2648427 28.2784283 0 28.2784283 0 48 31.5799693 48 31.5799693 28.2784283"
            })
          ])
        ])
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
