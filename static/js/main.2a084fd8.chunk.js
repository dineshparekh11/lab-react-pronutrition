(this["webpackJsonplab-react-pronutrition"]=this["webpackJsonplab-react-pronutrition"]||[]).push([[0],{10:function(e,t,a){},11:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(2),i=a.n(r),o=a(4),s=a(0),l=function(e){var t=e.imgpath,a=e.title,n=e.calorie,c=e.getdata;return Object(s.jsxs)("div",{className:"food",children:[Object(s.jsx)("img",{src:t,alt:a}),Object(s.jsxs)("div",{className:"content",children:[Object(s.jsx)("h4",{children:a}),Object(s.jsx)("p",{children:n})]}),Object(s.jsx)("div",{className:"inputfield",children:Object(s.jsx)("input",{type:"number",name:"quantity",onKeyUp:function(e){var t=e.target.value,r={name:a,calorie:n,quantity:t>0||""!==t?Number.parseInt(t):0};c(r)},id:"quantity"})})]},a)},u=[{name:"Chocolate milk",calories:208,image:"https://media.fooducate.com/products/images/180x180/4E71DE98-317D-F115-4913-A8A228E0A248.jpeg"},{name:"Pudding",calories:161,image:"https://bakingamoment.com/wp-content/uploads/2016/09/9602square.jpg"},{name:"Yogurt",calories:225,image:"https://media.fooducate.com/products/images/180x180/4E314DFD-0700-E38F-4726-BBAF7E06AA72.jpg"},{name:"Apple",calories:81,image:"https://images.zeald.com/site/freshco/images/apples/Breeze%20apple.jpg"},{name:"Cornbread",calories:198,image:"https://dearcrissy.com/wp-content/uploads/2017/01/easy-homemade-cornbread-4-175x175.jpg"}],d=function(e){var t=e.quantity,a=e.title,n=e.calorie,c=e.removecart;return Object(s.jsxs)("div",{className:"food",children:[Object(s.jsxs)("div",{className:"content",children:[Object(s.jsx)("h4",{children:a}),Object(s.jsx)("p",{children:n*t})]},a),Object(s.jsx)("button",{onClick:function(){c(a)},className:"delete",children:"X"})]},a)},j=function(){var e=Object(n.useState)(),t=Object(o.a)(e,2),a=t[0],r=t[1],j=Object(n.useState)([]),m=Object(o.a)(j,2),h=m[0],p=m[1],b=function(e){var t=h;if(0===t.length)t.unshift(e),p(t);else{var a=!0;t.forEach((function(t){t.name===e.name&&(a=!1,t.quantity=e.quantity)})),a&&(t.unshift(e),p(t))}var n=function e(t){console.log(t),console.log(h);var a=h;a.forEach((function(e){e.name===t&&(e.quantity=0)}));var n=a[0]?a.filter((function(e){return 0!==e.quantity})).map((function(t){return Object(s.jsx)(d,{removecart:e,quantity:t.quantity,title:t.name,calorie:t.calorie},t.name)})):void 0,r=a[0]?a.map((function(e){return e.quantity*e.calorie})).reduce((function(e,t){return e+t})):void 0;i.a.render(Object(s.jsxs)(c.a.Fragment,{children:[Object(s.jsxs)("h1",{children:["Today's Food ",r," cal"]}),n]}),document.querySelector(".cartlist"))},r=t[0]?t.filter((function(e){return 0!==e.quantity})).map((function(e){return Object(s.jsx)(d,{removecart:n,quantity:e.quantity,title:e.name,calorie:e.calorie},e.name)})):null;console.log("outside : "+h.length);var o=t[0]?t.map((function(e){return e.quantity*e.calorie})).reduce((function(e,t){return e+t})):null;i.a.render(Object(s.jsxs)(c.a.Fragment,{children:[Object(s.jsxs)("h1",{children:["Today's Food ",o," cal"]}),r]}),document.querySelector(".cartlist"))},f=u.map((function(e){return Object(s.jsx)(l,{getdata:b,title:e.name,calorie:e.calories,imgpath:e.image},e.name)}));return Object(s.jsxs)(c.a.Fragment,{children:[Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{htmlFor:"foodsearch",children:"Search:  "}),Object(s.jsx)("input",{type:"search",name:"foodsearch",id:"foodsearch",onKeyUp:function(e){e.target.value?r(u.filter((function(t){return t.name.toLowerCase().startsWith(e.target.value)})).map((function(e){return Object(s.jsx)(l,{getdata:b,title:e.name,calorie:e.calories,imgpath:e.image},e.name)}))):r(void 0)},placeholder:"Food"})]}),a||f]}),Object(s.jsx)("div",{className:"cartlist"})]})};a(10);var m=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("header",{children:Object(s.jsx)("h4",{children:"Pro-Nutrition"})}),Object(s.jsx)("section",{children:Object(s.jsx)(j,{})})]})};i.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(m,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.2a084fd8.chunk.js.map