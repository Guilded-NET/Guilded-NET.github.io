---
title: ClientObject
layout: references
section: references
tags:
  - references
  - class
description: "

A base that with a parent client.

```csharp
public abstract class ClientObject : Guilded.NET.Base.BaseObject
```"
---

## ClientObject Class
###### **Assembly:** `Guilded.NET.Base`<br/>**Namespace:** [`Guilded.NET.Base`](Guilded.NET.Base 'Guilded.NET.Base')

A base that with a parent client.

```csharp
public abstract class ClientObject : Guilded.NET.Base.BaseObject
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#129106; ClientObject

Derived  
&#8627; [ChannelContent&lt;T,S&gt;](ChannelContent_T,S_ 'Guilded.NET.Base.Content.ChannelContent<T,S>')  
&#8627; [Reaction](Reaction 'Guilded.NET.Base.Content.Reaction')  
&#8627; [GuildedSocketMessage](GuildedSocketMessage 'Guilded.NET.Base.Events.GuildedSocketMessage')  
&#8627; [Member](Member 'Guilded.NET.Base.Servers.Member')

### Remarks
  
A base object that also contains definining parent client. The parent client that defined this method is referenced in [ParentClient](ClientObject.ParentClient 'Guilded.NET.Base.ClientObject.ParentClient'), that is initiated with internal OnDeserialized method. This allows having methods like [CreateMessageAsync(string)](Message.CreateMessageAsync(string) 'Guilded.NET.Base.Content.Message.CreateMessageAsync(string)'), where it requires to call the parent client's methods.

| Properties | |
| :--- | :--- |
| [ParentClient](ClientObject.ParentClient 'Guilded.NET.Base.ClientObject.ParentClient') | The parent client that adopts this object. |

### See Also
- [BaseGuildedClient](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')
- [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject')