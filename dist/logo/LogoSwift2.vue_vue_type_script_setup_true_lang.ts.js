import { defineComponent as o, computed as a, openBlock as r, createElementBlock as p, normalizeStyle as n, createStaticVNode as l } from "vue";
const h = /* @__PURE__ */ o({
  __name: "LogoSwift2",
  props: {
    width: {},
    height: {}
  },
  setup(s) {
    const t = s, i = a(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (c, e) => (r(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: n(i.value)
    }, e[0] || (e[0] = [
      l('<linearGradient id="swift-2-gui-asset-a" x1="-1845.501" x2="-1797.134" y1="1255.639" y2="981.338" gradientTransform="rotate(180 -846.605 623.252)" gradientUnits="userSpaceOnUse"><stop offset="0" style="stop-color:#faae42;"></stop><stop offset="1" style="stop-color:#ef3e31;"></stop></linearGradient><path fill="url(#swift-2-gui-asset-a)" d="M56.9 0h141.8c6.9 0 13.6 1.1 20.1 3.4 9.4 3.4 17.9 9.4 24.3 17.2 6.5 7.8 10.8 17.4 12.3 27.4.6 3.7.7 7.4.7 11.1v138.3c0 4.4-.2 8.9-1.1 13.2-2 9.9-6.7 19.2-13.5 26.7-6.7 7.5-15.5 13.1-25 16.1-5.8 1.8-11.8 2.6-17.9 2.6-2.7 0-142.1 0-144.2-.1-10.2-.5-20.3-3.8-28.8-9.5-8.3-5.6-15.1-13.4-19.5-22.4-3.8-7.7-5.7-16.3-5.7-24.9V56.9C.2 48.4 2 40 5.7 32.4c4.3-9 11-16.9 19.3-22.5C33.5 4.1 43.5.7 53.7.2c1-.2 2.1-.2 3.2-.2"></path><linearGradient id="swift-2-gui-asset-b" x1="130.612" x2="95.213" y1="4.136" y2="204.893" gradientUnits="userSpaceOnUse"><stop offset="0" style="stop-color:#e39f3a;"></stop><stop offset="1" style="stop-color:#d33929;"></stop></linearGradient><path fill="url(#swift-2-gui-asset-b)" d="M216 209.4c-.9-1.4-1.9-2.8-3-4.1-2.5-3-5.4-5.6-8.6-7.8-4-2.7-8.7-4.4-13.5-4.6-3.4-.2-6.8.4-10 1.6-3.2 1.1-6.3 2.7-9.3 4.3-3.5 1.8-7 3.6-10.7 5.1-4.4 1.8-9 3.2-13.7 4.2-5.9 1.1-11.9 1.5-17.8 1.4-10.7-.2-21.4-1.8-31.6-4.8-9-2.7-17.6-6.4-25.7-11.1-7.1-4.1-13.7-8.8-19.9-14.1-5.1-4.4-9.8-9.1-14.2-14.1-3-3.5-5.9-7.2-8.6-11-1.1-1.5-2.1-3.1-3-4.7L0 121.2V56.7C0 25.4 25.3 0 56.6 0h50.5l37.4 38c84.4 57.4 57.1 120.7 57.1 120.7s24 27 14.4 50.7"></path><path fill="#FFF" d="M144.7 38c84.4 57.4 57.1 120.7 57.1 120.7s24 27.1 14.3 50.8c0 0-9.9-16.6-26.5-16.6-16 0-25.4 16.6-57.6 16.6-71.7 0-105.6-59.9-105.6-59.9C91 192.1 135.1 162 135.1 162c-29.1-16.9-91-97.7-91-97.7 53.9 45.9 77.2 58 77.2 58-13.9-11.5-52.9-67.7-52.9-67.7 31.2 31.6 93.2 75.7 93.2 75.7C179.2 81.5 144.7 38 144.7 38"></path>', 5)
    ]), 4));
  }
});
export {
  h as _
};