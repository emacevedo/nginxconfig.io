(self["webpackChunknginxconfig_io"]=self["webpackChunknginxconfig_io"]||[]).push([[153],{8153:(e,n,i)=>{"use strict";i.r(n),i.d(n,{default:()=>c});var o=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",{class:"column "+(e.half?"is-half":"is-full")+" is-full-mobile is-full-tablet",on:{copied:e.copied}},[i("h3",{domProps:{innerHTML:e._s(e.name)}}),i("pre",[i("code",{staticClass:"language-docker",domProps:{innerHTML:e._s(e.conf)}})])])},s=[];i(7158);const l={name:"DockerPrism",props:{name:String,conf:String,half:Boolean},mounted(){console.info(`Highlighting ${this.$props.name}...`),window.Prism.highlightAllUnder(this.$el)},methods:{copied(e){this.$emit("copied",e.detail.text)}}},r=l;var t=i(5961),a=(0,t.Z)(r,o,s,!1,null,null,null);const c=a.exports},7158:()=>{Prism.languages.docker={keyword:{pattern:/(^\s*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\s)/im,lookbehind:!0},string:/("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,comment:{pattern:/#.*/,greedy:!0},punctuation:/---|\.\.\.|[:[\]{}\-,|>?]/},Prism.languages.dockerfile=Prism.languages.docker}}]);