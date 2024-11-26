import { defineComponent as p, computed as i, openBlock as l, createElementBlock as a, normalizeStyle as r, createStaticVNode as h } from "vue";
const f = /* @__PURE__ */ p({
  __name: "LogoGoogleMarketingPlatform",
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
    return (c, o) => (l(), a("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: r(s.value)
    }, o[0] || (o[0] = [
      h('<defs><linearGradient id="google-marketing-platform-gui-asset-a" x1="0%" x2="99.999%" y1="50%" y2="50%"><stop offset="0%" stop-color="#246FDB"></stop><stop offset="5.52%" stop-color="#2973DF"></stop><stop offset="27.81%" stop-color="#377DEB"></stop><stop offset="54.91%" stop-color="#3F83F2"></stop><stop offset="100%" stop-color="#4285F4"></stop></linearGradient></defs><g><path fill="#EA4335" d="M173.2 82.8c25 25 25 65.5 0 90.5-12.5 12.5-12.5 32.8 0 45.2 12.5 12.5 32.8 12.5 45.3 0 50-50 50-131 0-181z"></path><path fill="url(#google-marketing-platform-gui-asset-a)" d="M218.4 37.5c-50-50-130.9-50-180.9 0s-50 131 0 181l45.3-45.2c-25-25-25-65.5 0-90.5s65.5-25 90.5 0c12.5 12.5 32.8 12.5 45.3 0 12.3-12.5 12.3-32.8-.2-45.3"></path><path fill="#FBBC04" d="m218.4 218.5-45.3-45.2c-25 25-65.5 25-90.5 0l-45.3 45.2c50.2 50 131.1 50 181.1 0"></path><path fill="#EA4335" d="M173.2 173.3c12.5-12.5 32.7-12.5 45.2 0s12.5 32.8 0 45.3-32.7 12.5-45.2 0-12.5-32.8 0-45.3"></path><path fill="#34A853" d="M37.5 173.3c12.5-12.5 32.7-12.5 45.2 0s12.5 32.8 0 45.3-32.7 12.5-45.2 0-12.5-32.8 0-45.3"></path></g>', 2)
    ]), 4));
  }
});
export {
  f as _
};
