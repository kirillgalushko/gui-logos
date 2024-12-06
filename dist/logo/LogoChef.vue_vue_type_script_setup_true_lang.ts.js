import { defineComponent as c, computed as p, openBlock as e, createElementBlock as i, normalizeStyle as d, createStaticVNode as v } from "vue";
const f = /* @__PURE__ */ c({
  __name: "LogoChef",
  props: {
    width: {},
    height: {}
  },
  setup(l) {
    const h = l, a = p(() => ({
      width: h.width || "1em",
      height: h.height || "1em",
      minWidth: h.width || "1em",
      minHeight: h.height || "1em"
    }));
    return (m, t) => (e(), i("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "274",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 274",
      style: d(a.value)
    }, t[0] || (t[0] = [
      v('<g><g fill="#435363"><path d="M0 242.258v-.17c0-17.03 12.834-30.977 31.232-30.977 11.298 0 18.057 3.769 23.617 9.24l-8.387 9.67c-4.621-4.191-9.328-6.758-15.319-6.758-10.096 0-17.37 8.386-17.37 18.657v.17c0 10.271 7.103 18.829 17.37 18.829 6.847 0 11.039-2.741 15.746-7.018l8.387 8.472c-6.158 6.584-13.002 10.694-24.556 10.694-17.626 0-30.72-13.606-30.72-30.81m72.53-30.118h13.175v23.702h24.303v-23.702h13.183v59.9h-13.183v-24.047H85.705v24.047H72.53zm71.86.017h45.907v11.909h-32.604v12.342h28.689v11.913h-28.69v12.78h33.038v11.909h-46.34zm65.53-.017h45.606v11.98h-32.434v12.75h28.583v11.98h-28.583v23.19H209.92z"></path></g><g><path fill="#435363" d="M129.587 127.669c-21.859 0-39.646-17.784-39.646-39.643 0-21.862 17.787-39.649 39.646-39.649 18.046 0 33.3 12.12 38.083 28.645h15.34c-5.107-24.818-27.116-43.537-53.423-43.537-30.071 0-54.538 24.467-54.538 54.541 0 30.072 24.467 54.539 54.538 54.539 26.307 0 48.316-18.716 53.422-43.534h-15.34c-4.781 16.52-20.036 28.638-38.082 28.638"></path><path fill="#435363" d="M102.86 114.75c6.848 6.847 16.303 11.09 26.727 11.09v-15.808a21.96 21.96 0 0 1-15.561-6.448z"></path><path fill="#F38B00" d="M91.774 88.023c0 5.41 1.154 10.557 3.209 15.217l14.459-6.36a21.9 21.9 0 0 1-1.864-8.857c0-12.155 9.854-22.006 22.006-22.006V50.21c-20.849 0-37.81 16.964-37.81 37.813"></path><path fill="#435363" d="m143.295 52.787-5.734 14.736a22.06 22.06 0 0 1 11.076 9.495h17.121c-3.379-11.096-11.735-20.043-22.463-24.23"></path><path fill="#F38B00" d="m137.568 108.524 5.73 14.735c10.729-4.188 19.085-13.138 22.467-24.235h-17.121a22.08 22.08 0 0 1-11.076 9.5"></path><path fill="#435363" d="M59.63 109.175a75 75 0 0 1-.709-2.498l-.041-.154a78 78 0 0 1-.573-2.341 79 79 0 0 1-.526-2.512q-.086-.456-.16-.912c-.096-.543-.192-1.082-.277-1.631a66 66 0 0 1-.195-1.4 72 72 0 0 1-.658-9.707H41.557c-.003 3.577.222 7.11.642 10.598.007.075.02.15.03.225q.175 1.427.393 2.837.063.389.13.781c.13.772.263 1.543.413 2.311.075.41.164.813.25 1.219q.186.916.395 1.83.186.798.393 1.597c.12.474.235.949.361 1.423.171.628.352 1.25.533 1.874.075.26.143.526.222.782h.007a87 87 0 0 0 3.672 9.96l13.684-6.018a73 73 0 0 1-3.051-8.264"></path><path fill="#F38B00" d="M129.587 161.123c-20.152 0-38.42-8.206-51.654-21.443l-10.578 10.578c15.93 15.93 37.926 25.795 62.232 25.795 44.889 0 81.924-33.6 87.34-77.022h-15.07c-5.324 35.1-35.703 62.092-72.27 62.092m0-146.193c16.374 0 31.498 5.41 43.698 14.54l8.946-11.99C167.547 6.502 149.327 0 129.587 0 92.235 0 60.32 23.265 47.541 56.098l13.93 5.42c10.632-27.24 37.157-46.588 68.116-46.588"></path><path fill="#435363" d="M201.858 77.022h15.07a87.45 87.45 0 0 0-12.66-35.608l-12.691 7.919a72.7 72.7 0 0 1 10.28 27.689"></path><path fill="#F38B00" d="M184.88 77.022H200c-3.945-25.354-21.309-46.32-44.577-55.402l-5.4 13.885c17.695 6.91 31.078 22.498 34.857 41.517"></path><path fill="#435363" d="m129.587 31.652.004-14.89h-.004c-30.184 0-56.04 18.863-66.41 45.422l13.876 5.4c8.205-21.01 28.658-35.932 52.534-35.932"></path><path fill="#F38B00" d="M73.216 88.023H58.327c0 29.945 18.572 55.624 44.8 66.15l5.53-13.82c-20.75-8.329-35.441-28.641-35.441-52.33"></path><path fill="#435363" d="M129.587 144.394v14.893c35.553 0 65.106-26.174 70.414-60.263h-15.125c-5.13 25.84-27.968 45.37-55.289 45.37"></path></g></g>', 1)
    ]), 4));
  }
});
export {
  f as _
};