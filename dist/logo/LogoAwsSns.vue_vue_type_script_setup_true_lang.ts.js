import { defineComponent as i, computed as o, openBlock as h, createElementBlock as r, normalizeStyle as a, createStaticVNode as n } from "vue";
const p = /* @__PURE__ */ i({
  __name: "LogoAwsSns",
  props: {
    width: {},
    height: {}
  },
  setup(s) {
    const t = s, c = o(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (l, e) => (h(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: a(c.value)
    }, e[0] || (e[0] = [
      n('<defs><linearGradient id="aws-sns-gui-asset-a" x1="0%" x2="100%" y1="100%" y2="0%"><stop offset="0%" stop-color="#B0084D"></stop><stop offset="100%" stop-color="#FF4F8B"></stop></linearGradient></defs><g><rect width="256" height="256" x="0" y="0" fill="url(#aws-sns-gui-asset-a)"></rect><path fill="#FFF" d="M54.4 121.6c3.53 0 6.4 2.87 6.4 6.4s-2.87 6.4-6.4 6.4-6.4-2.87-6.4-6.4 2.87-6.4 6.4-6.4m76.8 83.2c-37.395 0-69.475-27.309-76.18-64.064 5.668-.275 10.346-4.227 11.722-9.536H86.4v-6.4H66.742c-1.376-5.306-6.05-9.258-11.718-9.536C61.712 79.072 94.435 51.2 131.2 51.2c13.802 0 28.262 5.19 42.973 15.427l3.654-5.254C162.026 50.378 146.336 44.8 131.2 44.8c-40.736 0-76.963 31.568-82.998 72.067C44.285 119.062 41.6 123.2 41.6 128s2.685 8.938 6.602 11.13c6.102 41.161 41.577 72.07 82.998 72.07 17.302 0 35.014-5.898 49.872-16.605l-3.744-5.19c-13.776 9.93-30.157 15.395-46.128 15.395m-34.877-88.186c5.933 1.45 13.357 1.786 18.877 1.786 5.254 0 12.234-.304 18.013-1.58l-14.477 28.95c-.22.441-.336.934-.336 1.43v14.25c-2.563 1.635-6.934 4.348-9.6 4.905V147.2c0-.422-.083-.842-.246-1.232zM115.2 105.6c12.88 0 19.757 1.933 21.891 3.2-2.134 1.267-9.011 3.2-21.891 3.2s-19.757-1.933-21.891-3.2c2.134-1.267 9.011-3.2 21.891-3.2m-9.6 67.2h3.2q.207-.001.41-.026c3.916-.508 8.899-3.536 13.26-6.332l.842-.538a3.21 3.21 0 0 0 1.488-2.704v-15.245l17.789-35.571c.877-1.02 1.411-2.195 1.411-3.584 0-8.352-18.045-9.6-28.8-9.6s-28.8 1.248-28.8 9.6c0 1.171.384 2.189 1.024 3.094L102.4 147.84v21.76a3.2 3.2 0 0 0 3.2 3.2m92.8-3.2c3.53 0 6.4 2.87 6.4 6.4s-2.87 6.4-6.4 6.4-6.4-2.87-6.4-6.4 2.87-6.4 6.4-6.4m0-96c3.53 0 6.4 2.87 6.4 6.4s-2.87 6.4-6.4 6.4-6.4-2.87-6.4-6.4 2.87-6.4 6.4-6.4m6.4 48c3.53 0 6.4 2.87 6.4 6.4s-2.87 6.4-6.4 6.4-6.4-2.87-6.4-6.4 2.87-6.4 6.4-6.4m-32 9.6h19.658c1.427 5.504 6.396 9.6 12.342 9.6 7.06 0 12.8-5.74 12.8-12.8s-5.74-12.8-12.8-12.8c-5.946 0-10.915 4.096-12.342 9.6H172.8V83.2h13.258c1.427 5.504 6.396 9.6 12.342 9.6 7.06 0 12.8-5.74 12.8-12.8s-5.74-12.8-12.8-12.8c-5.946 0-10.915 4.096-12.342 9.6H169.6a3.2 3.2 0 0 0-3.2 3.2v44.8H144v6.4h22.4V176a3.2 3.2 0 0 0 3.2 3.2h16.458c1.427 5.504 6.396 9.6 12.342 9.6 7.06 0 12.8-5.74 12.8-12.8s-5.74-12.8-12.8-12.8c-5.946 0-10.915 4.096-12.342 9.6H172.8z"></path></g>', 2)
    ]), 4));
  }
});
export {
  p as _
};
