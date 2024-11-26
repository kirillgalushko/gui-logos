import { defineComponent as o, computed as s, openBlock as a, createElementBlock as h, normalizeStyle as l, createStaticVNode as d } from "vue";
const u = /* @__PURE__ */ o({
  __name: "LogoGrove",
  props: {
    width: {},
    height: {}
  },
  setup(r) {
    const e = r, i = s(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (f, t) => (a(), h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "267",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 267",
      style: l(i.value)
    }, t[0] || (t[0] = [
      d('<defs><filter id="grove-gui-asset-a" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox"><feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="2"></feGaussianBlur><feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.243359375 0"></feColorMatrix><feMerge><feMergeNode in="shadowMatrixOuter1"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter></defs><g><path fill="#92C83E" d="m37.067 181.009 35.27-67.787 28.107 47.396-35.822 57.315z"></path><path fill="#4B843D" d="m59.662 212.422 67.236-131.164 36.373 68.338-51.804 89.83z"></path><path fill="#92C83E" d="m102.098 236.12 93.138-190.133s30.31 34.72 37.475 50.702c6.613 14.88 4.96 47.947-5.511 73.849s-31.964 45.19-44.089 50.15c-50.151 22.045-81.013 15.432-81.013 15.432"></path><path fill="#FFF" d="M248 124C248 55.662 192.338 0 124 0S0 55.662 0 124c0 62.827 47.396 115.182 108.569 122.898v13.226l25.902-12.675C197.85 242.489 248 189.03 248 124M124 225.956c-52.907 0-101.956-49.05-101.956-101.956S71.094 22.044 124 22.044 225.956 71.094 225.956 124 176.906 225.956 124 225.956" filter="url(#grove-gui-asset-a)" transform="translate(4 3)"></path></g>', 2)
    ]), 4));
  }
});
export {
  u as _
};
