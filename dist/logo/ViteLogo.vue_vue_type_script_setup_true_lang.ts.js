import { defineComponent as a, computed as i, openBlock as l, createElementBlock as r, normalizeStyle as n, createStaticVNode as p } from "vue";
const c = /* @__PURE__ */ a({
  __name: "ViteLogo",
  props: {
    width: {},
    height: {}
  },
  setup(s) {
    const t = s, o = i(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (d, e) => (l(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      fill: "none",
      viewBox: "0 0 32 32",
      style: n(o.value)
    }, e[0] || (e[0] = [
      p('<path fill="url(#vite-gui-asset-a)" d="m29.884 6.146-13.142 23.5a.714.714 0 0 1-1.244.005L2.096 6.148a.714.714 0 0 1 .746-1.057l13.156 2.352a.7.7 0 0 0 .253 0l12.881-2.348a.714.714 0 0 1 .752 1.05z"></path><path fill="url(#vite-gui-asset-b)" d="M22.264 2.007 12.54 3.912a.36.36 0 0 0-.288.33l-.598 10.104a.357.357 0 0 0 .437.369l2.707-.625a.357.357 0 0 1 .43.42l-.804 3.939a.357.357 0 0 0 .454.413l1.672-.508a.357.357 0 0 1 .454.414l-1.279 6.187c-.08.387.435.598.65.267l.143-.222 7.925-15.815a.357.357 0 0 0-.387-.51l-2.787.537a.357.357 0 0 1-.41-.45l1.818-6.306a.357.357 0 0 0-.412-.45"></path><defs><linearGradient id="vite-gui-asset-a" x1="6" x2="235" y1="33" y2="344" gradientTransform="translate(1.34 1.894)scale(.07142)" gradientUnits="userSpaceOnUse"><stop stop-color="#41D1FF"></stop><stop offset="1" stop-color="#BD34FE"></stop></linearGradient><linearGradient id="vite-gui-asset-b" x1="194.651" x2="236.076" y1="8.818" y2="292.989" gradientTransform="translate(1.34 1.894)scale(.07142)" gradientUnits="userSpaceOnUse"><stop stop-color="#FFEA83"></stop><stop offset=".083" stop-color="#FFDD35"></stop><stop offset="1" stop-color="#FFA800"></stop></linearGradient></defs>', 3)
    ]), 4));
  }
});
export {
  c as _
};
