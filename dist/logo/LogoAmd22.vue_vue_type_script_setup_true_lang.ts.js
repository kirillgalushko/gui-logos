import { defineComponent as m, computed as n, openBlock as l, createElementBlock as r, normalizeStyle as s, createElementVNode as h } from "vue";
const c = /* @__PURE__ */ m({
  __name: "LogoAmd22",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, o = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (l(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "123",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 123",
      style: s(o.value)
    }, t[0] || (t[0] = [
      h("g", null, [
        h("path", { d: "M120.415 114.002H91.868L83.184 93.04H35.839L27.923 114H0L42.654 8.172h30.562zM58.522 33.383 42.838 74.61h32.577zM223.386 8.172h22.976v105.83h-26.384v-65.96l-28.546 33.2h-4.03l-28.547-33.347v65.96H132.47V8.172h22.976l33.97 39.356zm89.816 0c38.624 0 58.632 24.039 58.632 53.061 0 30.415-19.239 52.769-61.453 52.769h-43.9V8.172zm-20.337 86.445h17.223c26.53 0 34.446-17.993 34.446-33.53 0-18.323-9.785-33.53-34.74-33.53h-16.93zm131.261-54.674v47.931h47.931l-34.226 34.263H389.9V74.169zM512 0v121.11l-33.273-33.273V33.273h-54.564L390.926 0z" })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};
