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
public System.Nullable<Guilded.NET.Base.HashId> ServerId { get; }
```"
---

## Reaction.ServerId Property
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`Reaction`](Reaction 'Guilded.NET.Base.Content.Reaction')

The identifier of the server where the content is.

```csharp
public System.Nullable<Guilded.NET.Base.HashId> ServerId { get; }
```

### Remarks
  
The identifier of the server where the content was found.  
  
The server can be either optional or not optional. This depends whether the content is global or server-wide. Content like forum threads will be server-wide, while content like chat messages and reactions will be global.

#### Property Value
[System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[HashId](HashId 'Guilded.NET.Base.HashId')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')  
Server ID?