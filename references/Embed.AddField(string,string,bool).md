---
title: AddField(string, string, bool)
layout: references
section: references
tags:
  - references
  - method
description: "

Adds the given field to the embed.

```csharp
public Guilded.NET.Base.Embeds.Embed AddField(string name, string value, bool inline=false);
```"
---

## Embed.AddField(string, string, bool) Method
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`Embed`](Embed 'Guilded.NET.Base.Embeds.Embed')

Adds the given field to the embed.

```csharp
public Guilded.NET.Base.Embeds.Embed AddField(string name, string value, bool inline=false);
```

### Remarks
  
Creates a new instance of [EmbedField](EmbedField 'Guilded.NET.Base.Embeds.EmbedField') with given parameters and adds it to [Fields](Embed.Fields 'Guilded.NET.Base.Embeds.Embed.Fields') property.  
  
The max field limit per embed is 25. If 25 field limit is exceeded, [System.OverflowException](https://docs.microsoft.com/en-us/dotnet/api/System.OverflowException 'System.OverflowException') will be thrown.
#### Parameters

<a name='Guilded.NET.Base.Embeds.Embed.AddField(string,string,bool).name'></a>

`name` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The title of the field

<a name='Guilded.NET.Base.Embeds.Embed.AddField(string,string,bool).value'></a>

`value` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The description of the field

<a name='Guilded.NET.Base.Embeds.Embed.AddField(string,string,bool).inline'></a>

`inline` [System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

If this field should be inline

#### Exceptions

[System.OverflowException](https://docs.microsoft.com/en-us/dotnet/api/System.OverflowException 'System.OverflowException')  
When the combined field list exceeds max field limit of `25`

#### Returns
[Embed](Embed 'Guilded.NET.Base.Embeds.Embed')  
Current [Embed](Embed 'Guilded.NET.Base.Embeds.Embed') instance