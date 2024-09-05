/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.51.0(67d664a32968e19e2eb08b696a92463804182ae4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
define("vs/language/html/htmlMode", ["require","require"],(require)=>{
"use strict";var moduleExports=(()=>{var _t=Object.create;var O=Object.defineProperty;var bt=Object.getOwnPropertyDescriptor;var Ct=Object.getOwnPropertyNames;var wt=Object.getPrototypeOf,Et=Object.prototype.hasOwnProperty;var Lt=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(n,i)=>(typeof require<"u"?require:n)[i]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var Rt=(e,n)=>()=>(n||e((n={exports:{}}).exports,n),n.exports),Pt=(e,n)=>{for(var i in n)O(e,i,{get:n[i],enumerable:!0})},N=(e,n,i,r)=>{if(n&&typeof n=="object"||typeof n=="function")for(let t of Ct(n))!Et.call(e,t)&&t!==i&&O(e,t,{get:()=>n[t],enumerable:!(r=bt(n,t))||r.enumerable});return e},he=(e,n,i)=>(N(e,n,"default"),i&&N(i,n,"default")),xe=(e,n,i)=>(i=e!=null?_t(wt(e)):{},N(n||!e||!e.__esModule?O(i,"default",{value:e,enumerable:!0}):i,e)),Wt=e=>N(O({},"__esModule",{value:!0}),e);var ye=Rt((Jt,ve)=>{var Dt=xe(Lt("vs/editor/editor.api"));ve.exports=Dt});var Qt={};Pt(Qt,{CompletionAdapter:()=>U,DefinitionAdapter:()=>ge,DiagnosticsAdapter:()=>le,DocumentColorAdapter:()=>pe,DocumentFormattingEditProvider:()=>A,DocumentHighlightAdapter:()=>W,DocumentLinkAdapter:()=>M,DocumentRangeFormattingEditProvider:()=>S,DocumentSymbolAdapter:()=>F,FoldingRangeAdapter:()=>H,HoverAdapter:()=>P,ReferenceAdapter:()=>fe,RenameAdapter:()=>D,SelectionRangeAdapter:()=>K,WorkerManager:()=>T,fromPosition:()=>I,fromRange:()=>me,setupMode:()=>qt,setupMode1:()=>Bt,toRange:()=>v,toTextEdit:()=>R});var d={};he(d,xe(ye()));var Ft=2*60*1e3,T=class{constructor(n){this._defaults=n,this._worker=null,this._client=null,this._idleCheckInterval=window.setInterval(()=>this._checkIfIdle(),30*1e3),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange(()=>this._stopWorker())}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}dispose(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()}_checkIfIdle(){if(!this._worker)return;Date.now()-this._lastUsedTime>Ft&&this._stopWorker()}_getClient(){return this._lastUsedTime=Date.now(),this._client||(this._worker=d.editor.createWebWorker({moduleId:"vs/language/html/htmlWorker",createData:{languageSettings:this._defaults.options,languageId:this._defaults.languageId},label:this._defaults.languageId}),this._client=this._worker.getProxy()),this._client}getLanguageServiceWorker(...n){let i;return this._getClient().then(r=>{i=r}).then(r=>{if(this._worker)return this._worker.withSyncedResources(n)}).then(r=>i)}};var ke;(function(e){function n(i){return typeof i=="string"}e.is=n})(ke||(ke={}));var J;(function(e){function n(i){return typeof i=="string"}e.is=n})(J||(J={}));var Ie;(function(e){e.MIN_VALUE=-2147483648,e.MAX_VALUE=2147483647;function n(i){return typeof i=="number"&&e.MIN_VALUE<=i&&i<=e.MAX_VALUE}e.is=n})(Ie||(Ie={}));var V;(function(e){e.MIN_VALUE=0,e.MAX_VALUE=2147483647;function n(i){return typeof i=="number"&&e.MIN_VALUE<=i&&i<=e.MAX_VALUE}e.is=n})(V||(V={}));var k;(function(e){function n(r,t){return r===Number.MAX_VALUE&&(r=V.MAX_VALUE),t===Number.MAX_VALUE&&(t=V.MAX_VALUE),{line:r,character:t}}e.create=n;function i(r){let t=r;return a.objectLiteral(t)&&a.uinteger(t.line)&&a.uinteger(t.character)}e.is=i})(k||(k={}));var m;(function(e){function n(r,t,o,s){if(a.uinteger(r)&&a.uinteger(t)&&a.uinteger(o)&&a.uinteger(s))return{start:k.create(r,t),end:k.create(o,s)};if(k.is(r)&&k.is(t))return{start:r,end:t};throw new Error(`Range#create called with invalid arguments[${r}, ${t}, ${o}, ${s}]`)}e.create=n;function i(r){let t=r;return a.objectLiteral(t)&&k.is(t.start)&&k.is(t.end)}e.is=i})(m||(m={}));var z;(function(e){function n(r,t){return{uri:r,range:t}}e.create=n;function i(r){let t=r;return a.objectLiteral(t)&&m.is(t.range)&&(a.string(t.uri)||a.undefined(t.uri))}e.is=i})(z||(z={}));var Te;(function(e){function n(r,t,o,s){return{targetUri:r,targetRange:t,targetSelectionRange:o,originSelectionRange:s}}e.create=n;function i(r){let t=r;return a.objectLiteral(t)&&m.is(t.targetRange)&&a.string(t.targetUri)&&m.is(t.targetSelectionRange)&&(m.is(t.originSelectionRange)||a.undefined(t.originSelectionRange))}e.is=i})(Te||(Te={}));var Y;(function(e){function n(r,t,o,s){return{red:r,green:t,blue:o,alpha:s}}e.create=n;function i(r){let t=r;return a.objectLiteral(t)&&a.numberRange(t.red,0,1)&&a.numberRange(t.green,0,1)&&a.numberRange(t.blue,0,1)&&a.numberRange(t.alpha,0,1)}e.is=i})(Y||(Y={}));var _e;(function(e){function n(r,t){return{range:r,color:t}}e.create=n;function i(r){let t=r;return a.objectLiteral(t)&&m.is(t.range)&&Y.is(t.color)}e.is=i})(_e||(_e={}));var be;(function(e){function n(r,t,o){return{label:r,textEdit:t,additionalTextEdits:o}}e.create=n;function i(r){let t=r;return a.objectLiteral(t)&&a.string(t.label)&&(a.undefined(t.textEdit)||w.is(t))&&(a.undefined(t.additionalTextEdits)||a.typedArray(t.additionalTextEdits,w.is))}e.is=i})(be||(be={}));var b;(function(e){e.Comment="comment",e.Imports="imports",e.Region="region"})(b||(b={}));var Ce;(function(e){function n(r,t,o,s,u,g){let f={startLine:r,endLine:t};return a.defined(o)&&(f.startCharacter=o),a.defined(s)&&(f.endCharacter=s),a.defined(u)&&(f.kind=u),a.defined(g)&&(f.collapsedText=g),f}e.create=n;function i(r){let t=r;return a.objectLiteral(t)&&a.uinteger(t.startLine)&&a.uinteger(t.startLine)&&(a.undefined(t.startCharacter)||a.uinteger(t.startCharacter))&&(a.undefined(t.endCharacter)||a.uinteger(t.endCharacter))&&(a.undefined(t.kind)||a.string(t.kind))}e.is=i})(Ce||(Ce={}));var Z;(function(e){function n(r,t){return{location:r,message:t}}e.create=n;function i(r){let t=r;return a.defined(t)&&z.is(t.location)&&a.string(t.message)}e.is=i})(Z||(Z={}));var _;(function(e){e.Error=1,e.Warning=2,e.Information=3,e.Hint=4})(_||(_={}));var we;(function(e){e.Unnecessary=1,e.Deprecated=2})(we||(we={}));var Ee;(function(e){function n(i){let r=i;return a.objectLiteral(r)&&a.string(r.href)}e.is=n})(Ee||(Ee={}));var X;(function(e){function n(r,t,o,s,u,g){let f={range:r,message:t};return a.defined(o)&&(f.severity=o),a.defined(s)&&(f.code=s),a.defined(u)&&(f.source=u),a.defined(g)&&(f.relatedInformation=g),f}e.create=n;function i(r){var t;let o=r;return a.defined(o)&&m.is(o.range)&&a.string(o.message)&&(a.number(o.severity)||a.undefined(o.severity))&&(a.integer(o.code)||a.string(o.code)||a.undefined(o.code))&&(a.undefined(o.codeDescription)||a.string((t=o.codeDescription)===null||t===void 0?void 0:t.href))&&(a.string(o.source)||a.undefined(o.source))&&(a.undefined(o.relatedInformation)||a.typedArray(o.relatedInformation,Z.is))}e.is=i})(X||(X={}));var C;(function(e){function n(r,t,...o){let s={title:r,command:t};return a.defined(o)&&o.length>0&&(s.arguments=o),s}e.create=n;function i(r){let t=r;return a.defined(t)&&a.string(t.title)&&a.string(t.command)}e.is=i})(C||(C={}));var w;(function(e){function n(o,s){return{range:o,newText:s}}e.replace=n;function i(o,s){return{range:{start:o,end:o},newText:s}}e.insert=i;function r(o){return{range:o,newText:""}}e.del=r;function t(o){let s=o;return a.objectLiteral(s)&&a.string(s.newText)&&m.is(s.range)}e.is=t})(w||(w={}));var ee;(function(e){function n(r,t,o){let s={label:r};return t!==void 0&&(s.needsConfirmation=t),o!==void 0&&(s.description=o),s}e.create=n;function i(r){let t=r;return a.objectLiteral(t)&&a.string(t.label)&&(a.boolean(t.needsConfirmation)||t.needsConfirmation===void 0)&&(a.string(t.description)||t.description===void 0)}e.is=i})(ee||(ee={}));var E;(function(e){function n(i){let r=i;return a.string(r)}e.is=n})(E||(E={}));var Le;(function(e){function n(o,s,u){return{range:o,newText:s,annotationId:u}}e.replace=n;function i(o,s,u){return{range:{start:o,end:o},newText:s,annotationId:u}}e.insert=i;function r(o,s){return{range:o,newText:"",annotationId:s}}e.del=r;function t(o){let s=o;return w.is(s)&&(ee.is(s.annotationId)||E.is(s.annotationId))}e.is=t})(Le||(Le={}));var te;(function(e){function n(r,t){return{textDocument:r,edits:t}}e.create=n;function i(r){let t=r;return a.defined(t)&&se.is(t.textDocument)&&Array.isArray(t.edits)}e.is=i})(te||(te={}));var ne;(function(e){function n(r,t,o){let s={kind:"create",uri:r};return t!==void 0&&(t.overwrite!==void 0||t.ignoreIfExists!==void 0)&&(s.options=t),o!==void 0&&(s.annotationId=o),s}e.create=n;function i(r){let t=r;return t&&t.kind==="create"&&a.string(t.uri)&&(t.options===void 0||(t.options.overwrite===void 0||a.boolean(t.options.overwrite))&&(t.options.ignoreIfExists===void 0||a.boolean(t.options.ignoreIfExists)))&&(t.annotationId===void 0||E.is(t.annotationId))}e.is=i})(ne||(ne={}));var re;(function(e){function n(r,t,o,s){let u={kind:"rename",oldUri:r,newUri:t};return o!==void 0&&(o.overwrite!==void 0||o.ignoreIfExists!==void 0)&&(u.options=o),s!==void 0&&(u.annotationId=s),u}e.create=n;function i(r){let t=r;return t&&t.kind==="rename"&&a.string(t.oldUri)&&a.string(t.newUri)&&(t.options===void 0||(t.options.overwrite===void 0||a.boolean(t.options.overwrite))&&(t.options.ignoreIfExists===void 0||a.boolean(t.options.ignoreIfExists)))&&(t.annotationId===void 0||E.is(t.annotationId))}e.is=i})(re||(re={}));var ie;(function(e){function n(r,t,o){let s={kind:"delete",uri:r};return t!==void 0&&(t.recursive!==void 0||t.ignoreIfNotExists!==void 0)&&(s.options=t),o!==void 0&&(s.annotationId=o),s}e.create=n;function i(r){let t=r;return t&&t.kind==="delete"&&a.string(t.uri)&&(t.options===void 0||(t.options.recursive===void 0||a.boolean(t.options.recursive))&&(t.options.ignoreIfNotExists===void 0||a.boolean(t.options.ignoreIfNotExists)))&&(t.annotationId===void 0||E.is(t.annotationId))}e.is=i})(ie||(ie={}));var oe;(function(e){function n(i){let r=i;return r&&(r.changes!==void 0||r.documentChanges!==void 0)&&(r.documentChanges===void 0||r.documentChanges.every(t=>a.string(t.kind)?ne.is(t)||re.is(t)||ie.is(t):te.is(t)))}e.is=n})(oe||(oe={}));var Re;(function(e){function n(r){return{uri:r}}e.create=n;function i(r){let t=r;return a.defined(t)&&a.string(t.uri)}e.is=i})(Re||(Re={}));var Pe;(function(e){function n(r,t){return{uri:r,version:t}}e.create=n;function i(r){let t=r;return a.defined(t)&&a.string(t.uri)&&a.integer(t.version)}e.is=i})(Pe||(Pe={}));var se;(function(e){function n(r,t){return{uri:r,version:t}}e.create=n;function i(r){let t=r;return a.defined(t)&&a.string(t.uri)&&(t.version===null||a.integer(t.version))}e.is=i})(se||(se={}));var We;(function(e){function n(r,t,o,s){return{uri:r,languageId:t,version:o,text:s}}e.create=n;function i(r){let t=r;return a.defined(t)&&a.string(t.uri)&&a.string(t.languageId)&&a.integer(t.version)&&a.string(t.text)}e.is=i})(We||(We={}));var ae;(function(e){e.PlainText="plaintext",e.Markdown="markdown";function n(i){let r=i;return r===e.PlainText||r===e.Markdown}e.is=n})(ae||(ae={}));var j;(function(e){function n(i){let r=i;return a.objectLiteral(i)&&ae.is(r.kind)&&a.string(r.value)}e.is=n})(j||(j={}));var h;(function(e){e.Text=1,e.Method=2,e.Function=3,e.Constructor=4,e.Field=5,e.Variable=6,e.Class=7,e.Interface=8,e.Module=9,e.Property=10,e.Unit=11,e.Value=12,e.Enum=13,e.Keyword=14,e.Snippet=15,e.Color=16,e.File=17,e.Reference=18,e.Folder=19,e.EnumMember=20,e.Constant=21,e.Struct=22,e.Event=23,e.Operator=24,e.TypeParameter=25})(h||(h={}));var $;(function(e){e.PlainText=1,e.Snippet=2})($||($={}));var De;(function(e){e.Deprecated=1})(De||(De={}));var Fe;(function(e){function n(r,t,o){return{newText:r,insert:t,replace:o}}e.create=n;function i(r){let t=r;return t&&a.string(t.newText)&&m.is(t.insert)&&m.is(t.replace)}e.is=i})(Fe||(Fe={}));var Me;(function(e){e.asIs=1,e.adjustIndentation=2})(Me||(Me={}));var Ae;(function(e){function n(i){let r=i;return r&&(a.string(r.detail)||r.detail===void 0)&&(a.string(r.description)||r.description===void 0)}e.is=n})(Ae||(Ae={}));var Se;(function(e){function n(i){return{label:i}}e.create=n})(Se||(Se={}));var He;(function(e){function n(i,r){return{items:i||[],isIncomplete:!!r}}e.create=n})(He||(He={}));var B;(function(e){function n(r){return r.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}e.fromPlainText=n;function i(r){let t=r;return a.string(t)||a.objectLiteral(t)&&a.string(t.language)&&a.string(t.value)}e.is=i})(B||(B={}));var Ke;(function(e){function n(i){let r=i;return!!r&&a.objectLiteral(r)&&(j.is(r.contents)||B.is(r.contents)||a.typedArray(r.contents,B.is))&&(i.range===void 0||m.is(i.range))}e.is=n})(Ke||(Ke={}));var je;(function(e){function n(i,r){return r?{label:i,documentation:r}:{label:i}}e.create=n})(je||(je={}));var Ue;(function(e){function n(i,r,...t){let o={label:i};return a.defined(r)&&(o.documentation=r),a.defined(t)?o.parameters=t:o.parameters=[],o}e.create=n})(Ue||(Ue={}));var L;(function(e){e.Text=1,e.Read=2,e.Write=3})(L||(L={}));var Ne;(function(e){function n(i,r){let t={range:i};return a.number(r)&&(t.kind=r),t}e.create=n})(Ne||(Ne={}));var x;(function(e){e.File=1,e.Module=2,e.Namespace=3,e.Package=4,e.Class=5,e.Method=6,e.Property=7,e.Field=8,e.Constructor=9,e.Enum=10,e.Interface=11,e.Function=12,e.Variable=13,e.Constant=14,e.String=15,e.Number=16,e.Boolean=17,e.Array=18,e.Object=19,e.Key=20,e.Null=21,e.EnumMember=22,e.Struct=23,e.Event=24,e.Operator=25,e.TypeParameter=26})(x||(x={}));var Oe;(function(e){e.Deprecated=1})(Oe||(Oe={}));var Ve;(function(e){function n(i,r,t,o,s){let u={name:i,kind:r,location:{uri:o,range:t}};return s&&(u.containerName=s),u}e.create=n})(Ve||(Ve={}));var ze;(function(e){function n(i,r,t,o){return o!==void 0?{name:i,kind:r,location:{uri:t,range:o}}:{name:i,kind:r,location:{uri:t}}}e.create=n})(ze||(ze={}));var Xe;(function(e){function n(r,t,o,s,u,g){let f={name:r,detail:t,kind:o,range:s,selectionRange:u};return g!==void 0&&(f.children=g),f}e.create=n;function i(r){let t=r;return t&&a.string(t.name)&&a.number(t.kind)&&m.is(t.range)&&m.is(t.selectionRange)&&(t.detail===void 0||a.string(t.detail))&&(t.deprecated===void 0||a.boolean(t.deprecated))&&(t.children===void 0||Array.isArray(t.children))&&(t.tags===void 0||Array.isArray(t.tags))}e.is=i})(Xe||(Xe={}));var $e;(function(e){e.Empty="",e.QuickFix="quickfix",e.Refactor="refactor",e.RefactorExtract="refactor.extract",e.RefactorInline="refactor.inline",e.RefactorRewrite="refactor.rewrite",e.Source="source",e.SourceOrganizeImports="source.organizeImports",e.SourceFixAll="source.fixAll"})($e||($e={}));var q;(function(e){e.Invoked=1,e.Automatic=2})(q||(q={}));var Be;(function(e){function n(r,t,o){let s={diagnostics:r};return t!=null&&(s.only=t),o!=null&&(s.triggerKind=o),s}e.create=n;function i(r){let t=r;return a.defined(t)&&a.typedArray(t.diagnostics,X.is)&&(t.only===void 0||a.typedArray(t.only,a.string))&&(t.triggerKind===void 0||t.triggerKind===q.Invoked||t.triggerKind===q.Automatic)}e.is=i})(Be||(Be={}));var qe;(function(e){function n(r,t,o){let s={title:r},u=!0;return typeof t=="string"?(u=!1,s.kind=t):C.is(t)?s.command=t:s.edit=t,u&&o!==void 0&&(s.kind=o),s}e.create=n;function i(r){let t=r;return t&&a.string(t.title)&&(t.diagnostics===void 0||a.typedArray(t.diagnostics,X.is))&&(t.kind===void 0||a.string(t.kind))&&(t.edit!==void 0||t.command!==void 0)&&(t.command===void 0||C.is(t.command))&&(t.isPreferred===void 0||a.boolean(t.isPreferred))&&(t.edit===void 0||oe.is(t.edit))}e.is=i})(qe||(qe={}));var Qe;(function(e){function n(r,t){let o={range:r};return a.defined(t)&&(o.data=t),o}e.create=n;function i(r){let t=r;return a.defined(t)&&m.is(t.range)&&(a.undefined(t.command)||C.is(t.command))}e.is=i})(Qe||(Qe={}));var Ge;(function(e){function n(r,t){return{tabSize:r,insertSpaces:t}}e.create=n;function i(r){let t=r;return a.defined(t)&&a.uinteger(t.tabSize)&&a.boolean(t.insertSpaces)}e.is=i})(Ge||(Ge={}));var Je;(function(e){function n(r,t,o){return{range:r,target:t,data:o}}e.create=n;function i(r){let t=r;return a.defined(t)&&m.is(t.range)&&(a.undefined(t.target)||a.string(t.target))}e.is=i})(Je||(Je={}));var Ye;(function(e){function n(r,t){return{range:r,parent:t}}e.create=n;function i(r){let t=r;return a.objectLiteral(t)&&m.is(t.range)&&(t.parent===void 0||e.is(t.parent))}e.is=i})(Ye||(Ye={}));var Ze;(function(e){e.namespace="namespace",e.type="type",e.class="class",e.enum="enum",e.interface="interface",e.struct="struct",e.typeParameter="typeParameter",e.parameter="parameter",e.variable="variable",e.property="property",e.enumMember="enumMember",e.event="event",e.function="function",e.method="method",e.macro="macro",e.keyword="keyword",e.modifier="modifier",e.comment="comment",e.string="string",e.number="number",e.regexp="regexp",e.operator="operator",e.decorator="decorator"})(Ze||(Ze={}));var et;(function(e){e.declaration="declaration",e.definition="definition",e.readonly="readonly",e.static="static",e.deprecated="deprecated",e.abstract="abstract",e.async="async",e.modification="modification",e.documentation="documentation",e.defaultLibrary="defaultLibrary"})(et||(et={}));var tt;(function(e){function n(i){let r=i;return a.objectLiteral(r)&&(r.resultId===void 0||typeof r.resultId=="string")&&Array.isArray(r.data)&&(r.data.length===0||typeof r.data[0]=="number")}e.is=n})(tt||(tt={}));var nt;(function(e){function n(r,t){return{range:r,text:t}}e.create=n;function i(r){let t=r;return t!=null&&m.is(t.range)&&a.string(t.text)}e.is=i})(nt||(nt={}));var rt;(function(e){function n(r,t,o){return{range:r,variableName:t,caseSensitiveLookup:o}}e.create=n;function i(r){let t=r;return t!=null&&m.is(t.range)&&a.boolean(t.caseSensitiveLookup)&&(a.string(t.variableName)||t.variableName===void 0)}e.is=i})(rt||(rt={}));var it;(function(e){function n(r,t){return{range:r,expression:t}}e.create=n;function i(r){let t=r;return t!=null&&m.is(t.range)&&(a.string(t.expression)||t.expression===void 0)}e.is=i})(it||(it={}));var ot;(function(e){function n(r,t){return{frameId:r,stoppedLocation:t}}e.create=n;function i(r){let t=r;return a.defined(t)&&m.is(r.stoppedLocation)}e.is=i})(ot||(ot={}));var ue;(function(e){e.Type=1,e.Parameter=2;function n(i){return i===1||i===2}e.is=n})(ue||(ue={}));var de;(function(e){function n(r){return{value:r}}e.create=n;function i(r){let t=r;return a.objectLiteral(t)&&(t.tooltip===void 0||a.string(t.tooltip)||j.is(t.tooltip))&&(t.location===void 0||z.is(t.location))&&(t.command===void 0||C.is(t.command))}e.is=i})(de||(de={}));var st;(function(e){function n(r,t,o){let s={position:r,label:t};return o!==void 0&&(s.kind=o),s}e.create=n;function i(r){let t=r;return a.objectLiteral(t)&&k.is(t.position)&&(a.string(t.label)||a.typedArray(t.label,de.is))&&(t.kind===void 0||ue.is(t.kind))&&t.textEdits===void 0||a.typedArray(t.textEdits,w.is)&&(t.tooltip===void 0||a.string(t.tooltip)||j.is(t.tooltip))&&(t.paddingLeft===void 0||a.boolean(t.paddingLeft))&&(t.paddingRight===void 0||a.boolean(t.paddingRight))}e.is=i})(st||(st={}));var at;(function(e){function n(i){return{kind:"snippet",value:i}}e.createSnippet=n})(at||(at={}));var ut;(function(e){function n(i,r,t,o){return{insertText:i,filterText:r,range:t,command:o}}e.create=n})(ut||(ut={}));var dt;(function(e){function n(i){return{items:i}}e.create=n})(dt||(dt={}));var ct;(function(e){e.Invoked=0,e.Automatic=1})(ct||(ct={}));var lt;(function(e){function n(i,r){return{range:i,text:r}}e.create=n})(lt||(lt={}));var gt;(function(e){function n(i,r){return{triggerKind:i,selectedCompletionInfo:r}}e.create=n})(gt||(gt={}));var ft;(function(e){function n(i){let r=i;return a.objectLiteral(r)&&J.is(r.uri)&&a.string(r.name)}e.is=n})(ft||(ft={}));var pt;(function(e){function n(o,s,u,g){return new ce(o,s,u,g)}e.create=n;function i(o){let s=o;return!!(a.defined(s)&&a.string(s.uri)&&(a.undefined(s.languageId)||a.string(s.languageId))&&a.uinteger(s.lineCount)&&a.func(s.getText)&&a.func(s.positionAt)&&a.func(s.offsetAt))}e.is=i;function r(o,s){let u=o.getText(),g=t(s,(l,p)=>{let y=l.range.start.line-p.range.start.line;return y===0?l.range.start.character-p.range.start.character:y}),f=u.length;for(let l=g.length-1;l>=0;l--){let p=g[l],y=o.offsetAt(p.range.start),c=o.offsetAt(p.range.end);if(c<=f)u=u.substring(0,y)+p.newText+u.substring(c,u.length);else throw new Error("Overlapping edit");f=y}return u}e.applyEdits=r;function t(o,s){if(o.length<=1)return o;let u=o.length/2|0,g=o.slice(0,u),f=o.slice(u);t(g,s),t(f,s);let l=0,p=0,y=0;for(;l<g.length&&p<f.length;)s(g[l],f[p])<=0?o[y++]=g[l++]:o[y++]=f[p++];for(;l<g.length;)o[y++]=g[l++];for(;p<f.length;)o[y++]=f[p++];return o}})(pt||(pt={}));var ce=class{constructor(n,i,r,t){this._uri=n,this._languageId=i,this._version=r,this._content=t,this._lineOffsets=void 0}get uri(){return this._uri}get languageId(){return this._languageId}get version(){return this._version}getText(n){if(n){let i=this.offsetAt(n.start),r=this.offsetAt(n.end);return this._content.substring(i,r)}return this._content}update(n,i){this._content=n.text,this._version=i,this._lineOffsets=void 0}getLineOffsets(){if(this._lineOffsets===void 0){let n=[],i=this._content,r=!0;for(let t=0;t<i.length;t++){r&&(n.push(t),r=!1);let o=i.charAt(t);r=o==="\r"||o===`
`,o==="\r"&&t+1<i.length&&i.charAt(t+1)===`
`&&t++}r&&i.length>0&&n.push(i.length),this._lineOffsets=n}return this._lineOffsets}positionAt(n){n=Math.max(Math.min(n,this._content.length),0);let i=this.getLineOffsets(),r=0,t=i.length;if(t===0)return k.create(0,n);for(;r<t;){let s=Math.floor((r+t)/2);i[s]>n?t=s:r=s+1}let o=r-1;return k.create(o,n-i[o])}offsetAt(n){let i=this.getLineOffsets();if(n.line>=i.length)return this._content.length;if(n.line<0)return 0;let r=i[n.line],t=n.line+1<i.length?i[n.line+1]:this._content.length;return Math.max(Math.min(r+n.character,t),r)}get lineCount(){return this.getLineOffsets().length}},a;(function(e){let n=Object.prototype.toString;function i(c){return typeof c<"u"}e.defined=i;function r(c){return typeof c>"u"}e.undefined=r;function t(c){return c===!0||c===!1}e.boolean=t;function o(c){return n.call(c)==="[object String]"}e.string=o;function s(c){return n.call(c)==="[object Number]"}e.number=s;function u(c,G,Tt){return n.call(c)==="[object Number]"&&G<=c&&c<=Tt}e.numberRange=u;function g(c){return n.call(c)==="[object Number]"&&-2147483648<=c&&c<=2147483647}e.integer=g;function f(c){return n.call(c)==="[object Number]"&&0<=c&&c<=2147483647}e.uinteger=f;function l(c){return n.call(c)==="[object Function]"}e.func=l;function p(c){return c!==null&&typeof c=="object"}e.objectLiteral=p;function y(c,G){return Array.isArray(c)&&c.every(G)}e.typedArray=y})(a||(a={}));var le=class{constructor(n,i,r){this._languageId=n;this._worker=i;this._disposables=[];this._listener=Object.create(null);let t=s=>{let u=s.getLanguageId();if(u!==this._languageId)return;let g;this._listener[s.uri.toString()]=s.onDidChangeContent(()=>{window.clearTimeout(g),g=window.setTimeout(()=>this._doValidate(s.uri,u),500)}),this._doValidate(s.uri,u)},o=s=>{d.editor.setModelMarkers(s,this._languageId,[]);let u=s.uri.toString(),g=this._listener[u];g&&(g.dispose(),delete this._listener[u])};this._disposables.push(d.editor.onDidCreateModel(t)),this._disposables.push(d.editor.onWillDisposeModel(o)),this._disposables.push(d.editor.onDidChangeModelLanguage(s=>{o(s.model),t(s.model)})),this._disposables.push(r(s=>{d.editor.getModels().forEach(u=>{u.getLanguageId()===this._languageId&&(o(u),t(u))})})),this._disposables.push({dispose:()=>{d.editor.getModels().forEach(o);for(let s in this._listener)this._listener[s].dispose()}}),d.editor.getModels().forEach(t)}dispose(){this._disposables.forEach(n=>n&&n.dispose()),this._disposables.length=0}_doValidate(n,i){this._worker(n).then(r=>r.doValidation(n.toString())).then(r=>{let t=r.map(s=>St(n,s)),o=d.editor.getModel(n);o&&o.getLanguageId()===i&&d.editor.setModelMarkers(o,i,t)}).then(void 0,r=>{console.error(r)})}};function At(e){switch(e){case _.Error:return d.MarkerSeverity.Error;case _.Warning:return d.MarkerSeverity.Warning;case _.Information:return d.MarkerSeverity.Info;case _.Hint:return d.MarkerSeverity.Hint;default:return d.MarkerSeverity.Info}}function St(e,n){let i=typeof n.code=="number"?String(n.code):n.code;return{severity:At(n.severity),startLineNumber:n.range.start.line+1,startColumn:n.range.start.character+1,endLineNumber:n.range.end.line+1,endColumn:n.range.end.character+1,message:n.message,code:i,source:n.source}}var U=class{constructor(n,i){this._worker=n;this._triggerCharacters=i}get triggerCharacters(){return this._triggerCharacters}provideCompletionItems(n,i,r,t){let o=n.uri;return this._worker(o).then(s=>s.doComplete(o.toString(),I(i))).then(s=>{if(!s)return;let u=n.getWordUntilPosition(i),g=new d.Range(i.lineNumber,u.startColumn,i.lineNumber,u.endColumn),f=s.items.map(l=>{let p={label:l.label,insertText:l.insertText||l.label,sortText:l.sortText,filterText:l.filterText,documentation:l.documentation,detail:l.detail,command:jt(l.command),range:g,kind:Kt(l.kind)};return l.textEdit&&(Ht(l.textEdit)?p.range={insert:v(l.textEdit.insert),replace:v(l.textEdit.replace)}:p.range=v(l.textEdit.range),p.insertText=l.textEdit.newText),l.additionalTextEdits&&(p.additionalTextEdits=l.additionalTextEdits.map(R)),l.insertTextFormat===$.Snippet&&(p.insertTextRules=d.languages.CompletionItemInsertTextRule.InsertAsSnippet),p});return{isIncomplete:s.isIncomplete,suggestions:f}})}};function I(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function me(e){if(e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}function v(e){if(e)return new d.Range(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function Ht(e){return typeof e.insert<"u"&&typeof e.replace<"u"}function Kt(e){let n=d.languages.CompletionItemKind;switch(e){case h.Text:return n.Text;case h.Method:return n.Method;case h.Function:return n.Function;case h.Constructor:return n.Constructor;case h.Field:return n.Field;case h.Variable:return n.Variable;case h.Class:return n.Class;case h.Interface:return n.Interface;case h.Module:return n.Module;case h.Property:return n.Property;case h.Unit:return n.Unit;case h.Value:return n.Value;case h.Enum:return n.Enum;case h.Keyword:return n.Keyword;case h.Snippet:return n.Snippet;case h.Color:return n.Color;case h.File:return n.File;case h.Reference:return n.Reference}return n.Property}function R(e){if(e)return{range:v(e.range),text:e.newText}}function jt(e){return e&&e.command==="editor.action.triggerSuggest"?{id:e.command,title:e.title,arguments:e.arguments}:void 0}var P=class{constructor(n){this._worker=n}provideHover(n,i,r){let t=n.uri;return this._worker(t).then(o=>o.doHover(t.toString(),I(i))).then(o=>{if(o)return{range:v(o.range),contents:Nt(o.contents)}})}};function Ut(e){return e&&typeof e=="object"&&typeof e.kind=="string"}function mt(e){return typeof e=="string"?{value:e}:Ut(e)?e.kind==="plaintext"?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+`
`+e.value+"\n```\n"}}function Nt(e){if(e)return Array.isArray(e)?e.map(mt):[mt(e)]}var W=class{constructor(n){this._worker=n}provideDocumentHighlights(n,i,r){let t=n.uri;return this._worker(t).then(o=>o.findDocumentHighlights(t.toString(),I(i))).then(o=>{if(o)return o.map(s=>({range:v(s.range),kind:Ot(s.kind)}))})}};function Ot(e){switch(e){case L.Read:return d.languages.DocumentHighlightKind.Read;case L.Write:return d.languages.DocumentHighlightKind.Write;case L.Text:return d.languages.DocumentHighlightKind.Text}return d.languages.DocumentHighlightKind.Text}var ge=class{constructor(n){this._worker=n}provideDefinition(n,i,r){let t=n.uri;return this._worker(t).then(o=>o.findDefinition(t.toString(),I(i))).then(o=>{if(o)return[ht(o)]})}};function ht(e){return{uri:d.Uri.parse(e.uri),range:v(e.range)}}var fe=class{constructor(n){this._worker=n}provideReferences(n,i,r,t){let o=n.uri;return this._worker(o).then(s=>s.findReferences(o.toString(),I(i))).then(s=>{if(s)return s.map(ht)})}},D=class{constructor(n){this._worker=n}provideRenameEdits(n,i,r,t){let o=n.uri;return this._worker(o).then(s=>s.doRename(o.toString(),I(i),r)).then(s=>Vt(s))}};function Vt(e){if(!e||!e.changes)return;let n=[];for(let i in e.changes){let r=d.Uri.parse(i);for(let t of e.changes[i])n.push({resource:r,versionId:void 0,textEdit:{range:v(t.range),text:t.newText}})}return{edits:n}}var F=class{constructor(n){this._worker=n}provideDocumentSymbols(n,i){let r=n.uri;return this._worker(r).then(t=>t.findDocumentSymbols(r.toString())).then(t=>{if(t)return t.map(o=>zt(o)?xt(o):{name:o.name,detail:"",containerName:o.containerName,kind:vt(o.kind),range:v(o.location.range),selectionRange:v(o.location.range),tags:[]})})}};function zt(e){return"children"in e}function xt(e){return{name:e.name,detail:e.detail??"",kind:vt(e.kind),range:v(e.range),selectionRange:v(e.selectionRange),tags:e.tags??[],children:(e.children??[]).map(n=>xt(n))}}function vt(e){let n=d.languages.SymbolKind;switch(e){case x.File:return n.File;case x.Module:return n.Module;case x.Namespace:return n.Namespace;case x.Package:return n.Package;case x.Class:return n.Class;case x.Method:return n.Method;case x.Property:return n.Property;case x.Field:return n.Field;case x.Constructor:return n.Constructor;case x.Enum:return n.Enum;case x.Interface:return n.Interface;case x.Function:return n.Function;case x.Variable:return n.Variable;case x.Constant:return n.Constant;case x.String:return n.String;case x.Number:return n.Number;case x.Boolean:return n.Boolean;case x.Array:return n.Array}return n.Function}var M=class{constructor(n){this._worker=n}provideLinks(n,i){let r=n.uri;return this._worker(r).then(t=>t.findDocumentLinks(r.toString())).then(t=>{if(t)return{links:t.map(o=>({range:v(o.range),url:o.target}))}})}},A=class{constructor(n){this._worker=n}provideDocumentFormattingEdits(n,i,r){let t=n.uri;return this._worker(t).then(o=>o.format(t.toString(),null,yt(i)).then(s=>{if(!(!s||s.length===0))return s.map(R)}))}},S=class{constructor(n){this._worker=n;this.canFormatMultipleRanges=!1}provideDocumentRangeFormattingEdits(n,i,r,t){let o=n.uri;return this._worker(o).then(s=>s.format(o.toString(),me(i),yt(r)).then(u=>{if(!(!u||u.length===0))return u.map(R)}))}};function yt(e){return{tabSize:e.tabSize,insertSpaces:e.insertSpaces}}var pe=class{constructor(n){this._worker=n}provideDocumentColors(n,i){let r=n.uri;return this._worker(r).then(t=>t.findDocumentColors(r.toString())).then(t=>{if(t)return t.map(o=>({color:o.color,range:v(o.range)}))})}provideColorPresentations(n,i,r){let t=n.uri;return this._worker(t).then(o=>o.getColorPresentations(t.toString(),i.color,me(i.range))).then(o=>{if(o)return o.map(s=>{let u={label:s.label};return s.textEdit&&(u.textEdit=R(s.textEdit)),s.additionalTextEdits&&(u.additionalTextEdits=s.additionalTextEdits.map(R)),u})})}},H=class{constructor(n){this._worker=n}provideFoldingRanges(n,i,r){let t=n.uri;return this._worker(t).then(o=>o.getFoldingRanges(t.toString(),i)).then(o=>{if(o)return o.map(s=>{let u={start:s.startLine+1,end:s.endLine+1};return typeof s.kind<"u"&&(u.kind=Xt(s.kind)),u})})}};function Xt(e){switch(e){case b.Comment:return d.languages.FoldingRangeKind.Comment;case b.Imports:return d.languages.FoldingRangeKind.Imports;case b.Region:return d.languages.FoldingRangeKind.Region}}var K=class{constructor(n){this._worker=n}provideSelectionRanges(n,i,r){let t=n.uri;return this._worker(t).then(o=>o.getSelectionRanges(t.toString(),i.map(I))).then(o=>{if(o)return o.map(s=>{let u=[];for(;s;)u.push({range:v(s.range)}),s=s.parent;return u})})}};var Q=class extends U{constructor(n){super(n,[".",":","<",'"',"=","/"])}};function Bt(e){let n=new T(e),i=(...t)=>n.getLanguageServiceWorker(...t),r=e.languageId;d.languages.registerCompletionItemProvider(r,new Q(i)),d.languages.registerHoverProvider(r,new P(i)),d.languages.registerDocumentHighlightProvider(r,new W(i)),d.languages.registerLinkProvider(r,new M(i)),d.languages.registerFoldingRangeProvider(r,new H(i)),d.languages.registerDocumentSymbolProvider(r,new F(i)),d.languages.registerSelectionRangeProvider(r,new K(i)),d.languages.registerRenameProvider(r,new D(i)),r==="html"&&(d.languages.registerDocumentFormattingEditProvider(r,new A(i)),d.languages.registerDocumentRangeFormattingEditProvider(r,new S(i)))}function qt(e){let n=[],i=[],r=new T(e);n.push(r);let t=(...s)=>r.getLanguageServiceWorker(...s);function o(){let{languageId:s,modeConfiguration:u}=e;It(i),u.completionItems&&i.push(d.languages.registerCompletionItemProvider(s,new Q(t))),u.hovers&&i.push(d.languages.registerHoverProvider(s,new P(t))),u.documentHighlights&&i.push(d.languages.registerDocumentHighlightProvider(s,new W(t))),u.links&&i.push(d.languages.registerLinkProvider(s,new M(t))),u.documentSymbols&&i.push(d.languages.registerDocumentSymbolProvider(s,new F(t))),u.rename&&i.push(d.languages.registerRenameProvider(s,new D(t))),u.foldingRanges&&i.push(d.languages.registerFoldingRangeProvider(s,new H(t))),u.selectionRanges&&i.push(d.languages.registerSelectionRangeProvider(s,new K(t))),u.documentFormattingEdits&&i.push(d.languages.registerDocumentFormattingEditProvider(s,new A(t))),u.documentRangeFormattingEdits&&i.push(d.languages.registerDocumentRangeFormattingEditProvider(s,new S(t)))}return o(),n.push(kt(i)),kt(n)}function kt(e){return{dispose:()=>It(e)}}function It(e){for(;e.length;)e.pop().dispose()}return Wt(Qt);})();
return moduleExports;
});
