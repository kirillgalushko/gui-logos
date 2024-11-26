import { defineComponent as o, computed as i, openBlock as r, createElementBlock as l, normalizeStyle as p, createStaticVNode as c } from "vue";
const d = /* @__PURE__ */ o({
  __name: "LogoScala",
  props: {
    width: {},
    height: {}
  },
  setup(e) {
    const t = e, s = i(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (n, a) => (r(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "416",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 416",
      style: p(s.value)
    }, a[0] || (a[0] = [
      c('<defs><linearGradient id="scala-gui-asset-a" x1="0%" x2="100%" y1="50%" y2="50%"><stop offset="0%" stop-color="#4F4F4F"></stop><stop offset="100%" stop-color="#000"></stop></linearGradient><linearGradient id="scala-gui-asset-b" x1="0%" x2="100%" y1="50%" y2="50%"><stop offset="0%" stop-color="#C40000"></stop><stop offset="100%" stop-color="red"></stop></linearGradient></defs><g><path fill="url(#scala-gui-asset-a)" d="M0 288v-32c0-5.394 116.377-14.428 192.2-32 36.628 8.49 63.8 18.969 63.8 32v32c0 13.024-27.172 23.51-63.8 32C116.376 302.425 0 293.39 0 288" transform="matrix(1 0 0 -1 0 544)"></path><path fill="url(#scala-gui-asset-a)" d="M0 160v-32c0-5.394 116.377-14.428 192.2-32 36.628 8.49 63.8 18.969 63.8 32v32c0 13.024-27.172 23.51-63.8 32C116.376 174.425 0 165.39 0 160" transform="matrix(1 0 0 -1 0 288)"></path><path fill="url(#scala-gui-asset-b)" d="M0 224v-96c0 8 256 24 256 64v96c0-40-256-56-256-64" transform="matrix(1 0 0 -1 0 416)"></path><path fill="url(#scala-gui-asset-b)" d="M0 96V0c0 8 256 24 256 64v96c0-40-256-56-256-64" transform="matrix(1 0 0 -1 0 160)"></path><path fill="url(#scala-gui-asset-b)" d="M0 352v-96c0 8 256 24 256 64v96c0-40-256-56-256-64" transform="matrix(1 0 0 -1 0 672)"></path></g>', 2)
    ]), 4));
  }
});
export {
  d as _
};
