import { defineComponent as o, computed as n, openBlock as m, createElementBlock as p, normalizeStyle as r, createElementVNode as h } from "vue";
const v = /* @__PURE__ */ o({
  __name: "LogoWpengine",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, l = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, t) => (m(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: r(l.value)
    }, t[0] || (t[0] = [
      h("g", null, [
        h("path", {
          fill: "#40BAC8",
          d: "M86.84 256h82.32v-62.243l-20.078-20.079h-42.666l-19.577 20.079zM193.254 86.84l-19.577 19.576v43.168l19.577 19.577H256V86.839zM169.16 0H86.839v62.745l19.577 19.577h42.666l20.079-19.577zM256 256v-62.243l-19.576-20.079h-62.746V256zM19.576 0 0 19.576v62.746h82.322V0zm154.102 0v62.745l19.577 19.577H256V0zM128 140.047c-6.525 0-11.545-5.522-11.545-11.545 0-6.526 5.521-11.545 11.545-11.545 6.525 0 11.545 5.521 11.545 11.545 0 6.023-5.02 11.545-11.545 11.545M82.322 86.84H0v82.322h62.243l20.079-19.577zm0 106.918-20.079-20.079H0V256h62.243l20.079-19.576z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  v as _
};
