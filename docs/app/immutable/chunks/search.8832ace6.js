import{_ as e}from"./preload-helper.41c905a7.js";const E=()=>{const r=Object.assign({"../../routes/docs/+page.svelte":()=>e(()=>import("../entry/docs-page.svelte.9f2ca70e.js"),["../entry/docs-page.svelte.9f2ca70e.js","./index.ebb164e0.js","./DocList.10812521.js","./FaIcon.3849d505.js","../assets/DocList.312ef88c.css","./IndexWrapper.d691e0a9.js","../assets/IndexWrapper.b786c468.css"],import.meta.url),"../../routes/docs/+page.ts":()=>e(()=>import("../entry/docs-page.ts.e881bab3.js"),["../entry/docs-page.ts.e881bab3.js","./_page.4472987d.js"],import.meta.url),"../../routes/docs/commands.mdx":()=>e(()=>import("./commands.6b5bb432.js"),["./commands.6b5bb432.js","./index.ebb164e0.js"],import.meta.url),"../../routes/docs/develop-bot.mdx":()=>e(()=>import("./develop-bot.27219872.js"),["./develop-bot.27219872.js","./index.ebb164e0.js"],import.meta.url),"../../routes/docs/embeds.mdx":()=>e(()=>import("./embeds.ac1e76ac.js"),["./embeds.ac1e76ac.js","./index.ebb164e0.js","../assets/embeds.1b9cc348.css"],import.meta.url),"../../routes/docs/message.svelte":()=>e(()=>import("./message.a5435f56.js"),["./message.a5435f56.js","./index.ebb164e0.js"],import.meta.url),"../../routes/docs/message.ts":()=>e(()=>import("./message.4c6d8c99.js"),[],import.meta.url),"../../routes/docs/powering-bot.mdx":()=>e(()=>import("./powering-bot.980f63be.js"),["./powering-bot.980f63be.js","./index.ebb164e0.js"],import.meta.url),"../../routes/docs/supported.mdx":()=>e(()=>import("./supported.2c856d77.js"),["./supported.2c856d77.js","./index.ebb164e0.js"],import.meta.url)}),i=Object.keys(r).filter(t=>{const s=t.split("/"),o=s[s.length-1];return(t.endsWith(".mdx")||t.endsWith(".svelte")||t.endsWith(".ts"))&&!o.startsWith("+")}).filter(t=>!t.endsWith(".ts"));return Promise.all(i.map(async t=>{const s=t.split("/").slice(4),o=s[s.length-1].startsWith("+")?s.slice(0,-1).join("/"):s.join("/").split(".").slice(0,-1).join("."),_=t.endsWith(".svelte")?t.replace(/[.]svelte$/,".ts"):t,m=await r[_](),{metadata:{name:a,icon:d,priority:p,tags:u,category:l}}=m;return{name:a,icon:d,priority:p,tags:u,category:l,url:o}}))};export{E as d};