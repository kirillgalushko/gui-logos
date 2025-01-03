import { defineComponent as l, computed as n, openBlock as p, createElementBlock as g, normalizeStyle as h, createStaticVNode as s } from "vue";
const c = /* @__PURE__ */ l({
  __name: "LogoHtmx",
  props: {
    width: {},
    height: {}
  },
  setup(e) {
    const t = e, i = n(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (m, o) => (p(), g("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "118",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 118",
      style: h(i.value)
    }, o[0] || (o[0] = [
      s('<g><g transform="translate(223.345 1.263)"><path fill="#111" d="m17.825 0-.265 31.752.265-.118C48.17 24.084 54.67 44.69 54.67 54.658v39.685H36.46V55.806c0-5.889-2.886-14.287-18.635-9.42v47.957H0V3.7zm195.808 56.91v37.403h-16.926V56.91l-.01-.47c-.256-6.461-5.789-15.044-17.6-9.506v47.378H160.54l-.003-37.788c-.083-5.459-2.053-13.328-17.62-11.983v49.77h-17.352V34.52l.5-.307c4.195-2.584 26.332-9.414 44.096 1.342 29.837-14.858 43.47 1.15 43.47 21.357M88.113 11v19.54h22.867V45.2H88.968v24.158c0 3.33.118 5.76.978 7.19q8.016 6.913 21.034 1.776l1.47 14.472q-26.757 7.634-36.658-5.377C72.255 83.452 70.499 78 70.499 71.11V14.823z"></path><polygon fill="#4065C5" points="223.509011 30.5954284 242.839974 30.5954284 255.90407 50.7743785 267.94821 30.5954284 286.997537 30.5954284 265.495849 61.3723433 288.655314 94.3125593 268.634212 94.3125593 255.253274 72.162321 241.872336 94.3125593 222.469112 94.3125593 245.805871 61.3723433"></polygon></g><g><polygon fill="#111" points="127.034576 29.9381957 179.282027 51.9665646 179.282027 67.2739923 127.034576 88.9956807 122.890712 73.9408967 161.526789 59.4411929 122.890712 44.8857548"></polygon><polygon fill="#111" points="52.2474505 29.9376299 4.62634637e-14 51.9665646 1.2860272e-13 67.2739923 52.2474505 88.9956807 56.3913143 73.9408967 17.7552379 59.4411929 56.3913143 44.8857548"></polygon><polygon fill="#4065C5" points="101.084149 -1.11671878e-15 119.057207 -1.11671878e-15 79.1293384 117.030912 60.2248197 117.030912"></polygon></g></g>', 1)
    ]), 4));
  }
});
export {
  c as _
};
