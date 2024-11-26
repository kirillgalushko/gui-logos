import { defineComponent as a, computed as l, openBlock as i, createElementBlock as o, normalizeStyle as r, createStaticVNode as g } from "vue";
const n = /* @__PURE__ */ a({
  __name: "LogoGoogleAuthenticator",
  props: {
    width: {},
    height: {}
  },
  setup(e) {
    const t = e, s = l(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (h, c) => (i(), o("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      "xml:space": "preserve",
      id: "google-authenticator-gui-asset-Layer_1",
      width: "800",
      height: "800",
      version: "1.1",
      viewBox: "0 0 2481.9 2481.9",
      style: r(s.value)
    }, c[0] || (c[0] = [
      g('<g transform="translate(-27 -27)"><circle cx="1268" cy="1268" r="1241" class="google-authenticator-gui-asset-st0"></circle><path d="M1268 2057.7c-436.2 0-789.7-353.5-789.7-789.7S831.8 478.3 1268 478.3c218 0 415.4 88.4 558.4 231.3l319.1-319.1C1920.9 165.9 1610.6 27 1268 27 582.6 27 27 582.6 27 1268s555.6 1241 1241 1241c342.7 0 652.9-138.9 877.6-363.4l-319.1-319.1c-143.1 142.8-340.5 231.2-558.5 231.2" class="google-authenticator-gui-asset-st1"></path><path d="M2057.7 1268h-394.9c0-218-176.8-394.9-394.9-394.9S873.1 1049.9 873.1 1268c0 106.2 42 202.5 110.3 273.6l-.3.3 488.9 488.9.1.1c337.2-90 585.6-397.4 585.6-762.9" style="fill:#424242;"></path><path d="M2508.9 1268h-451.3c0 365.5-248.5 672.9-585.5 762.9l348.5 348.5c408-203.3 688.3-624.6 688.3-1111.4" class="google-authenticator-gui-asset-st0"></path><path d="M1268 2494.8C585 2494.8 31 1943 27.1 1260.9c0 2.4-.1 4.7-.1 7.1 0 685.4 555.6 1241 1241 1241s1241-555.6 1241-1241c0-2.4-.1-4.7-.1-7.1-3.9 682.1-558 1233.9-1240.9 1233.9" class="google-authenticator-gui-asset-st3"></path><path d="m1472.2 2030.9 11 11c331.4-93.6 574.5-398.2 574.5-759.8V1268c0 365.5-248.5 672.9-585.5 762.9" style="fill:#fff;fill-opacity:5.000000e-02;"></path><g><path d="M2283.355 1155.155h-1015.4c-62.3 0-112.8 50.5-112.8 112.8s50.5 112.8 112.8 112.8h1015.3c62.3 0 112.8-50.5 112.8-112.8.1-62.3-50.4-112.8-112.7-112.8" class="google-authenticator-gui-asset-st1"></path><path d="M2046.9 918.7H1031.5c-62.3 0-112.8 50.5-112.8 112.8s50.5 112.8 112.8 112.8h1015.3c62.3 0 112.8-50.5 112.8-112.8.1-62.3-50.4-112.8-112.7-112.8" style="opacity:.5;fill:#bdbdbd;" transform="translate(236.455 236.455)"></path></g><g><g><circle cx="252.6" cy="1268" r="84.6" class="google-authenticator-gui-asset-st6"></circle><circle cx="1268" cy="252.6" r="84.6" class="google-authenticator-gui-asset-st6"></circle><circle cx="1268" cy="2283.3" r="84.6" class="google-authenticator-gui-asset-st6"></circle><circle cx="548.8" cy="550" r="84.6" class="google-authenticator-gui-asset-st6"></circle><circle cx="548.8" cy="1987.2" r="84.6" class="google-authenticator-gui-asset-st6"></circle></g><circle cx="1987.2" cy="1987.2" r="84.6" style="fill:#757575;"></circle><path d="M1268 1169.3h1015.3c59.9 0 108.9 46.8 112.4 105.8.1-2.4.4-4.7.4-7.1 0-62.3-50.5-112.8-112.8-112.8H1268c-62.3 0-112.8 50.5-112.8 112.8 0 2.4.1 4.7.4 7.1 3.5-59 52.4-105.8 112.4-105.8" style="fill:#fff;fill-opacity:.2;"></path><path d="M2395.7 1275c-3.7 58.9-52.6 105.8-112.4 105.8H1268c-59.9 0-108.9-46.8-112.4-105.8-.3 2.4-.4 4.7-.4 7 0 62.3 50.5 112.8 112.8 112.8h1015.3c62.3 0 112.8-50.5 112.8-112.8 0-2.3-.1-4.6-.4-7" style="fill:#212121;fill-opacity:.2;"></path><path d="M1268 492.4c218 0 415.4 88.4 558.4 231.3l326-326.2c-2.4-2.4-4.7-4.8-7-7.1l-319 319.1c-143-142.9-340.4-231.3-558.4-231.3-436.2 0-789.7 353.5-789.7 789.7 0 2.4.1 4.7.1 7.1 3.8-432.9 355.8-782.6 789.6-782.6" class="google-authenticator-gui-asset-st3"></path><radialGradient id="google-authenticator-gui-asset-SVGID_1_" cx="706.725" cy="1774.029" r=".998" gradientTransform="matrix(2481.9333 0 0 -2481.9333 -1753654.125 4403410.5)" gradientUnits="userSpaceOnUse"><stop offset="0" style="stop-color:#fff;stop-opacity:.1;"></stop><stop offset="1" style="stop-color:#fff;stop-opacity:0;"></stop></radialGradient><circle cx="1268" cy="1268" r="1241" style="fill:url(#google-authenticator-gui-asset-SVGID_1_);"></circle></g></g>', 1)
    ]), 4));
  }
});
export {
  n as _
};
