import { defineComponent as e, computed as h, openBlock as i, createElementBlock as q, normalizeStyle as o, createStaticVNode as p } from "vue";
const s = /* @__PURE__ */ e({
  __name: "LogoHomebrew",
  props: {
    width: {},
    height: {}
  },
  setup(c) {
    const l = c, t = h(() => ({
      width: l.width || "1em",
      height: l.height || "1em",
      minWidth: l.width || "1em",
      minHeight: l.height || "1em"
    }));
    return (m, a) => (i(), q("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "164",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 164 256",
      style: o(t.value)
    }, a[0] || (a[0] = [
      p('<g><path fill="#D1D2D3" d="M125.534 84.857c.701-18.285-3.917-25.667-7.384-30.944-3.517-4.923-11.955-12.66-22.323-12.984-9.805-.306-12.163 5.113-21.208 5.44-1.484-16.472 10.948-25.51 10.948-25.51s-3.4-4.805-6.212-5.977C76.119 17.758 68.36 26.018 66.7 37.108c-1.747-16.335-9.914-26.781-28.018-34.062C33.54 21.034 50.518 37.84 61.548 44.477c-5.847-1.964-10.921-4.56-17.736-3.219-11.91 2.345-21.73 9.546-27.325 25.348s1.976 34.237 3.621 39.502c1.647 5.27 13.828 27.653 23.375 30.946 9.545 3.295 9.549 1.81 14.652-.163s12.837-5.597 24.198-1.48c11.353 4.114 12.835 5.1 19.91.492 7.083-4.608 16.297-18.927 18.436-23.043 2.14-4.113 3.292-6.255 3.954-8.394.823-6.263.268-3.22.9-19.61"></path><path fill="#FEFEFE" d="M126.215 110.162v8.941a3.793 3.793 0 0 0 3.792 3.792h14.07a17.07 17.07 0 0 1 17.066 17.067v42.61l-.002 9.287v7.314l-.001 2.261c0 4.537-1.804 8.887-5.02 12.089a17.07 17.07 0 0 1-12.107 4.976c-4.754.012-9.755.004-13.926-.054a3.79 3.79 0 0 0-3.872 3.79v5.065l-.002 2.245v1.69a2774 2774 0 0 1-.015 7.995c0 1.123-.5 2.188-1.364 2.905-4.347 3.284-19.533 10.56-53.499 10.56-33.265 0-49.106-5.433-54.048-8.295a3.8 3.8 0 0 1-1.755-3.19c-.015-7.374-.07-33.63-.129-60.724l-.008-3.698-.142-66.323v-.303zm16.82 27.927h-12.08a4.74 4.74 0 0 0-3.17 1.217l-.18.172a4.74 4.74 0 0 0-1.383 3.102l-.007.251V198c0 1.173.436 2.302 1.217 3.17l.172.182a4.73 4.73 0 0 0 3.1 1.381l.25.007h12.08a4.74 4.74 0 0 0 3.17-1.215l.182-.173a4.75 4.75 0 0 0 1.381-3.101l.007-.25V142.83a4.75 4.75 0 0 0-1.216-3.17l-.172-.183a4.75 4.75 0 0 0-3.101-1.383z"></path><path fill="#FAAF41" d="M26.192 109.063V226.62a3.79 3.79 0 0 0 1.9 3.287c4.797 2.287 18.718 7.746 43.125 7.746 24.568 0 38.074-6.634 42.599-9.368a3.78 3.78 0 0 0 1.73-3.176c.01-15.589.01-116.046.01-116.046z"></path><path fill="#FFDA95" d="M39.328 123.714c2.8 0 5.09 2.19 5.251 4.95l.009.31v90.847a5.26 5.26 0 0 1-10.512.31l-.008-.31v-90.848a5.26 5.26 0 0 1 5.26-5.26"></path><path fill="#FEFEFE" d="M89.818 133.186c0-1.896-1.116-4.16-2.949-5.297a15.85 15.85 0 0 1-6.58-7.87c-24.266.816-46.412-3.444-57.57-6.453a92 92 0 0 0-8.695-2.019c-6.677-1.326-11.752-7.19-11.752-14.24 0-7.76 6.157-14.067 13.85-14.343 1.482-8.207 8.647-14.438 17.283-14.438 9.71 0 17.583 7.872 17.583 17.583a17.6 17.6 0 0 1-1.008 5.825l.05.009c2.17-6.783 8.519-11.698 16.021-11.698 7.453 0 13.77 4.857 15.975 11.577a17 17 0 0 1-.097-1.847c0-10.1 8.186-18.285 18.285-18.285 8.175 0 15.094 5.365 17.435 12.764l1.592-.417a14.3 14.3 0 0 1 7.047-1.853c7.936 0 14.369 6.434 14.365 14.367 0 7.268-5.395 13.274-12.399 14.233a21 21 0 0 0-4.638 1.205 115 115 0 0 1-12.72 3.943 15.8 15.8 0 0 1-1.811 5.908 19.66 19.66 0 0 0-2.256 10.672c-.002.223.007 1.398.007 1.623 0 4.698-3.81 7.557-8.513 7.557a8.505 8.505 0 0 1-8.505-8.506"></path><polygon fill="#010202" points="86.4017067 112.433152 86.5024 112.740352 86.4699733 112.433152"></polygon><path fill="#010202" d="m37.192 0 2.338.939C54.557 6.982 63.305 15.28 67.1 27.519c2.399-5.319 6.043-10.048 10.277-13.912l1.536-1.37 1.317.548a9 9 0 0 1 1.709.972c.89.634 1.793 1.456 2.708 2.427a34 34 0 0 1 1.97 2.297l.338.436.377.507 1.384 1.954-1.814 1.319-.248.191-.341.28-.42.37-.493.456a28.6 28.6 0 0 0-3.524 4.058c-3.142 4.378-5.03 9.44-5.108 15.185l-.002.669.491-.08c1.692-.31 3.282-.902 5.61-1.961l1.33-.61c4.497-2.036 7.19-2.736 11.7-2.596 9.58.3 18.796 6.508 24.152 14.009q.181.273.356.55l.69 1.092.657 1.085c4.092 6.951 6.064 13.7 6.135 24.6 8.44.804 15.041 7.909 15.038 16.556 0 8.342-6.173 15.362-14.353 16.482l-.087.017v6.053c0 .84.682 1.522 1.522 1.522h14.07a19.336 19.336 0 0 1 19.336 19.337l-.001 61.472c0 5.14-2.047 10.07-5.689 13.696a19.32 19.32 0 0 1-13.703 5.64l-2.131.004-4.137-.001-5.028-.028-2.685-.03a1.524 1.524 0 0 0-1.554 1.52l-.005 12.433-.012 4.562c0 1.8-.8 3.502-2.267 4.716-2.067 1.561-4.81 3.04-8.214 4.377l-1.159.439a70 70 0 0 1-5.813 1.84l-1.425.374-1.471.36q-2.243.53-4.698.995l-1.661.302-1.707.285q-2.165.346-4.471.64l-1.87.225-1.916.208-1.96.188-2.008.17-2.053.15-2.099.13q-.53.031-1.065.059l-2.166.099-2.21.078q-1.117.032-2.256.056l-2.3.033q-1.16.012-2.344.012h-1.2q-1.193-.008-2.367-.02l-2.322-.038-2.279-.055q-1.128-.031-2.234-.072l-2.188-.09q-.542-.024-1.078-.051l-2.122-.116-2.075-.13-2.03-.148a88 88 0 0 1-.998-.079l-1.96-.169q-.484-.044-.963-.092l-1.891-.191-1.843-.207q-.456-.053-.905-.109l-1.773-.229-1.726-.239-1.676-.254q-1.24-.195-2.425-.404l-1.555-.285-.759-.147-1.483-.302-1.432-.313-1.382-.326-1.333-.332a72 72 0 0 1-3.694-1.062l-1.13-.372a45 45 0 0 1-1.597-.575l-1-.39q-2.191-.896-3.848-1.854a6.07 6.07 0 0 1-2.804-5.102l-.274-127.583C5.465 111.852 0 105.144 0 97.307c0-7.64 5.171-14.083 12.235-16.017-.087-2.324-.034-4.618.207-6.881.32-2.994.947-5.852 1.906-8.562 5.5-15.536 15.29-24.114 29.027-26.817a21 21 0 0 1 7.055-.219 62 62 0 0 1-5.048-5.3C37.129 23.69 33.5 12.913 36.499 2.42zm86.751 114.287-1.09.401c-.23.084-.476.154-.71.236-2.13.749-4.316 1.43-6.54 2.066-1.376.395-1.376.395-2.687.767l-.102.518a18 18 0 0 1-1.403 4.004l-.602 1.176c-.111.227-.186.468-.285.7a17.66 17.66 0 0 0-1.425 8.356l.001.333.005 1.29c0 5.866-4.686 9.83-10.782 9.83a10.73 10.73 0 0 1-7.842-3.403 10.74 10.74 0 0 1-2.779-5.622 11 11 0 0 1-.155-1.752c0-1.217-.797-2.699-1.854-3.356a18.1 18.1 0 0 1-6.794-7.349l-.073-.15-1.494.033c-17.223.293-34.754-1.815-49.145-5.107a165 165 0 0 1-4.896-1.191l-1.191-.316-.103-.027a94 94 0 0 0-4.464-1.133l.27 126.614c0 .517.267 1.002.622 1.229q.988.573 2.219 1.126l.846.364q1.31.542 2.859 1.061l1.056.34a71 71 0 0 0 1.683.496l1.186.321 1.238.313 1.287.305 1.34.294q.338.074.687.145l1.413.28q.717.139 1.463.273l1.512.26q.768.127 1.561.248l1.61.237 1.659.227q.42.055.846.108l1.73.21 1.78.194 1.824.18.93.087 1.896.162 1.942.147 1.988.131 2.035.116 2.08.102 1.056.045 2.15.078q.54.018 1.09.033l2.215.053 1.123.02 2.282.026q1.149.008 2.324.008l1.139-.001q2.835-.014 5.53-.096l2.134-.073q.528-.019 1.05-.045l2.065-.102 2.02-.123q.5-.032.994-.068l1.954-.152.957-.08 1.885-.178.925-.095 1.812-.202.891-.107 1.744-.227 1.698-.244 1.652-.256q.815-.135 1.605-.272l1.558-.286q.766-.149 1.51-.3l1.465-.315 1.414-.324q1.392-.331 2.688-.685l1.272-.36q.311-.092.618-.186l1.2-.373 1.15-.386c3.946-1.364 6.995-2.896 9.118-4.502.344-.285.543-.709.543-1.166l.017-16.985c0-1.63.657-3.191 1.821-4.33a6.04 6.04 0 0 1 4.354-1.73l2.659.029 3.942.024 5.177.005 2.126-.005a14.8 14.8 0 0 0 10.496-4.313 14.8 14.8 0 0 0 4.352-10.48l.002-61.473a14.795 14.795 0 0 0-14.795-14.795h-14.07a6.064 6.064 0 0 1-6.064-6.064zm19.091 21.532a7.01 7.01 0 0 1 7.011 7.012V198a7.01 7.01 0 0 1-7.011 7.01h-12.078a7.01 7.01 0 0 1-7.013-7.01v-55.168a7.013 7.013 0 0 1 7.013-7.012Zm0 4.543h-12.078c-.655 0-1.283.26-1.746.72a2.48 2.48 0 0 0-.725 1.75v55.167a2.47 2.47 0 0 0 2.47 2.47h12.079c.655 0 1.283-.261 1.744-.724.464-.462.726-1.09.726-1.746v-55.168a2.47 2.47 0 0 0-2.47-2.47M33.404 70.796c-7.427 0-13.74 5.337-15.049 12.573l-.324 1.799-.947.036-.88.03a12 12 0 0 0-3.614.692c-4.697 1.665-8.049 6.138-8.049 11.381 0 5.346 3.504 9.983 8.438 11.612.473.156.954.294 1.453.393 1.636.299 3.261.649 4.876 1.03 1.344.318 2.68.658 4.003 1.032.569.153 1.176.295 1.762.445.809.205 1.602.415 2.432.614 15.138 3.63 34.249 5.938 52.707 5.317l1.614-.055.58 1.509a13.6 13.6 0 0 0 5.661 6.755c2.434 1.51 4.021 4.464 4.021 7.228l.009.33a6.2 6.2 0 0 0 .988 3.011c1.11 1.732 3.03 2.895 5.238 2.895 3.74 0 6.241-2.117 6.241-5.29l-.007-1.301.007-.154a21.97 21.97 0 0 1 2.52-11.916l.269-.526a13.5 13.5 0 0 0 1.281-4.533l.16-1.588 1.55-.386c1.583-.396 3.115-.847 4.648-1.296q2.017-.59 3.988-1.228a88 88 0 0 0 3.82-1.335l.713-.263a24 24 0 0 1 1.633-.48c.92-.247 1.85-.458 2.8-.593l.402-.062.137-.029a12.1 12.1 0 0 0 9.898-11.893c.002-6.16-4.61-11.235-10.566-11.988a12 12 0 0 0-1.529-.106 12.1 12.1 0 0 0-5.93 1.56l-.258.145-3.966 1.033-.65-2.055a16.02 16.02 0 0 0-15.27-11.179c-8.844 0-16.014 7.17-16.014 16.015q.002.815.084 1.61l1.71 16.305.476 4.543h-.068l-1.492-4.543-5.043-15.361A14.55 14.55 0 0 0 66.05 82.517a14.55 14.55 0 0 0-13.856 10.117l-.597 1.866-4.658-.763.896-2.555c.58-1.654.88-3.355.88-5.074 0-8.456-6.855-15.312-15.311-15.312M79.64 17.71l-.556.545c-5.074 5.065-9.827 13.547-10.116 18.771-.29 5.224.562 11.71.562 11.71l-3.204-.613a36 36 0 0 1-4.065-1.024l-.993-.318q-.259-.085-.526-.175l-.186-.065-.937-.324-3.741-1.338-1.027-.349c-4.177-1.365-7.138-1.723-10.599-1.042-12.15 2.39-20.652 9.84-25.622 23.874-.838 2.366-1.388 4.878-1.673 7.53-.005.044-.005.09-.01.136 3.495-5.191 9.353-8.598 15.944-8.767l.514-.006c9.784 0 17.914 7.077 19.553 16.392l.075.46.49-.445a19.06 19.06 0 0 1 12.016-4.68l.512-.006a19.06 19.06 0 0 1 14.142 6.275l.206.234.13-.447c2.5-8.301 10.109-14.39 19.17-14.614l.515-.005a20.56 20.56 0 0 1 18.664 11.934l.113.255.218-.108a16.6 16.6 0 0 1 4.139-1.304c-.043-10.393-1.873-16.478-5.769-22.939l-.623-1.007-.653-1.017c-4.556-6.376-12.585-11.785-20.547-12.034-3.881-.121-6.004.485-10.337 2.492l-.722.331c-3.97 1.802-6.28 2.481-9.996 2.616l-2.15.079-.193-2.144c-.734-8.135 1.565-15.23 5.83-21.17 1.443-2.011 2.892-3.616 4.162-4.804l.075-.073-.496-.584-.586-.643a17 17 0 0 0-1.396-1.34zM40.3 6.192l-.058.37c-1.165 7.95 2.043 16.208 8.617 24.027 4.013 4.773 9.173 9.088 13.587 11.796.686.422 1.357.81 2 1.15l.37.193-.001-.358a63 63 0 0 0-.413-6.637C62.67 22.088 55.45 12.943 40.538 6.298z"></path></g>', 1)
    ]), 4));
  }
});
export {
  s as _
};
