---
title: ServerId
layout: references
section: references
tags:
  - references
  - property
description: "

The identifier of the server where the content is.

```csharp
public S ServerId { get; }
```"
---

## ChannelContent<T,S>.ServerId Property
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`ChannelContent<T,S>`](ChannelContent_T,S_ 'Guilded.NET.Base.Content.ChannelContent<T,S>')

The identifier of the server where the content is.

```csharp
public S ServerId { get; }
```

### Remarks
  
The identifier of the server where the content was found.  
  
The server can be either optional or not optional. This depends whether the content is global or server-wide. Content like forum threads will be server-wide, while content like chat messages and reactions will be global.

#### Property Value
[S](ChannelContent_T,S_#Guilded.NET.Base.Content.ChannelContent_T,S_.S 'Guilded.NET.Base.Content.ChannelContent<T,S>.S')  
Server ID or Server ID?