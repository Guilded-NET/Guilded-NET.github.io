---
title: AddField(EmbedField)
layout: references
section: references
tags:
  - references
  - method
description: "

Adds a new [field](Embed.AddField(EmbedField)#Guilded.Base.Embeds.Embed.AddField(Guilded.Base.Embeds.EmbedField).field 'Guilded.Base.Embeds.Embed.AddField(Guilded.Base.Embeds.EmbedField).field') to the [current set of fields](Embed.Fields 'Guilded.Base.Embeds.Embed.Fields')."
---

## Embed.AddField(EmbedField) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`Embed`](Embed 'Guilded.Base.Embeds.Embed')

Adds a new [field](Embed.AddField(EmbedField)#Guilded.Base.Embeds.Embed.AddField(Guilded.Base.Embeds.EmbedField).field 'Guilded.Base.Embeds.Embed.AddField(Guilded.Base.Embeds.EmbedField).field') to the [current set of fields](Embed.Fields 'Guilded.Base.Embeds.Embed.Fields').

```csharp
public Guilded.Base.Embeds.Embed AddField(Guilded.Base.Embeds.EmbedField field);
```
#### Parameters

<a name='Guilded.Base.Embeds.Embed.AddField(Guilded.Base.Embeds.EmbedField).field'></a>

`field` [EmbedField](EmbedField 'Guilded.Base.Embeds.EmbedField')

A new field to add

#### Exceptions

[System.OverflowException](https://docs.microsoft.com/en-us/dotnet/api/System.OverflowException 'System.OverflowException')  
When the combined field list exceeds max field limit of `25`

#### Returns
[Embed](Embed 'Guilded.Base.Embeds.Embed')  
Current [Embed](Embed 'Guilded.Base.Embeds.Embed') instance