import { defineComponent as a, computed as r, openBlock as l, createElementBlock as o, normalizeStyle as c, createStaticVNode as n } from "vue";
const u = /* @__PURE__ */ a({
  __name: "TermiusLogo",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, s = r(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (f, t) => (l(), o("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "320",
      height: "320",
      fill: "none",
      viewBox: "0 0 320 320",
      style: c(s.value)
    }, t[0] || (t[0] = [
      n('<g clip-path="url(#termius-gui-asset-a)"><mask id="termius-gui-asset-b" width="320" height="320" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance;"><path fill="#fff" d="M320 0H0v320h320z"></path></mask><g mask="url(#termius-gui-asset-b)"><path fill="url(#termius-gui-asset-c)" fill-rule="evenodd" d="M0 0h320v320H0z" clip-rule="evenodd"></path><path fill="url(#termius-gui-asset-d)" fill-rule="evenodd" d="M0 0h320v320H0z" clip-rule="evenodd"></path><g filter="url(#termius-gui-asset-e)"><path fill="#000" d="M210.657 224.64q-1.088 0-2.181-.045a55.74 55.74 0 0 1-46.611 25.106v-14.235c15.27 0 29.232-8.305 36.541-21.731l2.328-4.276 4.829.619c1.69.217 3.403.327 5.094.327 21.889 0 39.708-17.82 39.708-39.709 0-11.738-5.446-23.236-14.55-30.718l-2.807-2.307.222-3.627c.046-.752.069-1.517.069-2.275 0-21.006-17.101-38.107-38.107-38.107a37.9 37.9 0 0 0-21.143 6.405l-5.299 3.538-4.1-4.877c-7.279-8.659-17.874-13.597-29.18-13.597-21.006 0-38.106 17.101-38.106 38.107 0 .586.013 1.18.041 1.767l.227 4.835-4.414 1.988c-14.346 6.462-23.583 20.741-23.583 36.469 0 22.036 17.938 39.975 39.973 39.975 2.343 0 4.691-.204 6.983-.608l5.344-.941 2.323 4.905c6.864 14.497 21.595 23.838 37.607 23.838v14.235c-19.762 0-38.024-10.557-48.012-27.359q-2.12.165-4.245.165c-29.897 0-54.209-24.312-54.209-54.21 0-19.755 10.741-37.817 27.778-47.337 1.196-27.815 24.188-50.064 52.293-50.064 13.472 0 26.245 5.128 35.911 14.257a52.1 52.1 0 0 1 23.811-5.726c28.724 0 52.109 23.241 52.341 51.911 10.764 10.137 17.067 24.546 17.067 39.358 0 29.751-24.192 53.944-53.943 53.944m-21.753-46.123c-4.834 1.85-9.593 2.786-14.172 2.786-4.593 0-9.125-.942-13.456-2.794l-.349-.147c-1.596-.687-2.28-1.514-2.28-3.328v-2.424c0-2.131 1.228-3.502 3.228-3.502l.449.061.119.046a33.4 33.4 0 0 0 12.282 2.354c4.206 0 8.609-.797 13.087-2.373l.402-.088h.113c2.001 0 3.229 1.371 3.229 3.502v2.424c0 1.928-.662 2.628-2.512 3.423zm-59.35-23.233 13.085-3.435-13.116-3.443c-1.36-.356-2.341-1.429-2.341-3.307v-4.125c0-1.803 1.082-2.579 2.32-2.579.401 0 .815.087 1.23.243l23.353 7.555c1.774.591 2.75 2.016 2.75 3.968v3.375c0 1.952-.975 3.377-2.751 3.969l-23.403 7.571a3.8 3.8 0 0 1-1.091.174c-1.466 0-2.408-1.054-2.408-2.589v-4.063c0-1.953 1.013-3.029 2.372-3.314"></path><path fill="url(#termius-gui-asset-f)" d="M210.657 224.64q-1.088 0-2.181-.045a55.74 55.74 0 0 1-46.611 25.106v-14.235c15.27 0 29.232-8.305 36.541-21.731l2.328-4.276 4.829.619c1.69.217 3.403.327 5.094.327 21.889 0 39.708-17.82 39.708-39.709 0-11.738-5.446-23.236-14.55-30.718l-2.807-2.307.222-3.627c.046-.752.069-1.517.069-2.275 0-21.006-17.101-38.107-38.107-38.107a37.9 37.9 0 0 0-21.143 6.405l-5.299 3.538-4.1-4.877c-7.279-8.659-17.874-13.597-29.18-13.597-21.006 0-38.106 17.101-38.106 38.107 0 .586.013 1.18.041 1.767l.227 4.835-4.414 1.988c-14.346 6.462-23.583 20.741-23.583 36.469 0 22.036 17.938 39.975 39.973 39.975 2.343 0 4.691-.204 6.983-.608l5.344-.941 2.323 4.905c6.864 14.497 21.595 23.838 37.607 23.838v14.235c-19.762 0-38.024-10.557-48.012-27.359q-2.12.165-4.245.165c-29.897 0-54.209-24.312-54.209-54.21 0-19.755 10.741-37.817 27.778-47.337 1.196-27.815 24.188-50.064 52.293-50.064 13.472 0 26.245 5.128 35.911 14.257a52.1 52.1 0 0 1 23.811-5.726c28.724 0 52.109 23.241 52.341 51.911 10.764 10.137 17.067 24.546 17.067 39.358 0 29.751-24.192 53.944-53.943 53.944m-21.753-46.123c-4.834 1.85-9.593 2.786-14.172 2.786-4.593 0-9.125-.942-13.456-2.794l-.349-.147c-1.596-.687-2.28-1.514-2.28-3.328v-2.424c0-2.131 1.228-3.502 3.228-3.502l.449.061.119.046a33.4 33.4 0 0 0 12.282 2.354c4.206 0 8.609-.797 13.087-2.373l.402-.088h.113c2.001 0 3.229 1.371 3.229 3.502v2.424c0 1.928-.662 2.628-2.512 3.423zm-59.35-23.233 13.085-3.435-13.116-3.443c-1.36-.356-2.341-1.429-2.341-3.307v-4.125c0-1.803 1.082-2.579 2.32-2.579.401 0 .815.087 1.23.243l23.353 7.555c1.774.591 2.75 2.016 2.75 3.968v3.375c0 1.952-.975 3.377-2.751 3.969l-23.403 7.571a3.8 3.8 0 0 1-1.091.174c-1.466 0-2.408-1.054-2.408-2.589v-4.063c0-1.953 1.013-3.029 2.372-3.314"></path></g></g></g><defs><linearGradient id="termius-gui-asset-c" x1="9921.28" x2="22874.9" y1="1325.12" y2="30335" gradientUnits="userSpaceOnUse"><stop stop-color="#2E3973"></stop><stop offset="1" stop-color="#141729"></stop></linearGradient><linearGradient id="termius-gui-asset-d" x1="160" x2="160" y1="0" y2="320" gradientUnits="userSpaceOnUse"><stop stop-color="#1C265B"></stop><stop offset="1" stop-color="#060816"></stop></linearGradient><linearGradient id="termius-gui-asset-f" x1="160" x2="160" y1="70.895" y2="249.701" gradientUnits="userSpaceOnUse"><stop stop-color="#FDFDFF"></stop><stop offset="1" stop-color="#C0CDD8"></stop></linearGradient><clipPath id="termius-gui-asset-a"><rect width="320" height="320" fill="#fff" rx="160"></rect></clipPath><filter id="termius-gui-asset-e" width="209.201" height="181.806" x="55.399" y="67.895" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape"></feBlend><feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="-3"></feOffset><feGaussianBlur stdDeviation="1.5"></feGaussianBlur><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"></feColorMatrix><feBlend in2="shape" mode="normal" result="effect1_innerShadow_1313_214"></feBlend><feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="2"></feGaussianBlur><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"></feColorMatrix><feBlend in2="effect1_innerShadow_1313_214" mode="normal" result="effect2_innerShadow_1313_214"></feBlend></filter></defs>', 2)
    ]), 4));
  }
});
export {
  u as _
};