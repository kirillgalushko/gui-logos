import { defineComponent as l, computed as m, openBlock as t, createElementBlock as e, normalizeStyle as i, createStaticVNode as p } from "vue";
const d = /* @__PURE__ */ l({
  __name: "LogoBash",
  props: {
    width: {},
    height: {}
  },
  setup(v) {
    const h = v, c = m(() => ({
      width: h.width || "1em",
      height: h.height || "1em",
      minWidth: h.width || "1em",
      minHeight: h.height || "1em"
    }));
    return (o, a) => (t(), e("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "217",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 217",
      style: i(c.value)
    }, a[0] || (a[0] = [
      p('<g><g><path fill="#FFF" d="M175.374 43.99 107.371 3.615a25.61 25.61 0 0 0-26.24 0L13.114 43.99A27.13 27.13 0 0 0 0 67.357v80.735a27.13 27.13 0 0 0 13.114 23.353l68.003 40.361a25.63 25.63 0 0 0 26.24 0l68.004-40.36a27.13 27.13 0 0 0 13.127-23.368V67.357a27.13 27.13 0 0 0-13.114-23.367"></path><path fill="#2F3A3E" d="M175.374 43.99 107.371 3.615a25.61 25.61 0 0 0-26.24 0L13.114 43.99A27.13 27.13 0 0 0 0 67.357v80.735a27.13 27.13 0 0 0 13.114 23.353l68.003 40.361a25.63 25.63 0 0 0 26.24 0l68.004-40.36a27.13 27.13 0 0 0 13.127-23.368V67.357a27.13 27.13 0 0 0-13.114-23.367M83.5 207.68l-68.003-40.36a22.39 22.39 0 0 1-10.785-19.228V67.357a22.37 22.37 0 0 1 10.785-19.228L83.5 7.755a20.97 20.97 0 0 1 21.488 0l67.949 40.374A22.24 22.24 0 0 1 183.38 63.68c-2.26-4.807-7.34-6.128-13.263-2.723l-64.286 39.816c-8.02 4.67-13.93 9.94-13.944 19.608v79.279c0 5.787 2.329 9.532 5.924 10.635-1.177.215-2.371.33-3.568.34A21.07 21.07 0 0 1 83.5 207.68"></path><path fill="#3AB14A" d="m157.55 155.895-16.94 10.13a1.24 1.24 0 0 0-.776 1.104v4.452c0 .545.368.763.817.504l17.198-10.458c.421-.315.623-.846.518-1.361v-3.909c-.014-.503-.409-.721-.817-.462"></path><path fill="#FFF" d="M121.492 118.597c.544-.272.994 0 1.007.777l.055 5.91a10.9 10.9 0 0 1 6.509-.79c.422.109.599.68.436 1.361l-1.294 5.188c-.098.392-.3.75-.586 1.035q-.151.15-.34.245a.78.78 0 0 1-.504.082 8.63 8.63 0 0 0-6.277 1.008 7.88 7.88 0 0 0-4.644 6.985c0 2.724 1.362 3.473 6.114 3.554 6.278.11 9.001 2.846 9.07 9.178a22.5 22.5 0 0 1-8.334 16.98l.109 5.802a2.12 2.12 0 0 1-.994 1.77l-3.432 1.974c-.545.273-.994 0-1.008-.762v-5.706c-2.94 1.226-5.923 1.512-7.83.75-.353-.137-.517-.668-.367-1.28l1.24-5.243a2.2 2.2 0 0 1 .612-1.09q.146-.14.327-.231a.68.68 0 0 1 .558 0 9.53 9.53 0 0 0 7.203-.913 9.42 9.42 0 0 0 5.325-8.17c0-2.941-1.62-4.167-5.447-4.194-4.943 0-9.532-.953-9.627-8.17a21.1 21.1 0 0 1 7.98-16.15l-.246-5.937a2.11 2.11 0 0 1 .994-1.797z"></path></g><path fill="#2F3A3E" d="M390.646 61.352a40.4 40.4 0 0 1 24.442.34 35.9 35.9 0 0 1 10.894 5.869 29.6 29.6 0 0 1 7.707 9.273 27 27 0 0 1 3.078 12.255 3.2 3.2 0 0 1-.98 2.356 3.53 3.53 0 0 1-2.452.98h-11.942a3.39 3.39 0 0 1-3.418-2.859 20.3 20.3 0 0 0-1.675-5.923 13.8 13.8 0 0 0-3.09-4.276 13.6 13.6 0 0 0-4.535-2.724 19.9 19.9 0 0 0-11.724-.245 14.4 14.4 0 0 0-4.562 2.152 10.3 10.3 0 0 0-3.01 3.363 9.1 9.1 0 0 0-1.075 4.562 7.42 7.42 0 0 0 1.361 4.466 13.8 13.8 0 0 0 3.977 3.527 30.4 30.4 0 0 0 5.8 2.724 154 154 0 0 0 6.414 2.042 114 114 0 0 1 7.095 2.383 63 63 0 0 1 7.067 3.146 46 46 0 0 1 6.454 4.085 29.5 29.5 0 0 1 5.447 5.365 24.7 24.7 0 0 1 3.8 6.686 23.8 23.8 0 0 1 1.36 8.17 22.03 22.03 0 0 1-3.213 11.901 27.4 27.4 0 0 1-8.047 8.266 36.4 36.4 0 0 1-10.894 4.834 46 46 0 0 1-11.874 1.58 44.3 44.3 0 0 1-13.004-1.948 38.6 38.6 0 0 1-11.507-5.692 30.9 30.9 0 0 1-8.415-9.232 25.9 25.9 0 0 1-3.527-12.61 3.2 3.2 0 0 1 .967-2.369 3.53 3.53 0 0 1 2.465-.994h11.887a3.39 3.39 0 0 1 3.418 2.846 17.3 17.3 0 0 0 1.947 6.087 14.6 14.6 0 0 0 3.69 4.344 15.9 15.9 0 0 0 5.243 2.723 24.73 24.73 0 0 0 12.678.245 15.1 15.1 0 0 0 4.78-2.029 10.7 10.7 0 0 0 3.226-3.295 8.25 8.25 0 0 0 1.144-4.507 8.4 8.4 0 0 0-1.361-4.943 13.3 13.3 0 0 0-4.017-3.759 29.6 29.6 0 0 0-5.924-2.805q-3.54-1.239-6.808-2.233c-3.364-.98-6.74-2.26-10.172-3.704a47 47 0 0 1-9.845-5.555 29.8 29.8 0 0 1-7.585-8.157 21.2 21.2 0 0 1-3.091-11.452 22.6 22.6 0 0 1 3.05-11.642 27.9 27.9 0 0 1 7.735-8.47 35 35 0 0 1 10.62-5.147m-60.95-.437a3.42 3.42 0 0 1 3.282 2.275l28.963 87.026a3.15 3.15 0 0 1-.504 2.928 3.5 3.5 0 0 1-2.723 1.362h-11.56a3.42 3.42 0 0 1-3.296-2.315l-6.482-20.222h-25.464l-6.604 20.235a3.43 3.43 0 0 1-3.282 2.302h-11.629a3.5 3.5 0 0 1-2.723-1.362 3.13 3.13 0 0 1-.49-2.928l29.549-87.04a3.43 3.43 0 0 1 3.268-2.26Zm130.131.001a3.364 3.364 0 0 1 3.261 3.268v34.151h30.652V64.184a3.363 3.363 0 0 1 3.445-3.268h11.187a3.364 3.364 0 0 1 3.261 3.268v87.04a3.363 3.363 0 0 1-3.445 3.268H497a3.364 3.364 0 0 1-3.26-3.268v-36.957h-30.653v36.957a3.363 3.363 0 0 1-3.445 3.268h-11.078a3.364 3.364 0 0 1-3.26-3.268v-87.04a3.363 3.363 0 0 1 3.445-3.268Zm-213.767-.014c4.026.038 8.034.545 11.942 1.512a34.1 34.1 0 0 1 10.717 4.643 24.74 24.74 0 0 1 7.775 8.28 23.37 23.37 0 0 1 2.874 12.064 20.53 20.53 0 0 1-4.957 13.304 24 24 0 0 1-4.93 4.357l.872.518a24.8 24.8 0 0 1 6.073 5.27 23.6 23.6 0 0 1 4.017 6.944 24.1 24.1 0 0 1 1.362 8.306 25 25 0 0 1-2.832 12.256 26.9 26.9 0 0 1-7.667 8.878 35 35 0 0 1-10.784 5.352 44 44 0 0 1-12.365 1.892h-29.515a3.364 3.364 0 0 1-3.26-3.268V64.17a3.363 3.363 0 0 1 3.444-3.268Zm2.914 52.889h-14.978v24.783h14.46a19 19 0 0 0 5.76-.98 16 16 0 0 0 4.753-2.52 11.2 11.2 0 0 0 3.091-3.758 11 11 0 0 0 1.13-5.08c.076-1.8-.265-3.594-.994-5.242a10.8 10.8 0 0 0-2.873-3.745 13.6 13.6 0 0 0-4.466-2.45 20.5 20.5 0 0 0-5.883-1.008m75.874-21.379-7.57 23.34h14.978zm-78.488-15.51h-12.405V98.05h12.773a20.4 20.4 0 0 0 5.446-.844 15 15 0 0 0 4.535-2.179 10.7 10.7 0 0 0 3.036-3.322 8.44 8.44 0 0 0 1.035-4.398 9.3 9.3 0 0 0-1.062-4.644 9 9 0 0 0-2.9-3.09 14.3 14.3 0 0 0-4.603-1.935 27.2 27.2 0 0 0-5.855-.735m46.135 92.513c.422.554.736 1.182.926 1.852a7.8 7.8 0 0 1 .313 2.192l-.013 1.648c0 .742-.105 1.48-.313 2.192a5.7 5.7 0 0 1-.913 1.852 4.5 4.5 0 0 1-1.525 1.28 4.6 4.6 0 0 1-2.151.477 4.34 4.34 0 0 1-3.622-1.757 5.7 5.7 0 0 1-.9-1.852 7.8 7.8 0 0 1-.299-2.192v-1.648q0-.747.136-1.484c.084-.466.217-.923.395-1.361.175-.42.4-.818.668-1.185.257-.36.57-.677.926-.94a4.3 4.3 0 0 1 1.211-.613 4.8 4.8 0 0 1 1.485-.217 4.45 4.45 0 0 1 3.676 1.756m160.26-1.743a5.7 5.7 0 0 1 1.824.286 4.8 4.8 0 0 1 1.484.804c.418.338.762.76 1.008 1.239.25.494.38 1.04.38 1.593h-2.232a3 3 0 0 0-.218-.885c-.113-.264-.28-.5-.49-.695a2.1 2.1 0 0 0-.763-.449 3.1 3.1 0 0 0-1.035-.163 3.4 3.4 0 0 0-.926.122c-.266.076-.515.2-.735.368a1.7 1.7 0 0 0-.49.572 1.6 1.6 0 0 0-.177.762c0 .278.086.549.245.776.17.234.382.433.626.586q.425.269.899.436.504.177 1.062.327.832.232 1.62.585c.49.218.949.502 1.362.844.379.314.693.698.926 1.13.236.46.353.97.34 1.485.011.529-.12 1.05-.38 1.511-.255.44-.604.816-1.022 1.103a4.8 4.8 0 0 1-1.484.667 6.8 6.8 0 0 1-1.77.232 6.7 6.7 0 0 1-1.24-.109 6 6 0 0 1-1.17-.34 5.2 5.2 0 0 1-1.05-.572 4.2 4.2 0 0 1-.843-.79 3.54 3.54 0 0 1-.777-2.22h2.247c.023.355.116.702.273 1.022.143.282.347.529.599.721a2.6 2.6 0 0 0 .871.436c.359.102.73.153 1.103.15q.477.005.94-.11c.272-.067.53-.182.762-.34.213-.144.39-.335.518-.558a1.5 1.5 0 0 0 .163-.79 1.6 1.6 0 0 0-.204-.803 2 2 0 0 0-.572-.613 4 4 0 0 0-.872-.463 10 10 0 0 0-1.103-.367 13 13 0 0 1-1.58-.545 6.2 6.2 0 0 1-1.36-.803 4 4 0 0 1-.995-1.103 2.8 2.8 0 0 1-.381-1.471 2.96 2.96 0 0 1 .381-1.498c.253-.44.596-.82 1.008-1.117a4.8 4.8 0 0 1 1.47-.708 6.2 6.2 0 0 1 1.757-.245m-68.4-.027a6 6 0 0 1 1.88.272c.5.173.963.441 1.362.79.399.351.72.783.94 1.267a5.1 5.1 0 0 1 .435 1.66h-2.192a4 4 0 0 0-.26-.939 2.2 2.2 0 0 0-.476-.708 2 2 0 0 0-.721-.45 2.9 2.9 0 0 0-1.008-.149 2.16 2.16 0 0 0-1.212.327 2.7 2.7 0 0 0-.844.899c-.24.422-.405.883-.49 1.361a8 8 0 0 0-.164 1.553v1.606q.009.779.177 1.54c.09.48.265.942.518 1.36.224.367.532.675.898.9a2.56 2.56 0 0 0 1.362.34h.654q.325-.036.64-.123a3 3 0 0 0 .558-.231c.157-.086.296-.201.408-.34v-2.574h-2.45v-1.648h4.643l.068 4.753q-.36.407-.804.721-.492.345-1.048.572a6.6 6.6 0 0 1-1.253.368 7.5 7.5 0 0 1-1.443.136 4.9 4.9 0 0 1-2.165-.45 4.6 4.6 0 0 1-1.594-1.239 5.5 5.5 0 0 1-.994-1.851 7.6 7.6 0 0 1-.354-2.288v-1.593a7.5 7.5 0 0 1 .34-2.288 5.7 5.7 0 0 1 .968-1.852 4.5 4.5 0 0 1 3.622-1.702m-84.139.136v8.633q.006.557.164 1.09c.085.31.228.6.422.858.185.237.422.428.694.558.303.14.633.21.967.204a2.3 2.3 0 0 0 .994-.204c.28-.127.528-.319.722-.558.2-.255.348-.547.435-.858q.156-.533.164-1.09v-8.633l2.206.055v8.633c0 .62-.115 1.234-.34 1.81a4.1 4.1 0 0 1-.913 1.363c-.387.39-.85.695-1.362.898a5.2 5.2 0 0 1-1.865.314 5 5 0 0 1-1.825-.314 3.96 3.96 0 0 1-2.315-2.301 5 5 0 0 1-.34-1.825v-8.633zm184.061.082v1.756h-6.468v3.636h5.597v1.689h-5.583v4.085h6.523v1.73h-8.77v-12.896zm-231.83 0v1.756h-6.467v3.636h5.583v1.689h-5.583v4.085h6.522v1.73h-8.756v-12.896zm95.456 0v1.756h-6.468v3.636h5.583v1.689h-5.583v4.085h6.522v1.73h-8.755v-12.896zm-72.688-.041a8.2 8.2 0 0 1 1.825.218c.528.119 1.03.331 1.484.626.42.275.767.65 1.008 1.09.253.482.375 1.022.354 1.566a2.55 2.55 0 0 1-.558 1.634 3.54 3.54 0 0 1-1.485 1.048c.357.093.696.24 1.008.436a2.8 2.8 0 0 1 .735.667 2.98 2.98 0 0 1 .627 1.866 3.5 3.5 0 0 1-.354 1.62 3.3 3.3 0 0 1-.98 1.171 4.5 4.5 0 0 1-1.485.708 7 7 0 0 1-1.852.259l-4.657-.014v-12.895zm123.86.014 4.317 12.895h-2.3l-.9-2.996h-4.235l-.925 2.996h-2.315l4.398-12.895zm16.545 0v1.756h-2.927v9.382h2.927v1.757h-8.06v-1.757h2.872v-9.382h-2.873v-1.756zm-43.874 0 4.317 12.895h-2.301l-.845-2.996h-4.234l-.926 2.996h-2.315l4.398-12.895zm133.447-.014v11.166h6.468v1.73h-8.701v-12.896zm-13.617 0v11.166h6.468v1.73h-8.701v-12.896zm-175.455-.027a7.4 7.4 0 0 1 1.92.259 4.5 4.5 0 0 1 1.525.721c.424.318.765.734.994 1.212a3.84 3.84 0 0 1 .354 1.702 3.7 3.7 0 0 1-.177 1.185 3.4 3.4 0 0 1-.504.967c-.219.291-.48.548-.776.762a5 5 0 0 1-1.008.559l2.874 5.446v.11h-2.383l-2.588-5.053h-2.274v5.025h-2.246v-12.895zm106.907.027 4.398 8.851v-8.851h2.26l-.013 12.895h-2.247l-4.412-8.864v8.864h-2.246v-12.895zm-95.482 0 4.398 8.851v-8.851h2.26v12.895h-2.247l-4.411-8.864v8.864h-2.26v-12.895zm136.238 0v5.447h4.643v-5.447h2.179l-.014 12.895h-2.165v-5.76h-4.63v5.76h-2.178v-12.895zm-237.78 0-.055 1.757h-4.167v11.138h-2.22V169.58h-4.085v-1.757zm5.964 0v5.447h4.616v-5.447h2.179v12.895h-2.18v-5.76h-4.615v5.76h-2.165v-12.895zm56.85 1.634a2.14 2.14 0 0 0-1.252.354 2.5 2.5 0 0 0-.79.912 4.2 4.2 0 0 0-.408 1.28 9.6 9.6 0 0 0-.123 1.444v1.661q.012.727.136 1.444c.07.445.208.876.409 1.28.184.367.455.685.79.925.37.247.808.37 1.252.355a2.2 2.2 0 0 0 1.267-.355 2.7 2.7 0 0 0 .817-.925c.213-.4.36-.833.436-1.28q.127-.717.136-1.444l-.014-1.661a8.6 8.6 0 0 0-.136-1.444 4.2 4.2 0 0 0-.436-1.28 2.6 2.6 0 0 0-.817-.912 2.2 2.2 0 0 0-1.266-.354m-13.14 5.406-2.546.014v4.085h2.437c.328-.001.654-.051.967-.15a2.4 2.4 0 0 0 .75-.409c.211-.169.383-.383.503-.626.122-.26.183-.544.177-.83a2.3 2.3 0 0 0-.163-.872 1.76 1.76 0 0 0-.45-.654 2.1 2.1 0 0 0-.721-.408 3.2 3.2 0 0 0-.954-.15m85.42-.64v1.702h-7.462v-1.702zm9.722-3.35-1.566 5.052h3.105zm27.275 0-1.566 5.052h3.105zm-81.96-1.348h-2.043l-.014 4.426h2.056a3.4 3.4 0 0 0 1.022-.15 2.5 2.5 0 0 0 .803-.436 1.9 1.9 0 0 0 .531-.68c.13-.292.195-.608.19-.927a2.4 2.4 0 0 0-.176-.953 1.9 1.9 0 0 0-.504-.694 2.2 2.2 0 0 0-.803-.436q-.521-.15-1.063-.15m-40.879.068h-2.124v3.663h2.138q.477 0 .94-.122c.269-.07.523-.19.748-.354a1.74 1.74 0 0 0 .504-.572 1.6 1.6 0 0 0 .19-.776 1.8 1.8 0 0 0-.176-.831 1.54 1.54 0 0 0-.504-.572 2.3 2.3 0 0 0-.763-.327 4.6 4.6 0 0 0-.953-.109"></path></g>', 1)
    ]), 4));
  }
});
export {
  d as _
};