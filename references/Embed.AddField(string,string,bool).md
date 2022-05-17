---
title: AddField(string, string, bool)
layout: references
section: references
tags:
  - references
  - method
description: "

Adds a new field to the [current set of fields](Embed.Fields 'Guilded.Base.Embeds.Embed.Fields')."
---

## Embed.AddField(string, string, bool) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`Embed`](Embed 'Guilded.Base.Embeds.Embed')

Adds a new field to the [current set of fields](Embed.Fields 'Guilded.Base.Embeds.Embed.Fields').

```csharp
public Guilded.Base.Embeds.Embed AddField(string name, string value, bool inline=false);
```
#### Parameters

<a name='Guilded.Base.Embeds.Embed.AddField(string,string,bool).name'></a>

`name` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The title text of the new field

<a name='Guilded.Base.Embeds.Embed.AddField(string,string,bool).value'></a>

`value` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The description text of the new field

<a name='Guilded.Base.Embeds.Embed.AddField(string,string,bool).inline'></a>

`inline` [System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

Whether the field should be in the same row with other fields

#### Exceptions

[System.OverflowException](https://docs.microsoft.com/en-us/dotnet/api/System.OverflowException 'System.OverflowException')  
When the combined field list exceeds max field limit of `25`

#### Returns
[Embed](Embed 'Guilded.Base.Embeds.Embed')  
Current [Embed](Embed 'Guilded.Base.Embeds.Embed') instance