import { defineComponent as c, computed as i, openBlock as o, createElementBlock as s, normalizeStyle as m, createStaticVNode as p } from "vue";
const d = /* @__PURE__ */ c({
  __name: "LogoPluralsight",
  props: {
    width: {},
    height: {}
  },
  setup(l) {
    const t = l, e = i(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (a, h) => (o(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "108",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 108",
      style: m(e.value)
    }, h[0] || (h[0] = [
      p('<defs><linearGradient id="pluralsight-gui-asset-a" x1="49.999%" x2="49.999%" y1="1.576%" y2="100.443%"><stop offset="0%" stop-color="#DF5430"></stop><stop offset="100%" stop-color="#D7197E"></stop></linearGradient></defs><g><path fill="url(#pluralsight-gui-asset-a)" d="M107.95 53.973c0 29.81-24.167 53.974-53.977 53.974S0 83.783 0 53.973 24.164 0 53.973 0c29.81 0 53.977 24.164 53.977 53.973"></path><path fill="#FFFFFE" d="M40.098 25.924V82.02l48.58-28.047zm4.65 8.056 34.63 19.993-34.63 19.994z"></path><path fill="#FFFFFE" d="M28.93 32.048v43.847L66.902 53.97zm4.652 8.056 24.02 13.866-24.02 13.873z"></path><path fill="#1B1A19" d="M424.636 38.847c5.097 0 8.234 1.422 11.241 3.973l-3.263 3.883c-2.252-1.923-4.468-3.135-8.189-3.135-5.21 0-9.209 4.413-9.47 9.763l-.013.642c0 6.016 3.968 10.448 9.944 10.448 2.76 0 5.265-.876 7.06-2.216V56.73h-7.478v-4.47h12.453v12.285c-2.882 2.463-7.02 4.554-12.203 4.554-8.924 0-14.866-6.197-15.158-14.409l-.011-.718c0-8.189 6.269-15.126 15.087-15.126m-214.818.5V55.98c0 5.433 2.801 8.357 7.395 8.357 4.557 0 7.356-2.757 7.356-8.147V39.347h5.14v16.589c0 8.735-4.93 13.124-12.575 13.124-7.61 0-12.456-4.389-12.456-12.87V39.346zm155.224-.418c4.26 0 7.643 1.297 10.612 3.68l-2.756 3.886c-2.631-1.965-5.265-3.01-7.942-3.01-2.832 0-4.55 1.369-4.743 3.133l-.018.418c0 1.894.943 2.906 4.563 3.974l1.108.307q.592.155 1.264.315c5.954 1.45 9.158 3.558 9.387 8.04l.013.607c0 5.479-4.303 8.736-10.444 8.736-4.472 0-8.69-1.545-12.2-4.68l3.089-3.677c2.802 2.426 5.603 3.8 9.236 3.8 2.998 0 4.956-1.302 5.164-3.313l.018-.445c0-1.84-.907-2.932-4.825-4.023l-1.145-.298q-.305-.075-.632-.15L363.5 55.9c-5.21-1.4-8.208-3.25-8.43-7.84l-.014-.649c0-5.015 4.178-8.482 9.987-8.482m-216.309.418c6.59 0 10.836 3.64 11.103 9.215l.013.647c0 6.56-5.265 9.99-11.702 9.99h-5.808v9.4h-5.14V39.347zm29.02 0v24.57h15.376V68.6h-20.52V39.347zm79.555 0c3.678 0 6.56 1.09 8.44 2.924 1.416 1.455 2.272 3.405 2.405 5.68l.018.717c0 4.802-2.887 7.689-6.977 8.858l7.896 11.073h-6.056l-7.19-10.197h-6.437V68.6h-5.137V39.347zm39.794-.207 12.871 29.457h-5.433l-2.966-7.06h-13.83l-3.01 7.06h-5.264l12.87-29.457zm30.518.207v24.57H343V68.6h-20.517V39.347zm67.903 0V68.6h-5.137V39.347zm60.717 0v12.16h13.955v-12.16h5.143V68.6h-5.143V56.272H456.24v12.327h-5.14V39.347zm55.76 0v4.765h-9.279v24.487h-5.18V44.112h-9.278v-4.765zM294.64 45.281l-5.015 11.699h10.07zm-146.324-1.255h-5.976v10.53h5.976c3.709 0 6.088-1.977 6.297-4.811l.015-.496c0-3.422-2.466-5.223-6.312-5.223m108.575 0h-7.483v9.825h7.523c3.5 0 5.793-1.747 6.003-4.476l.016-.499c0-3.134-2.259-4.85-6.059-4.85"></path></g>', 2)
    ]), 4));
  }
});
export {
  d as _
};
