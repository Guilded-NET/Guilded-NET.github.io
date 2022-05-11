---
title: GetDocsAsync(Guid, Nullable<uint>, Nullable<DateTime>)
layout: references
section: references
tags:
  - references
  - method
description: "

Gets a set of documents from a [channel](BaseGuildedClient.GetDocsAsync(Guid,Nullable_uint_,Nullable_DateTime_).md#Guilded.Base.BaseGuildedClient.GetDocsAsync(Guid,System.Nullable_uint_,System.Nullable_System.DateTime_).channel 'Guilded.Base.BaseGuildedClient.GetDocsAsync(Guid, System.Nullable<uint>, System.Nullable<System.DateTime>).channel')."
---

## BaseGuildedClient.GetDocsAsync(Guid, Nullable<uint>, Nullable<DateTime>) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient.md 'Guilded.Base.BaseGuildedClient')

Gets a set of documents from a [channel](BaseGuildedClient.GetDocsAsync(Guid,Nullable_uint_,Nullable_DateTime_).md#Guilded.Base.BaseGuildedClient.GetDocsAsync(Guid,System.Nullable_uint_,System.Nullable_System.DateTime_).channel 'Guilded.Base.BaseGuildedClient.GetDocsAsync(Guid, System.Nullable<uint>, System.Nullable<System.DateTime>).channel').

```csharp
public abstract System.Threading.Tasks.Task<System.Collections.Generic.IList<Guilded.Base.Content.Doc>> GetDocsAsync(Guid channel, System.Nullable<uint> limit=null, System.Nullable<System.DateTime> before=null);
```

### Remarks
  
Only gets 50 documents as of now.
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.GetDocsAsync(Guid,System.Nullable_uint_,System.Nullable_System.DateTime_).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the parent channel

<a name='Guilded.Base.BaseGuildedClient.GetDocsAsync(Guid,System.Nullable_uint_,System.Nullable_System.DateTime_).limit'></a>

`limit` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The limit of how many docs to get (default — `25`, values — `(0, 100]`)

<a name='Guilded.Base.BaseGuildedClient.GetDocsAsync(Guid,System.Nullable_uint_,System.Nullable_System.DateTime_).before'></a>

`before` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The max limit of the creation date of fetched docs

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[Doc](Doc.md 'Guilded.Base.Content.Doc')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
List of documents