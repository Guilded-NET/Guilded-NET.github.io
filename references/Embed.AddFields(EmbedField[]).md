---
title: AddFields(EmbedField[])
layout: references
section: references
tags:
  - references
  - method
description: "

Adds the given fields to the embed.

```csharp
public Guilded.NET.Base.Embeds.Embed AddFields(params Guilded.NET.Base.Embeds.EmbedField[] fields);
```"
---

## Embed.AddFields(EmbedField[]) Method
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`Embed`](Embed 'Guilded.NET.Base.Embeds.Embed')

Adds the given fields to the embed.

```csharp
public Guilded.NET.Base.Embeds.Embed AddFields(params Guilded.NET.Base.Embeds.EmbedField[] fields);
```

### Remarks
  
Adds the [fields](Embed.AddFields(EmbedField[])#Guilded.NET.Base.Embeds.Embed.AddFields(Guilded.NET.Base.Embeds.EmbedField[]).fields 'Guilded.NET.Base.Embeds.Embed.AddFields(Guilded.NET.Base.Embeds.EmbedField[]).fields') parameter to [Fields](Embed.Fields 'Guilded.NET.Base.Embeds.Embed.Fields') property.  
  
The max field limit per embed is 25. If 25 field limit is exceeded, [System.OverflowException](https://docs.microsoft.com/en-us/dotnet/api/System.OverflowException 'System.OverflowException') will be thrown.
#### Parameters

<a name='Guilded.NET.Base.Embeds.Embed.AddFields(Guilded.NET.Base.Embeds.EmbedField[]).fields'></a>

`fields` [EmbedField](EmbedField 'Guilded.NET.Base.Embeds.EmbedField')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')

The array of fields to be added

#### Exceptions

[System.OverflowException](https://docs.microsoft.com/en-us/dotnet/api/System.OverflowException 'System.OverflowException')  
When the combined field list exceeds max field limit of `25`

#### Returns
[Embed](Embed 'Guilded.NET.Base.Embeds.Embed')  
Current [Embed](Embed 'Guilded.NET.Base.Embeds.Embed') instance