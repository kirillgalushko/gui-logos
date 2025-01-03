import { defineComponent as s, computed as l, openBlock as p, createElementBlock as h, normalizeStyle as m, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ s({
  __name: "LogoLosant",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, n = l(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, o) => (p(), h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "146",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 146",
      style: m(n.value)
    }, o[0] || (o[0] = [
      t("g", null, [
        t("polygon", {
          fill: "#FF495C",
          points: "181.929077 35.1116943 182.301331 34.3654175 182.178162 0.936523438 181.929077 0 72.7578947 111.176697 72.0579834 112.102539 72.0579834 144.203369 72.6864624 145.557373"
        }),
        t("polygon", {
          fill: "#284FFF",
          points: "181.908211 0 181.908211 35.1326316 220.692211 73.1486316 183.060211 111.157895 72.576 0.485052632 0 73.1486316 72.6972632 145.542737 72.7309474 111.151158 34.7351579 73.1418947 72.7578947 35.1258947 183.437474 145.805474 255.750737 72.8993684"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
