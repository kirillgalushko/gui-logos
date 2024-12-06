import { defineComponent as t, computed as i, openBlock as m, createElementBlock as s, normalizeStyle as v, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ t({
  __name: "LogoFluxxor",
  props: {
    width: {},
    height: {}
  },
  setup(a) {
    const h = a, l = i(() => ({
      width: h.width || "1em",
      height: h.height || "1em",
      minWidth: h.width || "1em",
      minHeight: h.height || "1em"
    }));
    return (o, e) => (m(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "322",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 322",
      style: v(l.value)
    }, e[0] || (e[0] = [
      c("g", null, [
        c("path", {
          fill: "#FFF",
          d: "M252.464 309.711c0 4.974-3.521 8.582-8.479 8.582H12.83c-4.958 0-9.294-3.608-9.294-8.582V13.212c0-4.975 4.336-8.908 9.294-8.908h231.155c4.959 0 8.479 3.933 8.479 8.908z"
        }),
        c("path", {
          fill: "#000",
          d: "M243.985 321.829H12.83C5.756 321.829 0 316.393 0 309.71V13.212C0 6.35 5.756.768 12.83.768h231.155C250.834.768 256 6.117 256 13.212V309.71c0 6.909-5.166 12.119-12.015 12.119M12.83 7.84c-3.121 0-5.758 2.46-5.758 5.372V309.71c0 3.159 2.928 5.047 5.758 5.047h231.155c3.003 0 4.943-1.981 4.943-5.047V13.212c0-3.163-2.032-5.372-4.943-5.372z"
        }),
        c("path", {
          fill: "#000",
          d: "M203.439 60.164c-15.099 0-27.382 12.284-27.382 27.383a27.24 27.24 0 0 0 5.694 16.688l-46.019 46.019a16.3 16.3 0 0 0-8.866-2.613 16.3 16.3 0 0 0-8.821 2.584l-45.99-45.99a27.24 27.24 0 0 0 5.695-16.688c0-15.099-12.284-27.383-27.383-27.383S22.984 72.448 22.984 87.547s12.284 27.383 27.383 27.383a27.24 27.24 0 0 0 16.688-5.694l45.99 45.99a16.3 16.3 0 0 0-2.584 8.821c0 7.983 5.732 14.649 13.296 16.106v65.39c-13.622 1.566-24.237 13.162-24.237 27.197 0 15.099 12.284 27.383 27.383 27.383s27.383-12.284 27.383-27.383c0-13.766-10.212-25.187-23.457-27.098v-65.677c7.137-1.777 12.442-8.238 12.442-15.918 0-3.227-.94-6.236-2.555-8.776l46.035-46.036a27.23 27.23 0 0 0 16.688 5.695c15.1 0 27.383-12.284 27.383-27.383s-12.283-27.383-27.383-27.383M50.367 107.858c-11.2 0-20.311-9.111-20.311-20.311s9.111-20.311 20.311-20.311 20.311 9.112 20.311 20.311a20.2 20.2 0 0 1-3.677 11.634l-8.064-8.065a9.6 9.6 0 0 0 .804-3.84c0-5.309-4.32-9.629-9.63-9.629-5.309 0-9.628 4.32-9.628 9.629 0 5.31 4.319 9.629 9.628 9.629a9.6 9.6 0 0 0 3.82-.794l8.07 8.07a20.2 20.2 0 0 1-11.634 3.677m96.847 164.882c0 11.2-9.111 20.311-20.311 20.311s-20.311-9.111-20.311-20.311c0-10.129 7.454-18.55 17.165-20.067v11.344c-3.773 1.305-6.494 4.884-6.494 9.095 0 5.309 4.319 9.629 9.629 9.629s9.629-4.32 9.629-9.629c0-3.906-2.342-7.27-5.692-8.779v-11.52c9.327 1.834 16.385 10.07 16.385 19.927m56.225-164.882a20.2 20.2 0 0 1-11.634-3.677l8.07-8.07a9.6 9.6 0 0 0 3.819.794c5.309 0 9.629-4.319 9.629-9.629s-4.32-9.629-9.629-9.629-9.629 4.32-9.629 9.629c0 1.366.29 2.663.804 3.841l-8.064 8.064a20.2 20.2 0 0 1-3.677-11.634c0-11.199 9.112-20.311 20.311-20.311s20.312 9.112 20.312 20.311-9.112 20.311-20.312 20.311m-64.801-93.692h-7.728l-8.447 9.873-8.446-9.873h-8.909l12.901 15.106-12.863 15.027h8.951l8.367-9.794 8.406 9.794h15.512l8.367-9.794 8.406 9.794h8.933l-12.884-15.026 12.964-15.107h-8.975l-8.445 9.873-8.446-9.873zm-.022 28.748L126.92 29.273l11.715-13.652 11.658 13.651zM22.78 25.901h17.877v6.662H22.78zm-3.96-11.734c-.465 0-.907.085-1.313.254-.409.17-.768.413-1.066.72a3.36 3.36 0 0 0-.952 2.356v26.802h6.622V20.787H42.98v-6.62zm33.573 23.511V14.166h-6.621v26.803c0 .467.085.909.254 1.313.169.406.406.763.703 1.059.299.299.656.536 1.06.704.405.169.847.254 1.314.254h24.46v-6.621zm44.99-23.512V37.68h-8.445q-.225-.001-.948-.068a9.5 9.5 0 0 1-1.658-.328 10.4 10.4 0 0 1-1.996-.807 6.8 6.8 0 0 1-1.869-1.454c-.566-.614-1.042-1.398-1.415-2.328-.372-.926-.561-2.091-.561-3.462V14.166H73.87v15.066c0 1.74.212 3.346.63 4.775s1.003 2.72 1.74 3.836a13.2 13.2 0 0 0 2.592 2.908 15 15 0 0 0 3.144 2.008c1.106.522 2.267.914 3.45 1.164 1.177.25 2.359.376 3.512.376h11.736c.453 0 .888-.085 1.293-.254a3.4 3.4 0 0 0 1.062-.696q.463-.452.721-1.068c.168-.406.254-.847.254-1.312V14.166zm105.685 7.239c-.634-1.559-1.529-2.918-2.659-4.04a12.3 12.3 0 0 0-4.025-2.646c-1.542-.634-3.239-.954-5.045-.954h-7.05c-1.807 0-3.508.32-5.055.953-1.548.634-2.906 1.524-4.035 2.647-1.131 1.122-2.029 2.481-2.67 4.038-.64 1.555-.965 3.266-.965 5.085v5.488c0 1.832.325 3.547.966 5.097s1.538 2.908 2.667 4.035a12.1 12.1 0 0 0 4.04 2.649c1.548.626 3.247.943 5.052.943h7.05c1.807 0 3.503-.318 5.043-.943a12.1 12.1 0 0 0 4.028-2.649 12.2 12.2 0 0 0 2.658-4.038c.633-1.547.954-3.261.954-5.094v-5.488c0-1.821-.321-3.531-.954-5.083m-5.667 5.084v5.488c0 .935-.149 1.788-.441 2.536a5.4 5.4 0 0 1-1.232 1.898 5.6 5.6 0 0 1-1.914 1.226c-.748.293-1.594.442-2.516.442h-7.009c-.922 0-1.768-.149-2.516-.442a5.6 5.6 0 0 1-1.914-1.226 5.4 5.4 0 0 1-1.231-1.898c-.293-.749-.442-1.602-.442-2.536v-5.488c0-.934.149-1.788.442-2.536a5.45 5.45 0 0 1 1.23-1.898 5.6 5.6 0 0 1 1.915-1.226c.748-.293 1.594-.442 2.516-.442h7.05c.907 0 1.747.149 2.496.441.74.291 1.379.703 1.901 1.224a5.5 5.5 0 0 1 1.223 1.9c.293.748.442 1.602.442 2.537m31.855 8.268q.23-.038.464-.085a10.6 10.6 0 0 0 2.319-.761 11 11 0 0 0 2.19-1.336 9.1 9.1 0 0 0 1.878-1.985 9.7 9.7 0 0 0 1.289-2.668c.314-.999.473-2.142.473-3.396l-.001-3.324c0-.705-.121-1.468-.36-2.266a6.9 6.9 0 0 0-1.204-2.288c-.562-.71-1.295-1.305-2.18-1.77-.899-.472-2-.711-3.272-.711h-19.767c-.465 0-.907.085-1.314.254q-.614.257-1.067.72a3.4 3.4 0 0 0-.696 1.064 3.3 3.3 0 0 0-.254 1.292v26.802h6.621V20.787h16.477q.126 0 .274.015l.078.073c.001.001.042.092.042.366v3.285c0 .586-.091 1.106-.269 1.547a3.1 3.1 0 0 1-.744 1.105 3.7 3.7 0 0 1-1.182.749 5.3 5.3 0 0 1-1.523.358h-12.484v6.621h4.189l10.855 9.393h10.216z"
        }),
        c("path", {
          fill: "#000",
          d: "M235.905 311.221H21.034c-5.359 0-9.719-3.714-9.719-8.28V57.116c0-4.555 4.36-8.26 9.719-8.26h214.871c4.904 0 8.073 3.242 8.073 8.26v245.825c0 5.03-3.169 8.28-8.073 8.28M21.034 50.977c-4.189 0-7.597 2.754-7.597 6.139v245.825c0 3.396 3.408 6.158 7.597 6.158h214.871c3.726 0 5.951-2.302 5.951-6.158V57.116c0-3.844-2.225-6.139-5.951-6.139z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  p as _
};