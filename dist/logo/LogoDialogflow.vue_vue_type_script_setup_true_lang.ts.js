import { defineComponent as t, computed as s, openBlock as a, createElementBlock as g, normalizeStyle as n, createStaticVNode as p } from "vue";
const f = /* @__PURE__ */ t({
  __name: "LogoDialogflow",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const o = i, l = s(() => ({
      width: o.width || "1em",
      height: o.height || "1em",
      minWidth: o.width || "1em",
      minHeight: o.height || "1em"
    }));
    return (d, e) => (a(), g("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      width: "256",
      height: "326",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 326",
      style: n(l.value)
    }, e[0] || (e[0] = [
      p('<defs><path id="dialogflow-gui-asset-a" d="M244.828 64.429 139.051 3.389a22.13 22.13 0 0 0-22.188 0L11.067 64.428A22.26 22.26 0 0 0 0 83.666v122.171a22.19 22.19 0 0 0 11.067 19.184l52.925 30.592v62.372a6.658 6.658 0 0 0 9.987 5.74l170.957-98.65a22.13 22.13 0 0 0 11.068-19.184V83.648a22.31 22.31 0 0 0-11.176-19.219"></path></defs><g><mask id="dialogflow-gui-asset-b" fill="#fff"><use xlink:href="#dialogflow-gui-asset-a"></use></mask><polygon fill="#EF6C00" points="255.895578 70.8714028 127.98378 144.742806 0 70.8714028 0 218.614208 63.99189 255.522917 63.99189 329.412315 255.895578 218.614208" mask="url(#dialogflow-gui-asset-b)"></polygon><polygon fill="#FF9800" points="127.98378 144.742806 2.84217094e-14 70.8714028 127.98378 -3 255.895578 70.8714028" mask="url(#dialogflow-gui-asset-b)"></polygon><polygon fill="#FF9800" points="125.716351 142.493372 0.809796133 70.3855251 2.84217094e-14 70.8714028 127.98378 144.742806 255.895578 70.8714028 252.890335 69.0898513" mask="url(#dialogflow-gui-asset-b)"></polygon><polygon fill="#FF9800" points="127.98378 145.660575 127.98378 144.742806 0.809796133 71.3032941 2.84217094e-14 71.7891718" mask="url(#dialogflow-gui-asset-b)"></polygon></g>', 2)
    ]), 4));
  }
});
export {
  f as _
};
