---
title: Reaction(uint, Nullable<HashId>, HashId, Nullable<Guid>, DateTime)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [Reaction](Reaction.md 'Guilded.Base.Content.Reaction') with provided details."
---

## Reaction(uint, Nullable<HashId>, HashId, Nullable<Guid>, DateTime) Constructor
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`Reaction`](Reaction.md 'Guilded.Base.Content.Reaction')

Initializes a new instance of [Reaction](Reaction.md 'Guilded.Base.Content.Reaction') with provided details.

```csharp
public Reaction(uint id, System.Nullable<Guilded.Base.HashId> serverId, Guilded.Base.HashId createdBy, System.Nullable<Guid> createdByWebhookId, System.DateTime createdAt);
```
#### Parameters

<a name='Guilded.Base.Content.Reaction.Reaction(uint,System.Nullable_Guilded.Base.HashId_,Guilded.Base.HashId,System.Nullable_Guid_,System.DateTime).id'></a>

`id` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of the emote reacted with

<a name='Guilded.Base.Content.Reaction.Reaction(uint,System.Nullable_Guilded.Base.HashId_,Guilded.Base.HashId,System.Nullable_Guid_,System.DateTime).serverId'></a>

`serverId` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[HashId](HashId.md 'Guilded.Base.HashId')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The identifier of the server where the reaction is

<a name='Guilded.Base.Content.Reaction.Reaction(uint,System.Nullable_Guilded.Base.HashId_,Guilded.Base.HashId,System.Nullable_Guid_,System.DateTime).createdBy'></a>

`createdBy` [HashId](HashId.md 'Guilded.Base.HashId')

The identifier of [user](User.md 'Guilded.Base.Users.User') creator of the reaction

<a name='Guilded.Base.Content.Reaction.Reaction(uint,System.Nullable_Guilded.Base.HashId_,Guilded.Base.HashId,System.Nullable_Guid_,System.DateTime).createdByWebhookId'></a>

`createdByWebhookId` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The identifier of the webhook creator of the reaction

<a name='Guilded.Base.Content.Reaction.Reaction(uint,System.Nullable_Guilded.Base.HashId_,Guilded.Base.HashId,System.Nullable_Guid_,System.DateTime).createdAt'></a>

`createdAt` [System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')

The date of when the reaction was created