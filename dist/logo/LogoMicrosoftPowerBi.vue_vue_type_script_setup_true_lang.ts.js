import { defineComponent as e, computed as r, openBlock as p, createElementBlock as a, normalizeStyle as l, createStaticVNode as c } from "vue";
const h = /* @__PURE__ */ e({
  __name: "LogoMicrosoftPowerBi",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const o = i, s = r(() => ({
      width: o.width || "1em",
      height: o.height || "1em",
      minWidth: o.width || "1em",
      minHeight: o.height || "1em"
    }));
    return (f, t) => (p(), a("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      width: "256",
      height: "342",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 342",
      style: l(s.value)
    }, t[0] || (t[0] = [
      c('<defs><linearGradient id="microsoft-power-bi-gui-asset-b" x1="42.593%" x2="57.245%" y1="0%" y2="93.174%"><stop offset="0%" stop-color="#E6AD10"></stop><stop offset="100%" stop-color="#C87E0E"></stop></linearGradient><linearGradient id="microsoft-power-bi-gui-asset-d" x1="40.122%" x2="62.028%" y1="0%" y2="95.592%"><stop offset="0%" stop-color="#F6D751"></stop><stop offset="100%" stop-color="#E6AD10"></stop></linearGradient><linearGradient id="microsoft-power-bi-gui-asset-e" x1="27.774%" x2="55.012%" y1="0%" y2="96.828%"><stop offset="0%" stop-color="#F9E589"></stop><stop offset="100%" stop-color="#F6D751"></stop></linearGradient><path id="microsoft-power-bi-gui-asset-a" d="M142.222 14.222C142.222 6.368 148.59 0 156.444 0h85.334C249.632 0 256 6.368 256 14.222v312.89c0 7.854-6.368 14.221-14.222 14.221H14.222C6.368 341.333 0 334.966 0 327.111V184.89c0-7.855 6.368-14.222 14.222-14.222h56.89V99.556c0-7.855 6.367-14.223 14.222-14.223h56.888z"></path></defs><g><mask id="microsoft-power-bi-gui-asset-c" fill="#fff"><use xlink:href="#microsoft-power-bi-gui-asset-a"></use></mask><polygon fill="url(#microsoft-power-bi-gui-asset-b)" points="256 0 256 341.333333 142.222222 341.333333 142.222222 0" mask="url(#microsoft-power-bi-gui-asset-c)"></polygon><path fill="#000" fill-opacity=".2" d="M184.889 100.978v241.778H71.11v-256h99.556c7.854 0 14.222 6.367 14.222 14.222" mask="url(#microsoft-power-bi-gui-asset-c)"></path><path fill="#000" fill-opacity=".18" d="M184.889 106.667v241.777H71.11v-256h99.556c7.854 0 14.222 6.368 14.222 14.223" mask="url(#microsoft-power-bi-gui-asset-c)"></path><path fill="url(#microsoft-power-bi-gui-asset-d)" d="M184.889 99.556v241.777H71.11v-256h99.556c7.854 0 14.222 6.368 14.222 14.223" mask="url(#microsoft-power-bi-gui-asset-c)"></path><path fill="url(#microsoft-power-bi-gui-asset-e)" d="M0 170.667v170.666h113.778V184.89c0-7.855-6.368-14.222-14.222-14.222z" mask="url(#microsoft-power-bi-gui-asset-c)"></path></g>', 2)
    ]), 4));
  }
});
export {
  h as _
};
