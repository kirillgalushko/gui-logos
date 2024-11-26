import { defineComponent as m, computed as o, openBlock as n, createElementBlock as v, normalizeStyle as r, createElementVNode as h } from "vue";
const d = /* @__PURE__ */ m({
  __name: "LogoAmexDigital",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, l = o(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, t) => (n(), v("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: r(l.value)
    }, t[0] || (t[0] = [
      h("g", null, [
        h("rect", {
          width: "256",
          height: "256",
          x: "0",
          y: "0",
          fill: "#FFF"
        }),
        h("path", {
          fill: "#006FCF",
          d: "M0 0v256h256v-40.448h-35.328l-13.056-15.273-13.568 15.273H93.696v-81.321H60.585l41.39-93.696h40.274l9.728 21.248V40.535h50.007l8.361 22.272 8.192-22.272H256V0zm227.072 53.76-13.143 34.647-3.497 9.39-3.584-9.39-13.225-34.647h-28.928v68.27h17.408V77.573l-.087-8.965 3.415 8.965 16.64 44.457h16.553l16.727-44.457 3.241-8.878v53.335H256V53.76zm-115.712 0-30.208 68.27h19.794l5.294-13.143h33.111l5.289 13.143h20.055l-30.039-68.27zm8.018 23.127 3.415-8.53 3.415 8.53 7.081 17.234h-20.992zm109.061 57.431-20.567 22.098-20.48-22.098h-79.703v68.009h57.006v-14.76h-39.598v-11.864h38.83v-14.674h-38.83v-11.95h39.598v-14.76l31.826 34.129-31.826 33.879h22.016l20.736-22.185 20.649 22.185h22.61l-31.913-34.135 31.913-33.874zm8.274 33.792L256 187.735v-38.999z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
