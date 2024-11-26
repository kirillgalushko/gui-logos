import { defineComponent as l, computed as p, openBlock as n, createElementBlock as s, normalizeStyle as r, createStaticVNode as g } from "vue";
const f = /* @__PURE__ */ l({
  __name: "LogoFlutter",
  props: {
    width: {},
    height: {}
  },
  setup(e) {
    const o = e, i = p(() => ({
      width: o.width || "1em",
      height: o.height || "1em",
      minWidth: o.width || "1em",
      minHeight: o.height || "1em"
    }));
    return (a, t) => (n(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "317",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 317",
      style: r(i.value)
    }, t[0] || (t[0] = [
      g('<defs><linearGradient id="flutter-gui-asset-a" x1="3.952%" x2="75.897%" y1="26.993%" y2="52.919%"><stop offset="0%" stop-color="#000"></stop><stop offset="100%" stop-color="#000" stop-opacity="0"></stop></linearGradient></defs><g><polygon fill="#47C5FB" points="157.665785 0.000549356223 0.000549356223 157.665785 48.8009614 206.466197 255.267708 0.000549356223"></polygon><polygon fill="#47C5FB" points="156.567183 145.396793 72.1487107 229.815265 121.132608 279.530905 169.842925 230.820587 255.267818 145.396793"></polygon><polygon fill="#00569E" points="121.133047 279.531124 158.214592 316.61267 255.267159 316.61267 169.842266 230.820807"></polygon><polygon fill="#00B5F8" points="71.5995742 230.364072 120.401085 181.562561 169.842046 230.821136 121.132827 279.531454"></polygon><polygon fill="url(#flutter-gui-asset-a)" fill-opacity=".8" points="121.132827 279.531454 161.692896 266.072227 165.721875 234.941308"></polygon></g>', 2)
    ]), 4));
  }
});
export {
  f as _
};
