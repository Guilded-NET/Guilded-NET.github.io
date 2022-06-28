---
title: UpdateDocAsync(Guid, uint, string, string)
layout: references
section: references
tags:
  - references
  - method
description: "

Edits [content](AbstractGuildedClient.UpdateDocAsync(Guid,uint,string,string)#Guilded.AbstractGuildedClient.UpdateDocAsync(Guid,uint,string,string).content 'Guilded.AbstractGuildedClient.UpdateDocAsync(Guid, uint, string, string).content') or [title](AbstractGuildedClient.UpdateDocAsync(Guid,uint,string,string)#Guilded.AbstractGuildedClient.UpdateDocAsync(Guid,uint,string,string).title 'Guilded.AbstractGuildedClient.UpdateDocAsync(Guid, uint, string, string).title') of the [doc](AbstractGuildedClient.UpdateDocAsync(Guid,uint,string,string)#Guilded.AbstractGuildedClient.UpdateDocAsync(Guid,uint,string,string).doc 'Guilded.AbstractGuildedClient.UpdateDocAsync(Guid, uint, string, string).doc')."
---

## AbstractGuildedClient.UpdateDocAsync(Guid, uint, string, string) Method
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Edits [content](AbstractGuildedClient.UpdateDocAsync(Guid,uint,string,string)#Guilded.AbstractGuildedClient.UpdateDocAsync(Guid,uint,string,string).content 'Guilded.AbstractGuildedClient.UpdateDocAsync(Guid, uint, string, string).content') or [title](AbstractGuildedClient.UpdateDocAsync(Guid,uint,string,string)#Guilded.AbstractGuildedClient.UpdateDocAsync(Guid,uint,string,string).title 'Guilded.AbstractGuildedClient.UpdateDocAsync(Guid, uint, string, string).title') of the [doc](AbstractGuildedClient.UpdateDocAsync(Guid,uint,string,string)#Guilded.AbstractGuildedClient.UpdateDocAsync(Guid,uint,string,string).doc 'Guilded.AbstractGuildedClient.UpdateDocAsync(Guid, uint, string, string).doc').

```csharp
public override System.Threading.Tasks.Task<Guilded.Base.Content.Doc> UpdateDocAsync(Guid channel, uint doc, string title, string content);
```
#### Parameters

<a name='Guilded.AbstractGuildedClient.UpdateDocAsync(Guid,uint,string,string).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the parent channel](ServerChannel 'Guilded.Base.Servers.ServerChannel')

<a name='Guilded.AbstractGuildedClient.UpdateDocAsync(Guid,uint,string,string).doc'></a>

`doc` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of the document to update/edit

<a name='Guilded.AbstractGuildedClient.UpdateDocAsync(Guid,uint,string,string).title'></a>

`title` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The new title of this document

<a name='Guilded.AbstractGuildedClient.UpdateDocAsync(Guid,uint,string,string).content'></a>

`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The new Markdown content of this document

### Remarks
  
The [doc](AbstractGuildedClient.UpdateDocAsync(Guid,uint,string,string)#Guilded.AbstractGuildedClient.UpdateDocAsync(Guid,uint,string,string).doc 'Guilded.AbstractGuildedClient.UpdateDocAsync(Guid, uint, string, string).doc') will be bumped to the top.

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Doc](Doc 'Guilded.Base.Content.Doc')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Updated [document](Doc 'Guilded.Base.Content.Doc')