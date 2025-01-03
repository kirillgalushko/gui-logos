import { defineComponent as a, computed as c, openBlock as i, createElementBlock as r, normalizeStyle as l, createStaticVNode as p } from "vue";
const m = /* @__PURE__ */ a({
  __name: "LogoMemcached",
  props: {
    width: {},
    height: {}
  },
  setup(s) {
    const t = s, o = c(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (d, e) => (i(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "254",
      height: "254",
      version: "1.1",
      viewBox: "0 0 254 254",
      style: l(o.value)
    }, e[0] || (e[0] = [
      p('<defs><radialGradient id="memcached-gui-asset-c" cx="41.406%" cy="42.708%" r="50%" fx="41.406%" fy="42.708%"><stop offset="0%" stop-color="#DB7C7C"></stop><stop offset="100%" stop-color="#C83737"></stop></radialGradient><radialGradient id="memcached-gui-asset-d" cx="44.271%" cy="42.708%" r="50%" fx="44.271%" fy="42.708%"><stop offset="0%" stop-color="#DB7C7C"></stop><stop offset="100%" stop-color="#C83737"></stop></radialGradient><linearGradient id="memcached-gui-asset-a" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stop-color="#574C4A"></stop><stop offset="100%" stop-color="#80716D"></stop></linearGradient><linearGradient id="memcached-gui-asset-b" x1="88.778%" x2="30.149%" y1="98.342%" y2="-8.68%"><stop offset="0%" stop-color="#268D83"></stop><stop offset="100%" stop-color="#2EA19E"></stop></linearGradient></defs><g><path fill="url(#memcached-gui-asset-a)" d="M0 171.19V82.17C0 10.271 10.26 0 82.086 0h89.189C243.1 0 253.36 10.271 253.36 82.171v89.019c0 71.9-10.26 82.17-82.086 82.17H82.086C10.261 253.36 0 243.09 0 171.19"></path><g><path fill="url(#memcached-gui-asset-b)" d="M8.891.655C-3.562 79.583 2.953 153.48 2.953 153.48h38.928c-3.704-19.704-16.992-109.724-5.938-110.021 5.924.94 32.99 76.371 32.99 76.371s5.96-.742 11.958-.742 11.959.742 11.959.742 27.066-75.43 32.99-76.371c11.053.297-2.235 90.317-5.938 110.02h38.927s6.516-73.896-5.938-152.824H116.85C109.99.736 83.89 46.51 80.891 46.51S51.792.736 44.932.655z" transform="translate(45.79 47.098)"></path><path fill="url(#memcached-gui-asset-c)" d="M73.214 144.267a9.213 9.213 0 1 1-18.427 0 9.213 9.213 0 0 1 18.427 0" transform="translate(45.79 47.098)"></path><path fill="url(#memcached-gui-asset-d)" d="M106.995 144.267a9.213 9.213 0 1 1-18.426 0 9.213 9.213 0 0 1 18.426 0" transform="translate(45.79 47.098)"></path><path fill="#000" d="M196.846 50.362c5.617 38.026 6.936 74.52 6.832 101.705-.106 27.806-1.699 45.871-1.699 45.871h-32.767l-3.521 2.64h38.928s6.515-73.898-5.939-152.825zm-103.155-.96c10.226 11.375 27.913 41.567 30.35 41.567-6.484-8.293-22.411-34.749-30.35-41.567M79.093 87.918c-11.054.297 2.234 90.317 5.938 110.02H51.049l-2.307 2.64H87.67c-3.685-19.604-16.856-108.825-6.103-110.021-1.001-1.504-1.866-2.543-2.474-2.64m89.897 0c-5.924.94-32.99 76.37-32.99 76.37s-5.96-.742-11.959-.742c-3.549 0-6.604.22-8.67.412l-.65 2.97s5.961-.742 11.96-.742c5.998 0 11.958.742 11.958.742s26.862-74.936 32.907-76.371c-.651-1.65-1.456-2.61-2.556-2.64" opacity=".1"></path><path fill="#FFF" d="M54.68 47.753c-12.453 78.927-5.938 152.824-5.938 152.824l2.292-2.576c-1.172-17.434-4.306-80.481 6.286-147.61h36.04c.764.01 1.788.635 2.97 1.65-2.36-2.625-4.322-4.273-5.608-4.288zm107.96 0c-6.86.08-32.96 45.855-35.96 45.855 1.223 1.564 2.217 2.64 2.64 2.64 2.999 0 29.098-45.775 35.958-45.856h31.806l1.596-2.64zM84.205 93.196c8.755 13.148 30.516 73.732 30.516 73.732l.636-2.954c-5.372-14.732-25.844-69.962-30.987-70.778-.056.001-.11-.006-.165 0m90.062 0c5.872 14.977-5.244 89.648-8.577 107.381l3.531-2.756c4.508-26.446 15.362-104.348 5.046-104.625" opacity=".3"></path></g></g>', 2)
    ]), 4));
  }
});
export {
  m as _
};
