import { defineComponent as i, computed as p, openBlock as a, createElementBlock as r, normalizeStyle as l, createStaticVNode as c } from "vue";
const n = /* @__PURE__ */ i({
  __name: "LogoMicrosoftAzure",
  props: {
    width: {},
    height: {}
  },
  setup(s) {
    const t = s, e = p(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (f, o) => (a(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "242",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 242",
      style: l(e.value)
    }, o[0] || (o[0] = [
      c('<defs><linearGradient id="microsoft-azure-gui-asset-a" x1="58.972%" x2="37.191%" y1="7.411%" y2="103.762%"><stop offset="0%" stop-color="#114A8B"></stop><stop offset="100%" stop-color="#0669BC"></stop></linearGradient><linearGradient id="microsoft-azure-gui-asset-b" x1="59.719%" x2="52.691%" y1="52.313%" y2="54.864%"><stop offset="0%" stop-color="#000" stop-opacity=".3"></stop><stop offset="7.1%" stop-color="#000" stop-opacity=".2"></stop><stop offset="32.1%" stop-color="#000" stop-opacity=".1"></stop><stop offset="62.3%" stop-color="#000" stop-opacity=".05"></stop><stop offset="100%" stop-color="#000" stop-opacity="0"></stop></linearGradient><linearGradient id="microsoft-azure-gui-asset-c" x1="37.279%" x2="62.473%" y1="4.6%" y2="99.979%"><stop offset="0%" stop-color="#3CCBF4"></stop><stop offset="100%" stop-color="#2892DF"></stop></linearGradient></defs><g><path fill="url(#microsoft-azure-gui-asset-a)" d="M85.343.003h75.753L82.457 233a12.08 12.08 0 0 1-11.442 8.216H12.06A12.06 12.06 0 0 1 .633 225.303L73.898 8.219A12.08 12.08 0 0 1 85.343 0z"></path><path fill="#0078D4" d="M195.423 156.282H75.297a5.56 5.56 0 0 0-3.796 9.627l77.19 72.047a12.14 12.14 0 0 0 8.28 3.26h68.02z"></path><path fill="url(#microsoft-azure-gui-asset-b)" d="M85.343.003a11.98 11.98 0 0 0-11.471 8.376L.723 225.105a12.045 12.045 0 0 0 11.37 16.112h60.475a12.93 12.93 0 0 0 9.921-8.437l14.588-42.991 52.105 48.6a12.33 12.33 0 0 0 7.757 2.828h67.766l-29.721-84.935-86.643.02L161.37.003z"></path><path fill="url(#microsoft-azure-gui-asset-c)" d="M182.098 8.207A12.06 12.06 0 0 0 170.67.003H86.245c5.175 0 9.773 3.301 11.428 8.204L170.94 225.3a12.062 12.062 0 0 1-11.428 15.92h84.429a12.062 12.062 0 0 0 11.425-15.92z"></path></g>', 2)
    ]), 4));
  }
});
export {
  n as _
};