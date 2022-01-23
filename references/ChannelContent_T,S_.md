---
title: ChannelContent<T,S>
layout: references
section: references
tags:
  - references
  - class
description: "

The base type for channel contents.

```csharp
public abstract class ChannelContent<T,S> : Guilded.NET.Base.ClientObject
    where T : notnull
```"
---

## ChannelContent<T,S> Class
###### **Assembly:** `Guilded.NET.Base`<br/>**Namespace:** [`Guilded.NET.Base.Content`](Guilded.NET.Base.Content 'Guilded.NET.Base.Content')

The base type for channel contents.

```csharp
public abstract class ChannelContent<T,S> : Guilded.NET.Base.ClientObject
    where T : notnull
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#129106; [ClientObject](ClientObject 'Guilded.NET.Base.ClientObject') &#129106; ChannelContent<T,S>

Derived  
&#8627; [Doc](Doc 'Guilded.NET.Base.Content.Doc')  
&#8627; [ForumThread](ForumThread 'Guilded.NET.Base.Content.ForumThread')  
&#8627; [ListItem](ListItem 'Guilded.NET.Base.Content.ListItem')  
&#8627; [Message](Message 'Guilded.NET.Base.Content.Message')

### Remarks
  
Defines the base type for all channel contents, apart from deleted ones.
#### Type parameters

<a name='Guilded.NET.Base.Content.ChannelContent_T,S_.T'></a>

`T`

The type of the content identifier (property [Id](ChannelContent_T,S_.Id 'Guilded.NET.Base.Content.ChannelContent<T,S>.Id'))

<a name='Guilded.NET.Base.Content.ChannelContent_T,S_.S'></a>

`S`

The type of the server identifier (property [ServerId](ChannelContent_T,S_.ServerId 'Guilded.NET.Base.Content.ChannelContent<T,S>.ServerId'))

| Constructors | |
| :--- | :--- |
| [ChannelContent(T, Guid, S, HashId, DateTime)](ChannelContent_T,S_.ChannelContent(T,Guid,S,HashId,DateTime) 'Guilded.NET.Base.Content.ChannelContent<T,S>.ChannelContent(T, System.Guid, S, Guilded.NET.Base.HashId, System.DateTime)') | Creates a new instance of [ChannelContent&lt;T,S&gt;](ChannelContent_T,S_ 'Guilded.NET.Base.Content.ChannelContent<T,S>') with provided details. |

| Properties | |
| :--- | :--- |
| [ChannelId](ChannelContent_T,S_.ChannelId 'Guilded.NET.Base.Content.ChannelContent<T,S>.ChannelId') | The identifier of the channel where the content is. |
| [CreatedAt](ChannelContent_T,S_.CreatedAt 'Guilded.NET.Base.Content.ChannelContent<T,S>.CreatedAt') | The date of when the content was created. |
| [CreatedBy](ChannelContent_T,S_.CreatedBy 'Guilded.NET.Base.Content.ChannelContent<T,S>.CreatedBy') | The identifier of the user creator of the content. |
| [Id](ChannelContent_T,S_.Id 'Guilded.NET.Base.Content.ChannelContent<T,S>.Id') | The identifier of the content. |
| [ServerId](ChannelContent_T,S_.ServerId 'Guilded.NET.Base.Content.ChannelContent<T,S>.ServerId') | The identifier of the server where the content is. |

| Methods | |
| :--- | :--- |
| [Equals(object)](ChannelContent_T,S_.Equals(object) 'Guilded.NET.Base.Content.ChannelContent<T,S>.Equals(object)') | Returns whether this instance and specified instance are equal to each other. |
| [GetHashCode()](ChannelContent_T,S_.GetHashCode() 'Guilded.NET.Base.Content.ChannelContent<T,S>.GetHashCode()') | Gets a hashcode of this instance. |
| [ToString()](ChannelContent_T,S_.ToString() 'Guilded.NET.Base.Content.ChannelContent<T,S>.ToString()') | Returns string equivalent to this instance. |
