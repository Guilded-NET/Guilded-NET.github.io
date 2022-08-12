---
title: Emote
layout: references
section: references
tags:
  - references
  - class
description: "

Represents an emoticon on Guilded. Either placed in [some kind of content](Message 'Guilded.Base.Content.Message') or as [a reaction](Reaction 'Guilded.Base.Content.Reaction')."
---

## Emote Class
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Content`](Guilded.Base.Content 'Guilded.Base.Content')

Represents an emoticon on Guilded. Either placed in [some kind of content](Message 'Guilded.Base.Content.Message') or as [a reaction](Reaction 'Guilded.Base.Content.Reaction').

```csharp
public class Emote : Guilded.Base.BaseModel
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseModel](BaseModel 'Guilded.Base.BaseModel') &#129106; Emote

| Constructors | |
| :--- | :--- |
| [Emote(uint, string, Uri)](Emote.Emote(uint,string,Uri) 'Guilded.Base.Content.Emote.Emote(uint, string, Uri)') | Initializes a new instance of [Emote](Emote 'Guilded.Base.Content.Emote') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [Id](Emote.Id 'Guilded.Base.Content.Emote.Id') | Gets the identifier of [the emote](Emote 'Guilded.Base.Content.Emote'). |
| [Name](Emote.Name 'Guilded.Base.Content.Emote.Name') | Gets the name of [the emote](Emote 'Guilded.Base.Content.Emote'). |
| [Url](Emote.Url 'Guilded.Base.Content.Emote.Url') | Gets the URL to [the emote's](Emote 'Guilded.Base.Content.Emote') image. |

| Methods | |
| :--- | :--- |
| [ToString()](Emote.ToString() 'Guilded.Base.Content.Emote.ToString()') | Gets the string representation of [the emote](Emote 'Guilded.Base.Content.Emote'). |
