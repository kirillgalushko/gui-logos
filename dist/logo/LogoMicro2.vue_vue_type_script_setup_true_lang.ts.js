import { defineComponent as h, computed as s, openBlock as n, createElementBlock as m, normalizeStyle as r, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ h({
  __name: "LogoMicro2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, c = s(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (n(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: r(c.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#2E3192",
          d: "M128 0C57.302 0 0 57.302 0 128s57.302 128 128 128 128-57.302 128-128S198.698 0 128 0m60.775 145.364c-1.24 4.962-3.225 8.93-5.953 12.155-2.48 3.225-4.962 5.21-7.69 6.202a24.2 24.2 0 0 1-8.434 1.488c-2.977 0-5.458-.496-7.442-1.736-1.985-.992-3.473-2.729-4.713-4.713-1.24-1.985-1.985-4.465-2.481-7.194q-.744-4.094-.744-8.93c0-1.24 0-2.481.248-4.217.248-1.737.496-3.97.744-3.97h-.496c-3.969 9.923-9.426 17.117-16.372 22.822-6.946 5.706-14.636 8.434-23.07 8.434-5.705 0-10.419-2.232-13.643-6.45-3.473-4.216-5.21-10.666-5.21-19.1 0-1.24 0-2.48.248-3.969.249-1.24.249-1.736.497-4.217h-1.737c-2.232 4.961-4.217 11.907-5.705 18.109-1.489 6.201-2.729 11.906-3.473 17.116-.992 5.21-1.489 9.922-1.985 13.891-.496 3.97-.744 6.698-.992 8.186.248 1.24.496 2.48.744 3.97.496 1.488.744 2.976 1.24 4.216.497 1.24.745 2.729.993 3.97.248 1.24.496 2.232.496 2.976 0 3.473-.744 6.202-2.233 7.938-1.488 1.737-3.224 2.729-4.96 2.729-2.233 0-4.218-.744-5.706-1.985-1.737-1.488-2.48-3.72-2.48-6.697 0-4.217.743-9.675 2.232-16.124 1.488-6.45 3.72-14.636 6.45-24.31 1.488-4.466 2.728-8.93 4.216-13.396 1.489-4.465 2.729-8.682 3.97-12.403 1.24-3.72 2.232-7.194 3.224-10.17s1.489-5.21 1.737-6.946c.248-.744.496-2.48.744-4.961s.496-5.21.992-8.435c.496-3.224.744-6.697 1.24-10.17.496-3.721.993-6.946 1.24-9.923.497-2.232.745-4.713 1.24-7.441.497-2.73 1.241-5.458 2.233-7.69.993-2.481 2.481-4.466 4.218-6.202 1.736-1.736 3.969-2.48 6.697-2.48 2.977 0 4.961.992 5.954 2.728s1.488 3.97 1.24 6.45-.496 5.209-1.24 7.938-1.489 5.209-2.233 7.194c-1.984 6.201-3.969 11.906-6.201 16.62-2.233 4.713-4.217 9.922-5.954 15.38-1.488 3.72-1.984 7.193-1.984 10.17 0 5.457 1.736 9.426 4.96 12.403 3.474 2.977 7.443 4.217 12.156 4.217 3.72 0 7.442-1.24 10.915-3.969q5.208-4.092 9.674-9.674c2.977-3.721 5.457-7.69 7.442-12.155 1.984-4.217 3.473-8.186 4.465-11.411.248-.496.496-1.488.744-3.473.496-1.984.744-4.217 1.24-6.698.497-2.48.993-4.96 1.489-7.69.496-2.728.992-4.96 1.24-6.697.496-1.985.744-3.97 1.24-6.45.497-2.48 1.24-4.713 2.233-6.946.992-2.232 2.48-3.969 3.97-5.457 1.735-1.488 3.72-2.233 6.449-2.233 3.224 0 5.209.993 6.45 2.73.992 1.736 1.488 3.968 1.488 6.449-.248 2.48-.496 4.961-1.24 7.442-.745 2.48-1.241 4.465-1.737 5.953a248 248 0 0 1-5.954 16.62c-1.984 4.962-3.72 9.427-5.457 12.9-1.488 3.72-2.729 6.45-3.72 8.682q-1.49 3.348-1.49 4.465c0 6.45 1.49 11.163 4.218 13.891 2.728 2.729 5.705 4.217 8.93 4.217 5.457 0 9.674-1.736 12.9-4.96 3.224-3.474 5.705-9.675 7.193-17.117h1.985c.496 7.194-.248 13.147-1.489 18.108"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
