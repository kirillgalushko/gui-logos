import { defineComponent as a, computed as i, openBlock as l, createElementBlock as p, normalizeStyle as r, createStaticVNode as c } from "vue";
const d = /* @__PURE__ */ a({
  __name: "LogoEclipse2",
  props: {
    width: {},
    height: {}
  },
  setup(s) {
    const t = s, o = i(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (n, e) => (l(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "240",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 240",
      style: r(o.value)
    }, e[0] || (e[0] = [
      c('<defs><linearGradient id="eclipse-2-gui-asset-a" x1="50%" x2="50%" y1="1089.396%" y2="-159.5%"><stop offset="30.33%" stop-color="#473788"></stop><stop offset="87.2%" stop-color="#2C2255"></stop></linearGradient><linearGradient id="eclipse-2-gui-asset-b" x1="49.999%" x2="49.999%" y1="896.537%" y2="-352.359%"><stop offset="30.33%" stop-color="#473788"></stop><stop offset="87.2%" stop-color="#2C2255"></stop></linearGradient><linearGradient id="eclipse-2-gui-asset-c" x1="49.999%" x2="49.999%" y1="215.17%" y2="-166.715%"><stop offset="30.33%" stop-color="#473788"></stop><stop offset="86.31%" stop-color="#2C2255"></stop></linearGradient></defs><g><path fill="#2C2255" d="M251.481 152.82c-5.235 17.822-14.944 33.8-29.15 47.913l-.626.625c-17.739 17.625-38.397 28.192-61.953 31.748a123 123 0 0 1-18.406 1.368c-31.642 0-58.7-11.237-81.202-33.741-14.115-14.118-23.756-30.091-28.952-47.913Zm4.422-26.648c-.21 4.245-.65 8.394-1.285 12.464l-.22 1.353H28.296a119 119 0 0 1-1.415-12.406l-.077-1.411zm-1.509-26.648a119 119 0 0 1 1.424 12.406l.078 1.411H26.803a119 119 0 0 1 1.275-12.463l.217-1.354zm-2.908-12.834c-5.23-17.87-14.942-33.919-29.156-48.135-17.831-17.831-38.64-28.53-62.395-32.13a124 124 0 0 0-18.59-1.389c-31.641 0-58.701 11.176-81.201 33.52C46.024 52.77 36.378 68.818 31.185 86.69"></path><path fill="#F7941E" d="M19.99 119.76C19.99 59.24 65.442 8.957 124.571.112 123.104.06 121.63 0 120.15 0 53.795 0 0 53.62 0 119.76c0 66.143 53.793 119.76 120.149 119.76 1.486 0 2.96-.056 4.432-.11-59.139-8.845-104.59-59.13-104.59-119.65"></path><g><path fill="url(#eclipse-2-gui-asset-a)" d="M156.201 14.27A78 78 0 0 0 153.83.452H2.65A78 78 0 0 0 .277 14.27z" transform="translate(63.11 99.07)"></path><path fill="url(#eclipse-2-gui-asset-b)" d="M156.201 27.103H.28A78 78 0 0 0 2.65 40.92h151.182a78 78 0 0 0 2.37-13.817" transform="translate(63.11 99.07)"></path><path fill="url(#eclipse-2-gui-asset-c)" d="M78.24 98.936c31.396 0 58.459-18.498 70.921-45.185H7.32c12.46 26.687 39.524 45.185 70.92 45.185" transform="translate(63.11 99.07)"></path></g><path fill="#FFF" d="M254.368 139.987a114 114 0 0 1-3.032 12.833H31.19c-1.254-4.183-2.128-8.467-2.897-12.833Zm1.334-26.648c.126 2.21.208 4.429.208 6.667 0 2.07-.06 4.125-.168 6.166H26.762a117 117 0 0 1-.168-6.166c0-2.238.082-4.46.209-6.667Zm-5.116-26.648a114 114 0 0 1 3.084 12.833H28.295c.79-4.368 1.613-8.655 2.888-12.833Z"></path></g>', 2)
    ]), 4));
  }
});
export {
  d as _
};
