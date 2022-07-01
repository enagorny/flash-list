"use strict";(self.webpackChunkflash_list=self.webpackChunkflash_list||[]).push([[187],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=m(n),u=i,h=c["".concat(l,".").concat(u)]||c[u]||d[u]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var m=2;m<r;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},915:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return p},default:function(){return c}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],s={id:"performant-components",title:"Writing performant components"},l=void 0,m={unversionedId:"fundamentals/performant-components",id:"fundamentals/performant-components",title:"Writing performant components",description:"While FlashList does its best to achieve high performance, it will still perform poorly if your item components are slow to render. In this post, let's dive deeper into how you can remedy this.",source:"@site/docs/fundamentals/performant-components.md",sourceDirName:"fundamentals",slug:"/fundamentals/performant-components",permalink:"/flash-list/docs/fundamentals/performant-components",editUrl:"https://github.com/shopify/flash-list/edit/main/docusaurus/docs/fundamentals/performant-components.md",tags:[],version:"current",lastUpdatedBy:"Marek Fo\u0159t",lastUpdatedAt:1656661224,formattedLastUpdatedAt:"7/1/2022",frontMatter:{id:"performant-components",title:"Writing performant components"},sidebar:"autoSidebar",previous:{title:"Estimated Item Size Prop",permalink:"/flash-list/docs/estimated-item-size"},next:{title:"LayoutAnimation",permalink:"/flash-list/docs/guides/layout-animation"}},p=[{value:"Recycling",id:"recycling",children:[],level:2},{value:"Optimizations",id:"optimizations",children:[{value:"<code>estimatedItemSize</code>",id:"estimateditemsize",children:[],level:3},{value:"Remove <code>key</code> prop",id:"remove-key-prop",children:[],level:3},{value:"Difficult calculations",id:"difficult-calculations",children:[],level:3},{value:"<code>getItemType</code>",id:"getitemtype",children:[],level:3},{value:"Leaf components",id:"leaf-components",children:[],level:3}],level:2}],d={toc:p};function c(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"While ",(0,r.kt)("inlineCode",{parentName:"p"},"FlashList")," does its best to achieve high performance, it will still perform poorly if your item components are slow to render. In this post, let's dive deeper into how you can remedy this."),(0,r.kt)("h2",{id:"recycling"},"Recycling"),(0,r.kt)("p",null,"One important thing to understand is how ",(0,r.kt)("inlineCode",{parentName:"p"},"FlashList")," works under the hood. When an item gets out of the viewport, instead of being destroyed, the component is re-rendered with a different ",(0,r.kt)("inlineCode",{parentName:"p"},"item")," prop. When optimizing your item component, try to ensure as few things as possible have to be re-rendered and recomputed when recycling."),(0,r.kt)("h2",{id:"optimizations"},"Optimizations"),(0,r.kt)("p",null,"There's lots of optimizations that are applicable for ",(0,r.kt)("em",{parentName:"p"},"any")," React Native component and which might help render times of your item components as well. Usage of ",(0,r.kt)("inlineCode",{parentName:"p"},"useCallback"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"useMemo"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"useRef")," is advised - but don't use these blindly, always ",(0,r.kt)("a",{parentName:"p",href:"/performance-troubleshooting"},"measure the performance")," before and after making your changes."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Always profile performance in the release mode. ",(0,r.kt)("inlineCode",{parentName:"p"},"FlashList"),"'s performance between JS dev and release mode differs greatly."))),(0,r.kt)("h3",{id:"estimateditemsize"},(0,r.kt)("inlineCode",{parentName:"h3"},"estimatedItemSize")),(0,r.kt)("p",null,"Ensure ",(0,r.kt)("a",{parentName:"p",href:"/usage#estimateditemsize"},(0,r.kt)("inlineCode",{parentName:"a"},"estimatedItemSize"))," is as close as possible to the real average value - see ",(0,r.kt)("a",{parentName:"p",href:"/estimated-item-size#how-to-calculate"},"here")," how to properly calculate the value for this prop."),(0,r.kt)("h3",{id:"remove-key-prop"},"Remove ",(0,r.kt)("inlineCode",{parentName:"h3"},"key")," prop"),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," prop inside your item and item's nested components will highly degrade performance."))),(0,r.kt)("p",null,"Make sure your ",(0,r.kt)("strong",{parentName:"p"},"item components and their nested components don't have a ",(0,r.kt)("inlineCode",{parentName:"strong"},"key")," prop"),". Using this prop will lead to ",(0,r.kt)("inlineCode",{parentName:"p"},"FlashList")," not being able to recycle views, losing all the benefits of using it over ",(0,r.kt)("inlineCode",{parentName:"p"},"FlatList"),"."),(0,r.kt)("p",null,"For example, if we had a following item component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const MyNestedComponent = ({ item }) => {\n  return <Text key={item.id}>I am nested!</Text>;\n};\n\nconst MyItem = ({ item }) => {\n  return (\n    <View key={item.id}>\n      <MyNestedComponent item={item} />\n      <Text>{item.title}</Text>\n    </View>\n  );\n};\n")),(0,r.kt)("p",null,"Then the ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," prop should be removed from both ",(0,r.kt)("inlineCode",{parentName:"p"},"MyItem")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"MyNestedComponent"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const MyNestedComponent = ({ item }) => {\n  return <Text>I am nested!</Text>;\n};\n\nconst MyItem = ({ item }) => {\n  return (\n    <View>\n      <MyNestedComponent item={item} />\n      <Text>{item.title}</Text>\n    </View>\n  );\n};\n")),(0,r.kt)("p",null,"There might be cases where React forces you to use ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," prop, such as when using ",(0,r.kt)("inlineCode",{parentName:"p"},"map"),". In such cirumstances, ensure that the ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," is not tied to the ",(0,r.kt)("inlineCode",{parentName:"p"},"item")," prop in any way, so the keys don't change when recycling."),(0,r.kt)("p",null,"Let's imagine we want to display names of users:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const MyItem = ({ item }: { item: any }) => {\n  return (\n    <>\n      {item.users.map((user: any) => {\n        <Text key={user.id}>{user.name}</Text>;\n      })}\n    </>\n  );\n};\n")),(0,r.kt)("p",null,"If we wrote our item component like this, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Text")," component would need to be re-created. Instead, we can do the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const MyItem = ({ item }) => {\n  return (\n    <>\n      {item.users.map((user, index) => {\n        /* eslint-disable-next-line react/no-array-index-key */\n        <Text key={index}>{user.name}</Text>;\n      })}\n    </>\n  );\n};\n")),(0,r.kt)("p",null,"Although using index as a ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"map")," is not recommended by React, in this case since the data is derived from the list's data, the items will update correctly."),(0,r.kt)("h3",{id:"difficult-calculations"},"Difficult calculations"),(0,r.kt)("p",null,"If you do any calculations that might take a lot of resources, consider memoizing it, making it faster, or removing it altogether. The render method of items should be as efficient as possible:"),(0,r.kt)("h3",{id:"getitemtype"},(0,r.kt)("inlineCode",{parentName:"h3"},"getItemType")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"If you have different types of cell components and these are vastly different, consider leveraging the ",(0,r.kt)("a",{parentName:"strong",href:"/usage#getitemtype"},(0,r.kt)("inlineCode",{parentName:"a"},"getItemType")," prop")),". For example, if we were building a messages list, we could write it like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"// A message can be either a text or an image\nenum MessageType {\n  Text,\n  Image,\n}\n\ninterface TextMessage {\n  text: string;\n  type: MessageType.Text;\n}\n\ninterface ImageMessage {\n  image: ImageSourcePropType;\n  type: MessageType.Image;\n}\n\ntype Message = ImageMessage | TextMessage;\n\nconst MessageItem = ({ item }: { item: Message }) => {\n  switch (item.type) {\n    case MessageType.Text:\n      return <Text>{item.text}</Text>;\n    case MessageType.Image:\n      return <Image source={item.image} />;\n  }\n};\n\n// Rendering the actual messages list\nconst MessageList = () => {\n  return <FlashList renderItem={MessageItem} estimatedItemSize={200} />;\n};\n")),(0,r.kt)("p",null,"However, this implementation has one performance drawback. When the list recycles items and the ",(0,r.kt)("inlineCode",{parentName:"p"},"MessageType")," changes from ",(0,r.kt)("inlineCode",{parentName:"p"},"Text")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"Image")," or vice versa, React won't be able to optimize the re-render since the whole render tree of the item component changes. We can fix this by changing the ",(0,r.kt)("inlineCode",{parentName:"p"},"MessageList")," to this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const MessageList = () => {\n  return (\n    <FlashList\n      renderItem={MessageItem}\n      estimatedItemSize={200}\n      getItemType={(item) => {\n        return item.type;\n      }}\n    />\n  );\n};\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"FlashList")," will now use separate recycling pools based on ",(0,r.kt)("inlineCode",{parentName:"p"},"item.type"),". That means we will never recycle items of different types, making the re-render faster."),(0,r.kt)("h3",{id:"leaf-components"},"Leaf components"),(0,r.kt)("p",null,"Let's consider the following example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const MyHeavyComponent = () => {\n  return ...;\n};\n\nconst MyItem = ({ item }) => {\n  return (\n    <>\n      <MyHeavyComponent />\n      <Text>{item.title}</Text>\n    </>\n  );\n};\n")),(0,r.kt)("p",null,"Since ",(0,r.kt)("inlineCode",{parentName:"p"},"MyHeavyComponent")," does not directly depend on the ",(0,r.kt)("inlineCode",{parentName:"p"},"item")," prop, ",(0,r.kt)("inlineCode",{parentName:"p"},"useMemo")," can be used to skip re-rending ",(0,r.kt)("inlineCode",{parentName:"p"},"MyHeavyComponent")," when the item is recycled and thus re-rendered:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const MyHeavyComponent = () => {\n  return ...;\n};\n\nconst MyItem = ({ item }: { item: any }) => {\n  const MemoizedMyHeavyComponent = memo(MyHeavyComponent);\n  return (\n    <>\n      <MemoizedMyHeavyComponent />\n      <Text>{item.title}</Text>\n    </>\n  );\n};\n")))}c.isMDXComponent=!0}}]);