---
title: GuildedSocketMessage(SocketOpcode, string, JObject, string)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [GuildedSocketMessage](GuildedSocketMessage 'Guilded.Base.Events.GuildedSocketMessage') from the specified JSON properties."
---

## GuildedSocketMessage(SocketOpcode, string, JObject, string) Constructor
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`GuildedSocketMessage`](GuildedSocketMessage 'Guilded.Base.Events.GuildedSocketMessage')

Initializes a new instance of [GuildedSocketMessage](GuildedSocketMessage 'Guilded.Base.Events.GuildedSocketMessage') from the specified JSON properties.

```csharp
public GuildedSocketMessage(Guilded.Base.Events.SocketOpcode op, string? t=null, Newtonsoft.Json.Linq.JObject? d=null, string? s=null);
```
#### Parameters

<a name='Guilded.Base.Events.GuildedSocketMessage.GuildedSocketMessage(Guilded.Base.Events.SocketOpcode,string,Newtonsoft.Json.Linq.JObject,string).op'></a>

`op` [SocketOpcode](SocketOpcode 'Guilded.Base.Events.SocketOpcode')

The opcode of the socket message

<a name='Guilded.Base.Events.GuildedSocketMessage.GuildedSocketMessage(Guilded.Base.Events.SocketOpcode,string,Newtonsoft.Json.Linq.JObject,string).t'></a>

`t` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name of the event

<a name='Guilded.Base.Events.GuildedSocketMessage.GuildedSocketMessage(Guilded.Base.Events.SocketOpcode,string,Newtonsoft.Json.Linq.JObject,string).d'></a>

`d` [Newtonsoft.Json.Linq.JObject](https://docs.microsoft.com/en-us/dotnet/api/Newtonsoft.Json.Linq.JObject 'Newtonsoft.Json.Linq.JObject')

The data of the socket message

<a name='Guilded.Base.Events.GuildedSocketMessage.GuildedSocketMessage(Guilded.Base.Events.SocketOpcode,string,Newtonsoft.Json.Linq.JObject,string).s'></a>

`s` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The identifier of the socket message