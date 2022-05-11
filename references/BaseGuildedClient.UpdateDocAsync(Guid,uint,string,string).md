---
title: UpdateDocAsync(Guid, uint, string, string)
layout: references
section: references
tags:
  - references
  - method
description: "

Edits the [content](BaseGuildedClient.UpdateDocAsync(Guid,uint,string,string).md#Guilded.Base.BaseGuildedClient.UpdateDocAsync(Guid,uint,string,string).content 'Guilded.Base.BaseGuildedClient.UpdateDocAsync(Guid, uint, string, string).content') or the [title](BaseGuildedClient.UpdateDocAsync(Guid,uint,string,string).md#Guilded.Base.BaseGuildedClient.UpdateDocAsync(Guid,uint,string,string).title 'Guilded.Base.BaseGuildedClient.UpdateDocAsync(Guid, uint, string, string).title') of a [doc](BaseGuildedClient.UpdateDocAsync(Guid,uint,string,string).md#Guilded.Base.BaseGuildedClient.UpdateDocAsync(Guid,uint,string,string).doc 'Guilded.Base.BaseGuildedClient.UpdateDocAsync(Guid, uint, string, string).doc') in a [channel](BaseGuildedClient.UpdateDocAsync(Guid,uint,string,string).md#Guilded.Base.BaseGuildedClient.UpdateDocAsync(Guid,uint,string,string).channel 'Guilded.Base.BaseGuildedClient.UpdateDocAsync(Guid, uint, string, string).channel')."
---

## BaseGuildedClient.UpdateDocAsync(Guid, uint, string, string) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient.md 'Guilded.Base.BaseGuildedClient')

Edits the [content](BaseGuildedClient.UpdateDocAsync(Guid,uint,string,string).md#Guilded.Base.BaseGuildedClient.UpdateDocAsync(Guid,uint,string,string).content 'Guilded.Base.BaseGuildedClient.UpdateDocAsync(Guid, uint, string, string).content') or the [title](BaseGuildedClient.UpdateDocAsync(Guid,uint,string,string).md#Guilded.Base.BaseGuildedClient.UpdateDocAsync(Guid,uint,string,string).title 'Guilded.Base.BaseGuildedClient.UpdateDocAsync(Guid, uint, string, string).title') of a [doc](BaseGuildedClient.UpdateDocAsync(Guid,uint,string,string).md#Guilded.Base.BaseGuildedClient.UpdateDocAsync(Guid,uint,string,string).doc 'Guilded.Base.BaseGuildedClient.UpdateDocAsync(Guid, uint, string, string).doc') in a [channel](BaseGuildedClient.UpdateDocAsync(Guid,uint,string,string).md#Guilded.Base.BaseGuildedClient.UpdateDocAsync(Guid,uint,string,string).channel 'Guilded.Base.BaseGuildedClient.UpdateDocAsync(Guid, uint, string, string).channel').

```csharp
public abstract System.Threading.Tasks.Task<Guilded.Base.Content.Doc> UpdateDocAsync(Guid channel, uint doc, string title, string content);
```

### Remarks
  
The updated document will be bumped to the top.
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.UpdateDocAsync(Guid,uint,string,string).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the parent channel

<a name='Guilded.Base.BaseGuildedClient.UpdateDocAsync(Guid,uint,string,string).doc'></a>

`doc` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of the document to update/edit

<a name='Guilded.Base.BaseGuildedClient.UpdateDocAsync(Guid,uint,string,string).title'></a>

`title` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The new title of this document

<a name='Guilded.Base.BaseGuildedClient.UpdateDocAsync(Guid,uint,string,string).content'></a>

`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The new Markdown content of this document

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Doc](Doc.md 'Guilded.Base.Content.Doc')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Updated document