import { defineComponent as h, computed as v, openBlock as c, createElementBlock as t, normalizeStyle as e, createStaticVNode as i } from "vue";
const d = /* @__PURE__ */ h({
  __name: "LogoAirflow",
  props: {
    width: {},
    height: {}
  },
  setup(z) {
    const a = z, l = v(() => ({
      width: a.width || "1em",
      height: a.height || "1em",
      minWidth: a.width || "1em",
      minHeight: a.height || "1em"
    }));
    return (p, m) => (c(), t("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "196",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 196",
      style: e(l.value)
    }, m[0] || (m[0] = [
      i('<g><path fill="#017CEE" d="m3.147 194.415 93.457-95.798a1.73 1.73 0 0 0 .209-2.208c-5.683-7.935-16.17-9.31-20.056-14.642-11.512-15.793-14.433-24.732-19.38-24.178-.345.05-.663.217-.899.474l-33.76 34.609C3.297 112.566.505 156.415 0 193.135a1.83 1.83 0 0 0 3.147 1.28"></path><path fill="#00AD46" d="M194.415 192.051 98.617 98.587a1.73 1.73 0 0 0-2.212-.209c-7.934 5.686-9.31 16.17-14.642 20.056-15.792 11.512-24.73 14.433-24.177 19.38.05.344.218.66.474.895l34.608 33.76c19.894 19.423 63.743 22.215 100.464 22.719a1.831 1.831 0 0 0 1.283-3.137"></path><path fill="#04D659" d="M92.668 172.479c-10.875-10.61-15.915-31.598 4.928-74.877-33.883 15.143-45.756 35.046-39.917 40.746z"></path><path fill="#00C7D4" d="M192.048.786 98.594 96.584a1.724 1.724 0 0 0-.21 2.208c5.687 7.935 16.168 9.31 20.057 14.642 11.512 15.793 14.436 24.732 19.38 24.178a1.5 1.5 0 0 0 .898-.474l33.76-34.609c19.423-19.894 22.215-63.743 22.719-100.463a1.834 1.834 0 0 0-3.15-1.28"></path><path fill="#11E1EE" d="M172.496 102.53c-10.61 10.874-31.598 15.914-74.88-4.928 15.142 33.883 35.046 45.756 40.745 39.917z"></path><path fill="#E43921" d="m.776 3.15 95.798 93.454a1.73 1.73 0 0 0 2.209.21c7.934-5.687 9.31-16.171 14.641-20.057 15.793-11.512 24.732-14.433 24.178-19.38a1.52 1.52 0 0 0-.474-.899l-34.609-33.76C82.625 3.297 38.776.505 2.056 0a1.83 1.83 0 0 0-1.28 3.15"></path><path fill="#FF7557" d="M102.536 22.722c10.875 10.61 15.915 31.598-4.927 74.88 33.882-15.142 45.755-35.05 39.917-40.746z"></path><path fill="#0CB6FF" d="M22.719 92.675c10.61-10.875 31.598-15.915 74.88 4.927C82.456 63.72 62.553 51.847 56.853 57.685z"></path><circle cx="97.612" cy="97.586" r="4.178" fill="#4A4848"></circle><path fill="#51504F" d="M221.232 63.673a.76.76 0 0 1-.74-.739 1.5 1.5 0 0 1 .037-.408l9.171-23.919a1.15 1.15 0 0 1 1.184-.812h2.513c.535-.038 1.026.3 1.184.812l9.13 23.92.074.407a.756.756 0 0 1-.74.74h-1.883a.96.96 0 0 1-.63-.186 1.2 1.2 0 0 1-.295-.445l-2.032-5.248h-12.126l-2.032 5.248a1.05 1.05 0 0 1-.332.445.9.9 0 0 1-.59.185zm15.898-9.058-4.99-13.123-4.99 13.123zm11.015 16.08a.86.86 0 0 1-.627-.258.8.8 0 0 1-.222-.59V45.311a.8.8 0 0 1 .222-.59.86.86 0 0 1 .627-.258h1.7c.461.02.83.388.85.848v1.625a7.02 7.02 0 0 1 6.06-2.845 6.94 6.94 0 0 1 5.806 2.44 10.4 10.4 0 0 1 2.109 6.3q.036.405.036 1.257t-.036 1.256a10.5 10.5 0 0 1-2.109 6.3 7 7 0 0 1-5.805 2.44 7.14 7.14 0 0 1-5.988-2.771v8.577a.8.8 0 0 1-.223.59.74.74 0 0 1-.593.259zm7.838-9.648a4.39 4.39 0 0 0 3.81-1.628 7.5 7.5 0 0 0 1.326-4.287q.036-.368.036-1.07 0-6.987-5.179-6.987a4.53 4.53 0 0 0-3.842 1.701 7 7 0 0 0-1.366 3.979l-.04 1.406.04 1.442a6.17 6.17 0 0 0 1.405 3.81 4.64 4.64 0 0 0 3.807 1.634zm18.66 2.984a7.7 7.7 0 0 1-3.365-.739 6.4 6.4 0 0 1-2.477-1.99 4.93 4.93 0 0 1-.888-2.847 4.84 4.84 0 0 1 1.99-3.98 11.3 11.3 0 0 1 5.47-2.068l5.507-.776V50.56q0-3.77-4.31-3.77a4.64 4.64 0 0 0-2.653.703 4.56 4.56 0 0 0-1.551 1.592 1 1 0 0 1-.296.48.6.6 0 0 1-.444.15h-1.591a.763.763 0 0 1-.813-.813 3.9 3.9 0 0 1 .813-1.99 6.4 6.4 0 0 1 2.476-1.959 8.95 8.95 0 0 1 4.105-.848 7.8 7.8 0 0 1 5.968 1.96 6.74 6.74 0 0 1 1.814 4.807v11.98a.85.85 0 0 1-.259.629.8.8 0 0 1-.59.222h-1.7a.773.773 0 0 1-.853-.849v-1.588a6.4 6.4 0 0 1-2.367 1.99 8.5 8.5 0 0 1-3.989.785zm.776-2.771a5.24 5.24 0 0 0 3.92-1.555 6.24 6.24 0 0 0 1.551-4.546v-1.035l-4.287.63a9.7 9.7 0 0 0-3.956 1.257 2.52 2.52 0 0 0-1.326 2.182 2.6 2.6 0 0 0 1.22 2.29 5.26 5.26 0 0 0 2.875.787zm22.026 2.771a8.48 8.48 0 0 1-6.21-2.218 9.08 9.08 0 0 1-2.368-6.3l-.036-1.478.036-1.479a8.95 8.95 0 0 1 2.368-6.25 8.4 8.4 0 0 1 6.21-2.255 9.7 9.7 0 0 1 4.51.962 6.9 6.9 0 0 1 2.735 2.367c.578.831.921 1.802.994 2.812a.66.66 0 0 1-.222.59.93.93 0 0 1-.63.222h-1.774a.88.88 0 0 1-.557-.149 1.5 1.5 0 0 1-.368-.59 4.74 4.74 0 0 0-1.774-2.513 5.03 5.03 0 0 0-2.884-.776 4.8 4.8 0 0 0-3.647 1.442 6.47 6.47 0 0 0-1.443 4.31l-.036 1.327.036 1.256a6.53 6.53 0 0 0 1.443 4.364 4.8 4.8 0 0 0 3.647 1.406 5.23 5.23 0 0 0 2.884-.74 4.95 4.95 0 0 0 1.774-2.55 1.54 1.54 0 0 1 .368-.59.76.76 0 0 1 .557-.185h1.774a.86.86 0 0 1 .63.258.66.66 0 0 1 .222.59 5.8 5.8 0 0 1-.994 2.809 6.9 6.9 0 0 1-2.736 2.367 9.54 9.54 0 0 1-4.512 1.001zm13.521-.37a.773.773 0 0 1-.852-.85V38.276a.8.8 0 0 1 .222-.59.86.86 0 0 1 .63-.26h1.847a.886.886 0 0 1 .852.85v8.62a7.2 7.2 0 0 1 2.513-2.069 7.8 7.8 0 0 1 3.588-.74 6.85 6.85 0 0 1 5.507 2.292 8.76 8.76 0 0 1 1.99 6.028V62.83a.85.85 0 0 1-.26.63.8.8 0 0 1-.59.222h-1.846a.773.773 0 0 1-.849-.849V52.576a5.9 5.9 0 0 0-1.293-4.068 4.6 4.6 0 0 0-3.647-1.443 4.9 4.9 0 0 0-3.734 1.48 5.64 5.64 0 0 0-1.366 4.028V62.81a.85.85 0 0 1-.258.63.8.8 0 0 1-.59.222zm29.33.37a8.18 8.18 0 0 1-6.1-2.32 9.74 9.74 0 0 1-2.477-6.433l-.037-1.256.037-1.22a9.8 9.8 0 0 1 2.513-6.36 8.95 8.95 0 0 1 12.384.259 10.33 10.33 0 0 1 2.254 7.025v.63a.85.85 0 0 1-.258.627.8.8 0 0 1-.59.222H335.23v.332a7 7 0 0 0 1.442 4.105 4.42 4.42 0 0 0 3.584 1.657 5.2 5.2 0 0 0 2.772-.663 5.6 5.6 0 0 0 1.628-1.442c.128-.2.291-.375.481-.517a1.3 1.3 0 0 1 .63-.11h1.814c.2-.006.397.06.553.186.15.128.233.32.222.517a3.23 3.23 0 0 1-1.034 1.96 8.3 8.3 0 0 1-2.848 1.99 10.1 10.1 0 0 1-4.178.821zm5.063-11.385v-.11a6.02 6.02 0 0 0-1.406-4.141 5.013 5.013 0 0 0-7.394 0 6.24 6.24 0 0 0-1.326 4.141v.11z"></path><path fill="#51504F" d="M237.12 54.615v.285a.285.285 0 0 0 .266-.384zm-4.99-13.123.266-.1a.285.285 0 0 0-.53 0zm-4.99 13.123-.265-.1a.285.285 0 0 0 .265.385zm-5.915 8.773a.42.42 0 0 1-.331-.139l-.405.401a1 1 0 0 0 .72.305zm-.331-.139a.43.43 0 0 1-.14-.332h-.566a1 1 0 0 0 .305.72zm-.14-.332a1.3 1.3 0 0 1 .024-.331l-.54-.18q-.064.245-.054.498zm.017-.305 9.168-23.919-.53-.202-9.168 23.92zm9.171-23.925a.94.94 0 0 1 .332-.474 1 1 0 0 1 .577-.153v-.57a1.56 1.56 0 0 0-.899.252 1.5 1.5 0 0 0-.55.75zm.915-.627h2.513v-.57h-2.513zm2.513 0a1 1 0 0 1 .58.153.94.94 0 0 1 .332.474l.534-.196a1.5 1.5 0 0 0-.55-.75 1.56 1.56 0 0 0-.902-.251zm.919.63 9.131 23.919.53-.202-9.13-23.92zm9.118 23.873.073.407.56-.102-.073-.408zm.07.354a.43.43 0 0 1-.14.332l.401.401a1 1 0 0 0 .305-.72zm-.14.332a.43.43 0 0 1-.331.14v.566c.271 0 .531-.11.72-.305zm-.331.14h-1.884v.566h1.884zm-1.884 0a.68.68 0 0 1-.447-.12l-.365.438c.233.177.52.266.812.251zm-.427-.104a.9.9 0 0 1-.23-.331l-.536.179c.076.21.201.4.365.554zm-.232-.331-2.033-5.252-.53.205 2.032 5.25zm-2.298-5.431H226.04v.567h12.125zm-12.39.182-2.036 5.252.53.206 2.033-5.249zm-2.04 5.262a.8.8 0 0 1-.248.332l.368.43c.188-.148.332-.345.417-.57zm-.245.332a.6.6 0 0 1-.411.119v.567c.28.01.553-.079.772-.252zm-.411.119h-1.887v.567h1.887zm14.277-8.876-4.99-13.123-.53.202 4.99 13.123zm-5.524-13.123-4.99 13.123.53.202 4.99-13.123zm-4.725 13.511h9.98v-.567h-9.98zm23.548-7.974h-.285a.285.285 0 0 0 .514.17zm.073 14.373.225-.172a.285.285 0 0 0-.51.172zm-2.633 9.128a.57.57 0 0 1-.428-.176l-.4.402c.219.219.518.339.828.331zm-.428-.176a.52.52 0 0 1-.139-.39h-.57c-.011.294.1.58.305.792zm-.139-.39V45.354h-.57V69.89zm0-24.536a.52.52 0 0 1 .14-.392l-.402-.4a1.07 1.07 0 0 0-.305.792zm.14-.392a.57.57 0 0 1 .427-.175v-.57c-.31-.008-.61.112-.829.33zm.427-.175h1.701v-.57h-1.7zm1.701 0a.45.45 0 0 1 .375.159l.43-.368a1.02 1.02 0 0 0-.808-.358zm.408.192c.11.093.168.232.16.375h.566a1.02 1.02 0 0 0-.358-.806zm.16.375v1.624h.566v-1.624zm.513 1.793a6.74 6.74 0 0 1 5.832-2.728v-.567a7.3 7.3 0 0 0-6.3 2.964zm5.832-2.728a6.65 6.65 0 0 1 5.58 2.32l.448-.351a7.22 7.22 0 0 0-6.028-2.546zm5.58 2.32a10.1 10.1 0 0 1 2.046 6.118l.567-.023a10.67 10.67 0 0 0-2.168-6.453zm2.046 6.134c.023.259.037.663.037 1.234h.567c0-.567 0-.995-.04-1.283zm.037 1.234c0 .567 0 .975-.037 1.233l.564.05c.026-.285.04-.716.04-1.283zm-.037 1.246a10.2 10.2 0 0 1-2.046 6.121l.445.352a10.78 10.78 0 0 0 2.168-6.45zm-2.046 6.118a6.71 6.71 0 0 1-5.58 2.32v.568a7.3 7.3 0 0 0 6.025-2.547zm-5.58 2.32a6.86 6.86 0 0 1-5.766-2.652l-.45.332a7.42 7.42 0 0 0 6.213 2.884zm-6.273-2.486v8.578h.57v-8.578zm0 8.578a.52.52 0 0 1-.14.39l.402.402c.206-.211.316-.498.305-.792zm-.153.407a.46.46 0 0 1-.377.16v.57c.31.01.607-.122.809-.358zm-.377.16h-1.81v.57h1.81zm6.024-9.082a4.67 4.67 0 0 0 4.038-1.744l-.457-.332a4.11 4.11 0 0 1-3.578 1.509zm4.035-1.74a7.8 7.8 0 0 0 1.39-4.447l-.568-.023a7.24 7.24 0 0 1-1.276 4.131zm1.386-4.43q.04-.394.04-1.101h-.57c0 .464 0 .812-.037 1.044zm.04-1.101a9.04 9.04 0 0 0-1.35-5.411 4.8 4.8 0 0 0-4.111-1.864v.567c1.412-.1 2.78.513 3.647 1.632a8.5 8.5 0 0 1 1.24 5.073zm-5.461-7.271a4.81 4.81 0 0 0-4.072 1.813l.451.332a4.25 4.25 0 0 1 3.618-1.588zm-4.072 1.813a7.3 7.3 0 0 0-1.425 4.151l.57.027a6.7 6.7 0 0 1 1.326-3.836zm-1.425 4.158-.037 1.406h.567l.037-1.406zm-.037 1.42.037 1.441h.57l-.036-1.442zm.037 1.445a6.47 6.47 0 0 0 1.469 3.979l.44-.362a5.9 5.9 0 0 1-1.326-3.647zm1.469 3.979a4.92 4.92 0 0 0 4.025 1.73v-.567a4.36 4.36 0 0 1-3.588-1.522zm29.008 1.65h.285a.285.285 0 0 0-.517-.158zm-.076-7.105h.285a.285.285 0 0 0-.332-.281zm-6.247 9.622a7.4 7.4 0 0 1-3.243-.713l-.245.514c1.09.515 2.28.777 3.485.766zm-3.243-.713a6.16 6.16 0 0 1-2.37-1.91l-.458.332a6.7 6.7 0 0 0 2.583 2.086zm-2.364-1.9a4.64 4.64 0 0 1-.839-2.685h-.57a5.2 5.2 0 0 0 .938 3.007zm-.839-2.685a4.56 4.56 0 0 1 1.887-3.767l-.348-.447a5.12 5.12 0 0 0-2.106 4.217zm1.887-3.77a11 11 0 0 1 5.335-2.013l-.08-.563a11.54 11.54 0 0 0-5.606 2.128zm5.335-2.013 5.507-.775-.08-.564-5.51.776zm5.753-1.057V50.6h-.567v1.07zm0-1.071a3.83 3.83 0 0 0-1.178-3.04 5.1 5.1 0 0 0-3.431-1.015v.57a4.54 4.54 0 0 1 3.057.872 3.27 3.27 0 0 1 .994 2.613zm-4.61-4.055a4.93 4.93 0 0 0-2.82.752l.33.471a4.37 4.37 0 0 1 2.504-.663zm-2.814.75a4.8 4.8 0 0 0-1.658 1.69l.497.279a4.3 4.3 0 0 1 1.46-1.49zm-1.658 1.737a.75.75 0 0 1-.206.348l.355.444c.185-.163.32-.376.388-.613zm-.225.37a.33.33 0 0 1-.242.064v.567a.88.88 0 0 0 .643-.232zm-.242.064h-1.592v.567h1.592zm-1.592 0a.6.6 0 0 1-.405-.153l-.37.431c.214.188.49.29.775.289zm-.375-.123a.6.6 0 0 1-.155-.408h-.567c-.002.286.1.562.288.776zm-.155-.394a3.65 3.65 0 0 1 .762-1.847l-.464-.332a4.15 4.15 0 0 0-.865 2.149zm.762-1.844a6.1 6.1 0 0 1 2.37-1.87l-.248-.51a6.7 6.7 0 0 0-2.586 2.049zm2.374-1.87a8.66 8.66 0 0 1 3.979-.819v-.567a9.2 9.2 0 0 0-4.234.882zm3.979-.819a7.52 7.52 0 0 1 5.743 1.867l.417-.385a8.07 8.07 0 0 0-6.16-2.049zm5.746 1.87a6.45 6.45 0 0 1 1.734 4.612h.567a7.02 7.02 0 0 0-1.89-5zm1.734 4.612v11.98h.567v-11.98zm0 11.98a.57.57 0 0 1-.176.427l.401.402a1.14 1.14 0 0 0 .332-.83zm-.176.427a.52.52 0 0 1-.391.14v.567c.295.01.58-.1.792-.305zm-.391.14h-1.701v.567h1.7zm-1.701 0a.66.66 0 0 1-.444-.153l-.368.431c.226.193.515.297.812.292zm-.411-.123a.64.64 0 0 1-.156-.444h-.567c-.006.297.096.586.289.812zm-.156-.444v-1.589h-.567v1.589zm-.517-1.751a6.1 6.1 0 0 1-2.265 1.906l.262.504a6.7 6.7 0 0 0 2.47-2.085zm-2.265 1.906a8.2 8.2 0 0 1-3.823.783v.567a8.8 8.8 0 0 0 4.088-.846zm-3.047-1.422a5.52 5.52 0 0 0 4.125-1.638l-.408-.398a4.95 4.95 0 0 1-3.717 1.466zm4.125-1.638a6.53 6.53 0 0 0 1.631-4.745h-.567a5.97 5.97 0 0 1-1.472 4.35zm1.631-4.745v-1.034h-.567v1.034zm-.331-1.326-4.288.627.083.564 4.287-.627zm-4.288.627a9.95 9.95 0 0 0-4.071 1.303l.315.474a9.4 9.4 0 0 1 3.84-1.21zm-4.068 1.3a2.8 2.8 0 0 0-1.462 2.42h.57a2.24 2.24 0 0 1 1.2-1.943zm-1.462 2.42a2.88 2.88 0 0 0 1.346 2.526l.315-.47a2.32 2.32 0 0 1-1.094-2.056zm1.353 2.533c.912.56 1.967.845 3.037.82v-.568a4.97 4.97 0 0 1-2.729-.733zm25.066 2.97a8.2 8.2 0 0 1-6.015-2.134l-.398.404a8.75 8.75 0 0 0 6.41 2.301zm-6.011-2.131a8.8 8.8 0 0 1-2.285-6.097l-.567.02a9.36 9.36 0 0 0 2.447 6.472zm-2.285-6.094-.036-1.479h-.567l.036 1.479zm-.036-1.466.036-1.478h-.567l-.036 1.478zm.036-1.475a8.66 8.66 0 0 1 2.285-6.058l-.405-.401a9.22 9.22 0 0 0-2.447 6.439zm2.285-6.058a8.1 8.1 0 0 1 6.01-2.171v-.567a8.68 8.68 0 0 0-6.412 2.337zm6.01-2.171a9.4 9.4 0 0 1 4.378.928l.261-.504a9.95 9.95 0 0 0-4.641-.995zm4.378.928a6.6 6.6 0 0 1 2.625 2.264l.481-.301a7.16 7.16 0 0 0-2.845-2.467zm2.629 2.271c.548.784.876 1.7.951 2.653l.567-.03a5.93 5.93 0 0 0-1.044-2.951zm.951 2.682a.37.37 0 0 1-.122.332l.371.431a.93.93 0 0 0 .332-.836zm-.122.332a.66.66 0 0 1-.445.153v.566c.299.006.589-.098.816-.291zm-.445.153h-1.773v.566h1.773zm-1.773 0a.6.6 0 0 1-.378-.087l-.355.445c.213.152.471.227.733.212zm-.378-.087a1.3 1.3 0 0 1-.286-.477l-.523.219c.093.267.248.508.454.703zm-.279-.464a5.02 5.02 0 0 0-1.89-2.652l-.308.477a4.45 4.45 0 0 1 1.658 2.37zm-1.883-2.652a5.3 5.3 0 0 0-3.044-.826v.567a4.76 4.76 0 0 1 2.725.726zm-3.044-.826a5.1 5.1 0 0 0-3.866 1.532l.411.391a4.52 4.52 0 0 1 3.455-1.353zm-3.866 1.532a6.75 6.75 0 0 0-1.519 4.51l.567.019a6.2 6.2 0 0 1 1.363-4.141zm-1.519 4.512-.036 1.327h.567l.036-1.327zm-.036 1.347.036 1.256.567-.016-.036-1.257zm.036 1.26a6.8 6.8 0 0 0 1.519 4.545l.411-.391a6.26 6.26 0 0 1-1.363-4.178zm1.519 4.545a5.08 5.08 0 0 0 3.866 1.496v-.57a4.52 4.52 0 0 1-3.455-1.327zm3.866 1.496a5.5 5.5 0 0 0 3.037-.786l-.308-.478a4.94 4.94 0 0 1-2.729.693zm3.044-.79a5.23 5.23 0 0 0 1.883-2.692l-.537-.189a4.67 4.67 0 0 1-1.658 2.41zm1.876-2.675c.06-.178.157-.341.286-.478l-.355-.444a1.8 1.8 0 0 0-.454.706zm.309-.5a.48.48 0 0 1 .355-.104v-.567a1.03 1.03 0 0 0-.756.269zm.355-.104h1.773v-.567h-1.773zm1.773 0a.57.57 0 0 1 .428.176l.401-.401a1.14 1.14 0 0 0-.829-.332zm.445.19a.37.37 0 0 1 .122.33l.564.057a.93.93 0 0 0-.332-.835zm.122.36a5.5 5.5 0 0 1-.955 2.673l.478.305a6.1 6.1 0 0 0 1.044-2.947zm-.955 2.673a6.6 6.6 0 0 1-2.625 2.265l.261.504a7.17 7.17 0 0 0 2.845-2.467zm-2.629 2.268a9.3 9.3 0 0 1-4.376.928v.567a9.8 9.8 0 0 0 4.641-.994zm11.844-15.945h-.282a.285.285 0 0 0 .507.176zm-2.696 16.512a.66.66 0 0 1-.444-.153l-.372.431c.226.194.515.298.813.292zm-.411-.123a.66.66 0 0 1-.153-.444h-.57c-.006.297.096.586.289.812zm-.153-.444V38.272h-.57v24.536zm0-24.536a.52.52 0 0 1 .14-.39l-.402-.402a1.08 1.08 0 0 0-.305.792zm.14-.39a.57.57 0 0 1 .427-.177v-.567a1.14 1.14 0 0 0-.829.332zm.427-.177h1.847v-.567h-1.847zm1.847 0a.45.45 0 0 1 .375.16l.43-.372a1.02 1.02 0 0 0-.808-.358zm.405.19a.45.45 0 0 1 .159.374h.57a1.02 1.02 0 0 0-.358-.806zm.159.374v8.62h.57v-8.62zm.507 8.79a6.9 6.9 0 0 1 2.414-1.99l-.249-.51a7.45 7.45 0 0 0-2.613 2.152zm2.42-1.99a7.5 7.5 0 0 1 3.459-.71v-.566a8.1 8.1 0 0 0-3.717.77zm3.459-.71a6.57 6.57 0 0 1 5.305 2.192l.43-.37a7.14 7.14 0 0 0-5.725-2.391zm5.305 2.2a8.48 8.48 0 0 1 1.926 5.838h.567a9.04 9.04 0 0 0-2.069-6.214zm1.926 5.838V62.82h.567V52.397zm0 10.424a.57.57 0 0 1-.176.428l.402.401c.218-.22.337-.519.331-.829zm-.176.428a.52.52 0 0 1-.39.14v.566c.294.01.58-.1.792-.305zm-.39.14h-1.848v.566h1.847zm-1.848 0a.66.66 0 0 1-.444-.153l-.371.43c.226.194.515.298.812.292zm-.41-.123a.66.66 0 0 1-.153-.445h-.57a1.22 1.22 0 0 0 .288.813zm-.153-.445V52.573h-.57V62.81zm0-10.238a6.16 6.16 0 0 0-1.366-4.258l-.425.378a5.6 5.6 0 0 1 1.22 3.876zm-1.363-4.254a4.88 4.88 0 0 0-3.876-1.539v.567a4.31 4.31 0 0 1 3.445 1.346zm-3.876-1.539a5.2 5.2 0 0 0-3.939 1.568l.411.392a4.64 4.64 0 0 1 3.528-1.39zm-3.939 1.568a5.9 5.9 0 0 0-1.446 4.228h.57a5.34 5.34 0 0 1 1.29-3.833zm-1.446 4.228v10.239h.57V52.573zm0 10.239a.57.57 0 0 1-.175.427l.4.401a1.14 1.14 0 0 0 .332-.828zm-.175.427a.52.52 0 0 1-.392.14v.566c.295.01.581-.1.793-.305zm-.392.14h-1.846v.566h1.846zm27.474.368a7.9 7.9 0 0 1-5.899-2.245l-.404.398a8.46 8.46 0 0 0 6.3 2.414zm-5.896-2.242a9.48 9.48 0 0 1-2.4-6.253l-.567.03a10.04 10.04 0 0 0 2.556 6.614zm-2.397-6.246-.036-1.257h-.567l.036 1.257zm-.036-1.24.036-1.22-.57-.017-.036 1.22zm.036-1.21a9.52 9.52 0 0 1 2.437-6.181l-.41-.391a10.1 10.1 0 0 0-2.594 6.535zm2.434-6.181a7.73 7.73 0 0 1 5.822-2.278v-.567a8.3 8.3 0 0 0-6.23 2.454zm5.822-2.278a7.65 7.65 0 0 1 6.144 2.527l.431-.372a8.21 8.21 0 0 0-6.575-2.722zm6.147 2.527a10.05 10.05 0 0 1 2.185 6.836h.57a10.6 10.6 0 0 0-2.32-7.211zm2.185 6.836v.63h.57v-.63zm0 .63a.57.57 0 0 1-.175.428l.4.401c.22-.22.339-.519.332-.829zm-.175.428a.52.52 0 0 1-.392.14v.566c.295.01.581-.1.793-.305zm-.392.14h-12.791v.566h12.791zm-13.076.285v.331h.57v-.331zm0 .331a7.3 7.3 0 0 0 1.502 4.267l.447-.351a6.72 6.72 0 0 1-1.382-3.942zm1.505 4.27a4.7 4.7 0 0 0 3.806 1.768v-.567a4.14 4.14 0 0 1-3.365-1.558zm3.806 1.768a5.46 5.46 0 0 0 2.925-.71l-.299-.484a4.9 4.9 0 0 1-2.622.624zm2.925-.71a5.9 5.9 0 0 0 1.707-1.518l-.464-.332a5.4 5.4 0 0 1-1.545 1.366zm1.7-1.512q.126-.172.27-.331a1 1 0 0 1 .085-.083l.027-.02-.256-.507a1.1 1.1 0 0 0-.275.225 5 5 0 0 0-.305.375zm.398-.444c.154-.06.32-.083.484-.07v-.566a1.55 1.55 0 0 0-.775.152zm.484-.07h1.814v-.566h-1.814zm1.814 0a.55.55 0 0 1 .371.12l.365-.438a1.12 1.12 0 0 0-.736-.252zm.371.12c.086.075.13.185.12.298h.567a.92.92 0 0 0-.332-.736zm.12.298a3 3 0 0 1-.965 1.77l.424.382a3.5 3.5 0 0 0 1.108-2.152zm-.965 1.774a8 8 0 0 1-2.752 1.926l.239.518a8.6 8.6 0 0 0 2.944-2.07zm-2.749 1.923a9.8 9.8 0 0 1-4.058.79v.566a10.4 10.4 0 0 0 4.294-.839zm1.29-10.315v-.11h-.567v.11zm0-.11a6.3 6.3 0 0 0-1.475-4.33l-.428.379a5.74 5.74 0 0 1 1.326 3.952zm-1.472-4.31a4.86 4.86 0 0 0-3.916-1.727v.57a4.31 4.31 0 0 1 3.478 1.526zm-3.916-1.727a4.86 4.86 0 0 0-3.912 1.728l.434.364a4.31 4.31 0 0 1 3.478-1.525zm-3.916 1.728a6.52 6.52 0 0 0-1.399 4.31h.57a5.95 5.95 0 0 1 1.267-3.959zm-1.399 4.31v.11h.57v-.11zm.285.394h10.13v-.567h-10.13zm-121.647 97.576a1.926 1.926 0 0 1-1.88-1.88 3.8 3.8 0 0 1 .093-1.034l23.296-60.77a2.92 2.92 0 0 1 3.004-2.065h6.386a2.924 2.924 0 0 1 3.007 2.066l23.21 60.769.188 1.034a1.933 1.933 0 0 1-1.88 1.88h-4.79a2.44 2.44 0 0 1-1.599-.47c-.333-.314-.59-.7-.75-1.128l-5.165-13.339h-30.809l-5.165 13.339a2.65 2.65 0 0 1-.846 1.127c-.429.33-.961.497-1.502.471zm40.388-23.01L241.255 94.15l-12.676 33.338zm27.135-34.94a1.963 1.963 0 0 1-2.162-2.159v-5.073a2.37 2.37 0 0 1 .564-1.598 2.17 2.17 0 0 1 1.598-.663h5.918a2.245 2.245 0 0 1 2.255 2.254v5.073c.01.6-.231 1.178-.663 1.595a2.36 2.36 0 0 1-1.595.564zm.753 57.953a1.966 1.966 0 0 1-2.162-2.161v-44.523c-.027-.557.177-1.1.564-1.502a2.18 2.18 0 0 1 1.598-.663h4.506a2.25 2.25 0 0 1 2.161 2.159v44.519c.01.601-.23 1.18-.663 1.598-.402.386-.945.59-1.502.563zm22.748 0a1.963 1.963 0 0 1-2.158-2.161v-44.43a2.37 2.37 0 0 1 .563-1.595 2.17 2.17 0 0 1 1.599-.663h4.31a2.245 2.245 0 0 1 2.255 2.255v4.131a14.11 14.11 0 0 1 13.15-6.386h3.646a2.25 2.25 0 0 1 2.159 2.159v3.85a1.88 1.88 0 0 1-.663 1.501 2.03 2.03 0 0 1-1.502.564h-5.637a10.6 10.6 0 0 0-7.984 3.007 10.8 10.8 0 0 0-2.914 7.984v27.613c.01.601-.23 1.18-.663 1.598a2.37 2.37 0 0 1-1.598.563zm40.564 0a1.966 1.966 0 0 1-2.159-2.161v-39.171h-7.984a1.963 1.963 0 0 1-2.158-2.159v-3.193c-.027-.557.177-1.1.563-1.502a2.17 2.17 0 0 1 1.595-.663h7.984V96.96q0-15.968 16.154-15.965h5.258a2.25 2.25 0 0 1 2.162 2.159v3.193a2.17 2.17 0 0 1-.663 1.594c-.402.386-.945.59-1.502.564h-5.07a6.96 6.96 0 0 0-5.918 2.255 10.77 10.77 0 0 0-1.69 6.667v4.228h20.099V83.159c-.026-.556.177-1.1.563-1.502a2.18 2.18 0 0 1 1.598-.663h4.31a2.25 2.25 0 0 1 2.163 2.159v65.182c.01.601-.23 1.18-.664 1.598-.403.386-.947.59-1.505.563h-4.31a1.963 1.963 0 0 1-2.162-2.161v-39.161h-20.1v39.167a2.17 2.17 0 0 1-.663 1.598c-.403.387-.947.59-1.505.564zm69.296.939a21.5 21.5 0 0 1-16.06-5.826 22.67 22.67 0 0 1-6.012-15.497l-.096-4.039.096-4.038a22.32 22.32 0 0 1 6.104-15.404c9.182-7.89 22.75-7.89 31.933 0a22.33 22.33 0 0 1 6.104 15.404q.093 1.031.093 4.038t-.093 4.039a22.45 22.45 0 0 1-6.104 15.497 21.2 21.2 0 0 1-15.981 5.822zm0-7.232a11.88 11.88 0 0 0 9.284-3.756 16.35 16.35 0 0 0 3.757-10.803q.092-.937.092-3.567t-.092-3.568a16.35 16.35 0 0 0-3.757-10.802 11.88 11.88 0 0 0-9.284-3.757 12.17 12.17 0 0 0-9.393 3.757 16 16 0 0 0-3.647 10.802l-.093 3.568.093 3.567a16 16 0 0 0 3.647 10.803 12.17 12.17 0 0 0 9.377 3.753zm45.607 6.3a2.8 2.8 0 0 1-1.877-.564 4.4 4.4 0 0 1-1.127-1.784l-13.339-43.58-.186-.938a1.9 1.9 0 0 1 .564-1.41 2.13 2.13 0 0 1 1.41-.563h4.13a2.03 2.03 0 0 1 1.502.563c.385.246.682.609.846 1.035l10.428 35.407 11.176-35.032a2.53 2.53 0 0 1 .846-1.327 2.4 2.4 0 0 1 1.784-.663h3.193a2.4 2.4 0 0 1 1.787.663c.416.34.712.806.845 1.327l11.177 35.032 10.425-35.407c.117-.402.347-.76.663-1.035a2.37 2.37 0 0 1 1.598-.563h4.227c.502-.006.982.199 1.327.563.374.372.578.882.563 1.41l-.189.938-13.242 43.58a4.4 4.4 0 0 1-1.128 1.784 2.98 2.98 0 0 1-1.99.564h-3.646a2.85 2.85 0 0 1-3.1-2.348l-10.896-33.623-10.895 33.623a3.08 3.08 0 0 1-3.193 2.348z"></path></g>', 1)
    ]), 4));
  }
});
export {
  d as _
};