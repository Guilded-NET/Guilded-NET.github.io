---
title: ClientObject
layout: references
section: references
tags:
  - references
  - class
description: "

Represents a base for Guilded models that require a [client](ClientObject.ParentClient.md 'Guilded.Base.ClientObject.ParentClient')."
---

## ClientObject Class
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base`](Guilded.Base.md 'Guilded.Base')

Represents a base for Guilded models that require a [client](ClientObject.ParentClient.md 'Guilded.Base.ClientObject.ParentClient').

```csharp
public abstract class ClientObject : Guilded.Base.BaseObject
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject.md 'Guilded.Base.BaseObject') &#129106; ClientObject

Derived  
&#8627; [ChannelContent&lt;TId,TServer&gt;](ChannelContent_TId,TServer_.md 'Guilded.Base.Content.ChannelContent<TId,TServer>')  
&#8627; [Reaction](Reaction.md 'Guilded.Base.Content.Reaction')  
&#8627; [GuildedSocketMessage](GuildedSocketMessage.md 'Guilded.Base.Events.GuildedSocketMessage')  
&#8627; [Webhook](Webhook.md 'Guilded.Base.Servers.Webhook')  
&#8627; [UserSummary](UserSummary.md 'Guilded.Base.Users.UserSummary')

### Remarks
  
This allows having methods like [CreateMessageAsync(string)](Message.CreateMessageAsync(string).md 'Guilded.Base.Content.Message.CreateMessageAsync(string)'), where it requires to call the parent client's methods.

| Properties | |
| :--- | :--- |
| [ParentClient](ClientObject.ParentClient.md 'Guilded.Base.ClientObject.ParentClient') | Gets the parent client that adopts [this object](ClientObject.md 'Guilded.Base.ClientObject'). |

### See Also
- [BaseGuildedClient](BaseGuildedClient.md 'Guilded.Base.BaseGuildedClient')
- [BaseObject](BaseObject.md 'Guilded.Base.BaseObject')