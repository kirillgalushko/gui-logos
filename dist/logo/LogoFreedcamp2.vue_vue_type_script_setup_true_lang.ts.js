import { defineComponent as m, computed as i, openBlock as l, createElementBlock as o, normalizeStyle as n, createElementVNode as e } from "vue";
const r = /* @__PURE__ */ m({
  __name: "LogoFreedcamp2",
  props: {
    width: {},
    height: {}
  },
  setup(v) {
    const c = v, t = i(() => ({
      width: c.width || "1em",
      height: c.height || "1em",
      minWidth: c.width || "1em",
      minHeight: c.height || "1em"
    }));
    return (s, h) => (l(), o("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "228",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 228",
      style: n(t.value)
    }, h[0] || (h[0] = [
      e("g", null, [
        e("path", {
          fill: "#38A1E7",
          d: "M90.624 148.452c9.08 0 13.212 4.316 13.845 11.555h.121q-.034.504-.057 1.01.022.514.022 1.06v1.038c.647 10.823 9.116 19.59 19.982 20.963q1.24-.136 2.617-.135h3.285c10.432-1.728 18.446-10.311 19.08-20.835v-1.032c0-.448.013-.874.035-1.3a16 16 0 0 0-.036-.769h.086c.64-7.239 4.764-11.555 13.852-11.555h13.93v13.624c0 9.401-4.899 13.625-13.937 13.625h-2.41c-10.035 1.117-18.091 8.534-19.947 18.098v3.769c0 2.04-.235 3.833-.683 5.39v15.396c0 5.056-4.26 9.202-9.401 9.202h-8.79c-5.176 0-9.393-4.146-9.393-9.202v-21.07q.001-1.304.355-2.51c-1.514-10.027-9.77-17.92-20.145-19.073h-2.418c-9.031 0-13.93-4.224-13.93-13.625v-13.624zm36.537 0c9.913 0 13.93 8.163 13.93 13.624 0 9.401-4.906 13.625-13.937 13.625s-13.93-5.148-13.93-13.625 4.017-13.624 13.937-13.624m-112.427-38.18c9.081 0 13.213 4.316 13.846 11.548h.128c-.022.342-.05.676-.064 1.017.014.349.02.697.02 1.06v1.031c.655 10.83 9.174 19.605 20.033 20.964a25 25 0 0 1 2.574-.128h3.264c10.254-1.686 18.226-10.006 19.1-20.288v-1.58c0-.497.015-.973.043-1.443l-.042-.633h.085c.64-7.232 4.807-11.548 13.888-11.548h13.938v13.625c0 9.4-4.943 13.618-13.938 13.618h-2.44c-10.019 1.116-18.104 8.533-19.967 18.105v3.761c0 9.401-4.893 13.618-13.93 13.618-11.322 0-13.932-5.141-13.932-13.618 0-.654.022-1.28.072-1.898-1.138-10.454-9.586-18.78-20.239-19.968h-2.439c-9.03 0-13.938-4.217-13.938-13.618v-13.625zm154.46 0c9.082 0 13.213 4.316 13.846 11.548h.128c-.021.342-.05.676-.064 1.017.014.349.021.697.021 1.06v1.031c.647 10.707 8.981 19.406 19.663 20.914l.366.049.491-.046a26 26 0 0 1 2.087-.081h3.264c10.432-1.707 18.503-10.304 19.143-20.836v-1.031c0-.356 0-.711.021-1.06l-.071-1.017h.135c.633-7.232 4.764-11.548 13.845-11.548H256v13.625c0 9.4-4.935 13.618-13.938 13.618h-2.439c-10.012 1.116-18.098 8.54-19.96 18.112v3.754c0 9.401-4.9 13.618-13.931 13.618-11.321 0-13.938-5.141-13.938-13.618 0-.654.028-1.28.07-1.898-1.137-10.454-9.578-18.78-20.23-19.968h-2.44c-9.03 0-13.937-4.217-13.937-13.618v-13.625zm36.538 0c9.92 0 13.937 8.156 13.937 13.625 0 9.4-4.906 13.618-13.937 13.618-8.996 0-13.938-5.142-13.938-13.618 0-8.484 4.018-13.625 13.938-13.625m-154.454 0c9.913 0 13.924 8.156 13.924 13.625 0 9.275-4.763 13.504-13.572 13.615l-.355.002-.366-.002c-8.802-.139-13.569-5.255-13.569-13.615 0-8.484 4.018-13.625 13.938-13.625m39.346-37.127c9.074 0 13.212 4.316 13.838 11.555h.128l-.057 1.01q.022.523.022 1.067v1.031c.654 10.83 9.13 19.598 20.003 20.956a25 25 0 0 1 2.596-.128h3.257c10.446-1.72 18.474-10.304 19.107-20.835V86.77q.001-.662.036-1.302a9 9 0 0 0-.036-.768h.093c.625-7.239 4.764-11.555 13.845-11.555h13.93V86.77c0 9.4-4.899 13.625-13.937 13.625h-2.41c-10.035 1.116-18.091 8.533-19.947 18.105v3.761c0 9.401-4.907 13.618-13.938 13.618-11.321 0-13.93-5.141-13.93-13.618 0-.654.028-1.28.07-1.898-1.138-10.454-9.578-18.78-20.26-19.968h-2.417c-9.031 0-13.93-4.224-13.93-13.625V73.145zm36.537-.007c9.913 0 13.93 8.156 13.93 13.625 0 9.4-4.906 13.625-13.937 13.625s-13.93-5.149-13.93-13.625c0-8.477 4.017-13.625 13.937-13.625M13.938 36.728c9.074 0 13.212 4.317 13.838 11.556h.128l-.064 1.01c.014.349.021.697.021 1.06v1.024c.655 10.837 9.174 19.62 20.032 20.978v-.008q1.218-.128 2.575-.128h3.264c10.439-1.706 18.517-10.31 19.143-20.856v-1.01c0-.356 0-.711.021-1.053a44 44 0 0 0-.064-1.017h.128c.633-7.239 4.764-11.555 13.845-11.555h13.938v13.625c0 9.4-4.942 13.618-13.938 13.618h-2.439c-10.02 1.116-18.105 8.533-19.968 18.104v3.762c0 9.401-4.892 13.625-13.93 13.625-11.279 0-13.931-5.141-13.931-13.625 0-.654.021-1.28.071-1.891-1.138-10.454-9.579-18.788-20.231-19.975H13.93C4.907 63.972 0 59.755 0 50.354V36.729zM256 36.723v13.625c0 9.4-4.935 13.617-13.938 13.617h-2.439c-10.012 1.117-18.098 8.54-19.96 18.112v3.755c0 9.401-4.9 13.625-13.931 13.625-11.321 0-13.938-5.141-13.938-13.625 0-.654.028-1.28.07-1.899-1.137-10.453-9.578-18.773-20.23-19.968h-2.44c-9.03 0-13.937-4.216-13.937-13.617V36.729h13.938c9.08 0 13.212 4.316 13.845 11.555h.128l-.064 1.01c.014.349.021.697.021 1.06v1.024c.655 10.837 9.174 19.612 20.032 20.978l-.007-.008a25 25 0 0 1 2.582-.128h3.264c10.432-1.706 18.503-10.304 19.143-20.835v-1.038c0-.356 0-.711.021-1.06l-.071-1.01h.135c.626-7.239 4.764-11.555 13.845-11.555zm-205.525.007c9.913 0 13.923 8.156 13.923 13.625 0 9.4-4.892 13.618-13.93 13.618-8.996 0-13.931-5.142-13.931-13.618 0-8.484 4.053-13.625 13.938-13.625m155.257 0c9.92 0 13.937 8.156 13.937 13.625 0 9.4-4.906 13.618-13.937 13.618-8.996 0-13.938-5.142-13.938-13.618 0-8.484 4.018-13.625 13.938-13.625M90.624 0c9.08 0 13.212 4.316 13.838 11.556h.128l-.057 1.01c.015.348.022.696.022 1.059v1.038c.654 10.83 9.13 19.598 20.003 20.957v.007a25 25 0 0 1 2.596-.128h3.257c10.446-1.721 18.474-10.304 19.107-20.836v-1.031q.001-.661.036-1.301a9 9 0 0 0-.036-.768h.093C150.236 4.316 154.375 0 163.456 0h13.93v13.625c0 9.4-4.899 13.625-13.937 13.625h-2.446c-10.02 1.138-18.063 8.547-19.911 18.098v3.768c0 9.401-4.907 13.618-13.938 13.618-11.321 0-13.93-5.148-13.93-13.618 0-.654.028-1.28.07-1.898-1.138-10.446-9.557-18.766-20.224-19.968h-2.453c-9.031 0-13.93-4.224-13.93-13.625V0zm36.537 0c9.913 0 13.93 8.156 13.93 13.625 0 9.4-4.906 13.625-13.937 13.625s-13.93-5.149-13.93-13.625C113.223 5.148 117.24 0 127.16 0"
        })
      ], -1)
    ]), 4));
  }
});
export {
  r as _
};