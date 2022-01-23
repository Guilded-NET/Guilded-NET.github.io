---
title: Reaction(uint, Nullable<HashId>, HashId, Nullable<Guid>, DateTime)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Creates a new instance of [Reaction](Reaction 'Guilded.NET.Base.Content.Reaction') with provided details.

```csharp
public Reaction(uint id, System.Nullable<Guilded.NET.Base.HashId> serverId, Guilded.NET.Base.HashId createdBy, System.Nullable<System.Guid> createdByWebhookId, System.DateTime createdAt);
```"
---

## Reaction(uint, Nullable<HashId>, HashId, Nullable<Guid>, DateTime) Constructor
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`Reaction`](Reaction 'Guilded.NET.Base.Content.Reaction')

Creates a new instance of [Reaction](Reaction 'Guilded.NET.Base.Content.Reaction') with provided details.

```csharp
public Reaction(uint id, System.Nullable<Guilded.NET.Base.HashId> serverId, Guilded.NET.Base.HashId createdBy, System.Nullable<System.Guid> createdByWebhookId, System.DateTime createdAt);
```
#### Parameters

<a name='Guilded.NET.Base.Content.Reaction.Reaction(uint,System.Nullable_Guilded.NET.Base.HashId_,Guilded.NET.Base.HashId,System.Nullable_System.Guid_,System.DateTime).id'></a>

`id` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of the emote reacted with

<a name='Guilded.NET.Base.Content.Reaction.Reaction(uint,System.Nullable_Guilded.NET.Base.HashId_,Guilded.NET.Base.HashId,System.Nullable_System.Guid_,System.DateTime).serverId'></a>

`serverId` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[HashId](HashId 'Guilded.NET.Base.HashId')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The identifier of the server where the reaction is

<a name='Guilded.NET.Base.Content.Reaction.Reaction(uint,System.Nullable_Guilded.NET.Base.HashId_,Guilded.NET.Base.HashId,System.Nullable_System.Guid_,System.DateTime).createdBy'></a>

`createdBy` [HashId](HashId 'Guilded.NET.Base.HashId')

The identifier of the user creator of the reaction

<a name='Guilded.NET.Base.Content.Reaction.Reaction(uint,System.Nullable_Guilded.NET.Base.HashId_,Guilded.NET.Base.HashId,System.Nullable_System.Guid_,System.DateTime).createdByWebhookId'></a>

`createdByWebhookId` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The identifier of the webhook creator of the reaction

<a name='Guilded.NET.Base.Content.Reaction.Reaction(uint,System.Nullable_Guilded.NET.Base.HashId_,Guilded.NET.Base.HashId,System.Nullable_System.Guid_,System.DateTime).createdAt'></a>

`createdAt` [System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')

The date of when the reaction was created