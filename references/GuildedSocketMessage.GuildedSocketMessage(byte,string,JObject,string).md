---
title: GuildedSocketMessage(byte, string, JObject, string)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [GuildedSocketMessage](GuildedSocketMessage 'Guilded.Base.Events.GuildedSocketMessage') from the specified JSON properties."
---

## GuildedSocketMessage(byte, string, JObject, string) Constructor
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`GuildedSocketMessage`](GuildedSocketMessage 'Guilded.Base.Events.GuildedSocketMessage')

Initializes a new instance of [GuildedSocketMessage](GuildedSocketMessage 'Guilded.Base.Events.GuildedSocketMessage') from the specified JSON properties.

```csharp
public GuildedSocketMessage(byte op, string? t=null, Newtonsoft.Json.Linq.JObject? d=null, string? s=null);
```
#### Parameters

<a name='Guilded.Base.Events.GuildedSocketMessage.GuildedSocketMessage(byte,string,Newtonsoft.Json.Linq.JObject,string).op'></a>

`op` [System.Byte](https://docs.microsoft.com/en-us/dotnet/api/System.Byte 'System.Byte')

The opcode of the socket message

<a name='Guilded.Base.Events.GuildedSocketMessage.GuildedSocketMessage(byte,string,Newtonsoft.Json.Linq.JObject,string).t'></a>

`t` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name of the event

<a name='Guilded.Base.Events.GuildedSocketMessage.GuildedSocketMessage(byte,string,Newtonsoft.Json.Linq.JObject,string).d'></a>

`d` [Newtonsoft.Json.Linq.JObject](https://docs.microsoft.com/en-us/dotnet/api/Newtonsoft.Json.Linq.JObject 'Newtonsoft.Json.Linq.JObject')

The data of the socket message

<a name='Guilded.Base.Events.GuildedSocketMessage.GuildedSocketMessage(byte,string,Newtonsoft.Json.Linq.JObject,string).s'></a>

`s` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The identifier of the socket message