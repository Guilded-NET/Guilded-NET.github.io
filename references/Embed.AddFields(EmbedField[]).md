---
title: AddFields(EmbedField[])
layout: references
section: references
tags:
  - references
  - method
description: "

Adds new [fields](Embed.AddFields(EmbedField[]).md#Guilded.Base.Embeds.Embed.AddFields(Guilded.Base.Embeds.EmbedField[]).fields 'Guilded.Base.Embeds.Embed.AddFields(Guilded.Base.Embeds.EmbedField[]).fields') to the [current set of fields](Embed.Fields.md 'Guilded.Base.Embeds.Embed.Fields')."
---

## Embed.AddFields(EmbedField[]) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`Embed`](Embed.md 'Guilded.Base.Embeds.Embed')

Adds new [fields](Embed.AddFields(EmbedField[]).md#Guilded.Base.Embeds.Embed.AddFields(Guilded.Base.Embeds.EmbedField[]).fields 'Guilded.Base.Embeds.Embed.AddFields(Guilded.Base.Embeds.EmbedField[]).fields') to the [current set of fields](Embed.Fields.md 'Guilded.Base.Embeds.Embed.Fields').

```csharp
public Guilded.Base.Embeds.Embed AddFields(params Guilded.Base.Embeds.EmbedField[] fields);
```
#### Parameters

<a name='Guilded.Base.Embeds.Embed.AddFields(Guilded.Base.Embeds.EmbedField[]).fields'></a>

`fields` [EmbedField](EmbedField.md 'Guilded.Base.Embeds.EmbedField')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')

The list of fields to add

#### Exceptions

[System.OverflowException](https://docs.microsoft.com/en-us/dotnet/api/System.OverflowException 'System.OverflowException')  
When the combined field list exceeds max field limit of `25`

#### Returns
[Embed](Embed.md 'Guilded.Base.Embeds.Embed')  
Current [Embed](Embed.md 'Guilded.Base.Embeds.Embed') instance