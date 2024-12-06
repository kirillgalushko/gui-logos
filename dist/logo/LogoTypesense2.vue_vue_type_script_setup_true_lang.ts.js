import { defineComponent as l, computed as n, openBlock as m, createElementBlock as s, normalizeStyle as p, createElementVNode as i } from "vue";
const q = /* @__PURE__ */ l({
  __name: "LogoTypesense2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, h = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, t) => (m(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "255",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 255",
      style: p(h.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#1035BC",
          d: "M75.104 80.303q.826 4.126.826 7.979 0 3.576-.826 7.702l-34.938-.275v92.437q0 11.554 10.729 11.554h20.908q1.926 4.677 1.926 9.354t-.55 5.777q-12.656 1.65-26.135 1.65-26.685 0-26.686-22.833V95.709l-19.533.275Q0 91.858 0 88.282q0-3.852.825-7.979l19.533.275V51.692q0-7.428 2.2-10.454 2.201-3.302 8.53-3.302h7.427l1.65 1.651v41.267zm10.477 125.255q.268-6.03 3.286-13.156 3.291-7.4 7.401-11.512 21.653 11.786 38.1 11.786 9.041 0 14.524-3.563 5.757-3.563 5.759-9.594 0-9.592-14.803-15.349l-15.35-5.755q-34.533-12.608-34.534-40.292-.002-9.867 3.564-17.541c2.557-5.3 6.026-9.776 10.415-13.43q6.85-5.756 16.173-8.771 9.316-3.016 20.829-3.016 5.205 0 11.511.823c4.384.548 8.772 1.37 13.155 2.467 4.388.913 8.588 2.01 12.609 3.289q6.029 1.919 10.415 4.111 0 6.852-2.74 14.253t-7.402 10.963q-21.652-9.593-37.548-9.593-7.127 0-11.239 3.564-4.11 3.288-4.11 8.77-.001 8.498 13.706 13.43l16.719 6.03c12.057 4.203 21.013 9.96 26.86 17.268q8.772 10.964 8.772 25.49-.001 19.462-14.53 31.246-14.526 11.513-41.659 11.513-26.59 0-49.883-13.431m150.807 48.031V.83q4.143-.83 9.396-.829c3.682 0 7.09.276 10.216.829v252.76q-4.692.829-10.216.83-5.253-.001-9.396-.83"
        })
      ], -1)
    ]), 4));
  }
});
export {
  q as _
};