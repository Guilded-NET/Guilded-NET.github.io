---
title: SetAuthor(string, Uri, Uri)
layout: references
section: references
tags:
  - references
  - method
description: "

Sets the [author](Embed.Author 'Guilded.Base.Embeds.Embed.Author') as the given author with the given [name](Embed.SetAuthor(string,Uri,Uri)#Guilded.Base.Embeds.Embed.SetAuthor(string,Uri,Uri).name 'Guilded.Base.Embeds.Embed.SetAuthor(string, Uri, Uri).name')."
---

## Embed.SetAuthor(string, Uri, Uri) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`Embed`](Embed 'Guilded.Base.Embeds.Embed')

Sets the [author](Embed.Author 'Guilded.Base.Embeds.Embed.Author') as the given author with the given [name](Embed.SetAuthor(string,Uri,Uri)#Guilded.Base.Embeds.Embed.SetAuthor(string,Uri,Uri).name 'Guilded.Base.Embeds.Embed.SetAuthor(string, Uri, Uri).name').

```csharp
public Guilded.Base.Embeds.Embed SetAuthor(string name, Uri? iconUrl=null, Uri? url=null);
```

### Remarks
  
The given [name](Embed.SetAuthor(string,Uri,Uri)#Guilded.Base.Embeds.Embed.SetAuthor(string,Uri,Uri).name 'Guilded.Base.Embeds.Embed.SetAuthor(string, Uri, Uri).name'), [iconUrl](Embed.SetAuthor(string,Uri,Uri)#Guilded.Base.Embeds.Embed.SetAuthor(string,Uri,Uri).iconUrl 'Guilded.Base.Embeds.Embed.SetAuthor(string, Uri, Uri).iconUrl') and [url](Embed.SetAuthor(string,Uri,Uri)#Guilded.Base.Embeds.Embed.SetAuthor(string,Uri,Uri).url 'Guilded.Base.Embeds.Embed.SetAuthor(string, Uri, Uri).url') will be converted to [EmbedAuthor](EmbedAuthor 'Guilded.Base.Embeds.EmbedAuthor').
#### Parameters

<a name='Guilded.Base.Embeds.Embed.SetAuthor(string,Uri,Uri).name'></a>

`name` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name of the [embed](Embed 'Guilded.Base.Embeds.Embed')'s author

<a name='Guilded.Base.Embeds.Embed.SetAuthor(string,Uri,Uri).iconUrl'></a>

`iconUrl` [System.Uri](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri')

The URL to icon of the [embed](Embed 'Guilded.Base.Embeds.Embed')'s author

<a name='Guilded.Base.Embeds.Embed.SetAuthor(string,Uri,Uri).url'></a>

`url` [System.Uri](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri')

The URL of the [embed](Embed 'Guilded.Base.Embeds.Embed')'s author

#### Returns
[Embed](Embed 'Guilded.Base.Embeds.Embed')  
Current [Embed](Embed 'Guilded.Base.Embeds.Embed') instance