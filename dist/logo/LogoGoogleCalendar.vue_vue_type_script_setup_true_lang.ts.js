import { defineComponent as i, computed as p, openBlock as h, createElementBlock as n, normalizeStyle as s, createStaticVNode as g } from "vue";
const d = /* @__PURE__ */ i({
  __name: "LogoGoogleCalendar",
  props: {
    width: {},
    height: {}
  },
  setup(e) {
    const t = e, l = p(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (a, o) => (h(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: s(l.value)
    }, o[0] || (o[0] = [
      g('<g><polygon fill="#FFF" points="195.368421 60.6315789 60.6315789 60.6315789 60.6315789 195.368421 195.368421 195.368421"></polygon><polygon fill="#EA4335" points="195.368421 256 256 195.368421 225.684211 190.196005 195.368421 195.368421 189.835162 223.098002"></polygon><path fill="#188038" d="M0 195.368v40.421C0 246.956 9.044 256 20.21 256h40.422l6.225-30.316-6.225-30.316-33.033-5.172z"></path><path fill="#1967D2" d="M256 60.632V20.21C256 9.044 246.956 0 235.79 0h-40.422q-5.532 22.554-5.533 33.196 0 10.641 5.533 27.436 20.115 5.76 30.316 5.76T256 60.631"></path><polygon fill="#FBBC04" points="256 60.6315789 195.368421 60.6315789 195.368421 195.368421 256 195.368421"></polygon><polygon fill="#34A853" points="195.368421 195.368421 60.6315789 195.368421 60.6315789 256 195.368421 256"></polygon><path fill="#4285F4" d="M195.368 0H20.211C9.044 0 0 9.044 0 20.21v175.158h60.632V60.632h134.736z"></path><path fill="#4285F4" d="M88.27 165.154c-5.036-3.402-8.523-8.37-10.426-14.94l11.689-4.816q1.59 6.063 5.558 9.398c2.627 2.223 5.827 3.318 9.566 3.318q5.734 0 9.852-3.487c2.746-2.324 4.127-5.288 4.127-8.875q0-5.508-4.345-8.994c-2.897-2.324-6.535-3.486-10.88-3.486h-6.754v-11.57h6.063q5.608 0 9.448-3.033c2.56-2.02 3.84-4.783 3.84-8.303 0-3.132-1.145-5.625-3.435-7.494-2.29-1.87-5.188-2.813-8.708-2.813-3.436 0-6.164.91-8.185 2.745a16.1 16.1 0 0 0-4.413 6.754l-11.57-4.817c1.532-4.345 4.345-8.185 8.471-11.503s9.398-4.985 15.798-4.985c4.733 0 8.994.91 12.767 2.745 3.772 1.836 6.736 4.379 8.875 7.613 2.14 3.25 3.2 6.888 3.2 10.93 0 4.126-.993 7.613-2.98 10.476s-4.43 5.052-7.327 6.585v.69a22.25 22.25 0 0 1 9.398 7.327c2.442 3.284 3.672 7.208 3.672 11.79 0 4.58-1.163 8.673-3.487 12.26-2.324 3.588-5.54 6.417-9.617 8.472-4.092 2.055-8.69 3.1-13.793 3.1-5.912.016-11.369-1.685-16.405-5.087m71.797-58.005-12.833 9.28-6.417-9.734 23.023-16.607h8.825v78.333h-12.598z"></path></g>', 1)
    ]), 4));
  }
});
export {
  d as _
};
