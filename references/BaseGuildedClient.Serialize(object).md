---
title: Serialize(object)
layout: references
section: references
tags:
  - references
  - method
description: "

Serializes object with client's Guilded serializer.

```csharp
public string Serialize(object obj);
```"
---

## BaseGuildedClient.Serialize(object) Method
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')

Serializes object with client's Guilded serializer.

```csharp
public string Serialize(object obj);
```

### Remarks
  
Serializes given object to JSON using [GuildedSerializer](BaseGuildedClient.GuildedSerializer 'Guilded.NET.Base.BaseGuildedClient.GuildedSerializer'). Use this if you want to send REST request or WebSocket message.
#### Parameters

<a name='Guilded.NET.Base.BaseGuildedClient.Serialize(object).obj'></a>

`obj` [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object')

The parameter to serialize

#### Returns
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
Serialized object

### See Also
- [Deserialize&lt;T&gt;(string)](BaseGuildedClient.Deserialize_T_(string) 'Guilded.NET.Base.BaseGuildedClient.Deserialize<T>(string)')