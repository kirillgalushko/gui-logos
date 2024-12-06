import { defineComponent as t, computed as m, openBlock as v, createElementBlock as i, normalizeStyle as o, createElementVNode as e } from "vue";
const s = /* @__PURE__ */ t({
  __name: "LogoKafka2",
  props: {
    width: {},
    height: {}
  },
  setup(l) {
    const c = l, a = m(() => ({
      width: c.width || "1em",
      height: c.height || "1em",
      minWidth: c.width || "1em",
      minHeight: c.height || "1em"
    }));
    return (n, h) => (v(), i("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "234",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 234",
      style: o(a.value)
    }, h[0] || (h[0] = [
      e("g", { fill: "#1A1919" }, [
        e("path", { d: "M49.763 20.98c-2.582-2.593-6.165-4.19-10.16-4.19-3.984 0-7.539 1.597-10.089 4.19h-.065a14.3 14.3 0 0 0-4.172 10.137c0 3.992 1.597 7.562 4.172 10.112l.065.07c2.55 2.57 6.105 4.145 10.09 4.145 3.994 0 7.577-1.575 10.16-4.145l.03-.07c2.585-2.55 4.162-6.12 4.162-10.112 0-3.97-1.577-7.562-4.162-10.137zm-10.16 196.125c3.995 0 7.578-1.627 10.16-4.172l.03-.076c2.586-2.54 4.163-6.133 4.163-10.082 0-3.991-1.577-7.567-4.162-10.154h-.03c-2.583-2.618-6.166-4.2-10.16-4.2-3.985 0-7.54 1.582-10.09 4.2h-.065a14.32 14.32 0 0 0-4.172 10.154c0 3.95 1.597 7.543 4.172 10.082l.065.076a14.24 14.24 0 0 0 10.09 4.172m78.062-43.41c3.548-.933 6.76-3.21 8.723-6.654l.264-.504c1.745-3.262 2.063-7.034 1.13-10.38a14.15 14.15 0 0 0-6.68-8.716l-.202-.136a14.3 14.3 0 0 0-10.667-1.286c-3.563.89-6.764 3.262-8.715 6.677-1.976 3.395-2.387 7.296-1.442 10.887.975 3.533 3.26 6.725 6.677 8.72h.02c3.425 1.969 7.297 2.322 10.892 1.392M54.3 102.265c-3.76-3.75-8.951-6.102-14.695-6.102-5.737 0-10.912 2.352-14.666 6.103a20.64 20.64 0 0 0-6.048 14.658 20.87 20.87 0 0 0 6.048 14.723c3.754 3.728 8.929 6.058 14.666 6.058 5.744 0 10.934-2.33 14.695-6.058a20.84 20.84 0 0 0 6.058-14.723 20.6 20.6 0 0 0-6.058-14.658m-8.264-24.419a39.4 39.4 0 0 1 21.55 11.133h.043a41 41 0 0 1 2.62 2.906l14.305-8.274a30.4 30.4 0 0 1-.466-17.587c2.038-7.63 6.985-14.46 14.402-18.74l.24-.153c7.337-4.15 15.674-5.014 23.199-2.976a30.88 30.88 0 0 1 18.777 14.417v.023c4.26 7.364 5.123 15.814 3.092 23.421a30.67 30.67 0 0 1-14.402 18.76l-1.954 1.154h-.198c-6.852 3.262-14.387 3.773-21.307 1.95-5.682-1.504-10.892-4.678-14.974-9.18l-14.285 8.253a39.3 39.3 0 0 1 2.55 13.97c0 4.922-.907 9.671-2.55 14.037l14.285 8.229a30.5 30.5 0 0 1 14.974-9.182 30.5 30.5 0 0 1 23.459 3.107l.473.22v.023c7.134 4.325 11.923 11 13.929 18.54a30.82 30.82 0 0 1-3.092 23.395l-.258.514-.03-.042c-4.278 7.113-11.022 11.932-18.467 13.97-7.635 2.014-16.087 1.154-23.461-3.088v-.058c-7.417-4.288-12.364-11.133-14.402-18.748a30.33 30.33 0 0 1 .466-17.559l-14.304-8.254a41 41 0 0 1-2.62 2.861l-.043.045c-5.725 5.745-13.211 9.736-21.551 11.065v16.529c5.942 1.24 11.263 4.212 15.43 8.382l.023.042a30.74 30.74 0 0 1 9.046 21.824c0 8.49-3.46 16.193-9.046 21.782l-.023.088c-5.626 5.586-13.344 9.046-21.861 9.046-8.473 0-16.21-3.46-21.824-9.046h-.023v-.088c-5.591-5.59-9.059-13.292-9.059-21.782a30.73 30.73 0 0 1 9.06-21.824v-.042h.022c4.164-4.17 9.495-7.141 15.415-8.382v-16.529c-8.337-1.329-15.812-5.32-21.526-11.065l-.06-.045C4.473 137.728.005 127.858.005 116.924c0-10.912 4.468-20.781 11.604-27.945h.06a39.3 39.3 0 0 1 21.526-11.133V61.388a31.26 31.26 0 0 1-15.415-8.402h-.023v-.045c-5.591-5.612-9.059-13.307-9.059-21.824 0-8.473 3.468-16.235 9.06-21.824l.022-.023C23.394 3.661 31.13.204 39.604.204c8.517 0 16.235 3.457 21.861 9.066v.023h.023a30.86 30.86 0 0 1 9.046 21.824c0 8.517-3.46 16.212-9.046 21.824l-.023.045a31.2 31.2 0 0 1-15.43 8.402zm80.353-10.977-.123-.18c-1.97-3.325-5.12-5.542-8.6-6.497-3.595-.955-7.467-.554-10.912 1.422h.02c-3.437 1.95-5.737 5.14-6.697 8.715a14.34 14.34 0 0 0 1.442 10.887l.068.088a14.1 14.1 0 0 0 8.647 6.544c3.536 1 7.475.577 10.87-1.399l.183-.088a14.32 14.32 0 0 0 6.496-8.605c.948-3.57.57-7.472-1.394-10.887m63.471 4.833h15.961v48.723l23.018-25.46h19.138l-27.789 29.497 27.905 37.39h-18.276l-23.996-33.398v33.398H189.86zm76.66 56.995c0 8.297 5.967 20.36 20.344 20.36 8.896 0 14.75-4.636 17.787-10.712 1.59-2.948 2.322-6.1 2.568-9.38.11-3.174-.49-6.474-1.838-9.405-2.798-6.318-9.01-11.797-18.635-11.797-12.908 0-20.227 10.466-20.227 20.824zm56.533 33.155h-15.97v-9.623c-4.25 7.782-13.148 11.689-22.533 11.689-21.446 0-33.99-16.702-33.99-35.574 0-21.07 15.227-35.442 33.99-35.442 12.183 0 19.612 6.457 22.533 11.822v-9.758h15.97zm18.073-54.578h-8.272V94.967h8.272v-3.769c0-19.873 15.112-21.072 26.57-21.205V82.28c-4.03 0-10.601 0-10.601 9.403v3.285h10.601v12.308h-10.601v54.578h-15.97zm37.424-35.572h15.957v48.723l23.023-25.46h19.138l-27.789 29.497 27.9 37.39h-18.276l-23.996-33.398v33.398H378.55zm76.66 56.995c0 8.297 5.965 20.36 20.345 20.36 8.884 0 14.738-4.636 17.78-10.712 1.594-2.948 2.329-6.1 2.57-9.38.11-3.174-.49-6.474-1.84-9.405-2.794-6.318-9.005-11.797-18.628-11.797-12.91 0-20.227 10.466-20.227 20.824zm56.529 33.155h-15.965v-9.623c-4.262 7.782-13.153 11.689-22.533 11.689-21.446 0-33.98-16.702-33.98-35.574 0-21.07 15.222-35.442 33.98-35.442 12.175 0 19.612 6.457 22.533 11.822v-9.758h15.965z" })
      ], -1)
    ]), 4));
  }
});
export {
  s as _
};