"use strict";(self.webpackChunkperplexity_extension=self.webpackChunkperplexity_extension||[]).push([[9770],{31219:e=>{function s(e){e.languages.processing=e.languages.extend("clike",{keyword:/\b(?:break|catch|case|class|continue|default|else|extends|final|for|if|implements|import|new|null|private|public|return|static|super|switch|this|try|void|while)\b/,operator:/<[<=]?|>[>=]?|&&?|\|\|?|[%?]|[!=+\-*\/]=?/}),e.languages.insertBefore("processing","number",{constant:/\b(?!XML\b)[A-Z][A-Z\d_]+\b/,type:{pattern:/\b(?:boolean|byte|char|color|double|float|int|XML|[A-Z]\w*)\b/,alias:"variable"}}),e.languages.processing.function.pattern=/\w+(?=\s*\()/,e.languages.processing["class-name"].alias="variable"}e.exports=s,s.displayName="processing",s.aliases=[]}}]);