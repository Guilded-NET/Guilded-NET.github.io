---
title: SetColor(int)
layout: references
section: references
tags:
  - references
  - method
description: "

Sets the colour as the given parameter.

```csharp
public Guilded.NET.Base.Embeds.Embed SetColor(int argb);
```"
---

## Embed.SetColor(int) Method
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`Embed`](Embed 'Guilded.NET.Base.Embeds.Embed')

Sets the colour as the given parameter.

```csharp
public Guilded.NET.Base.Embeds.Embed SetColor(int argb);
```

### Remarks
  
Sets [Color](Embed.Color 'Guilded.NET.Base.Embeds.Embed.Color') as a new instance of [System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color') from parameter [argb](Embed.SetColor(int)#Guilded.NET.Base.Embeds.Embed.SetColor(int).argb 'Guilded.NET.Base.Embeds.Embed.SetColor(int).argb') in RGB format.

### Example
  
```csharp  
// Alpha channel is ignored  
embed.SetColor(0xFFFFFF);  
```
#### Parameters

<a name='Guilded.NET.Base.Embeds.Embed.SetColor(int).argb'></a>

`argb` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The value of the colour

#### Returns
[Embed](Embed 'Guilded.NET.Base.Embeds.Embed')  
Current [Embed](Embed 'Guilded.NET.Base.Embeds.Embed') instance