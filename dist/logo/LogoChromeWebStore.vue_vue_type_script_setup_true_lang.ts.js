import { defineComponent as i, computed as r, openBlock as l, createElementBlock as h, normalizeStyle as a, createStaticVNode as p } from "vue";
const n = /* @__PURE__ */ i({
  __name: "LogoChromeWebStore",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, s = r(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (c, t) => (l(), h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      width: "256",
      height: "223",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 223",
      style: a(s.value)
    }, t[0] || (t[0] = [
      p('<defs><linearGradient id="chrome-web-store-gui-asset-c" x1="0%" x2="100%" y1="50%" y2="50%"><stop offset="0%" stop-color="#D93025"></stop><stop offset="100%" stop-color="#EA4335"></stop></linearGradient><linearGradient id="chrome-web-store-gui-asset-d" x1="74.943%" x2="19.813%" y1="95.826%" y2="-4.161%"><stop offset="0%" stop-color="#1E8E3E"></stop><stop offset="100%" stop-color="#34A853"></stop></linearGradient><linearGradient id="chrome-web-store-gui-asset-e" x1="59.898%" x2="21.416%" y1="-.134%" y2="99.86%"><stop offset="0%" stop-color="#FBBC04"></stop><stop offset="100%" stop-color="#FCC934"></stop></linearGradient><path id="chrome-web-store-gui-asset-a" d="M255.983 0H0v204.837c0 9.633 7.814 17.464 17.464 17.464h221.072c9.633 0 17.464-7.814 17.464-17.464z"></path></defs><g><path fill="#F1F3F4" d="M255.983 0H0v204.837c0 9.633 7.814 17.464 17.464 17.464h221.072c9.633 0 17.464-7.814 17.464-17.464z"></path><rect width="255.983" height="111.74" x="0" y="0" fill="#E8EAED"></rect><path fill="#FFF" d="M157.076 47.727H98.907A11.63 11.63 0 0 1 87.27 36.09a11.63 11.63 0 0 1 11.637-11.637h58.169a11.63 11.63 0 0 1 11.637 11.637c0 6.417-5.204 11.637-11.637 11.637"></path><g><mask id="chrome-web-store-gui-asset-b" fill="#fff"><use xlink:href="#chrome-web-store-gui-asset-a"></use></mask><g mask="url(#chrome-web-store-gui-asset-b)"><g transform="translate(17.455 94.293)"><path fill="url(#chrome-web-store-gui-asset-c)" d="m14.812 55.255 15.241 46.498 32.638 36.427 47.845-82.908 95.724-.017C187.146 22.213 151.443 0 110.536 0s-76.61 22.213-95.724 55.255"></path><path fill="url(#chrome-web-store-gui-asset-d)" d="m110.52 221.105 32.637-36.443 15.224-46.482H62.674L14.812 55.255c-19.047 33.076-20.445 75.128.017 110.561 20.445 35.434 57.545 55.256 95.69 55.29"></path><path fill="url(#chrome-web-store-gui-asset-e)" d="M206.26 55.272h-95.724l47.862 82.908-47.862 82.925c38.162-.033 75.263-19.855 95.708-55.289 20.461-35.433 19.064-77.468.016-110.544"></path><ellipse cx="110.536" cy="110.544" fill="#F1F3F4" rx="55.255" ry="55.272"></ellipse><ellipse cx="110.536" cy="110.544" fill="#1A73E8" rx="44.898" ry="44.915"></ellipse></g></g></g><rect width="255.983" height="1.448" x="0" y="111.74" fill="#BDC1C6" opacity=".1"></rect><rect width="255.983" height="1.448" x="0" y="110.275" fill="#BDC1C6" opacity=".1"></rect></g>', 2)
    ]), 4));
  }
});
export {
  n as _
};
