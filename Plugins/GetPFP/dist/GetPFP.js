var n;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.Guild=1]="Guild",e[e.DM=2]="DM"})(n||(n={}));var h;(function(e){e[e.Chat=1]="Chat",e[e.User=2]="User",e[e.Message=3]="Message"})(h||(h={}));var f;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.BuiltInText=1]="BuiltInText",e[e.BuiltInIntegration=2]="BuiltInIntegration",e[e.Bot=3]="Bot",e[e.Placeholder=4]="Placeholder"})(f||(f={}));var w;(function(e){e[e.Role=1]="Role",e[e.User=2]="User"})(w||(w={}));var g;(function(e){e[e.SubCommand=1]="SubCommand",e[e.SubCommandGroup=2]="SubCommandGroup",e[e.String=3]="String",e[e.Integer=4]="Integer",e[e.Boolean=5]="Boolean",e[e.User=6]="User",e[e.Channel=7]="Channel",e[e.Role=8]="Role",e[e.Mentionnable=9]="Mentionnable",e[e.Number=10]="Number"})(g||(g={}));var B;(function(e){e[e.ApplicationCommand=2]="ApplicationCommand",e[e.MessageComponent=3]="MessageComponent"})(B||(B={}));const c="enmity";function v(e){window.enmity.plugins.registerPlugin(e)}function b(e,r,s,u){window.enmity.clyde.sendReply(e,r,s,u)}async function G(){return new Promise((e,r)=>{window.enmity.users.fetchCurrentUser().then(s=>{e(s)}).catch(r)})}async function M(e){return new Promise((r,s)=>{window.enmity.users.getUser(e).then(u=>{r(u)}).catch(s)})}async function P(e){var r=["Error"];return await M(e).then(s=>{r=[`https://cdn.discordapp.com/avatars/${e}/${s.avatar}.png?size=4096`,s.username]}),r}const x={name:"GetPFP",commands:[],onStart(){const e={id:"pfp-command",applicationId:c,name:"pfp",displayName:"pfp",description:"Get a user's profile picture",displayDescription:"Get a user's profile picture",type:h.Chat,inputType:f.BuiltInText,options:[{name:"user",displayName:"user",description:"User",displayDescription:"User",type:g.User,required:!1}],execute:async function(r,s){let u=await G().then(U=>U.id);const t=await P(r.length==0?u:r[0].value),l={type:"rich",title:"Here's my profile picture...",image:{proxy_url:t[0],url:t[0],width:4096,height:4096},footer:{text:"Fetched with GetPFP | By iCraze"},color:"0xff0000"};b(s.channel.id,{embeds:[l],components:[]},t[1],t[0])}};this.commands.push(e)},onStop(){this.comamands=[]}};v(x);
