(window["webpackJsonpjson-placeholder-postspage"]=window["webpackJsonpjson-placeholder-postspage"]||[]).push([[0],[,,,,,,,,function(t,e,s){t.exports=s(18)},,,,,function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){"use strict";s.r(e);var a=s(0),o=s.n(a),n=s(7),l=s.n(n),i=(s(13),s(1)),r=s(2),c=s(4),u=s(3),p=s(5);s(14);var d=function(t){return o.a.createElement("div",{className:"header"},o.a.createElement("h1",null,t.title),o.a.createElement("h3",null,"My ID:",o.a.createElement("input",{className:"input-filterPosts",value:t.inputValue,placeholder:"Please select between 1 and 10",onChange:function(e){return t.filterPosts(e.target.value)}})))},y=(s(15),function(t){function e(t){var s;return Object(i.a)(this,e),(s=Object(c.a)(this,Object(u.a)(e).call(this,t))).togglePosts=function(){s.setState({showPostBody:!s.state.showPostBody})},s.state={showPostBody:!1},s}return Object(p.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){var t=this.props,e=t.userId,s=t.postTitle,a=t.postBody;return o.a.createElement("div",{className:"post"},o.a.createElement("div",{className:"post-title"},o.a.createElement("h3",null,s),o.a.createElement("div",{className:"btn-showPostBody ".concat(this.state.showPostBody?"up":"down"),onClick:this.togglePosts})),this.state.showPostBody&&o.a.createElement("div",{className:"post-body"},o.a.createElement("p",null,a),o.a.createElement("p",null,"Posted by user: ",e),o.a.createElement("p",null,"Reference number:  ",this.props.postId)))}}]),e}(a.Component));s(16);var m=function(t){return o.a.createElement("div",{className:"subTitle"},o.a.createElement("h2",null,t.title),o.a.createElement("div",{className:"btn-displayPosts ".concat(t.display?"up":"down"),onClick:t.toggleDisplay}))};var h=function(){return fetch("https://jsonplaceholder.typicode.com/posts")},P=(s(17),function(t){function e(){var t;return Object(i.a)(this,e),(t=Object(c.a)(this,Object(u.a)(e).call(this))).filterPosts=function(e){var s=t.state.posts.filter(function(t){return t.userId===Number(e)});t.setState({inputValue:e,myPost:s})},t.toggleDisplayAllPosts=function(){t.setState({displayAllPosts:!t.state.displayAllPosts})},t.toggleDisplayMyPosts=function(){t.setState({displayMyPosts:!t.state.displayMyPosts})},t.state={posts:[],myPost:[],inputValue:"",displayAllPosts:!1,displayMyPosts:!0},t}return Object(p.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){var t=this;h().then(function(t){return t.json()}).then(function(e){return t.setState({posts:e})})}},{key:"render",value:function(){return o.a.createElement("div",{className:"app"},o.a.createElement(d,{title:"JSON-Placeholder Posts",inputValue:this.state.inputValue,filterPosts:this.filterPosts}),o.a.createElement("div",{className:"app-body"},o.a.createElement("div",{className:"all-posts"},o.a.createElement(m,{title:"All Posts",display:this.state.displayAllPosts,toggleDisplay:this.toggleDisplayAllPosts}),this.state.displayAllPosts&&this.state.posts.map(function(t){return o.a.createElement(y,{key:t.id,userId:t.userId,postId:t.id,postTitle:t.title,postBody:t.body})})),o.a.createElement("div",{className:"my-posts"},o.a.createElement(m,{title:"My Posts",display:this.state.displayMyPosts,toggleDisplay:this.toggleDisplayMyPosts}),this.state.displayMyPosts&&this.state.myPost.map(function(t){return o.a.createElement(y,{key:t.id,userId:t.userId,postId:t.id,postTitle:t.title,postBody:t.body})}))))}}]),e}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.23910f08.chunk.js.map