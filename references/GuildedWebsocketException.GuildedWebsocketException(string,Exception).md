---
title: GuildedWebsocketException(string, Exception)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [GuildedWebsocketException](GuildedWebsocketException.md 'Guilded.Base.GuildedWebsocketException') with an [inner](GuildedWebsocketException.GuildedWebsocketException(string,Exception).md#Guilded.Base.GuildedWebsocketException.GuildedWebsocketException(string,System.Exception).inner 'Guilded.Base.GuildedWebsocketException.GuildedWebsocketException(string, System.Exception).inner') explaining more."
---

## GuildedWebsocketException(string, Exception) Constructor
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`GuildedWebsocketException`](GuildedWebsocketException.md 'Guilded.Base.GuildedWebsocketException')

Initializes a new instance of [GuildedWebsocketException](GuildedWebsocketException.md 'Guilded.Base.GuildedWebsocketException') with an [inner](GuildedWebsocketException.GuildedWebsocketException(string,Exception).md#Guilded.Base.GuildedWebsocketException.GuildedWebsocketException(string,System.Exception).inner 'Guilded.Base.GuildedWebsocketException.GuildedWebsocketException(string, System.Exception).inner') explaining more.

```csharp
public GuildedWebsocketException(string message, System.Exception inner);
```
#### Parameters

<a name='Guilded.Base.GuildedWebsocketException.GuildedWebsocketException(string,System.Exception).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The message that was received from Guilded Websocket

<a name='Guilded.Base.GuildedWebsocketException.GuildedWebsocketException(string,System.Exception).inner'></a>

`inner` [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')

The inner exception of this error