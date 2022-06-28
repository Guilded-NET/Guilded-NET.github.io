---
title: SetAuthor(string, string, string)
layout: references
section: references
tags:
  - references
  - method
description: "

Sets the [author](Embed.Author 'Guilded.Base.Embeds.Embed.Author') as the given author with the given [name](Embed.SetAuthor(string,string,string)#Guilded.Base.Embeds.Embed.SetAuthor(string,string,string).name 'Guilded.Base.Embeds.Embed.SetAuthor(string, string, string).name')."
---

## Embed.SetAuthor(string, string, string) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`Embed`](Embed 'Guilded.Base.Embeds.Embed')

Sets the [author](Embed.Author 'Guilded.Base.Embeds.Embed.Author') as the given author with the given [name](Embed.SetAuthor(string,string,string)#Guilded.Base.Embeds.Embed.SetAuthor(string,string,string).name 'Guilded.Base.Embeds.Embed.SetAuthor(string, string, string).name').

```csharp
public Guilded.Base.Embeds.Embed SetAuthor(string name, string? url=null, string? icon=null);
```
#### Parameters

<a name='Guilded.Base.Embeds.Embed.SetAuthor(string,string,string).name'></a>

`name` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name of the [embed](Embed 'Guilded.Base.Embeds.Embed')'s author

<a name='Guilded.Base.Embeds.Embed.SetAuthor(string,string,string).url'></a>

`url` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The URL of the [embed](Embed 'Guilded.Base.Embeds.Embed')'s author

<a name='Guilded.Base.Embeds.Embed.SetAuthor(string,string,string).icon'></a>

`icon` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The URL to icon of the [embed](Embed 'Guilded.Base.Embeds.Embed')'s author

### Remarks
  
The given [name](Embed.SetAuthor(string,string,string)#Guilded.Base.Embeds.Embed.SetAuthor(string,string,string).name 'Guilded.Base.Embeds.Embed.SetAuthor(string, string, string).name'), [icon](Embed.SetAuthor(string,string,string)#Guilded.Base.Embeds.Embed.SetAuthor(string,string,string).icon 'Guilded.Base.Embeds.Embed.SetAuthor(string, string, string).icon') and [url](Embed.SetAuthor(string,string,string)#Guilded.Base.Embeds.Embed.SetAuthor(string,string,string).url 'Guilded.Base.Embeds.Embed.SetAuthor(string, string, string).url') will be converted to [EmbedAuthor](EmbedAuthor 'Guilded.Base.Embeds.EmbedAuthor').

#### Returns
[Embed](Embed 'Guilded.Base.Embeds.Embed')  
Current [Embed](Embed 'Guilded.Base.Embeds.Embed') instance