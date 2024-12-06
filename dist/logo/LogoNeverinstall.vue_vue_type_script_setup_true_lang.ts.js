import { defineComponent as e, computed as i, openBlock as q, createElementBlock as m, normalizeStyle as n, createStaticVNode as p } from "vue";
const s = /* @__PURE__ */ e({
  __name: "LogoNeverinstall",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const t = o, l = i(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (v, h) => (q(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "159",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 159",
      style: n(l.value)
    }, h[0] || (h[0] = [
      p('<g><g><polygon fill="#5B29FF" points="55.2083713 63.8690382 0 95.4712832 0 32.1398416"></polygon><polygon fill="#2962FF" points="55.2092879 63.8552889 109.782901 32.1264131 164.991731 63.8552889 164.991731 126.425021 109.782901 158.154217 109.782901 95.5844855"></polygon><polygon fill="#FFC629" points="55.2083713 0 0 32.1097765 55.2083713 63.8387898 109.782443 32.1097765"></polygon><path fill="#FAFAFA" d="m0 32.11 55.208 31.729 54.574-31.73L55.208 0zm10.301-.027 44.893 25.8 44.376-25.8-44.377-26.11z"></path><polygon fill="#FFBC00" points="55.2037882 57.9119366 55.2037882 6.01979824 10.3119545 32.1277422"></polygon></g><path fill="#192137" d="M238.11 95.786v55.793h-16.154V95.786zm-8.077-25.858q4.453 0 7.249 2.489 2.485 2.213 2.761 5.408l.018.284q.017.28.017.566 0 4.044-2.796 6.74-2.796 2.593-7.249 2.593t-7.248-2.592-2.797-6.43c0-2.594.933-4.737 2.797-6.465q2.795-2.593 7.248-2.593m51.754 25.029q10.356 0 16.672 6.222 6.42 6.222 6.42 18.459v31.94h-16.154v-29.451q0-6.638-2.9-9.852-2.898-3.319-8.387-3.318-6.11 0-9.734 3.837-3.624 3.732-3.624 11.2v27.585h-16.155V95.786h15.43v6.533q3.21-3.525 7.973-5.392 4.763-1.97 10.46-1.97m53.372 57.451q-6.938 0-13.565-1.66-6.628-1.761-10.563-4.354l5.385-11.615q3.727 2.385 9.01 3.94 5.28 1.452 10.355 1.452 10.251 0 10.251-5.081 0-2.385-2.796-3.422t-8.595-1.763q-6.834-1.038-11.287-2.386-4.452-1.348-7.766-4.77-3.21-3.422-3.21-9.748 0-5.289 3.002-9.333 3.107-4.15 8.906-6.43 5.902-2.281 13.876-2.281 5.903 0 11.702 1.347 5.903 1.246 9.734 3.526l-5.385 11.512q-7.353-4.149-16.051-4.149-5.177 0-7.767 1.452-2.588 1.452-2.588 3.734 0 2.592 2.796 3.63 2.174.806 6.354 1.55l2.551.42q6.835 1.14 11.184 2.488 4.35 1.245 7.56 4.667 3.21 3.423 3.21 9.541 0 5.185-3.107 9.23-3.107 4.043-9.112 6.326-5.904 2.177-14.084 2.177m51.285-68.963V97.03h13.876v12.445h-13.876v22.711q0 3.526 1.76 5.496 1.865 1.867 5.178 1.867 3.832 0 6.524-2.074l4.35 11.407q-2.383 1.763-5.903 2.697-3.418.83-7.249.83-9.941 0-15.43-5.082-5.385-5.082-5.385-14.933v-22.92h-8.594V97.03h8.594V83.445zm43.137 11.512q12.945 0 19.882 6.222 6.939 6.118 6.939 18.562v31.838h-15.12v-6.949q-4.556 7.779-16.982 7.778-6.42 0-11.184-2.177-4.66-2.178-7.145-6.015t-2.485-8.711q0-7.779 5.799-12.237 5.902-4.46 18.122-4.46h12.84q0-5.289-3.21-8.089-3.21-2.903-9.63-2.903-4.453 0-8.803 1.451-4.245 1.349-7.248 3.734l-5.8-11.304q4.557-3.214 10.874-4.978a49.5 49.5 0 0 1 13.151-1.762m10.666 33.288h-11.08q-9.941 0-9.941 6.534 0 3.111 2.382 4.977 2.485 1.763 6.73 1.763 4.143 0 7.353-1.866 3.21-1.97 4.556-5.704zm24.56-53.614h16.156v76.948h-16.155zm25.969 0h16.155v76.948h-16.155zM253.845 5.747q10.353 0 16.67 6.202 6.418 6.202 6.418 18.4v31.837h-16.151V32.829q0-6.615-2.9-9.82-2.898-3.308-8.386-3.308-6.108 0-9.732 3.825-3.624 3.72-3.624 11.164v27.496h-16.152V6.574h15.427v6.512q3.21-3.515 7.972-5.375 4.763-1.965 10.458-1.964m88.151 28.84-.152 2.257-.159 2.084h-42.139q1.14 5.169 5.384 8.166t10.56 2.998q4.35 0 7.662-1.24 3.417-1.344 6.316-4.135l8.594 9.303q-7.87 8.993-22.985 8.993-9.423 0-16.67-3.618-7.247-3.72-11.181-10.234-3.935-6.511-3.935-14.781 0-8.166 3.83-14.679 3.935-6.615 10.665-10.233 6.834-3.72 15.22-3.721 8.18 0 14.806 3.514 6.625 3.515 10.353 10.13 3.831 6.513 3.831 15.195M313.11 17.943q-5.488 0-9.214 3.101-3.728 3.102-4.556 8.476h27.437q-.828-5.271-4.555-8.372-3.727-3.205-9.112-3.205m93.918-11.37-23.503 55.612h-16.67l-23.4-55.611h16.67l15.427 37.832 15.944-37.832zm59.637 28.012-.312 4.342h-42.137q1.138 5.169 5.383 8.166t10.561 2.998q4.349 0 7.662-1.24 3.416-1.344 6.315-4.135l8.596 9.303q-7.872 8.993-22.987 8.993-9.422 0-16.67-3.618-7.247-3.72-11.181-10.234-3.936-6.511-3.935-14.781 0-8.166 3.831-14.679 3.935-6.615 10.664-10.233 6.834-3.72 15.22-3.721 8.18 0 14.806 3.514 6.626 3.515 10.353 10.13 3.83 6.513 3.831 15.195m-28.886-16.642q-5.487 0-9.215 3.101t-4.556 8.476h27.438q-.829-5.271-4.556-8.372-3.727-3.205-9.111-3.205m55.065-4.031q2.9-4.031 7.768-6.099 4.97-2.067 11.389-2.067v14.885l-2.502-.169-1.123-.038q-6.938 0-10.871 3.928-3.933 3.825-3.933 11.577v26.256h-16.155V6.574h15.427z"></path></g>', 1)
    ]), 4));
  }
});
export {
  s as _
};