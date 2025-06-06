// 从Vue运行时导入辅助函数和组件API
import {
  _ as w,        // defineComponent
  o as _,        // createVNode
  e as u,        // createElementVNode
  f as i,        // createTextVNode
  d as B,        // defineComponent
  i as E,        // ref
  g as S,        // reactive
  h as I,        // computed
  r as N,        // useRouter
  j as x,        // useComponent
  k as O,        // PageTitle组件
  l as p,        // Fragment
  t as m,        // toDisplayString
  F as C,        // TransitionGroup
  m as y,        // resolveComponent
  u as a,        // unref
  n as k,        // classNames工具
  p as j,        // style工具
  q as L,        // 配置项
  w as $,        // createElementBlock
  b as R         // RouterLink组件
} from "./index.ab2de2c5.js";

// 导入Logo图片
// var T = "./assets/logo.png";
var T = "./assets/logo.png";

// 博客标题组件
const U = {};
const F = { class: "text-center my-5" };
const G = i("p", { class: "display-3" }, " ", -1);
const H = i("img", {style:"", alt: "Vue logo", src: T }, null, -1);
const q = [G, H];

// 标题组件渲染函数
function D(o, s) {
  return _(), u("div", F, q);
}

// 定义博客标题组件
var X = w(U, [["render", D]]);

/**
 * 分页算法函数
 * @param {number} o - 总项目数
 * @param {number} s - 当前页码，默认1
 * @param {number} f - 每页项目数，默认10
 * @param {number} g - 可见页码数，默认10
 * @returns {Object} - 分页信息对象
 */
const z = (o, s = 1, f = 10, g = 10) => {
  const c = Math.ceil(o / f); // 计算总页数
  
  // 确保当前页码在有效范围内
  s < 1 ? s = 1 : s > c && (s = c);
  let r, t;
  
  // 确定可见页码范围
  if (c <= g) {
    r = 1;
    t = c;
  } else {
    const l = Math.floor(g / 2);
    const e = Math.ceil(g / 2) - 1;
    
    // 根据当前页位置计算可见页码范围
    s <= l ? (r = 1, t = g) : 
    s + e >= c ? (r = c - g + 1, t = c) : 
    (r = s - l, t = s + e);
  }
  
  // 计算索引和可见页码数组
  const n = (s - 1) * f;
  const h = Math.min(n + f - 1, o - 1);
  const d = Array.from(Array(t + 1 - r).keys()).map(l => r + l);
  
  return {
    totalItems: o,
    currentPage: s,
    pageSize: f,
    totalPages: c,
    startPage: r,
    endPage: t,
    startIndex: n,
    endIndex: h,
    pages: d
  };
};

// 模板常量定义
const J = { key: 0 };
const K = { key: 1, class: "text-center display-4 text-capitalize my-5" };
const Q = { class: "text-left m-0 p-0" };
const W = { class: "m-0 p-0 text-right font-weight-bold" };
const Y = { class: "font-weight-light mt-1" };
const Z = { key: 2, class: "pagination justify-content-center mb-5 pb-5", style: { cursor: "pointer" } };
const tt = { class: "page-link" };
const et = ["onClick"];
const st = { class: "page-link" };
const ot = { class: "page-link" };

// 博客首页组件
const at = B({
  __name: "Home",
  props: {
    section: {
      type: String,
      default: ""
    }
  },
  setup(o) {
    const s = o;
    
    // 从配置中获取每页显示数量和样式配置
    const { VUE_APP_POSTS_PER_PAGE: f, VUE_APP_MAIN_BG_CSS_COLOR: g, VUE_APP_MAIN_TEXT_CSS_COLOR: c } = L;
    
    // 响应式数据
    const r = E("postsIndex", []);         // 文章索引数据
    const t = S(1);                        // 当前页码
    
    // 计算属性：处理分页逻辑和筛选文章
    const n = I(() => {
      // 根据分类筛选文章
      const h = s.section ? r.filter(({ section: v }) => v === s.section) : r;
      
      // 计算分页信息
      const { startPage: d, endPage: l, startIndex: e, endIndex: P } = z(h.length, t.value, f);
      
      // 计算相邻页码
      const b = t.value - 1 >= d ? t.value - 1 : 0;
      const A = t.value + 1 <= l ? t.value + 1 : 0;
      
      // 过滤出有效的中间页码
      const M = [b, t.value, A].filter(v => v > d && v < l);
      
      // 获取当前页可见的文章
      const V = h.slice(e, P + 1);
      
      return {
        startPage: d,
        midPages: M,
        endPage: l,
        visiblePosts: V
      };
    });
    
    // 渲染函数
    return (h, d) => {
      const l = N("router-link");
      
      return _(), u(C, null, [
        // 页面标题组件
        x(O, { title: o.section ? o.section : "Minimal Vue3 + Markdown blog engine" }, null, 8, ["title"]),
        
        // 博客主容器，应用配置的背景和文字颜色
        i("div", { style: j(`background-color: ${a(g)}; color: ${a(c)};`) }, [
          // 博客标题组件
          x(X, { class: "mb-5" }),
          
          // 如果有分类，显示分隔线
          o.section ? (_(), u("hr", J)) : p("", !0),
          
          // 如果有分类，显示分类标题
          o.section ? (_(), u("p", K, m(o.section), 1)) : p("", !0),
          
          // 文章列表
          (_(!0), u(C, null, y(a(n).visiblePosts, e => (
            _(), u("div", { key: e.id, class: "container markdown-body p-3 p-md-4" }, [
              // 文章标题，点击跳转详情页
              x(l, { to: `/${e.section}/${e.id}`, class: "text-reset" }, {
                default: $(() => [i("h3", Q, m(e.title), 1)]),
                _: 2
              }, 1032, ["to"]),
              
              // 文章日期
              i("p", { class: k(["font-weight-light font-italic m-0 p-0", o.section ? "mb-3" : "text-right"]) }, m(e.date), 3),
              
              // 如果不是分类页面，显示分类标签
              o.section ? p("", !0) : (_(), R(l, { key: 0, to: `/${e.section}`, class: "text-reset" }, {
                default: $(() => [i("h6", W, " #" + m(e.section), 1)]),
                _: 2
              }, 1032, ["to"])),
              
              // 文章描述
              i("p", Y, m(e.description), 1)
            ])
          )), 128)),
          
          // 分页导航，只有多页时显示
          a(n).endPage > a(n).startPage ? (_(), u("ul", Z, [
            // 第一页按钮
            i("li", {
              class: k(["page-item", t.value == a(n).startPage ? "active" : ""]),
              onClick: d[0] || (d[0] = e => t.value = a(n).startPage)
            }, [i("a", tt, m(a(n).startPage), 1)], 2),
            
            // 中间页码按钮
            (_(!0), u(C, null, y(a(n).midPages, (e, P) => (
              _(), u("li", {
                key: P,
                class: k(["page-item", t.value == e ? "active" : ""]),
                onClick: b => t.value = e
              }, [i("a", st, m(e), 1)], 10, et)
            )), 128)),
            
            // 最后一页按钮
            i("li", {
              class: k(["page-item", t.value == a(n).endPage ? "active" : ""]),
              onClick: d[1] || (d[1] = e => t.value = a(n).endPage)
            }, [i("a", ot, m(a(n).endPage), 1)], 2)
          ])) : p("", !0)
        ], 4)
      ], 64);
    };
  }
});

// 导出默认组件
export { at as default };