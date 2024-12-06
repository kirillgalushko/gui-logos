import { defineComponent as o, computed as i, openBlock as s, createElementBlock as a, normalizeStyle as r, createStaticVNode as d } from "vue";
const n = /* @__PURE__ */ o({
  __name: "LogoAwsDocumentdb",
  props: {
    width: {},
    height: {}
  },
  setup(c) {
    const t = c, h = i(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (l, e) => (s(), a("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: r(h.value)
    }, e[0] || (e[0] = [
      d('<defs><linearGradient id="aws-documentdb-gui-asset-a" x1="0%" x2="100%" y1="100%" y2="0%"><stop offset="0%" stop-color="#2E27AD"></stop><stop offset="100%" stop-color="#527FFF"></stop></linearGradient></defs><g><rect width="256" height="256" x="0" y="0" fill="url(#aws-documentdb-gui-asset-a)"></rect><path fill="#FFF" d="M110.4 44.777c33.002 0 56 10.082 56 19.131 0 9.05-22.998 19.131-56 19.131s-56-10.082-56-19.13c0-9.05 22.998-19.132 56-19.132m-.656 169.646c-32.614 0-55.344-10.302-55.344-19.546V167.08c9.987 8.36 30.31 13.844 54.915 13.844a155 155 0 0 0 16.973-.934l-.707-6.339c-5.357.593-10.832.896-16.266.896-30.448 0-52.259-9.03-54.915-17.77v-34.36c9.987 8.361 30.31 13.842 54.915 13.842 5.792 0 11.507-.319 16.986-.95l-.733-6.332c-5.238.602-10.704.905-16.253.905-30.448 0-52.259-9.027-54.915-17.766V75.374c9.213 7.866 28.218 14.043 56 14.043s46.787-6.177 56-14.043v10.854h6.4v-22.32c0-12.365-21.869-25.508-62.4-25.508S48 51.543 48 63.908v130.97c0 14.775 26.544 25.922 61.744 25.922 28.272 0 52.15-7.458 59.418-18.554l-5.364-3.485c-5.094 7.783-25.299 15.662-54.054 15.662m76.518-79.487c1.802 0 3.392.717 4.477 2.025 1.997 2.391 1.674 6.013 1.479 7.295.092 6.74 3.814 8.058 4.246 8.188 1.376.415 2.346 1.706 2.31 3.14-.035 1.436-.985 2.68-2.384 3.027-.361.111-4.176 1.46-4.176 8.418.074 3.752-1.728 7.914-5.856 8.038h-2.457v-6.377h1.69c.127-.424.227-1.09.223-1.617 0-5.819 1.952-9.393 4.039-11.552-2.087-2.155-4.039-5.72-4.039-11.517 0-.194.02-.392.055-.583.121-.686.121-1.585.019-2.108h-1.987v-6.377zm-14.976 0h2.461v6.377h-1.686a6 6 0 0 0-.227 1.617c0 5.819-1.95 9.393-4.036 11.552 2.087 2.155 4.036 5.72 4.036 11.517q-.002.296-.052.583c-.121.686-.121 1.585-.019 2.108h1.984v6.377h-2.361c-1.802 0-3.392-.718-4.48-2.022-1.994-2.391-1.668-6.013-1.476-7.298-.09-6.738-3.814-8.058-4.246-8.185-1.38-.418-2.346-1.71-2.314-3.144.036-1.432.99-2.678 2.388-3.026.364-.112 4.176-1.46 4.176-8.418-.074-3.75 1.724-7.914 5.852-8.038m33.514 53.325h-54.4v-76.525h35.2v12.754c0 1.76 1.43 3.189 3.2 3.189h16zM192 111.736h.784l9.674 9.566H192zm18.253 8.29-13.898-13.742a3.2 3.2 0 0 0-2.253-.925h-3.27l-9.878-11.625a3.21 3.21 0 0 0-2.445-1.129H134.4c-1.77 0-3.2 1.429-3.2 3.189v82.901c0 1.76 1.43 3.189 3.2 3.189h6.4v-6.377h-3.2V98.982h39.424l5.42 6.377H147.2c-1.77 0-3.2 1.429-3.2 3.189v82.902c0 1.76 1.43 3.188 3.2 3.188H208c1.77 0 3.2-1.428 3.2-3.188v-69.16a3.18 3.18 0 0 0-.947-2.264"></path></g>', 2)
    ]), 4));
  }
});
export {
  n as _
};