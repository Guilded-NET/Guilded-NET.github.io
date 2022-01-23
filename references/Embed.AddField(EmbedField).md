---
title: AddField(EmbedField)
layout: references
section: references
tags:
  - references
  - method
description: "

Adds the given field to the embed.

```csharp
public Guilded.NET.Base.Embeds.Embed AddField(Guilded.NET.Base.Embeds.EmbedField field);
```"
---

## Embed.AddField(EmbedField) Method
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`Embed`](Embed 'Guilded.NET.Base.Embeds.Embed')

Adds the given field to the embed.

```csharp
public Guilded.NET.Base.Embeds.Embed AddField(Guilded.NET.Base.Embeds.EmbedField field);
```

### Remarks
  
Adds the [field](Embed.AddField(EmbedField)#Guilded.NET.Base.Embeds.Embed.AddField(Guilded.NET.Base.Embeds.EmbedField).field 'Guilded.NET.Base.Embeds.Embed.AddField(Guilded.NET.Base.Embeds.EmbedField).field') parameter to [Fields](Embed.Fields 'Guilded.NET.Base.Embeds.Embed.Fields') property.  
  
The max field limit per embed is 25. If 25 field limit is exceeded, [System.OverflowException](https://docs.microsoft.com/en-us/dotnet/api/System.OverflowException 'System.OverflowException') will be thrown.
#### Parameters

<a name='Guilded.NET.Base.Embeds.Embed.AddField(Guilded.NET.Base.Embeds.EmbedField).field'></a>

`field` [EmbedField](EmbedField 'Guilded.NET.Base.Embeds.EmbedField')

A field to add

#### Exceptions

[System.OverflowException](https://docs.microsoft.com/en-us/dotnet/api/System.OverflowException 'System.OverflowException')  
When the combined field list exceeds max field limit of `25`

#### Returns
[Embed](Embed 'Guilded.NET.Base.Embeds.Embed')  
Current [Embed](Embed 'Guilded.NET.Base.Embeds.Embed') instance