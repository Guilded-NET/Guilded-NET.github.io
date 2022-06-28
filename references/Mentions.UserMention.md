---
title: UserMention
layout: references
section: references
tags:
  - references
  - class
description: "

Represents a mention of [a user](User 'Guilded.Base.Users.User')."
---

## Mentions.UserMention Class
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`Mentions`](Mentions 'Guilded.Base.Content.Mentions')

Represents a mention of [a user](User 'Guilded.Base.Users.User').

```csharp
public class Mentions.UserMention : Guilded.Base.BaseModel,
Guilded.Base.IModelHasId<Guilded.Base.HashId>
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseModel](BaseModel 'Guilded.Base.BaseModel') &#129106; UserMention

Implements [Guilded.Base.IModelHasId&lt;](IModelHasId_T_ 'Guilded.Base.IModelHasId<T>')[HashId](HashId 'Guilded.Base.HashId')[&gt;](IModelHasId_T_ 'Guilded.Base.IModelHasId<T>')

| Constructors | |
| :--- | :--- |
| [UserMention(HashId)](Mentions.UserMention.UserMention(HashId) 'Guilded.Base.Content.Mentions.UserMention.UserMention(Guilded.Base.HashId)') | Initializes a new instance of [UserMention](Mentions.UserMention 'Guilded.Base.Content.Mentions.UserMention'). |

| Properties | |
| :--- | :--- |
| [Id](Mentions.UserMention.Id 'Guilded.Base.Content.Mentions.UserMention.Id') | Gets the identifier of [the mentioned user](User 'Guilded.Base.Users.User'). |
