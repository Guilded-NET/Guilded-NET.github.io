---
title: AddFields(IEnumerable<EmbedField>)
layout: references
section: references
tags:
  - references
  - method
description: "

Adds new [fields](Embed.AddFields(IEnumerable_EmbedField_)#Guilded.Base.Embeds.Embed.AddFields(System.Collections.Generic.IEnumerable_Guilded.Base.Embeds.EmbedField_).fields 'Guilded.Base.Embeds.Embed.AddFields(System.Collections.Generic.IEnumerable<Guilded.Base.Embeds.EmbedField>).fields') to the [current set of fields](Embed.Fields 'Guilded.Base.Embeds.Embed.Fields')."
---

## Embed.AddFields(IEnumerable<EmbedField>) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`Embed`](Embed 'Guilded.Base.Embeds.Embed')

Adds new [fields](Embed.AddFields(IEnumerable_EmbedField_)#Guilded.Base.Embeds.Embed.AddFields(System.Collections.Generic.IEnumerable_Guilded.Base.Embeds.EmbedField_).fields 'Guilded.Base.Embeds.Embed.AddFields(System.Collections.Generic.IEnumerable<Guilded.Base.Embeds.EmbedField>).fields') to the [current set of fields](Embed.Fields 'Guilded.Base.Embeds.Embed.Fields').

```csharp
public Guilded.Base.Embeds.Embed AddFields(System.Collections.Generic.IEnumerable<Guilded.Base.Embeds.EmbedField> fields);
```
#### Parameters

<a name='Guilded.Base.Embeds.Embed.AddFields(System.Collections.Generic.IEnumerable_Guilded.Base.Embeds.EmbedField_).fields'></a>

`fields` [System.Collections.Generic.IEnumerable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')[EmbedField](EmbedField 'Guilded.Base.Embeds.EmbedField')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')

The list of fields to add

#### Exceptions

[System.OverflowException](https://docs.microsoft.com/en-us/dotnet/api/System.OverflowException 'System.OverflowException')  
When the combined field list exceeds max field limit of `25`

#### Returns
[Embed](Embed 'Guilded.Base.Embeds.Embed')  
Current [Embed](Embed 'Guilded.Base.Embeds.Embed') instance