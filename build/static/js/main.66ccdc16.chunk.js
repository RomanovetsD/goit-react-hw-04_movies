(this.webpackJsonpcra=this.webpackJsonpcra||[]).push([[0],{23:function(e,t,a){e.exports=a.p+"static/media/img.aef89ac2.jpg"},24:function(e,t,a){e.exports=a(35)},29:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(14),l=a.n(r),o=(a(29),a(8)),i=a(11),s=Object.freeze({HOME:"/",MOVIES:"/movie",MOVIE_DETAILS:"/movie/:movieId",MOVIE_CAST:"/credits",MOVIE_REVIEWS:"/reviews"}),u=function(){return c.a.createElement("ul",{className:"list"},c.a.createElement("li",{className:"navlist"},c.a.createElement(o.c,{exact:!0,to:s.HOME,className:"navlink",style:{color:"black"},activeStyle:{color:"red"}},"Home")),c.a.createElement("li",{className:"navlist"},c.a.createElement(o.c,{to:s.MOVIES,className:"navlink",style:{color:"black"},activeStyle:{color:"red"}},"Movies")))},m=a(3),h=a(4),f=a(6),p=a(5),E=a(7),v="5f7ac1b9f858cfa7079e5dbc9197589b",d="https://api.themoviedb.org/3",g={fetchMovieWithQuery:function(e){return fetch("".concat(d).concat("/search").concat(s.MOVIES,"?api_key=").concat(v,"&language=en-US").concat("&query=").concat(e,"&page=1&include_adult=false")).then((function(e){return e.json()})).then((function(e){return e.results}))},fetchMovieDetails:function(e){return fetch("".concat(d).concat(s.MOVIES,"/").concat(e,"?api_key=").concat(v,"&language=en-US")).then((function(e){return e.json()}))},fetchCredits:function(e){return fetch("".concat(d).concat(s.MOVIES,"/").concat(e).concat(s.MOVIE_CAST,"?api_key=").concat(v)).then((function(e){return e.json()})).then((function(e){return e.cast}))},fetchReviews:function(e){return fetch("".concat(d).concat(s.MOVIES,"/").concat(e).concat(s.MOVIE_REVIEWS,"?api_key=").concat(v)).then((function(e){return e.json()})).then((function(e){return e.results}))},fetchTrending:function(){return fetch("".concat(d,"/").concat("trending/all/day","?api_key=").concat(v)).then((function(e){return e.json()}))}},b=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(f.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={results:[]},a}return Object(E.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.fetchTrending().then((function(t){e.setState({results:t.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state.results;return c.a.createElement("div",null,c.a.createElement("hr",{className:"hrline"}),c.a.createElement("h1",null,"Trending today"),c.a.createElement("ul",null,e.map((function(e){return c.a.createElement("li",{key:e.id},c.a.createElement(o.b,{to:"".concat(s.MOVIES,"/").concat(e.id)},e.name,e.title))}))))}}]),t}(n.Component),y=a(22),O=a(23),j=a.n(O),S=function(){return c.a.createElement("div",null,c.a.createElement("img",{src:j.a,className:"img",alt:"img_not_found"}))},w=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(f.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={value:""},a.onChange=function(e){a.setState({value:e.target.value})},a.onSubmit=function(e){e.preventDefault(),a.props.onSearch(a.state.value),a.setState({value:""})},a}return Object(E.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.state.value;return c.a.createElement("form",{onSubmit:this.onSubmit},c.a.createElement("input",{type:"text",value:e,onChange:this.onChange,className:"input"}),c.a.createElement("button",{type:"submit"},"Search"))}}]),t}(n.Component);function M(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var k=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(f.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={results:[]},a.setSearchQuery=function(e){a.props.history.push(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?M(a,!0).forEach((function(t){Object(y.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):M(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a.props.location,{search:"query=".concat(e)}))},a}return Object(E.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.location,a=new URLSearchParams(t.search).get("query");a&&g.fetchMovieWithQuery(a).then((function(t){e.setState({results:t})}))}},{key:"componentDidUpdate",value:function(e){var t=this,a=this.props.location,n=new URLSearchParams(e.location.search).get("query"),c=new URLSearchParams(a.search).get("query");n!==c&&g.fetchMovieWithQuery(c).then((function(e){t.setState({results:e})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state.results,t=this.props.match;return c.a.createElement("div",null,c.a.createElement("h1",null,"Movie page"),c.a.createElement(w,{onSearch:this.setSearchQuery}),e.length<=0&&c.a.createElement(S,null),c.a.createElement("ul",null,e.map((function(e){return c.a.createElement("li",{key:e.id},c.a.createElement(o.b,{to:{state:{from:"location"},pathname:"".concat(t.url,"/").concat(e.id)}},e.name,e.title))}))))}}]),t}(n.Component),N=document.querySelector("#loader-root"),I=function(){return Object(r.createPortal)(c.a.createElement("div",{className:"loader"},"Waiting! Page is loading..."),N)},_=function(e){return c.a.createElement("div",null,"Error: ",e)},C=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(f.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={cast:null,isLoading:!1,error:null},a.getCredits=function(e){a.setState({isLoading:!0}),g.fetchCredits(e).then((function(e){a.setState({cast:e})})).catch((function(e){a.setState({error:e})})).finally((function(){a.setState({isLoading:!1})}))},a}return Object(E.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.movieId;this.getCredits(e)}},{key:"render",value:function(){var e=this.state,t=e.cast,a=e.isLoading,n=e.error;return c.a.createElement("section",{className:"cast"},n&&c.a.createElement(_,{message:n.message}),a&&c.a.createElement(I,null),c.a.createElement("h2",null,"Cast"),t&&c.a.createElement("ul",{className:"castList"},t.map((function(e){return c.a.createElement("li",{key:e.cast_id,className:"castListItem"},c.a.createElement("object",{title:"This object has text",data:"".concat("https://image.tmdb.org/t/p/w500/").concat(e.profile_path),type:"image/png",width:"100"}),c.a.createElement("p",{className:"castListName"},e.name),c.a.createElement("p",null," Character:",e.character))}))))}}]),t}(n.Component),L=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(f.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={reviews:[],isLoading:!1,error:null},a.getCredits=function(e){a.setState({isLoading:!0}),g.fetchReviews(e).then((function(e){a.setState({reviews:e})})).catch((function(e){a.setState({error:e})})).finally((function(){a.setState({isLoading:!1})}))},a}return Object(E.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.movieId;this.getCredits(e)}},{key:"render",value:function(){var e=this.state,t=e.reviews,a=e.isLoading,n=e.error;return c.a.createElement("section",{className:"reviews"},n&&c.a.createElement(_,{message:n.message}),a&&c.a.createElement(I,null),c.a.createElement("h2",null,"Reviews"),t&&c.a.createElement("ul",{className:"reviewsList"},t.map((function(e){return c.a.createElement("li",{key:e.id},c.a.createElement("h3",null,"Author: ",e.author),c.a.createElement("p",null,"`",e.content,"`"))}))),0===t.length&&c.a.createElement("p",null,"There are no reviews for this movie"))}}]),t}(n.Component),V=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(f.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={result:null,isLoading:!1,error:null},a.fetchDetails=function(){var e=a.props.match.params.movieId;a.setState({isLoading:!0}),g.fetchMovieDetails(e).then((function(e){a.setState({result:e})})).catch((function(e){a.setState({error:e})})).finally((function(){a.setState({isLoading:!1})}))},a.moveToPreviousPage=function(){var e=a.props,t=e.location,n=e.history;if(!t.state)return n.push("".concat(s.MOVIES));n.push({pathname:"".concat(s.MOVIES),state:{from:"location"}})},a}return Object(E.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.fetchDetails()}},{key:"render",value:function(){var e=this.state,t=e.result,a=e.isLoading,n=e.error,r=this.props.match;return c.a.createElement("section",null,n&&c.a.createElement(_,{message:n.message}),a&&c.a.createElement(I,null),c.a.createElement("hr",{className:"hrline"}),c.a.createElement("h2",{className:"film_title"},"Movie Details"),t&&c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{className:"back_button",onClick:this.moveToPreviousPage,type:"button"},"\u2190 GO BACK"),c.a.createElement("div",{className:"film_description"},c.a.createElement("img",{src:"".concat("https://image.tmdb.org/t/p/w300/").concat(t.poster_path),alt:t.title,className:"movie_img"}),c.a.createElement("div",{className:"film_details"},c.a.createElement("h1",null,t.original_title),c.a.createElement("p",null,c.a.createElement("b",null,"Overview"),c.a.createElement("br",null)," ",t.overview),c.a.createElement("p",null,c.a.createElement("b",null,"Vote average:")," ",10*t.vote_average," %"),c.a.createElement("p",null,c.a.createElement("b",null,"Genres:")," ",c.a.createElement("br",null),t.genres?t.genres.map((function(e){return e.name})).join(", "):"No information about film"))),c.a.createElement("hr",{className:"hrline"}),c.a.createElement("div",{className:"details_additional"},c.a.createElement("h2",null,"Additional information"),c.a.createElement("ul",{className:"details_list"},c.a.createElement("li",null,c.a.createElement(o.b,{to:"".concat(r.url,"/cast")}," Cast ")),c.a.createElement("li",null,c.a.createElement(o.b,{to:"".concat(r.url,"/reviews")}," Reviews "))),c.a.createElement("hr",{className:"hrline"}),c.a.createElement(i.d,null,c.a.createElement(i.b,{path:"".concat(r.path,"/cast"),component:C}),c.a.createElement(i.b,{path:"".concat(r.path,"/reviews"),component:L})))))}}]),t}(n.Component),D=function(){return c.a.createElement(o.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(u,null),c.a.createElement(i.d,null,c.a.createElement(i.b,{exact:!0,path:s.HOME,component:b}),c.a.createElement(i.b,{path:s.MOVIE_DETAILS,component:V}),c.a.createElement(i.b,{path:s.MOVIES,component:k}),c.a.createElement(i.a,{to:"/"}))))};l.a.render(c.a.createElement(D,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.66ccdc16.chunk.js.map