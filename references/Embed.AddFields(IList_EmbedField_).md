---
title: AddFields(IList<EmbedField>)
layout: references
section: references
tags:
  - references
  - method
description: "

Adds the given fields to the embed.

```csharp
public Guilded.NET.Base.Embeds.Embed AddFields(System.Collections.Generic.IList<Guilded.NET.Base.Embeds.EmbedField> fields);
```"
---

## Embed.AddFields(IList<EmbedField>) Method
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`Embed`](Embed 'Guilded.NET.Base.Embeds.Embed')

Adds the given fields to the embed.

```csharp
public Guilded.NET.Base.Embeds.Embed AddFields(System.Collections.Generic.IList<Guilded.NET.Base.Embeds.EmbedField> fields);
```

### Remarks
  
Adds the [fields](Embed.AddFields(IList_EmbedField_)#Guilded.NET.Base.Embeds.Embed.AddFields(System.Collections.Generic.IList_Guilded.NET.Base.Embeds.EmbedField_).fields 'Guilded.NET.Base.Embeds.Embed.AddFields(System.Collections.Generic.IList<Guilded.NET.Base.Embeds.EmbedField>).fields') parameter to [Fields](Embed.Fields 'Guilded.NET.Base.Embeds.Embed.Fields') property.  
  
The max field limit per embed is 25. If 25 field limit is exceeded, [System.OverflowException](https://docs.microsoft.com/en-us/dotnet/api/System.OverflowException 'System.OverflowException') will be thrown.
#### Parameters

<a name='Guilded.NET.Base.Embeds.Embed.AddFields(System.Collections.Generic.IList_Guilded.NET.Base.Embeds.EmbedField_).fields'></a>

`fields` [System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[EmbedField](EmbedField 'Guilded.NET.Base.Embeds.EmbedField')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')

The list of fields to be added

#### Exceptions

[System.OverflowException](https://docs.microsoft.com/en-us/dotnet/api/System.OverflowException 'System.OverflowException')  
When the combined field list exceeds max field limit of `25`

#### Returns
[Embed](Embed 'Guilded.NET.Base.Embeds.Embed')  
Current [Embed](Embed 'Guilded.NET.Base.Embeds.Embed') instance