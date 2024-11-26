import { defineComponent as e, computed as n, openBlock as s, createElementBlock as p, normalizeStyle as g, createStaticVNode as d } from "vue";
const y = /* @__PURE__ */ e({
  __name: "LogoBuddy",
  props: {
    width: {},
    height: {}
  },
  setup(t) {
    const o = t, i = n(() => ({
      width: o.width || "1em",
      height: o.height || "1em",
      minWidth: o.width || "1em",
      minHeight: o.height || "1em"
    }));
    return (a, l) => (s(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      width: "256",
      height: "289",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 289",
      style: g(i.value)
    }, l[0] || (l[0] = [
      d('<defs><path id="buddy-gui-asset-a" d="M116.612 3.643C92.293 17.641 35.707 50.383 11.389 64.38 4.389 68.414 0 76.006 0 84.073v121.476c0 8.066 4.389 15.659 11.389 19.692 24.2 13.998 80.904 46.739 105.223 60.738 7.117 4.032 15.777 4.032 22.776 0 24.201-13.999 80.905-46.74 105.223-60.738C251.61 221.208 256 213.615 256 205.549V84.073c0-8.185-4.39-15.659-11.389-19.693-24.2-13.997-80.904-46.739-105.223-60.737A23.2 23.2 0 0 0 127.955.618a22.7 22.7 0 0 0-11.343 3.025"></path></defs><g><mask id="buddy-gui-asset-b" fill="#fff"><use xlink:href="#buddy-gui-asset-a"></use></mask><use xlink:href="#buddy-gui-asset-a" fill="#00C9FF" fill-rule="nonzero"></use><g fill-rule="nonzero" mask="url(#buddy-gui-asset-b)"><g transform="translate(0 -3)"><polygon fill="#1A67FD" points="66.5503 147.8109 128.0003 295.8589 0.0003 221.7159"></polygon><polygon fill="#0DA7FE" points="66.5503 147.8109 0.0003 73.4309 0.0003 221.7159"></polygon><polygon fill="#00C9FF" points="66.5503 147.8109 128.0003 -0.0001 256.0003 221.7159"></polygon><polygon fill="#05BBFF" points="66.5503 147.8109 128.0003 -0.0001 0.0003 73.4309"></polygon><polygon fill="#1A86FD" points="128 295.8593 256 221.7163 66.55 147.8113"></polygon><polygon fill="#05BBFF" points="256 221.7162 256 73.9052 128 0.0002"></polygon><polygon fill="#1A67FD" fill-opacity=".5" points="155.0474 135.3549 171.2994 151.6069 163.2324 159.6739 155.0474 167.8589 109.2564 213.6499 93.0054 197.3969 138.7954 151.6069 93.0054 105.8159 109.2564 89.5639"></polygon><polygon fill="#D6FFFF" points="171.2993 144.2518 155.0473 127.9998 93.0053 190.0428 109.2573 206.2948"></polygon><path fill="#D6FFFF" d="M109.257 82.328 93.123 98.58l62.043 62.043 16.252-16.253c-.12-.118-62.161-62.042-62.161-62.042"></path></g></g></g>', 2)
    ]), 4));
  }
});
export {
  y as _
};
