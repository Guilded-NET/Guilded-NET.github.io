---
title: SetDescription(string)
layout: references
section: references
tags:
  - references
  - method
description: "

Sets the description as the given parameter.

```csharp
public Guilded.NET.Base.Embeds.Embed SetDescription(string description);
```"
---

## Embed.SetDescription(string) Method
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`Embed`](Embed 'Guilded.NET.Base.Embeds.Embed')

Sets the description as the given parameter.

```csharp
public Guilded.NET.Base.Embeds.Embed SetDescription(string description);
```
#### Parameters

<a name='Guilded.NET.Base.Embeds.Embed.SetDescription(string).description'></a>

`description` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

Embed's description

#### Exceptions

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
[description](Embed.SetDescription(string)#Guilded.NET.Base.Embeds.Embed.SetDescription(string).description 'Guilded.NET.Base.Embeds.Embed.SetDescription(string).description') is [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null'), empty or whitespace

[System.OverflowException](https://docs.microsoft.com/en-us/dotnet/api/System.OverflowException 'System.OverflowException')  
[description](Embed.SetDescription(string)#Guilded.NET.Base.Embeds.Embed.SetDescription(string).description 'Guilded.NET.Base.Embeds.Embed.SetDescription(string).description') exceeds 4000 character limit

#### Returns
[Embed](Embed 'Guilded.NET.Base.Embeds.Embed')  
Current [Embed](Embed 'Guilded.NET.Base.Embeds.Embed') instance