import { defineComponent as p, computed as i, openBlock as l, createElementBlock as r, normalizeStyle as a, createStaticVNode as n } from "vue";
const d = /* @__PURE__ */ p({
  __name: "LogoAix",
  props: {
    width: {},
    height: {}
  },
  setup(s) {
    const o = s, e = i(() => ({
      width: o.width || "1em",
      height: o.height || "1em",
      minWidth: o.width || "1em",
      minHeight: o.height || "1em"
    }));
    return (f, t) => (l(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "207",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 207",
      style: a(e.value)
    }, t[0] || (t[0] = [
      n('<defs><linearGradient id="aix-gui-asset-a" x1="5.807%" x2="274.587%" y1="101.291%" y2="-4.88%"><stop offset="0%" stop-color="#6FDC8C"></stop><stop offset="30.49%" stop-color="#6FDC8C"></stop><stop offset="92.79%" stop-color="#009D9A"></stop><stop offset="100%" stop-color="#009D9A"></stop></linearGradient><linearGradient id="aix-gui-asset-b" x1="-9.904%" x2="128.371%" y1="101.291%" y2="-4.857%"><stop offset="0%" stop-color="#6FDC8C"></stop><stop offset="30.49%" stop-color="#6FDC8C"></stop><stop offset="92.79%" stop-color="#009D9A"></stop><stop offset="100%" stop-color="#009D9A"></stop></linearGradient><linearGradient id="aix-gui-asset-c" x1="-136.658%" x2="130.35%" y1="101.291%" y2="-4.857%"><stop offset="0%" stop-color="#6FDC8C"></stop><stop offset="30.49%" stop-color="#6FDC8C"></stop><stop offset="92.79%" stop-color="#009D9A"></stop><stop offset="100%" stop-color="#009D9A"></stop></linearGradient></defs><g><path fill="url(#aix-gui-asset-a)" d="m142.163 206.178-14.595-49.03H59.544l-14.596 49.03H0L67.147.045h54.874l66.27 206.133zM93.991 40.79h-1.46l-22.48 78.274h46.7z"></path><polygon fill="url(#aix-gui-asset-b)" points="208.731055 206.177673 208.731055 170.439007 235.001486 170.439007 235.001486 35.7386661 208.731055 35.7386661 208.731055 2.84217094e-14 305.640416 2.84217094e-14 305.640416 35.7386661 279.369985 35.7386661 279.369985 170.439007 305.640416 170.439007 305.640416 206.177673"></polygon><polygon fill="url(#aix-gui-asset-c)" points="512 206.177673 460.618128 206.177673 416.531947 130.264957 415.656166 130.264957 372.743834 206.177673 324.868648 206.177673 390.262407 99.5480473 328.078158 0 379.742348 0 419.445171 69.7031789 420.320951 69.7031789 460.603269 0 508.478455 0 445.71471 100.435124"></polygon></g>', 2)
    ]), 4));
  }
});
export {
  d as _
};
