import { defineComponent as l, computed as s, openBlock as n, createElementBlock as r, normalizeStyle as a, createStaticVNode as f } from "vue";
const g = /* @__PURE__ */ l({
  __name: "LogoZod",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, i = s(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (u, t) => (n(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      width: "256",
      height: "203",
      version: "1.1",
      viewBox: "0 0 256 203",
      style: a(i.value)
    }, t[0] || (t[0] = [
      f('<defs><filter id="zod-gui-asset-b" width="105.2%" height="106.5%" x="-2.2%" y="-2.8%" filterUnits="objectBoundingBox"><feOffset dx="1" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="2"></feGaussianBlur><feColorMatrix in="shadowBlurOuter1" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.36 0"></feColorMatrix></filter><path id="zod-gui-asset-a" d="M200.42 0H53.63L0 53.355l121.76 146.624 9.714-10.9L252 53.857zm-5.362 12.562 39.84 41.6-112.8 126.558L17 54.162l41.815-41.6z"></path></defs><g fill-rule="nonzero" transform="translate(2 1.51)"><polygon fill="#18253F" points="58.8162023 12.5220497 195.093896 12.5220497 235.027464 54.2130202 122.038097 180.765999 16.9574282 54.2130202"></polygon><polygon fill="#274D82" points="149.426831 150.874561 96.0134271 150.874561 71.8889656 121.341138 140.252621 121.33896 140.255033 117.149462 179.332589 117.149462"></polygon><polygon fill="#274D82" points="223.55992 42.3226943 76.1782017 127.413686 56.9521852 103.361957 171.050895 37.4849931 168.955265 33.853745 199.34598 16.3076536"></polygon><polygon fill="#274D82" points="144.596212 12.5642823 33.9304463 76.4571406 16.7194669 54.9715457 90.8141008 12.1929865"></polygon><g><use xlink:href="#zod-gui-asset-a" fill="#000" fill-opacity="1" filter="url(#zod-gui-asset-b)"></use><use xlink:href="#zod-gui-asset-a" fill="#3068B7"></use></g></g>', 2)
    ]), 4));
  }
});
export {
  g as _
};
