---
title: Deserialize<T>(string)
layout: references
section: references
tags:
  - references
  - method
description: "

Deserializes JSON with client's Guilded serializer.

```csharp
public T? Deserialize<T>(string json);
```"
---

## BaseGuildedClient.Deserialize<T>(string) Method
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')

Deserializes JSON with client's Guilded serializer.

```csharp
public T? Deserialize<T>(string json);
```

### Remarks
  
Deserializes given JSON file/text using [GuildedSerializer](BaseGuildedClient.GuildedSerializer 'Guilded.NET.Base.BaseGuildedClient.GuildedSerializer'). Use this if you want to deserialize Guilded response or WebSocket message.
#### Type parameters

<a name='Guilded.NET.Base.BaseGuildedClient.Deserialize_T_(string).T'></a>

`T`

The type of deserialized instance
#### Parameters

<a name='Guilded.NET.Base.BaseGuildedClient.Deserialize_T_(string).json'></a>

`json` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

Raw JSON to deserialize

#### Returns
[T](BaseGuildedClient.Deserialize_T_(string)#Guilded.NET.Base.BaseGuildedClient.Deserialize_T_(string).T 'Guilded.NET.Base.BaseGuildedClient.Deserialize<T>(string).T')  
Deserialized object

### See Also
- [Serialize(object)](BaseGuildedClient.Serialize(object) 'Guilded.NET.Base.BaseGuildedClient.Serialize(object)')