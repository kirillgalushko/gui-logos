import { defineComponent as p, computed as a, openBlock as i, createElementBlock as l, normalizeStyle as r, createStaticVNode as n } from "vue";
const c = /* @__PURE__ */ p({
  __name: "LogoSteam",
  props: {
    width: {},
    height: {}
  },
  setup(e) {
    const t = e, s = a(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (f, o) => (i(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      fill: "none",
      viewBox: "0 0 32 32",
      style: r(s.value)
    }, o[0] || (o[0] = [
      n('<path fill="url(#steam-gui-asset-a)" d="M2.57 20.027C4.3 25.797 9.654 30 15.99 30 23.728 30 30 23.732 30 16S23.727 2 15.99 2C8.567 2 2.493 7.772 2.013 15.07c0 2.097 0 2.972.558 4.957"></path><path fill="#fff" d="m15.27 12.563-3.427 4.977a3.9 3.9 0 0 0-2.297.635l-7.528-3.097s-.174 2.864.552 4.998l5.321 2.195a3.88 3.88 0 0 0 2.295 2.743 3.887 3.887 0 0 0 5.38-3.691l5.024-3.501a5.33 5.33 0 0 0 5.321-5.328 5.33 5.33 0 0 0-5.32-5.327c-2.836 0-5.48 2.474-5.32 5.396m-.823 10.015a3 3 0 0 1-3.92 1.617 2.98 2.98 0 0 1-1.542-1.471l1.732.717a2.208 2.208 0 0 0 1.697-4.077l-1.79-.742a2.98 2.98 0 0 1 2.21.034c.74.308 1.314.887 1.618 1.627s.303 1.557-.005 2.295m6.143-6.535a3.55 3.55 0 0 1-3.544-3.55 3.55 3.55 0 0 1 3.544-3.548 3.55 3.55 0 0 1 3.547 3.549 3.553 3.553 0 0 1-3.547 3.55m-2.656-3.555a2.665 2.665 0 0 1 2.662-2.666 2.666 2.666 0 0 1 0 5.332 2.664 2.664 0 0 1-2.662-2.666"></path><defs><linearGradient id="steam-gui-asset-a" x1="16.006" x2="16.006" y1="2" y2="30" gradientUnits="userSpaceOnUse"><stop stop-color="#111D2E"></stop><stop offset=".212" stop-color="#051839"></stop><stop offset=".407" stop-color="#0A1B48"></stop><stop offset=".581" stop-color="#132E62"></stop><stop offset=".738" stop-color="#144B7E"></stop><stop offset=".873" stop-color="#136497"></stop><stop offset="1" stop-color="#1387B8"></stop></linearGradient></defs>', 3)
    ]), 4));
  }
});
export {
  c as _
};
