---
title: UpdateDocAsync(Guid, uint, string, string)
layout: references
section: references
tags:
  - references
  - method
description: "

Updates the document.

```csharp
public override System.Threading.Tasks.Task<Guilded.NET.Base.Content.Doc> UpdateDocAsync(System.Guid channelId, uint docId, string title, string content);
```"
---

## AbstractGuildedClient.UpdateDocAsync(Guid, uint, string, string) Method
###### **Assembly:** `Guilded.NET`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')

Updates the document.

```csharp
public override System.Threading.Tasks.Task<Guilded.NET.Base.Content.Doc> UpdateDocAsync(System.Guid channelId, uint docId, string title, string content);
```

### Remarks
  
Updates/edits the specified document.  
  
This will bump the document to the very top.
#### Parameters

<a name='Guilded.NET.AbstractGuildedClient.UpdateDocAsync(System.Guid,uint,string,string).channelId'></a>

`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the parent channel

<a name='Guilded.NET.AbstractGuildedClient.UpdateDocAsync(System.Guid,uint,string,string).docId'></a>

`docId` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of the document to update/edit

<a name='Guilded.NET.AbstractGuildedClient.UpdateDocAsync(System.Guid,uint,string,string).title'></a>

`title` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The new title of this document

<a name='Guilded.NET.AbstractGuildedClient.UpdateDocAsync(System.Guid,uint,string,string).content'></a>

`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The new Markdown content of this document

#### Exceptions

[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Doc](Doc 'Guilded.NET.Base.Content.Doc')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Updated document