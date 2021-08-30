(this["webpackJsonpgoit-react-hw-03-image-finder-new"]=this["webpackJsonpgoit-react-hw-03-image-finder-new"]||[]).push([[0],{11:function(e,t,a){e.exports={Overlay:"Modal_Overlay__16KJD",Modal:"Modal_Modal__1FLnp",img:"Modal_img__2bMOq"}},13:function(e,t,a){e.exports={div:"ImageGallery_div__hhRG4",ImageGallery:"ImageGallery_ImageGallery__16S32",ImageGalleryItem:"ImageGallery_ImageGalleryItem__15tK6",ImageGalleryItemImage:"ImageGallery_ImageGalleryItemImage__3n7cX"}},14:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__2cYaL",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__2N_f7"}},17:function(e,t,a){e.exports={Button:"Button_Button__2gZp2"}},22:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(8),o=a.n(r),c=(a(22),a(3)),i=a(4),s=a(6),l=a(5),u=a(10),m=a(7),h=a.n(m),g=a(1),d=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={name:""},e.onHandleChange=function(t){var a=t.target.value.toLowerCase();e.setState({name:a})},e.onHandleSubmit=function(t){t.preventDefault(),""!==e.state.name.trim()?(e.props.onSubmit(e.state.name),document.getElementById("input").value="",e.setState({name:""})):u.b.error("Error, please enter text ")},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(g.jsx)("header",{className:h.a.Searchbar,children:Object(g.jsxs)("form",{className:h.a.SearchForm,onSubmit:this.onHandleSubmit,children:[Object(g.jsx)("button",{type:"submit",className:h.a.SearchFormButton,children:Object(g.jsx)("span",{className:h.a.SearchFormButtonLabel,children:"Search"})}),Object(g.jsx)("input",{className:h.a.SearchFormInput,type:"text",onChange:this.onHandleChange,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",id:"input"})]})})}}]),a}(n.Component),p=a(15),b=a(17),j=a.n(b),y=function(e){var t=e.click;return 2!==e.page&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),Object(g.jsx)("button",{type:"button",onClick:t,className:j.a.Button,children:"Load More"})},f=a(13),O=a.n(f),v=function(e){var t=e.query,a=e.page;return fetch("https://pixabay.com/api/?q=".concat(t,"&page=").concat(a,"&key=").concat("22768638-b34a0dc747ee3cff056840f2a","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.json()})).then((function(e){return e.hits})).then((function(e){return e}))},S=a(14),_=a.n(S),I=a(11),x=a.n(I),w=a(9),M=a.n(w),F=(a(16),function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={imgs:[],id:"",imgModal:"",loading:!1},e.getImage=function(){return e.props.imgs.find((function(t){return t.id.toString()===e.props.id.toString()}))},e.handleEscape=function(t){return"Escape"===t.code&&e.props.closeModal()},e.onOverlayClick=function(t){t.target===t.currentTarget&&e.props.closeModal()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleEscape),document.querySelector("body").style.overflow="hidden",this.setState({imgModal:this.getImage().largeImageURL})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleEscape),document.querySelector("body").style.overflow="auto"}},{key:"render",value:function(){var e=this.state,t=(e.imgs,e.imgModal,e.id,e.loading);return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{className:x.a.Overlay,onClick:this.onOverlayClick,children:Object(g.jsxs)("div",{className:x.a.Modal,id:"Modal",children:[t&&Object(g.jsx)(M.a,{type:"Circles",color:"#00BFFF",height:100,width:100,timeout:3e3}),Object(g.jsx)("img",{src:this.state.imgModal,alt:"",className:x.a.img})]})})})}}]),a}(n.Component)),k=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isModalOpen:!1,id:""},e.onModalOpen=function(t){e.setState({id:t.target.id}),e.setState((function(e){return{isModalOpen:!0}}))},e.closeModal=function(){return e.setState({isModalOpen:!1,setImagePath:""})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.state.id;return Object(g.jsxs)(g.Fragment,{children:[this.props.images.map((function(t){return Object(g.jsx)("li",{className:_.a.ImageGalleryItem,children:Object(g.jsx)("img",{onClick:e.onModalOpen,src:t.webformatURL,id:t.id,alt:t.tag,className:_.a.ImageGalleryItemImage})},t.id)})),this.state.isModalOpen&&Object(g.jsx)(F,{closeModal:this.closeModal,id:t,imgs:this.props.images})]})}}]),a}(n.Component),G=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={imgs:[],page:1,isTarget:!1,loading:!1},e.getImages=function(t){var a=t.query,n=t.page;e.setState({loading:!0}),v({query:a,page:n}).then((function(t){return e.setState((function(e){return{imgs:[].concat(Object(p.a)(e.imgs),Object(p.a)(t))}}))})).finally((function(){return e.setState({loading:!1})}))},e.onHandelClick=function(){e.setState({isTarget:!0})},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this.props.query;e.query!==a&&(this.getImages({query:a,page:1}),this.setState({page:2,imgs:[]})),this.state.isTarget&&(this.setState((function(e){return{page:e.page+1}})),this.getImages({query:this.props.query,page:this.state.page}),this.setState({isTarget:!1}))}},{key:"render",value:function(){var e=this.state,t=e.imgs,a=e.loading;return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{className:O.a.div,children:[Object(g.jsx)("ul",{className:O.a.ImageGallery,children:Object(g.jsx)(k,{images:t})}),a&&Object(g.jsx)(M.a,{type:"Circles",color:"#00BFFF",height:100,width:100,timeout:3e3}),t.length>0&&Object(g.jsx)(y,{click:this.onHandelClick,page:this.state.page})]})})}}]),a}(n.Component),C=(a(44),function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={name:""},e.onSubmit=function(t){e.setState({name:t})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(d,{onSubmit:this.onSubmit}),Object(g.jsx)(u.a,{}),Object(g.jsx)(G,{query:this.state.name})]})}}]),a}(n.Component));o.a.render(Object(g.jsx)(C,{}),document.getElementById("root"))},7:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1Luv6",SearchForm:"Searchbar_SearchForm__3QS_K",SearchFormButton:"Searchbar_SearchFormButton__1u05Y",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__U08Q3",SearchFormInput:"Searchbar_SearchFormInput__1Rq6S"}}},[[45,1,2]]]);
//# sourceMappingURL=main.e8f5d9d2.chunk.js.map