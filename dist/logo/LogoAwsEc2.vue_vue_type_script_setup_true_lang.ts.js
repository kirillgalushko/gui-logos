import { defineComponent as a, computed as i, openBlock as o, createElementBlock as s, normalizeStyle as r, createStaticVNode as p } from "vue";
const m = /* @__PURE__ */ a({
  __name: "LogoAwsEc2",
  props: {
    width: {},
    height: {}
  },
  setup(e) {
    const h = e, v = i(() => ({
      width: h.width || "1em",
      height: h.height || "1em",
      minWidth: h.width || "1em",
      minHeight: h.height || "1em"
    }));
    return (n, t) => (o(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: r(v.value)
    }, t[0] || (t[0] = [
      p('<defs><linearGradient id="aws-ec2-gui-asset-a" x1="0%" x2="100%" y1="100%" y2="0%"><stop offset="0%" stop-color="#C8511B"></stop><stop offset="100%" stop-color="#F90"></stop></linearGradient></defs><g><rect width="256" height="256" x="0" y="0" fill="url(#aws-ec2-gui-asset-a)"></rect><path fill="#FFF" d="M86.4 169.6h80v-80h-80zm86.4-80h12.8V96h-12.8v12.8h12.8v6.4h-12.8v9.6h12.8v6.4h-12.8V144h12.8v6.4h-12.8v12.8h12.8v6.4h-12.8v.435a5.97 5.97 0 0 1-5.965 5.965h-.435v12.8H160V176h-12.8v12.8h-6.4V176h-9.6v12.8h-6.4V176H112v12.8h-6.4V176H92.8v12.8h-6.4V176h-.435A5.97 5.97 0 0 1 80 170.035v-.435h-9.6v-6.4H80v-12.8h-9.6V144H80v-12.8h-9.6v-6.4H80v-9.6h-9.6v-6.4H80V96h-9.6v-6.4H80v-.435a5.97 5.97 0 0 1 5.965-5.965h.435V70.4h6.4v12.8h12.8V70.4h6.4v12.8h12.8V70.4h6.4v12.8h9.6V70.4h6.4v12.8H160V70.4h6.4v12.8h.435a5.97 5.97 0 0 1 5.965 5.965zm-41.6 121.203a.4.4 0 0 1-.397.397H45.197a.4.4 0 0 1-.397-.397v-85.606a.4.4 0 0 1 .397-.397H64v-6.4H45.197a6.805 6.805 0 0 0-6.797 6.797v85.606a6.805 6.805 0 0 0 6.797 6.797h85.606a6.805 6.805 0 0 0 6.797-6.797V195.2h-6.4zm86.4-165.606v85.606a6.805 6.805 0 0 1-6.797 6.797H192v-6.4h18.803a.4.4 0 0 0 .397-.397V45.197a.4.4 0 0 0-.397-.397h-85.606a.4.4 0 0 0-.397.397V64h-6.4V45.197a6.805 6.805 0 0 1 6.797-6.797h85.606a6.805 6.805 0 0 1 6.797 6.797"></path></g>', 2)
    ]), 4));
  }
});
export {
  m as _
};
