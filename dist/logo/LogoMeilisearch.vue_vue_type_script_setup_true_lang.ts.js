import { defineComponent as o, computed as a, openBlock as r, createElementBlock as l, normalizeStyle as p, createStaticVNode as h } from "vue";
const d = /* @__PURE__ */ o({
  __name: "LogoMeilisearch",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, s = a(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (n, t) => (r(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "150",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 150",
      style: p(s.value)
    }, t[0] || (t[0] = [
      h('<defs><linearGradient id="meilisearch-gui-asset-a" x1="153.821%" x2="19.172%" y1="-7.638%" y2="89.239%"><stop offset="0%" stop-color="#FF5CAA"></stop><stop offset="100%" stop-color="#FF4E62"></stop></linearGradient><linearGradient id="meilisearch-gui-asset-b" x1="117.325%" x2="-17.323%" y1="-7.638%" y2="89.238%"><stop offset="0%" stop-color="#FF5CAA"></stop><stop offset="100%" stop-color="#FF4E62"></stop></linearGradient><linearGradient id="meilisearch-gui-asset-c" x1="80.828%" x2="-53.821%" y1="-7.638%" y2="89.238%"><stop offset="0%" stop-color="#FF5CAA"></stop><stop offset="100%" stop-color="#FF4E62"></stop></linearGradient></defs><g><path fill="url(#meilisearch-gui-asset-a)" d="M0 149.288 47.297 28.277A44.46 44.46 0 0 1 88.708 0h28.515L69.926 121.012a44.46 44.46 0 0 1-41.411 28.276z"></path><path fill="url(#meilisearch-gui-asset-b)" d="m69.386 149.289 47.297-121.012A44.46 44.46 0 0 1 158.095 0h28.514l-47.297 121.012a44.46 44.46 0 0 1-41.411 28.277z"></path><path fill="url(#meilisearch-gui-asset-c)" d="m138.777 149.289 47.297-121.012A44.46 44.46 0 0 1 227.484 0H256l-47.297 121.012a44.46 44.46 0 0 1-41.412 28.277z"></path></g>', 2)
    ]), 4));
  }
});
export {
  d as _
};
