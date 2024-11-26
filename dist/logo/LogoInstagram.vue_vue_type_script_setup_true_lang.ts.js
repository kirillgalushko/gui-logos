import { defineComponent as a, computed as r, openBlock as i, createElementBlock as p, normalizeStyle as c, createStaticVNode as l } from "vue";
const f = /* @__PURE__ */ a({
  __name: "LogoInstagram",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const t = o, s = r(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (n, e) => (i(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      fill: "none",
      viewBox: "0 0 32 32",
      style: c(s.value)
    }, e[0] || (e[0] = [
      l('<rect width="28" height="28" x="2" y="2" fill="url(#instagram-gui-asset-a)" rx="6"></rect><rect width="28" height="28" x="2" y="2" fill="url(#instagram-gui-asset-b)" rx="6"></rect><rect width="28" height="28" x="2" y="2" fill="url(#instagram-gui-asset-c)" rx="6"></rect><path fill="#fff" d="M23 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"></path><path fill="#fff" fill-rule="evenodd" d="M16 21a5 5 0 1 0 0-10 5 5 0 0 0 0 10m0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6" clip-rule="evenodd"></path><path fill="#fff" fill-rule="evenodd" d="M6 15.6c0-3.36 0-5.04.654-6.324a6 6 0 0 1 2.622-2.622C10.56 6 12.24 6 15.6 6h.8c3.36 0 5.04 0 6.324.654a6 6 0 0 1 2.622 2.622C26 10.56 26 12.24 26 15.6v.8c0 3.36 0 5.04-.654 6.324a6 6 0 0 1-2.622 2.622C21.44 26 19.76 26 16.4 26h-.8c-3.36 0-5.04 0-6.324-.654a6 6 0 0 1-2.622-2.622C6 21.44 6 19.76 6 16.4zM15.6 8h.8c1.713 0 2.878.002 3.778.075.877.072 1.325.202 1.638.361a4 4 0 0 1 1.748 1.748c.16.313.29.761.36 1.638.074.9.076 2.065.076 3.778v.8c0 1.713-.002 2.878-.075 3.778-.072.877-.202 1.325-.361 1.638a4 4 0 0 1-1.748 1.748c-.313.16-.761.29-1.638.36-.9.074-2.065.076-3.778.076h-.8c-1.713 0-2.878-.002-3.778-.075-.877-.072-1.325-.202-1.638-.361a4 4 0 0 1-1.748-1.748c-.16-.313-.29-.761-.36-1.638C8.001 19.278 8 18.113 8 16.4v-.8c0-1.713.002-2.878.075-3.778.072-.877.202-1.325.361-1.638a4 4 0 0 1 1.748-1.748c.313-.16.761-.29 1.638-.36.9-.074 2.065-.076 3.778-.076" clip-rule="evenodd"></path><defs><radialGradient id="instagram-gui-asset-a" cx="0" cy="0" r="1" gradientTransform="rotate(-55.376 27.916 .066)scale(25.5196)" gradientUnits="userSpaceOnUse"><stop stop-color="#B13589"></stop><stop offset=".793" stop-color="#C62F94"></stop><stop offset="1" stop-color="#8A3AC8"></stop></radialGradient><radialGradient id="instagram-gui-asset-b" cx="0" cy="0" r="1" gradientTransform="rotate(-65.136 29.766 6.89)scale(22.5942)" gradientUnits="userSpaceOnUse"><stop stop-color="#E0E8B7"></stop><stop offset=".445" stop-color="#FB8A2E"></stop><stop offset=".715" stop-color="#E2425C"></stop><stop offset="1" stop-color="#E2425C" stop-opacity="0"></stop></radialGradient><radialGradient id="instagram-gui-asset-c" cx="0" cy="0" r="1" gradientTransform="matrix(38.50003 -5.5 1.1764 8.23476 .5 3)" gradientUnits="userSpaceOnUse"><stop offset=".157" stop-color="#406ADC"></stop><stop offset=".468" stop-color="#6A45BE"></stop><stop offset="1" stop-color="#6A45BE" stop-opacity="0"></stop></radialGradient></defs>', 7)
    ]), 4));
  }
});
export {
  f as _
};
