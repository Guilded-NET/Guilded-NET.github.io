---
title: SetUrl(string)
layout: references
section: references
tags:
  - references
  - method
description: "

Sets the [url](Embed.Url 'Guilded.Base.Embeds.Embed.Url') as the given [value](Embed.SetUrl(string)#Guilded.Base.Embeds.Embed.SetUrl(string).value 'Guilded.Base.Embeds.Embed.SetUrl(string).value')."
---

## Embed.SetUrl(string) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`Embed`](Embed 'Guilded.Base.Embeds.Embed')

Sets the [url](Embed.Url 'Guilded.Base.Embeds.Embed.Url') as the given [value](Embed.SetUrl(string)#Guilded.Base.Embeds.Embed.SetUrl(string).value 'Guilded.Base.Embeds.Embed.SetUrl(string).value').

```csharp
public Guilded.Base.Embeds.Embed SetUrl(string value);
```

### Remarks
  
The given [value](Embed.SetUrl(string)#Guilded.Base.Embeds.Embed.SetUrl(string).value 'Guilded.Base.Embeds.Embed.SetUrl(string).value') will be converted to [System.Uri](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri').
#### Parameters

<a name='Guilded.Base.Embeds.Embed.SetUrl(string).value'></a>

`value` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The value of the [embed's](Embed 'Guilded.Base.Embeds.Embed') url

#### Exceptions

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
[value](Embed.SetUrl(string)#Guilded.Base.Embeds.Embed.SetUrl(string).value 'Guilded.Base.Embeds.Embed.SetUrl(string).value') is [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null'), empty or whitespace

[System.UriFormatException](https://docs.microsoft.com/en-us/dotnet/api/System.UriFormatException 'System.UriFormatException')  
[value](Embed.SetUrl(string)#Guilded.Base.Embeds.Embed.SetUrl(string).value 'Guilded.Base.Embeds.Embed.SetUrl(string).value') has bad [System.Uri](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri') formatting

#### Returns
[Embed](Embed 'Guilded.Base.Embeds.Embed')  
Current [Embed](Embed 'Guilded.Base.Embeds.Embed') instance