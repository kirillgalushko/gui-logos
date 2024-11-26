import { defineComponent as m, computed as o, openBlock as i, createElementBlock as h, normalizeStyle as v, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ m({
  __name: "LogoCisco",
  props: {
    width: {},
    height: {}
  },
  setup(a) {
    const e = a, l = o(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (n, t) => (i(), h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      fill: "none",
      viewBox: "0 0 16 16",
      style: v(l.value)
    }, t[0] || (t[0] = [
      c("g", { fill: "#02A5DD" }, [
        c("path", { d: "M4.55 6.579V7.8c0 .201-.108.33-.296.364-.192.034-.38-.093-.408-.276a1 1 0 0 1-.008-.112V4.388q0-.325.295-.381c.193-.038.386.092.411.277q.007.06.006.12V6.58zm-.978 2.729v.747a1.3 1.3 0 0 0-.573-.138c-.34-.007-.625.154-.744.422-.205.465.133.948.677.965q.293.009.558-.108l.062-.025.008-.003h.006l.009.003v.127l-.002.535c0 .017-.023.044-.04.048-.455.107-.904.12-1.336-.09-.564-.273-.798-.807-.747-1.34.078-.798.8-1.298 1.635-1.223q.114.01.227.027.09.016.18.036zm7.321.747v-.756q-.077-.011-.153-.024a5 5 0 0 0-.334-.046c-.831-.077-1.555.42-1.634 1.222-.05.503.148 1.028.688 1.316.446.237.918.225 1.396.114.016-.004.038-.028.038-.043q.003-.272.002-.551v-.127l-.033.014-.054.023a1.3 1.3 0 0 1-.55.107c-.547-.013-.89-.5-.682-.967.118-.266.404-.427.744-.42.2.003.39.045.572.138" }),
        c("path", {
          "fill-rule": "evenodd",
          d: "M14.556 10.63c0-.78-.626-1.366-1.462-1.367-.83 0-1.466.592-1.467 1.366-.001.772.638 1.372 1.463 1.37.826 0 1.466-.597 1.466-1.369m-.732-.002c.004.387-.323.695-.737.695-.407 0-.73-.307-.73-.694.001-.386.325-.692.733-.692.409 0 .73.303.734.69z",
          "clip-rule": "evenodd"
        }),
        c("path", { d: "M7.895 9.903v-.535a3 3 0 0 0-.757-.084 1.24 1.24 0 0 0-.602.167c-.46.285-.5.93-.072 1.235.139.099.295.163.464.207.117.03.237.076.336.14.122.08.106.233-.019.31a.5.5 0 0 1-.138.058c-.184.046-.37.036-.555.007a5 5 0 0 1-.262-.049l-.115-.023v.594c.208.056.749.085.955.058a1.36 1.36 0 0 0 .606-.21c.448-.307.46-.935.017-1.245a1.6 1.6 0 0 0-.314-.157l-.083-.035q-.083-.034-.168-.063a3 3 0 0 1-.162-.06c-.08-.034-.13-.097-.124-.184.006-.086.068-.142.148-.157.126-.023.256-.044.383-.039.107.005.213.023.32.042zm3.578-4.356V7.83c.002.232.219.385.452.325.163-.042.258-.173.258-.362V4.366l-.002-.049c-.021-.218-.22-.356-.44-.307a.33.33 0 0 0-.268.337zm-6.92 3.761h.7v2.622h-.7zm9.534-2.684v-1.02a.4.4 0 0 0-.03-.164c-.064-.146-.227-.221-.398-.19a.335.335 0 0 0-.28.328q-.005.803 0 1.605c0 .046.014.096.034.14a.36.36 0 0 0 .392.187.33.33 0 0 0 .281-.317q.003-.285.001-.57zm-3.815-.002v.54a.337.337 0 0 1-.351.352.34.34 0 0 1-.359-.356V5.6a.34.34 0 0 1 .358-.357c.211.001.352.144.352.36v1.018zM6.458 6.62V5.603c-.001-.214-.145-.359-.355-.359s-.355.144-.356.358V7.16a.34.34 0 0 0 .36.355.34.34 0 0 0 .35-.354v-.54zm-4.525-.246v-.771c0-.201.113-.341.286-.357.207-.019.353.086.395.29q.027.124.028.25.004.687.001 1.372a.353.353 0 0 1-.476.339.33.33 0 0 1-.234-.32l-.001-.574v-.23zm5.724.351v.218l.001.237a.334.334 0 0 0 .327.334c.203.009.366-.111.375-.302a8 8 0 0 0 0-.761c-.01-.19-.177-.314-.375-.303a.337.337 0 0 0-.327.335zm-6.945.112v.344c-.004.192-.157.334-.356.333-.2 0-.352-.142-.354-.335a31 31 0 0 1 0-.697c.002-.192.158-.335.356-.334.199 0 .35.144.354.336zm14.575-.111v.452c.003.192.15.334.345.336.202.003.36-.133.364-.326q.008-.354 0-.707c-.003-.194-.158-.334-.358-.333a.34.34 0 0 0-.35.34q-.003.119-.002.238z" })
      ], -1)
    ]), 4));
  }
});
export {
  p as _
};
