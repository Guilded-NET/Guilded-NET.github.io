---
title: ClientObject
layout: references
section: references
tags:
  - references
  - class
description: "

Represents a base for Guilded models that require a [client](ClientObject.ParentClient 'Guilded.Base.ClientObject.ParentClient')."
---

## ClientObject Class
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base`](Guilded.Base 'Guilded.Base')

Represents a base for Guilded models that require a [client](ClientObject.ParentClient 'Guilded.Base.ClientObject.ParentClient').

```csharp
public abstract class ClientObject : Guilded.Base.BaseObject
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.Base.BaseObject') &#129106; ClientObject

Derived  
&#8627; [ChannelContent&lt;TId,TServer&gt;](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>')  
&#8627; [Reaction](Reaction 'Guilded.Base.Content.Reaction')  
&#8627; [GuildedSocketMessage](GuildedSocketMessage 'Guilded.Base.Events.GuildedSocketMessage')  
&#8627; [ServerChannel](ServerChannel 'Guilded.Base.Servers.ServerChannel')  
&#8627; [Webhook](Webhook 'Guilded.Base.Servers.Webhook')  
&#8627; [UserSummary](UserSummary 'Guilded.Base.Users.UserSummary')

### Remarks
  
This allows having methods like [CreateMessageAsync(string)](Message.CreateMessageAsync(string) 'Guilded.Base.Content.Message.CreateMessageAsync(string)'), where it requires to call the parent client's methods.

| Properties | |
| :--- | :--- |
| [ParentClient](ClientObject.ParentClient 'Guilded.Base.ClientObject.ParentClient') | Gets the parent client that adopts [this object](ClientObject 'Guilded.Base.ClientObject'). |

### See Also
- [BaseGuildedClient](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')
- [BaseObject](BaseObject 'Guilded.Base.BaseObject')