import { defineComponent as i, computed as p, openBlock as r, createElementBlock as a, normalizeStyle as l, createStaticVNode as n } from "vue";
const f = /* @__PURE__ */ i({
  __name: "LogoVsCode",
  props: {
    width: {},
    height: {}
  },
  setup(e) {
    const t = e, s = p(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (c, o) => (r(), a("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      fill: "none",
      viewBox: "0 0 32 32",
      style: l(s.value)
    }, o[0] || (o[0] = [
      n('<path fill="url(#vs-code-gui-asset-a)" d="M21.002 3.117c0-.88-.985-.88-1.422-.77.612-.483 1.33-.366 1.586-.219l5.913 2.9c.563.276.92.85.92 1.48v19.075c0 .639-.366 1.22-.941 1.491l-5.564 2.631c-.383.165-1.214.572-1.914 0 .875.165 1.349-.457 1.422-.879z"></path><path fill="url(#vs-code-gui-asset-b)" d="M19.651 2.332c.464-.092 1.35-.05 1.35.785v6.566L3.075 23.245a.763.763 0 0 1-1.022-.09l-1.847-2a.77.77 0 0 1 .045-1.092L19.58 2.348z"></path><path fill="url(#vs-code-gui-asset-c)" d="M21.002 22.37 3.074 8.809a.763.763 0 0 0-1.022.091l-1.847 2a.77.77 0 0 0 .045 1.09l19.33 17.716c.875.164 1.349-.458 1.422-.88z"></path><defs><linearGradient id="vs-code-gui-asset-a" x1="23.79" x2="23.79" y1="2" y2="30" gradientUnits="userSpaceOnUse"><stop stop-color="#32B5F1"></stop><stop offset="1" stop-color="#2B9FED"></stop></linearGradient><linearGradient id="vs-code-gui-asset-b" x1="21.002" x2="1.022" y1="5.534" y2="22.305" gradientUnits="userSpaceOnUse"><stop stop-color="#0F6FB3"></stop><stop offset=".271" stop-color="#1279B7"></stop><stop offset=".421" stop-color="#1176B5"></stop><stop offset=".618" stop-color="#0E69AC"></stop><stop offset=".855" stop-color="#0F70AF"></stop><stop offset="1" stop-color="#0F6DAD"></stop></linearGradient><linearGradient id="vs-code-gui-asset-c" x1="1.155" x2="21.079" y1="9.984" y2="26.481" gradientUnits="userSpaceOnUse"><stop stop-color="#1791D2"></stop><stop offset="1" stop-color="#1173C5"></stop></linearGradient></defs>', 4)
    ]), 4));
  }
});
export {
  f as _
};
