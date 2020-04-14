(this["webpackJsonpart-gallery"]=this["webpackJsonpart-gallery"]||[]).push([[0],{29:function(e,t,a){},42:function(e,t,a){e.exports=a(56)},47:function(e,t,a){},48:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(9),r=a(18),l=a(1),i=a(34),o=(a(47),a(16)),c=a(15),s=a(22),m=a(20),u=(a(48),function(){return l.createElement("div",{className:"wrapper"},l.createElement("div",{className:"loading-spinner"},l.createElement("span",{role:"img","aria-label":"loading-spinner"},"\ud83c\udfa8")))}),d=function(e){var t=e.errorMessage,a=void 0===t?"Error: unknown":t;return l.createElement("div",null,l.createElement("p",{className:"f3 dark-grey"},'In art, an "oops" can be beautiful. In your browser, an "oops" is just an "oops". Try refreshing your browser.'),l.createElement("p",null,a),console.error("Error: ",a))},v=(a(29),function(e){var t=e.artworkDetail;return l.createElement("div",{className:"fl w-100 w-40-l tl f4 lh-copy pv3 ph3",style:{maxWidth:"fit-content"}},l.createElement("div",null,l.createElement("h3",null,null===t||void 0===t?void 0:t.title),l.createElement("div",{className:"fw6 f4"},null===t||void 0===t?void 0:t.artist_names),l.createElement("div",{className:"fw5 f4"},null===t||void 0===t?void 0:t.date)),l.createElement("p",null,(null===t||void 0===t?void 0:t.category)?"".concat(null===t||void 0===t?void 0:t.category,". ").concat(null===t||void 0===t?void 0:t.medium):null===t||void 0===t?void 0:t.medium),l.createElement("p",null,null===t||void 0===t?void 0:t.dimensions.in),(null===t||void 0===t?void 0:t.collecting_institution)&&l.createElement("p",null,"Collector: ",null===t||void 0===t?void 0:t.collecting_institution),l.createElement("p",null,null===t||void 0===t?void 0:t.description))});function E(){var e=Object(s.a)(['\n  query getArtworkDetail($id: String!) {\n    artwork(id: $id) {\n      id\n      artist_names\n      category\n      collecting_institution\n      date\n      description\n      dimensions {\n        in\n      }\n      images {\n        url(version: "large")\n      }\n      medium\n      title\n    }\n  }\n']);return E=function(){return e},e}var g=Object(r.b)(E()),f=function(){var e=Object(c.h)().artworkId,t=Object(m.a)(g,{variables:{id:e}}),a=t.loading,n=t.error,r=t.data,i=null===r||void 0===r?void 0:r.artwork;return a?l.createElement(u,null):n?l.createElement(d,{errorMessage:null===n||void 0===n?void 0:n.message}):l.createElement("div",{className:"pa4"},l.createElement("div",{className:"fl w-100 w-60-l tc"},l.createElement("div",{className:"mw-100 picture-frame"},l.createElement("img",{src:null===i||void 0===i?void 0:i.images[0].url,alt:"artwork: ".concat(null===i||void 0===i?void 0:i.title,"."),className:"dib"}))),i&&l.createElement(v,{artworkDetail:i}))},h=a(41),p=function(e){var t=e.name,a=e.birthday,n=e.deathday;return l.createElement(l.Fragment,null,l.createElement("h2",{className:"db b mb0 pt6 f1 tl mv0 mh5 tracked-tight"},t),l.createElement("div",{className:"tl mb0 mt2 mh5 f4"},n?"".concat(a,"\u2013").concat(n):a))},w=function(e){var t=e.artworkTile;return l.createElement(o.b,{to:"/art-gallery/artwork/".concat(t.id),className:"artwork-link"},l.createElement("div",{className:"ma4 pointer picture-frame artwork-tile"},l.createElement("img",{src:t.images[0].url,alt:"artwork"})))},y=function(e){var t=e.name,a=e.birthday,n=e.deathday,r=e.artworks;return l.createElement(l.Fragment,null,l.createElement(p,{name:t,birthday:a,deathday:n}),l.createElement("div",{className:"flex justify-around flex-wrap"},r.map((function(e){return l.createElement(w,{key:e.id,artworkTile:e})}))))},b=function(e){var t=e.displayedArtists,a=e.loading,n=e.error;return a?l.createElement(u,null):n?l.createElement(d,{errorMessage:null===n||void 0===n?void 0:n.message}):l.createElement("div",null,!t.length&&"No results found",t.map((function(e){var t=e.id,a=e.name,n=e.birthday,r=e.deathday,i=e.artworks;return l.createElement(y,{key:t,name:a,birthday:n,deathday:r,artworks:i})})))},k=function(e){var t=e.setSearchValue,a=e.searchValue;return l.createElement("form",{onSubmit:function(e){e.preventDefault()}},l.createElement("label",{className:"db pr2",htmlFor:"search-input"},"Search by artist"),l.createElement("input",{className:"f4 ba br2 pa2 mv2",type:"search",id:"search-input",value:a,onChange:function(e){t(e.target.value)}}))};function N(){var e=Object(s.a)(['\n  {\n    trending_artists(name: ARTIST_FOLLOW) {\n      artists {\n        id\n        name\n        birthday\n        deathday\n        artworks {\n          id\n          images {\n            url(version: "square")\n          }\n        }\n      }\n    }\n  }\n']);return N=function(){return e},e}var j=Object(r.b)(N()),O=function(){var e=Object(m.a)(j),t=e.loading,a=e.error,n=e.data,r=l.useState(""),i=Object(h.a)(r,2),o=i[0],c=i[1],s=(n||{trending_artists:{artists:[]}}).trending_artists.artists.filter((function(e){return e.name.toLowerCase().includes(o.toLowerCase())}));return l.createElement("div",{className:"pa3"},l.createElement("div",{className:"tc pt4"},l.createElement(k,{setSearchValue:c,searchValue:o})),l.createElement(b,{loading:t,error:a,displayedArtists:s}))},_=function(){return l.createElement("h1",{className:"tc"},"Gallery of Popular Artists")},S=function(){var e=Object(c.g)().pathname;return l.createElement("div",{className:"bg-dark-gray white pa3"},"/art-gallery"===e?l.createElement(_,null):l.createElement(o.b,{className:"link white hover-moon-gray",to:"/art-gallery"},l.createElement(_,null)))},I=function(){return l.createElement(o.a,null,l.createElement(S,null),l.createElement(c.d,null,l.createElement(c.a,{exact:!0,from:"/",to:"/art-gallery"}),l.createElement(c.b,{path:"/art-gallery/artwork/:artworkId"},l.createElement(f,null)),l.createElement(c.b,{path:"/art-gallery"},l.createElement(O,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(55);var x=new r.a({uri:"https://metaphysics-staging.artsy.net"});i.render(l.createElement(n.a,{client:x},l.createElement(l.StrictMode,null,l.createElement(I,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.96479b9e.chunk.js.map