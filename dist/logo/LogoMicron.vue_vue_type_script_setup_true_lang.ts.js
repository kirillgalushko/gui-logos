import { defineComponent as h, computed as o, openBlock as m, createElementBlock as n, normalizeStyle as s, createElementVNode as c } from "vue";
const a = /* @__PURE__ */ h({
  __name: "LogoMicron",
  props: {
    width: {},
    height: {}
  },
  setup(l) {
    const e = l, i = o(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, t) => (m(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "146",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 146",
      style: s(i.value)
    }, t[0] || (t[0] = [
      c("g", { fill: "#0090DA" }, [
        c("path", { d: "M252.216 115.181c-24.066 0-45.657-13.667-45.657-32.779 0-19.12 21.59-32.8 45.829-32.8 10.538 0 20.378 2.659 31.078 8.627l-7.54 9.694c-6.86-3.318-14.937-5.306-23.538-5.306-10.187 0-21.95 5.705-21.95 19.785 0 14.074 11.588 19.777 21.95 19.777 8.601 0 16.852-1.726 23.878-4.785l7.555 10.224c-8.393 4.487-18.492 7.209-29.41 7.531zm137.466-.243c24.23 0 45.832-13.675 45.832-32.779 0-19.12-21.602-32.805-45.832-32.805-24.236 0-45.836 13.685-45.836 32.805 0 18.722 20.745 32.23 44.385 32.763zm21.953-32.779c0 14.074-11.763 19.772-21.953 19.772s-21.947-5.698-21.947-19.772c0-14.084 11.757-19.788 21.947-19.788s21.953 5.704 21.953 19.788m33.636 31.196h22.635V74.317c0-5.269 4.096-11.471 11.422-11.516 5.116.045 10.023 3.543 10.023 7.985l-.04 42.569H512V69.58c0-11.53-12.357-21.15-27.106-21.15l-.427.023-.43-.023c-6.094 0-11.873 1.777-16.596 4.756l-.036-.098c-.297-.66-2.802-4.256-22.134-4.256zM173.504 50.957h22.175v62.398h-22.175zm120.892 62.398h22.177V75.516c0-5.978 7.02-10.762 14.577-10.762 3.23 0 6.295.565 8.964 1.574l1.123.459V50.374a55 55 0 0 0-7.938-.611c-5.941 0-11.905 1.726-16.786 4.616l-.085-.147c-.63-.964-4.054-4.074-22.032-4.074z" }),
        c("path", { d: "M98.837 25.466c1.835-.77 2.022.482.999 1.263-1.046.8-2.286 1.723-3.8 2.64-6.653 4.034-13.406 8.96-20.352 14.48a21.96 21.96 0 0 1 7.435 7.675l.64 1.195 9.5 20.156c.983 1.967 2.803 3.056 4.915 3.056 1.88 0 3.52-.86 4.551-2.433l.358-.623 9.5-20.156c3.564-7.183 11.004-12.154 19.565-12.154 8.66 0 16.113 5.038 19.618 12.342.358.868.415 1.662-.24 2.602-4.738 6.85-10.83 13.911-17.923 20.997l-2.401 2.362.003-12.363-4.995 10.626c-5.476 11.74-15.408 18.757-28.039 18.757-12.18 0-21.852-6.524-27.436-17.518l-.603-1.24-4.995-10.625.005 48.46c-8.025 4.462-15.045 7.744-21.082 9.934l-1.622.57V73.234C19.907 95.735 7.454 115.663 15.05 125.968c8.591 11.662 31.587 5.264 65.64-16.22l1.869-1.187c1.49-.953 2.87-1.785 4.036-2.396 1.138-.598 2.197.091.728 1.433-.89.817-2.119 1.767-3.511 2.72a350 350 0 0 1-14.935 9.66l-3.733 2.242.001 23.536H42.438v-11.754c-18.34 7.966-33.656 10.102-40.116.854-8.653-12.396 7.473-39.979 38.498-68.08l1.618-1.455v-2.999c0-12.034 9.718-21.757 21.753-21.757 2.772 0 5.424.527 7.868 1.473l2.396-1.653c6.643-4.534 13.59-8.75 20.382-12.866a31.6 31.6 0 0 1 4-2.053m13.027-7.657.887-.451c33.891-17.905 60.038-22.79 68.455-10.736 7.905 11.321-1.904 34.606-25.875 59.831l-1.427 1.486v45.416h-22.707l.003-24.874a296 296 0 0 1-15.604 11.672l-4.15 2.884c-5.143 3.558-11.151 7.643-15.956 10.661l-2.476 1.525-.486.29c-1.44.878-2.796 1.6-3.903 2.076-1.83.784-2.023-.467-1.013-1.258 1.04-.81 2.365-1.714 3.846-2.685l1.12-.703c5.617-3.372 14.241-9.438 19.83-13.583 41.86-31.053 66.032-73.03 54.23-85.84-7.569-8.214-26.646-6.339-51.206 4.98l-1.764.824c-1.592.778-3.005 1.323-4.242 1.774-1.206.439-2.166-.394-.525-1.527a29 29 0 0 1 2.963-1.762" })
      ], -1)
    ]), 4));
  }
});
export {
  a as _
};