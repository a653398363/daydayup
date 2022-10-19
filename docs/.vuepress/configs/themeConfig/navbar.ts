// navbar of headlink
const navbar = [
  {
    text: "算法",
    link: "/algorithms/",
  },
  {
    text: "计算机",
    link: "/computer/",
    children: [
      // '/computer/os/README.md',
      "/computer/net/network-architecture",
      // '/computer/pocc/README.md',
    ],
  },
  {
    text: "前端",
    link: "/Front/",
    children: [
      {
        text: "Vue Base",
        link: "/Front/vue/basic/vuebase",
      },
      {
        text: "Vue advanced",
        link: "/Front/vue/advanced/vuecli",
        // children: [
        //   '/Front/vue/README.md',
        //   '/Front/vue/VueScoped.md'
        // ]
      },
      {
        text: "Vue3",
        link: "/Front/Vue3/basic",
      },
      {
        text: "JavaScript",
        link: "/Front/JavaScript/currie",
      },
      {
        text: "TypeScript",
        link: "/Front/ts/",
      },
      {
        text: "浏览器",
        link: "/Front/browser/README.md",
      },
      {
        text: "性能优化",
        link: "/Front/performance/README.md",
      },
    ],
  },
  {
    text: "后端",
    link: "/backend/",
    children: ["/backend/Golang/README.md"],
  },
  { text: "服务", link: "/serve/", children: [ "/serve/linux.md"] },
  {
    text: "web3",
    link: "/web3/",
  },
  {
    text: "工具",
    link: "/tools/",
  },
  // {
  //   text: 'luck',
  //   link: '/tools/luckb'
  // }
];

export default navbar;
