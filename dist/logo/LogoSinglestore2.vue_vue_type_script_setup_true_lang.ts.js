import { defineComponent as i, computed as r, openBlock as p, createElementBlock as l, normalizeStyle as n, createStaticVNode as a } from "vue";
const g = /* @__PURE__ */ i({
  __name: "LogoSinglestore2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const t = o, s = r(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (c, e) => (p(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: n(s.value)
    }, e[0] || (e[0] = [
      a('<defs><linearGradient id="singlestore-2-gui-asset-a" x1="67.345%" x2="-18.523%" y1="-26.004%" y2="22.988%"><stop offset="0%" stop-color="#FF7BFF"></stop><stop offset="35.016%" stop-color="#A0F"></stop><stop offset="100%" stop-color="#80C"></stop></linearGradient><linearGradient id="singlestore-2-gui-asset-b" x1="36.259%" x2="111.722%" y1="-19.363%" y2="44.998%"><stop offset="3.544%" stop-color="#FF7BFF"></stop><stop offset="57.654%" stop-color="#80C"></stop><stop offset="100%" stop-color="#311B92"></stop></linearGradient></defs><g><path fill="url(#singlestore-2-gui-asset-a)" d="M133.793 0c27.427 7.628 52.416 26.85 62.777 50.345 15.846 38.14 12.19 86.35-5.18 115.032-14.628 23.494-37.179 36.004-63.082 35.699-40.226-.305-72.833-32.343-73.138-72.62 0-40.276 31.693-73.534 73.138-73.534 6.704 0 16.371.93 27.342 5.507 0 0-7.887-4.672-28.143-7.81C69.302 44.991.622 89.096 16.468 190.702c21.942 39.055 63.996 65.602 111.84 65.295 70.395-.304 127.991-57.972 127.688-128.76C255.996 59.498 200.836 1.83 133.793 0"></path><path fill="url(#singlestore-2-gui-asset-b)" d="M181.636 54.004c-9.752-20.443-29.865-36.615-54.549-43.023-5.485-1.525-11.275-2.136-17.675-2.44-9.447 0-18.589 1.22-28.036 3.66-23.465 7.019-39.92 20.75-49.673 31.428C19.21 57.97 10.981 72.921 6.105 87.872c0 .305-.305.61-.305 1.22-.304 1.221-1.523 4.883-1.523 5.798-.305.61-.305 1.526-.61 2.136l-.914 3.661c0 .306 0 .61-.305.916-7.923 39.36 5.24 74.683 13.163 87.803 1.982 3.282 3.609 6.02 5.24 8.532-17.98-97.64 33.708-144.24 92.523-145.46 30.779-.61 61.557 11.9 76.49 36.92-.915-13.73-1.829-21.359-8.228-35.394"></path></g>', 2)
    ]), 4));
  }
});
export {
  g as _
};
