import { defineComponent as a, computed as l, openBlock as m, createElementBlock as e, normalizeStyle as s, createStaticVNode as i } from "vue";
const d = /* @__PURE__ */ a({
  __name: "LogoCertbot",
  props: {
    width: {},
    height: {}
  },
  setup(t) {
    const c = t, v = l(() => ({
      width: c.width || "1em",
      height: c.height || "1em",
      minWidth: c.width || "1em",
      minHeight: c.height || "1em"
    }));
    return (p, h) => (m(), e("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "176",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 176",
      style: s(v.value)
    }, h[0] || (h[0] = [
      i('<g><path fill="#000" d="M126.917 175.25c-1-6.556-6.668-11.669-13.56-11.669a13.66 13.66 0 0 0-13.558 11.67zm-30.563-.001c-1-6.556-6.668-11.669-13.559-11.669a13.66 13.66 0 0 0-13.559 11.67z"></path><path fill="#ED1C24" d="M78.573 152.009v19.24h14.78v-48.454h-14.78v19.909a8.24 8.24 0 0 0-1.445 4.652 8.24 8.24 0 0 0 1.445 4.653m6.89-9.766a5.1 5.1 0 0 0-5.112 5.113c0 2.89 2.223 5.111 5.112 5.111s5.112-2.222 5.112-5.111a5.1 5.1 0 0 0-5.112-5.113m31.784.302v-19.75h-14.78v48.455h14.78v-19.082a8.25 8.25 0 0 0 1.556-4.812 8.25 8.25 0 0 0-1.556-4.811m-6.779-.302a5.1 5.1 0 0 0-5.112 5.113c0 2.89 2.223 5.111 5.112 5.111s5.112-2.222 5.112-5.111a5.1 5.1 0 0 0-5.112-5.113m32.417-67.132 2.702-41.78h4.334l2.086 41.912a7.2 7.2 0 0 1 2.582 5.543 7.21 7.21 0 0 1-6.886 7.216c-5.058 5.866-13.917 13.998-27.121 18.9V86.455s12.223 1.658 19.567-5.316a7.2 7.2 0 0 1 2.736-6.027m4.48 1.896c-2.112 0-3.89 1.778-3.89 3.89s1.778 3.89 3.89 3.89 3.89-1.779 3.89-3.89-1.667-3.89-3.89-3.89m-94.43-1.897-2.702-41.78h-4.335l-1.976 41.823a7.2 7.2 0 0 0-2.69 5.632 7.21 7.21 0 0 0 6.886 7.216c5.058 5.866 13.917 13.998 27.12 18.9V86.455s-12.223 1.658-19.567-5.316q.008-.175.008-.352a7.2 7.2 0 0 0-2.744-5.675m-4.48 1.896c-2.111 0-3.89 1.778-3.89 3.89s1.779 3.89 3.89 3.89 3.89-1.779 3.89-3.89-1.778-3.89-3.89-3.89"></path><path fill="#000" d="M53.455 18.328v12.226H43.343V18.328c-3.113 1.778-5.224 5.113-5.224 8.89a10.2 10.2 0 0 0 10.225 10.225 10.197 10.197 0 0 0 10.224-10.224c.111-3.778-2-7.113-5.113-8.89m89.576-.001v12.226h10.113V18.328c3.112 1.778 5.224 5.113 5.224 8.89a10.197 10.197 0 0 1-10.224 10.225 10.2 10.2 0 0 1-10.225-10.224c-.112-3.778 2-7.113 5.112-8.89M76.242 83.284l.22-23.17c.11-5.89 2.444-11.335 6.667-15.447s9.78-6.335 15.67-6.223c5.89.11 11.335 2.444 15.447 6.667s6.335 9.78 6.224 15.67l-.284 22.187a29.23 29.23 0 0 1 7.508 19.601c0 16.204-13.136 29.34-29.34 29.34s-29.34-13.136-29.34-29.34a29.23 29.23 0 0 1 7.228-19.285m36.462-6.312.209-16.302c0-3.889-1.445-7.557-4.112-10.335s-6.335-4.334-10.225-4.334-7.557 1.444-10.335 4.111c-2.779 2.668-4.335 6.335-4.335 10.225l-.238 16.827a29.2 29.2 0 0 1 14.686-3.935 29.2 29.2 0 0 1 14.35 3.743m-21.796-7.967a3.223 3.223 0 1 0 0-6.445 3.223 3.223 0 0 0 0 6.445m15.114 0a3.223 3.223 0 1 0 0-6.445 3.223 3.223 0 0 0 0 6.445"></path><path fill="#ED1C24" d="m95.687 97.79-1.112 21.004h8.225l-1.667-21.115c2-1 3.333-3 3.333-5.446 0-3.334-2.778-6.112-6.112-6.112s-6.112 2.778-6.112 6.112c.111 2.556 1.445 4.556 3.445 5.557M27.784 11.548c-3.001-4.444-7.225-7.001-11.67-7.001-4.556 0-8.668 2.444-11.78 6.89C1.556 15.55 0 20.995 0 26.663 0 32.33 1.556 37.777 4.334 41.89c3.001 4.444 7.224 6.89 11.67 6.89s8.668-2.445 11.78-6.89c2-2.89 3.334-6.335 3.89-10.114.111-.667.778-1.222 1.445-1.222l176.148.11c.778 0 1.445-.666 1.557-1.444v-4.668c0-.778-.667-1.445-1.445-1.555h-5.334c-.778 0-1.445-.667-1.445-1.556V1.657c0-.778-.667-1.445-1.445-1.556h-22.227c-.778 0-1.445.667-1.556 1.445v19.782c0 .778-.667 1.445-1.556 1.445h-1.334c-.778 0-1.444-.667-1.444-1.555V6.104c0-.778-.667-1.445-1.445-1.556h-3.445c-.778 0-1.445.667-1.556 1.445v15.114c0 .778-.667 1.444-1.556 1.444H33.23a1.446 1.446 0 0 1-1.445-1.222c-.779-3.446-2-7.002-4.001-9.78m-11.78 31.007c-5.335 0-9.892-7.335-9.892-15.892S10.67 10.77 16.115 10.77s9.89 7.336 9.89 15.893-4.667 15.892-10.002 15.892"></path><path fill="#000" d="M55.79 33.331c-.778-1.112-1.556-1.667-2.334-2.778H43.343V18.327c-3.113 1.778-5.224 5.113-5.224 8.891a10.2 10.2 0 0 0 10.225 10.224c3.111 0 5.89-1.445 7.78-3.556 0-.221-.223-.332-.334-.555m85.018 0c.778-1.112 1-1.667 1.778-2.778h10.668V18.327c3.113 1.778 5.224 5.113 5.224 8.891a10.197 10.197 0 0 1-10.224 10.224c-3.112 0-5.89-1.445-7.78-3.556.001-.221.112-.332.334-.555m25.339 129.918c2.89 0 5.224-.889 6.89-2.557 1.778-1.667 2.556-3.89 2.556-6.668h14.559l.111.333c.111 6.001-2.111 11.114-6.78 15.225-4.667 4.112-10.558 6.113-17.448 6.113-8.89 0-15.78-2.778-20.67-8.447-4.78-5.667-7.225-12.89-7.225-21.782v-1.667c0-8.78 2.446-16.003 7.446-21.782 5.001-5.668 12.003-8.558 21.227-8.558 4.779 0 9.113.667 13.003 2.11 3.779 1.446 7.001 3.446 9.557 6.114l.223 16.003h-13.114l-2.667-9.335a9.8 9.8 0 0 0-3-1.778q-1.835-.667-4-.667-6.836 0-9.67 5.001c-1.89 3.334-2.778 7.557-2.778 12.78v1.667c0 5.335.889 9.67 2.556 12.892 1.889 3.336 4.89 5.003 9.224 5.003m59.013 12.335q-13.003.001-20.67-8.335c-5.113-5.557-7.78-12.558-7.78-21.116v-2.222q0-13.336 7.335-22.005c4.89-5.778 11.448-8.557 19.671-8.557 8.113 0 14.336 2.444 18.782 7.335 4.445 4.89 6.668 11.447 6.668 19.782v8.78H213.49l-.11.332c.333 4.001 1.667 7.225 4 9.78 2.335 2.557 5.557 3.78 9.558 3.78 3.556 0 6.556-.334 8.89-1.112 2.335-.667 4.89-1.89 7.78-3.445l4.335 10.002c-2.446 2-5.668 3.556-9.558 4.89-4.002 1.444-8.337 2.111-13.226 2.111m-1.444-49.566c-3.001 0-5.335 1.111-7.113 3.445s-2.779 5.334-3.224 9.002l.112.223h19.893v-1.445c0-3.445-.778-6.112-2.444-8.224-1.556-2.001-3.89-3-7.224-3m34.896 38.786 7.78-1.667v-37.119l-8.558-1.666v-9.78h23.561l.667 8.779c1.445-3.111 3.223-5.557 5.445-7.223 2.223-1.779 4.78-2.557 7.669-2.557.889 0 1.778.111 2.667.223.888.11 1.667.333 2.334.444v12.224l-4.78.112c-4.223 0-8.001 1.556-9.335 2.445-1.444 1-2.778 3.334-3.667 5.001v29.117l7.78 1.667v9.67H258.5v-9.67zm74.016-64.792v14.226h10.558v12.224h-10.558v30.007c0 2.334.444 4 1.445 5.002 1 1 2.222 1.445 3.89 1.445 1.11 0 2.11 0 2.888-.112.78-.111 1.78-.222 2.779-.444l1.334 11.669c-1.778.555-3.556 1-5.335 1.222-1.778.223-3.667.444-5.778.444-5.558 0-9.891-1.555-12.892-4.556-3.001-3.112-4.556-7.89-4.556-14.558v-30.007h-8.78V114.35h8.78v-14.337z"></path><path fill="#ED1C24" d="M407.644 146.245c0 8.891-2 16.004-6 21.45-4.002 5.334-9.78 8-17.227 8-3.557 0-6.558-.778-9.113-2.222-2.557-1.445-4.78-3.556-6.558-6.334l-1.11 7.335h-13.893V99.569l-8.557-1.667v-9.78h24.671v32.785c1.779-2.445 3.78-4.223 6.224-5.557s5.223-1.89 8.335-1.89c7.557 0 13.336 2.89 17.338 8.558 4 5.78 6 13.337 6 22.894v1.334h-.11m-16.115-1.223c0-5.778-.888-10.446-2.556-13.89-1.667-3.446-4.668-5.113-8.78-5.113-2.556 0-4.667.555-6.334 1.556-1.778 1-3.112 2.556-4.112 4.556v25.227c1 1.89 2.334 3.223 4.112 4.224 1.778 1 3.89 1.445 6.446 1.445 4.112 0 7.113-1.445 8.779-4.445 1.667-2.89 2.445-7.113 2.445-12.447zm22.894-1c0-8.89 2.445-16.226 7.446-21.894s11.891-8.558 20.671-8.558c8.89 0 15.781 2.89 20.782 8.558 5.002 5.668 7.446 13.003 7.446 22.005v1.111c0 9.003-2.445 16.337-7.446 22.005s-11.891 8.446-20.67 8.446c-8.892 0-15.782-2.777-20.783-8.446-5.001-5.667-7.446-13.002-7.446-22.005zm16.115 1.11c0 5.447 1 9.78 2.89 13.115q2.834 5.002 9.335 5.002c4.112 0 7.224-1.667 9.113-5.002 1.89-3.334 2.89-7.668 2.89-13.114v-1.111c0-5.334-1-9.67-2.89-13.004-2-3.333-5.001-5-9.224-5-4.224 0-7.224 1.667-9.224 5-1.889 3.334-2.89 7.67-2.89 13.004zm69.126-45.12v14.67h10.558v11.336h-10.558v30.45c0 2.335.445 4.001 1.445 5.003 1 1 2.223 1.445 3.89 1.445 1.11 0 2.111 0 2.89-.112.777-.111 1.777-.222 2.777-.444L512 174.03c-1.778.555-3.556 1-5.334 1.222-1.779.223-3.668.444-5.78.444-5.556 0-9.89-1.555-12.89-4.556-3.001-3.112-4.558-7.89-4.558-14.558V126.02h-8.779v-11.336h8.78v-14.67z"></path></g>', 1)
    ]), 4));
  }
});
export {
  d as _
};