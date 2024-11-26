import { defineComponent as n, computed as t, openBlock as e, createElementBlock as y, normalizeStyle as s, createStaticVNode as f } from "vue";
const m = /* @__PURE__ */ n({
  __name: "LogoBlueprint",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const l = o, p = t(() => ({
      width: l.width || "1em",
      height: l.height || "1em",
      minWidth: l.width || "1em",
      minHeight: l.height || "1em"
    }));
    return (g, i) => (e(), y("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "298",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 298",
      style: s(p.value)
    }, i[0] || (i[0] = [
      f('<g><polyline fill="#00B46F" points="192 112.384 256 150.326857 256 224.768 192 261.248 128 224.768 128 150.345143"></polyline><polyline fill="#2294D9" points="128 0 192 37.9428571 192 112.384 128 148.864 64 112.384 64 37.9611429"></polyline><polyline fill="#2294D9" points="192 37.9428571 256 75.8857143 256 150.336 192 186.816 128 150.336 128 75.8857143"></polyline><polyline fill="#F85551" points="64 37.9428571 128 75.8857143 128 150.336 64 186.816 0 150.336 0 75.8857143"></polyline><polyline fill="#F85551" points="64 112.384 128 150.326857 128 224.768 64 261.248 0 224.768 0 150.345143"></polyline><polyline fill="#00B46F" points="128 148.873143 192 186.816 192 261.257143 128 297.737143 64 261.257143 64 186.816"></polyline><path fill="#30B2E9" d="m192 37.943-64 37.943-64-37.943L128 0zm64 37.943-64 37.96-64-37.942 64-37.943 64 37.943z"></path><polyline fill="#00AB64" points="128 223.305143 128 148.882286 64 186.825143 64 261.248"></polyline><polyline fill="#00CE8E" points="192 186.816 128 223.296 64 186.816 128 148.873143"></polyline><polygon fill="#00C783" points="128 223.305143 64 186.825143 128 148.882286"></polygon><polygon fill="#2CAEE7" points="128 75.8857143 64 37.9428571 128 0"></polygon><polyline fill="#FB716C" points="128 75.8857143 64 113.846857 0 75.904 64 37.9611429"></polyline><polyline fill="#1F8ED6" points="256 150.336 192 186.816 128 148.873143 192 113.856"></polyline><polygon fill="#F64743" points="63.0125714 260.626286 0 224.146286 63.0125714 186.185143 63.0125714 260.626286"></polygon><polyline fill="#F96560" points="64 113.846857 64 37.9611429 128 75.904 128 148.864"></polyline><polyline fill="#B71D1D" points="128 148.873143 128 75.8857143 64 113.846857 64 186.806857"></polyline><polygon fill="#B21A1A" points="128 148.873143 64 113.856 128 75.8857143"></polygon><polygon fill="#10161A" fill-opacity=".2" points="256 224.768 192 186.825143 256 150.345143 256 224.768" style="mix-blend-mode:soft-light;"></polygon><path fill="#007233" d="M192 261.257v-74.441l-64 36.48v74.45l64-36.48zm64-36.48v-74.441l-64 36.48v74.441z"></path><polygon fill="#00682C" points="256 224.768 192 186.825143 256 150.345143 256 224.768"></polygon><polyline fill="#0759BA" points="256 150.336 256 75.8857143 192 113.846857 192 186.806857"></polyline><polygon fill="#0860BF" points="256 150.336 192 113.856 256 75.8857143"></polygon><path fill="#FEBCB7" d="m0 75.886 64 36.498 64-36.48-62.537 38.674L64 186.514c0 .028 0 0 0 0l-1.463-71.954z" opacity=".78"></path><polyline fill="#4EDCF8" points="128 75.8857143 192 112.384 256 75.904 193.462857 114.578286 192 186.806857 190.537143 114.578286" opacity=".78"></polyline><path fill="#00F3C9" d="m64 186.816 64 35.035 64-35.035-62.537 37.211L128 297.691c0 .028 0 0 0 0l-1.463-73.654L64 186.825z" opacity=".78"></path></g>', 1)
    ]), 4));
  }
});
export {
  m as _
};
