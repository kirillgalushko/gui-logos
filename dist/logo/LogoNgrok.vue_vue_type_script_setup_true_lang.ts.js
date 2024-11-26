import { defineComponent as o, computed as s, openBlock as l, createElementBlock as m, normalizeStyle as n, createElementVNode as h } from "vue";
const p = /* @__PURE__ */ o({
  __name: "LogoNgrok",
  props: {
    width: {},
    height: {}
  },
  setup(c) {
    const e = c, i = s(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, t) => (l(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "192",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 192",
      style: n(i.value)
    }, t[0] || (t[0] = [
      h("g", null, [
        h("path", {
          fill: "#000",
          d: "M174.893 65.431c-7.12-7.987-15.929-12.008-26.396-12.008-6.452 0-12.395 1.258-17.857 3.802-5.46 2.544-10.172 5.991-14.161 10.395-3.962 4.431-7.094 9.574-9.396 15.537-2.303 5.936-3.454 12.364-3.454 19.312 0 6.811 1.071 13.02 3.185 18.628 2.142 5.581 5.114 10.368 8.969 14.361q5.783 5.991 13.733 9.356 7.951 3.364 17.428 3.364c2.865 0 5.515-.219 7.924-.629a31 31 0 0 0 6.907-2.024c2.195-.957 4.337-2.16 6.479-3.61 2.115-1.478 4.337-3.338 6.639-5.554v23.717h-.027v2.297h-29.233l-21.98 25.276V192h82.481V55.911h-31.241zm-.08 43.467c-1.098 2.516-2.544 4.732-4.31 6.62-1.794 1.886-3.91 3.337-6.372 4.403-2.463 1.067-5.087 1.587-7.844 1.587-2.89 0-5.568-.52-8.031-1.587s-4.605-2.517-6.399-4.404-3.185-4.103-4.229-6.62c-1.044-2.516-1.553-5.279-1.553-8.206 0-2.817.535-5.471 1.633-7.933s2.543-4.595 4.418-6.428c1.846-1.833 3.961-3.282 6.371-4.404s5.006-1.669 7.763-1.669c2.65 0 5.194.52 7.683 1.587a19.7 19.7 0 0 1 6.48 4.404c1.846 1.888 3.292 4.048 4.416 6.51 1.098 2.462 1.634 5.17 1.634 8.125-.027 2.817-.563 5.498-1.66 8.015M87.727 66.909c-1.66-1.997-3.534-3.72-5.542-5.252-1.793-1.34-3.694-2.517-5.755-3.474-.99-.465-2.035-.848-3.133-1.203-1.579-.52-3.292-.876-5.06-1.177h-22.27L31.242 72.955V56.158H0v90.49h31.242V85.59h29.341l2.436-.054v61.083H94.26V90.023q0-7.221-1.365-12.883c-.91-3.748-2.624-7.14-5.167-10.231m254.161-14.334c7.603 0 14.644 1.203 21.15 3.61s12.153 5.745 16.918 10.04c4.766 4.294 8.487 9.41 11.164 15.318 2.624 5.936 3.962 12.501 3.962 19.668 0 7.194-1.365 13.732-4.069 19.667s-6.425 11.052-11.137 15.346c-4.711 4.322-10.387 7.632-17 9.985-6.638 2.352-13.786 3.528-21.496 3.528-7.603 0-14.617-1.176-21.07-3.528-6.45-2.353-11.992-5.717-16.65-10.067-4.686-4.349-8.326-9.546-10.977-15.592-2.65-6.045-3.961-12.774-3.961-20.187 0-6.702 1.311-12.966 3.961-18.792a46.3 46.3 0 0 1 11.057-15.182c4.738-4.267 10.333-7.66 16.839-10.121 6.478-2.462 13.6-3.693 21.31-3.693m-91.504 3.337v15.592l13.547-15.592h34.08v1.258l-24.817 28.667h-22.73l-.026 60.563h-31.322V55.912zm91.531 24.345c-2.784 0-5.38.52-7.87 1.587a18.75 18.75 0 0 0-6.372 4.404c-1.793 1.887-3.212 4.048-4.31 6.51s-1.633 5.115-1.633 7.933c0 3.063.535 5.854 1.633 8.37 1.098 2.517 2.517 4.733 4.31 6.62 1.767 1.888 3.908 3.337 6.371 4.404 2.49 1.067 5.114 1.587 7.871 1.587s5.355-.52 7.844-1.587c2.463-1.067 4.578-2.516 6.371-4.404 1.767-1.887 3.213-4.103 4.31-6.62 1.098-2.516 1.633-5.251 1.633-8.179 0-2.817-.535-5.498-1.632-8.015-1.098-2.516-2.517-4.732-4.31-6.619-1.768-1.887-3.91-3.365-6.372-4.404-2.463-1.067-5.086-1.587-7.844-1.587M466.831 97.71l42.726-40.265v-1.532h-41.173l-32.768 32.634V0h-31.241v146.373h31.241v-36.846l34.347 36.846H512v-1.723z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  p as _
};
