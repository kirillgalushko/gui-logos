import { defineComponent as t, computed as n, openBlock as s, createElementBlock as u, normalizeStyle as c, createStaticVNode as g } from "vue";
const f = /* @__PURE__ */ t({
  __name: "LogoGoogleCloudFunctions",
  props: {
    width: {},
    height: {}
  },
  setup(e) {
    const l = e, i = n(() => ({
      width: l.width || "1em",
      height: l.height || "1em",
      minWidth: l.width || "1em",
      minHeight: l.height || "1em"
    }));
    return (r, o) => (s(), u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      width: "256",
      height: "231",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 231",
      style: c(i.value)
    }, o[0] || (o[0] = [
      g('<defs><path id="google-cloud-functions-gui-asset-a" d="M252.926 103.237 200.327 11.76A23.12 23.12 0 0 0 180.607 0H75.392a23.1 23.1 0 0 0-19.72 11.76L3.053 102.997a22.96 22.96 0 0 0 0 22.88l52.598 91.997a23.54 23.54 0 0 0 19.72 12.18h105.217a23.46 23.46 0 0 0 19.74-12.12l52.598-91.478a23.46 23.46 0 0 0 0-23.219"></path></defs><g><mask id="google-cloud-functions-gui-asset-b" fill="#fff"><use xlink:href="#google-cloud-functions-gui-asset-a"></use></mask><path fill="#4285F4" fill-rule="nonzero" d="M252.926 103.237 200.327 11.76A23.12 23.12 0 0 0 180.607 0H75.392a23.1 23.1 0 0 0-19.72 11.76L3.053 102.997a22.96 22.96 0 0 0 0 22.88l52.598 91.997a23.54 23.54 0 0 0 19.72 12.18h105.217a23.46 23.46 0 0 0 19.74-12.12l52.598-91.478a23.46 23.46 0 0 0 0-23.219" mask="url(#google-cloud-functions-gui-asset-b)"></path><path fill="#000" fill-rule="nonzero" d="m187.168 84.732-7.252 7.909 1.633 46.998-6.873 9.961-3.985-3.984h3.666v-16.297l-17.592-17.592-13.296 6.646-44.101-44.2L78.13 85.548l-2.63 22.035 7.452 40.324 10.798 10.579-4.921 6.993 64.247 65.758h26.84c8.223-.282 17.128-5.671 21.1-12.877l43.78-76.003z" mask="url(#google-cloud-functions-gui-asset-b)" opacity=".07"></path><polygon fill="#FFF" fill-rule="nonzero" points="88.8287399 165.478649 99.3678929 154.939496 83.5691247 139.140728 83.5691247 89.9712953 99.3678929 74.1725271 88.8287399 63.6333741 67.730511 84.731603 67.730511 144.38042" mask="url(#google-cloud-functions-gui-asset-b)"></polygon><circle cx="105.145" cy="114.556" r="7.471" fill="#FFF" fill-rule="nonzero" mask="url(#google-cloud-functions-gui-asset-b)"></circle><circle cx="127.499" cy="114.556" r="7.471" fill="#FFF" fill-rule="nonzero" mask="url(#google-cloud-functions-gui-asset-b)"></circle><circle cx="149.852" cy="114.556" r="7.471" fill="#FFF" fill-rule="nonzero" mask="url(#google-cloud-functions-gui-asset-b)"></circle><polygon fill="#FFF" fill-rule="nonzero" points="166.069376 63.6333741 155.530223 74.1725271 171.328991 89.9712953 171.328991 139.140728 155.530223 154.939496 166.069376 165.478649 187.167605 144.38042 187.167605 84.731603" mask="url(#google-cloud-functions-gui-asset-b)"></polygon></g>', 2)
    ]), 4));
  }
});
export {
  f as _
};
