import { defineComponent as a, computed as i, openBlock as l, createElementBlock as p, normalizeStyle as r, createStaticVNode as g } from "vue";
const h = /* @__PURE__ */ a({
  __name: "LogoGooglePlay",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const t = o, s = i(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (n, e) => (l(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      fill: "none",
      viewBox: "0 0 32 32",
      style: r(s.value)
    }, e[0] || (e[0] = [
      g('<mask id="google-play-gui-asset-a" width="24" height="26" x="7" y="3" maskUnits="userSpaceOnUse" style="mask-type:alpha;"><path fill="#C4C4C4" d="M30.048 14.4a1.82 1.82 0 0 1 0 3.2L9.756 28.766c-1.235.68-2.756-.203-2.756-1.6V4.834c0-1.397 1.52-2.28 2.756-1.6z"></path></mask><g mask="url(#google-play-gui-asset-a)"><path fill="url(#google-play-gui-asset-b)" d="m7.635 28.547 12.657-12.73L7.843 3.3A1.81 1.81 0 0 0 7 4.834v22.332c0 .57.252 1.053.635 1.38"></path><path fill="url(#google-play-gui-asset-c)" d="M30.048 14.4a1.82 1.82 0 0 1 0 3.2l-5.12 2.816-4.636-4.598 4.4-4.365z"></path><path fill="url(#google-play-gui-asset-d)" d="m24.93 20.417-4.638-4.6-12.657 12.73a1.86 1.86 0 0 0 2.121.219z"></path><path fill="url(#google-play-gui-asset-e)" d="m7.843 3.299 12.449 12.519 4.4-4.365L9.756 3.234a1.86 1.86 0 0 0-1.913.065"></path></g><defs><linearGradient id="google-play-gui-asset-b" x1="15.677" x2="7.071" y1="10.874" y2="19.551" gradientUnits="userSpaceOnUse"><stop stop-color="#00C3FF"></stop><stop offset="1" stop-color="#1BE2FA"></stop></linearGradient><linearGradient id="google-play-gui-asset-c" x1="20.292" x2="31.738" y1="15.818" y2="15.818" gradientUnits="userSpaceOnUse"><stop stop-color="#FFCE00"></stop><stop offset="1" stop-color="#FFEA00"></stop></linearGradient><linearGradient id="google-play-gui-asset-d" x1="7.369" x2="22.595" y1="30.1" y2="17.894" gradientUnits="userSpaceOnUse"><stop stop-color="#DE2453"></stop><stop offset="1" stop-color="#FE3944"></stop></linearGradient><linearGradient id="google-play-gui-asset-e" x1="8.107" x2="22.597" y1="1.901" y2="13.736" gradientUnits="userSpaceOnUse"><stop stop-color="#11D574"></stop><stop offset="1" stop-color="#01F176"></stop></linearGradient></defs>', 3)
    ]), 4));
  }
});
export {
  h as _
};
