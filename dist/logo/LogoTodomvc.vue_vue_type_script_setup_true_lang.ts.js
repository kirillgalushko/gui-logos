import { defineComponent as o, computed as v, openBlock as l, createElementBlock as n, normalizeStyle as p, createElementVNode as h } from "vue";
const a = /* @__PURE__ */ o({
  __name: "LogoTodomvc",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, m = v(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, t) => (l(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "230",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 230",
      style: p(m.value)
    }, t[0] || (t[0] = [
      h("g", null, [
        h("path", {
          fill: "#383838",
          d: "M34.404 15.29h23.547V0H34.404a34.3 34.3 0 0 0-18.363 5.306l8.17 12.925a19.04 19.04 0 0 1 10.193-2.941M15.29 34.404c0-2.794.587-5.482 1.744-7.991L3.148 20.012A34.1 34.1 0 0 0 0 34.404v27.064h15.29zM0 76.911h15.29v38.532H0zm205.901-58.194a331 331 0 0 1 13.753-8.257 34.7 34.7 0 0 0-8.941-6.645A34.5 34.5 0 0 0 194.954 0h-13.532v15.29h13.532c4.006 0 7.788 1.211 10.947 3.427M0 130.887h15.29v38.609H0zM73.395 0h38.532v15.291H73.395zm53.975 0h38.609v15.291H127.37zm17.049 214.067h38.532v15.291h-38.532zM214.068 86.85h15.291v38.609h-15.291zm0 54.052h15.291v38.532h-15.291zM15.29 194.954v-10.015H0v10.015a34.44 34.44 0 0 0 17.783 30.129l7.395-13.384a19.14 19.14 0 0 1-9.888-16.745M214.068 61.267v10.14h15.29V48.698c-5.026 3.742-10.128 7.936-15.29 12.569m0 133.687c0 9.585-7.153 17.734-16.639 18.956l1.952 15.165a34.37 34.37 0 0 0 21.331-11.313 34.37 34.37 0 0 0 8.646-22.808v-.076h-15.29zM36.315 214.067h38.609v15.291H36.315zm54.052 0h38.609v15.291H90.367z"
        }),
        h("path", {
          fill: "#AF2F2F",
          d: "m35.015 121.738 71.72 71.72S178.455 55.479 256 24.534L253.088 2.69C210.857 19.437 146.782 63.489 99.454 130.839l-49.876-29.488z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  a as _
};
