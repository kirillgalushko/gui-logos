import { defineComponent as l, computed as r, openBlock as c, createElementBlock as g, normalizeStyle as d, createStaticVNode as f } from "vue";
const o = /* @__PURE__ */ l({
  __name: "LogoCinder",
  props: {
    width: {},
    height: {}
  },
  setup(e) {
    const t = e, i = r(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (w, h) => (c(), g("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "156",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 156",
      style: d(i.value)
    }, h[0] || (h[0] = [
      f('<g><path fill="#58585A" d="m496.69 83.78 9.414 9.415v19.685l-7.227 7.227 7.227 7.227v18.259l.76.76H512v8.94h-12.553l-5.61-5.611v-19.875l-4.85-4.85H467.21v21.492h8.558v8.939H447.05l.095-9.034h7.893V92.719h-7.893V83.78zm-124.292 0 10.27 10.27v50.972l-10.27 10.27h-48.975v-8.938h7.893V92.719h-7.893V83.78zm-53.824-.095v8.94h-7.228v62.573h-11.792l-29.575-52.113v43.174h8.844v8.939H251.34v-8.844h7.893V92.719h-7.893V83.78h19.78l29.48 51.542V92.624h-8.844v-8.939zm122.96.095v19.02h-10.366V92.623h-24.155V114.4h27.673v9.51h-27.673v22.348h24.25v-10.176h10.46v19.02h-54.775v-8.75h7.893V92.72h-7.893v-8.94zm-246.206 0 9.795 9.795v12.838h-12.077V97.57l-4.47-4.47h-18.163l-4.85 4.85v42.984l4.85 4.85h18.164l4.47-4.47v-9.319h12.076v13.218l-9.795 9.795h-31.667l-10.27-9.89V93.955l10.27-10.175zm170.223 9.415H343.49v52.778h22.062l4.85-4.85V98.045zm124.006-.476H467.21v23.109h21.967l4.66-4.66V97.094z"></path><g transform="translate(212.54 83.97)"><rect width="13.028" height="11.412" x="21.111" y="48.499" fill="#F05129"></rect><rect width="12.838" height="11.412" x="0" y="48.499" fill="#F05129"></rect><rect width="11.412" height="13.123" x="11.412" y="37.088" fill="#F15A22"></rect><rect width="11.412" height="12.838" x="11.412" y="58.484" fill="#BE1E2D"></rect><rect width="11.412" height="12.553" x="11.412" y="0" fill="#FFD529"></rect><rect width="11.412" height="13.028" x="11.412" y="21.016" fill="#F36C21"></rect><rect width="13.504" height="11.412" x="0" y="11.316" fill="#FBB040"></rect><rect width="13.028" height="11.412" x="21.111" y="11.316" fill="#FBB040"></rect><rect width="11.412" height="11.412" x="11.412" y="11.316" fill="#F7941E"></rect><rect width="11.412" height="11.412" x="11.412" y="48.499" fill="#D51920"></rect></g><g transform="translate(52.684 44.315)"><rect width="8.083" height="7.037" x="0" y="7.037" fill="#EF4123"></rect><rect width="8.559" height="7.037" x="12.458" y="7.037" fill="#EF4123"></rect><rect width="7.037" height="8.559" x="7.037" y="0" fill="#F15A22"></rect><rect width="7.037" height="8.464" x="7.037" y="12.553" fill="#C9252C"></rect><rect width="7.037" height="7.037" x="7.037" y="7.037" fill="#ED1C24"></rect></g><g transform="translate(73.985 31.572)"><rect width="5.135" height="6.276" x="5.135" y="0" fill="#F7941E"></rect><rect width="5.135" height="6.276" x="5.135" y="9.034" fill="#ED1C24"></rect><rect width="6.181" height="5.135" x="9.129" y="5.135" fill="#F58220"></rect><rect width="5.801" height="5.135" x="0" y="5.135" fill="#F58220"></rect><rect width="5.135" height="5.135" x="5.135" y="5.135" fill="#F15A22"></rect></g><g transform="translate(62.764 69.8)"><rect width="3.043" height="3.899" x="3.043" y="0" fill="#DA2128"></rect><rect width="3.043" height="3.519" x="3.043" y="5.801" fill="#962F34"></rect><rect width="3.709" height="3.043" x="5.516" y="3.138" fill="#C9252C"></rect><rect width="3.709" height="3.043" x="0" y="3.138" fill="#C9252C"></rect><rect width="3.043" height="3.043" x="3.043" y="3.138" fill="#B8292F"></rect></g><g transform="translate(50.306 21.302)"><rect width="6.467" height="5.325" x="0" y="5.23" fill="#F7941E"></rect><rect width="6.276" height="5.325" x="9.51" y="5.23" fill="#F7941E"></rect><rect width="5.325" height="6.276" x="5.23" y="0" fill="#FAA61A"></rect><rect width="5.325" height="6.276" x="5.23" y="9.605" fill="#F15A22"></rect><rect width="5.325" height="5.325" x="5.23" y="5.23" fill="#F37021"></rect></g><g transform="translate(66.092)"><rect width="7.703" height="10.175" x="7.703" y="0" fill="#FFF200"></rect><rect width="7.703" height="8.939" x="7.703" y="14.169" fill="#F7941E"></rect><rect width="9.224" height="7.703" x="13.979" y="7.703" fill="#FD0"></rect><rect width="9.7" height="7.703" x="0" y="7.703" fill="#FD0"></rect><rect width="7.703" height="7.703" x="7.703" y="7.703" fill="#FDB913"></rect></g><g fill="#58585A" transform="translate(0 64.856)"><polygon points="-1.01355279e-14 90.4368499 52.6835067 11.4115899 105.367013 90.4368499"></polygon><polygon points="34.9004458 90.4368499 88.820208 2.70280743e-14 140.172363 90.4368499"></polygon></g></g>', 1)
    ]), 4));
  }
});
export {
  o as _
};
