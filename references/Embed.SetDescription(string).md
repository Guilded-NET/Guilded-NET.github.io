---
title: SetDescription(string)
layout: references
section: references
tags:
  - references
  - method
description: "

Sets the [description](Embed.Description 'Guilded.Base.Embeds.Embed.Description') as the given [content](Embed.SetDescription(string)#Guilded.Base.Embeds.Embed.SetDescription(string).content 'Guilded.Base.Embeds.Embed.SetDescription(string).content')."
---

## Embed.SetDescription(string) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`Embed`](Embed 'Guilded.Base.Embeds.Embed')

Sets the [description](Embed.Description 'Guilded.Base.Embeds.Embed.Description') as the given [content](Embed.SetDescription(string)#Guilded.Base.Embeds.Embed.SetDescription(string).content 'Guilded.Base.Embeds.Embed.SetDescription(string).content').

```csharp
public Guilded.Base.Embeds.Embed SetDescription(string content);
```
#### Parameters

<a name='Guilded.Base.Embeds.Embed.SetDescription(string).content'></a>

`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The text contents of the [embed's](Embed 'Guilded.Base.Embeds.Embed') description

#### Exceptions

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
[content](Embed.SetDescription(string)#Guilded.Base.Embeds.Embed.SetDescription(string).content 'Guilded.Base.Embeds.Embed.SetDescription(string).content') is [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null'), empty or whitespace

[System.OverflowException](https://docs.microsoft.com/en-us/dotnet/api/System.OverflowException 'System.OverflowException')  
[content](Embed.SetDescription(string)#Guilded.Base.Embeds.Embed.SetDescription(string).content 'Guilded.Base.Embeds.Embed.SetDescription(string).content') exceeds 4000 character limit

#### Returns
[Embed](Embed 'Guilded.Base.Embeds.Embed')  
Current [Embed](Embed 'Guilded.Base.Embeds.Embed') instance