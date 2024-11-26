import { defineComponent as s, computed as h, openBlock as p, createElementBlock as l, normalizeStyle as r, createStaticVNode as a } from "vue";
const m = /* @__PURE__ */ s({
  __name: "LogoAwsAppflow",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const t = o, i = h(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (n, e) => (p(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: r(i.value)
    }, e[0] || (e[0] = [
      a('<defs><linearGradient id="aws-appflow-gui-asset-a" x1="0%" x2="100%" y1="100%" y2="0%"><stop offset="0%" stop-color="#B0084D"></stop><stop offset="100%" stop-color="#FF4F8B"></stop></linearGradient></defs><g><rect width="256" height="256" x="0" y="0" fill="url(#aws-appflow-gui-asset-a)"></rect><path fill="#FFF" d="m133.302 60.8-50.22 84.438-3.322-12.39-6.18 1.658 6.254 23.34 23.34-6.256-1.654-6.179-13.2 3.533 48.62-81.74h48.049l24.019 41.596-24.02 41.6h-25.106v6.403h28.8l27.715-48.003-27.715-48zm15.63 43.61 1.657 6.182 13.353-3.58-46.134 81.791h-48L45.788 147.2l24.02-41.6h19.677v-6.397h-23.37L38.4 147.2l27.715 48h55.43l47.533-84.26 3.27 12.212 6.183-1.658-6.256-23.337z"></path></g>', 2)
    ]), 4));
  }
});
export {
  m as _
};
