import { defineComponent as i, computed as n, openBlock as r, createElementBlock as a, normalizeStyle as l, createStaticVNode as p } from "vue";
const h = /* @__PURE__ */ i({
  __name: "LogoLuceneNet",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const t = o, s = n(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (c, e) => (r(), a("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "146",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 146",
      style: l(s.value)
    }, e[0] || (e[0] = [
      p('<defs><linearGradient id="lucene.net-gui-asset-a" x1="16.142%" x2="49.957%" y1="95.175%" y2="36.627%"><stop offset="0%" stop-color="#02364F"></stop><stop offset="100%" stop-color="#0664A8"></stop></linearGradient><linearGradient id="lucene.net-gui-asset-b" x1="-.02%" x2="99.976%" y1="49.957%" y2="49.957%"><stop offset="0%" stop-color="#02364F"></stop><stop offset="100%" stop-color="#0664A8"></stop></linearGradient><linearGradient id="lucene.net-gui-asset-c" x1="90.75%" x2="65.509%" y1="-14.259%" y2="34.527%"><stop offset="0%" stop-color="#02364F"></stop><stop offset="100%" stop-color="#0664A8"></stop></linearGradient></defs><g><path fill="#0664A8" d="M246.4 66.6c-12.7 40.7-59.9 38.5-88.8 30.5-18.9-5.2-36.9-15.1-54.3-23.8.4-.5.7-1 1.1-1.5 2.2-2.7 7.4-8.4 14.6-15.1 10 4.3 20 8.9 29.8 13.2C181 84 235.2 86 236.3 33.7 237.1-3.1 181-8 151.4 10.8c-11.3 7.2-20.5 16.1-29 25.5C82.4 21.3 29 23.4.8 59.4c34.7-28.9 71.6-21.4 107.6-7-4.8 5.6-9.6 11-14.8 16.3-27-12.7-52.7-20.2-78.9-.5-33.4 25.3-4.2 64.7 31 60.1 21.5-2.8 32.6-17.1 42.6-32.7 26.5 15.1 55.2 37.2 78.3 45.5 57.4 20.8 112.1-35.1 79.8-74.5m-39-37.5c8.2 12.3-6.7 27.2-27.4 25.7-19.5-1.4-30.4-8.3-43.3-13.6C161 22.2 192 6 207.4 29.1M39.6 106c-15.7-.3-11.7-23.6 2.6-25.3 9.1-1.1 19.7 1.9 31 7.1-10 9.8-22.5 21.6-33.6 18.2"></path><g><path fill="url(#lucene.net-gui-asset-a)" d="M35.1 88.6c1.9-.6 3.8-1.3 5.6-2q-2.55.15-5.1-.6c-15.7-.3-11.7-23.6 2.6-25.3 9.1-1.1 19.6 1.9 30.9 7-22-13.9-42.7-24.1-58.3-19.5-4 3-7.1 6.2-9.4 9.6-4.7 14.7 8.1 39.3 33.7 30.8" transform="translate(4 20)"></path><path fill="url(#lucene.net-gui-asset-b)" d="M152.1 116.7q5.4 2.7 10.5 4.5C220 141.9 274.7 86 242.4 46.6c-12.2 48.8-53 81.1-90.3 70.1" transform="translate(4 20)"></path><path fill="url(#lucene.net-gui-asset-c)" d="M193.2 0c3.8 1.8 7.3 4.8 10.2 9.1 8.2 12.3-6.7 27.2-27.4 25.7-19.5-1.4-30.4-8.3-43.3-13.6-6.6 5.2-12.7 10.6-17.9 15.5 10.1 4.3 20.1 9 29.9 13.2 26.7 11.6 68.3 15 82.6-13.8 3.2-18.2-13.5-32.3-34.1-36.1" transform="translate(4 20)"></path></g></g>', 2)
    ]), 4));
  }
});
export {
  h as _
};
