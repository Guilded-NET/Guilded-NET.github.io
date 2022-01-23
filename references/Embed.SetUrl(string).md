---
title: SetUrl(string)
layout: references
section: references
tags:
  - references
  - method
description: "

Sets the url as a given parameter.

```csharp
public Guilded.NET.Base.Embeds.Embed SetUrl(string url);
```"
---

## Embed.SetUrl(string) Method
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`Embed`](Embed 'Guilded.NET.Base.Embeds.Embed')

Sets the url as a given parameter.

```csharp
public Guilded.NET.Base.Embeds.Embed SetUrl(string url);
```

### Remarks
  
Creates a new [System.Uri](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri') instance from [url](Embed.SetUrl(string)#Guilded.NET.Base.Embeds.Embed.SetUrl(string).url 'Guilded.NET.Base.Embeds.Embed.SetUrl(string).url') parameter and sets it to [Url](Embed.Url 'Guilded.NET.Base.Embeds.Embed.Url') property.
#### Parameters

<a name='Guilded.NET.Base.Embeds.Embed.SetUrl(string).url'></a>

`url` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The URL that title will link

#### Exceptions

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
[url](Embed.SetUrl(string)#Guilded.NET.Base.Embeds.Embed.SetUrl(string).url 'Guilded.NET.Base.Embeds.Embed.SetUrl(string).url') is [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null'), empty or whitespace

[System.UriFormatException](https://docs.microsoft.com/en-us/dotnet/api/System.UriFormatException 'System.UriFormatException')  
[url](Embed.SetUrl(string)#Guilded.NET.Base.Embeds.Embed.SetUrl(string).url 'Guilded.NET.Base.Embeds.Embed.SetUrl(string).url') has bad [System.Uri](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri') formatting

#### Returns
[Embed](Embed 'Guilded.NET.Base.Embeds.Embed')  
Current [Embed](Embed 'Guilded.NET.Base.Embeds.Embed') instance