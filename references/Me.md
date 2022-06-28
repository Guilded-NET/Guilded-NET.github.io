---
title: Me
layout: references
section: references
tags:
  - references
  - class
description: "

Represents the currently logged in user."
---

## Me Class
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Users`](Guilded.Base.Users 'Guilded.Base.Users')

Represents the currently logged in user.

```csharp
public class Me : Guilded.Base.BaseModel,
Guilded.Base.IModelHasId<Guilded.Base.HashId>,
Guilded.Base.Content.ICreatableContent
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseModel](BaseModel 'Guilded.Base.BaseModel') &#129106; Me

Implements [Guilded.Base.IModelHasId&lt;](IModelHasId_T_ 'Guilded.Base.IModelHasId<T>')[HashId](HashId 'Guilded.Base.HashId')[&gt;](IModelHasId_T_ 'Guilded.Base.IModelHasId<T>'), [ICreatableContent](ICreatableContent 'Guilded.Base.Content.ICreatableContent')

| Constructors | |
| :--- | :--- |
| [Me(HashId, Guid, string, DateTime, HashId)](Me.Me(HashId,Guid,string,DateTime,HashId) 'Guilded.Base.Users.Me.Me(Guilded.Base.HashId, Guid, string, System.DateTime, Guilded.Base.HashId)') | Initializes a new instance of [Me](Me 'Guilded.Base.Users.Me') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [BotId](Me.BotId 'Guilded.Base.Users.Me.BotId') | Gets the identifier of the bot [this client](BaseGuildedClient 'Guilded.Base.BaseGuildedClient') is logged into. |
| [CreatedAt](Me.CreatedAt 'Guilded.Base.Users.Me.CreatedAt') | Gets the creation date of [this client](BaseGuildedClient 'Guilded.Base.BaseGuildedClient'). |
| [CreatedBy](Me.CreatedBy 'Guilded.Base.Users.Me.CreatedBy') | Gets the identifier of [user](User 'Guilded.Base.Users.User') that has created [this client](BaseGuildedClient 'Guilded.Base.BaseGuildedClient'). |
| [Id](Me.Id 'Guilded.Base.Users.Me.Id') | Gets the identifier of [user](User 'Guilded.Base.Users.User')[this client](BaseGuildedClient 'Guilded.Base.BaseGuildedClient') is logged into. |
| [Name](Me.Name 'Guilded.Base.Users.Me.Name') | Gets the name of [this client](BaseGuildedClient 'Guilded.Base.BaseGuildedClient'). |

### See Also
- [User](User 'Guilded.Base.Users.User')
- [Member](Member 'Guilded.Base.Servers.Member')