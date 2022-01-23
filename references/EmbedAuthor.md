---
title: EmbedAuthor
layout: references
section: references
tags:
  - references
  - class
description: "

The provided information about embed author.

```csharp
public class EmbedAuthor : Guilded.NET.Base.BaseObject
```"
---

## EmbedAuthor Class
###### **Assembly:** `Guilded.NET.Base`<br/>**Namespace:** [`Guilded.NET.Base.Embeds`](Guilded.NET.Base.Embeds 'Guilded.NET.Base.Embeds')

The provided information about embed author.

```csharp
public class EmbedAuthor : Guilded.NET.Base.BaseObject
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#129106; EmbedAuthor

### Remarks
  
Defines an author of the quoting message or anything else. The [EmbedAuthor](EmbedAuthor 'Guilded.NET.Base.Embeds.EmbedAuthor') feature has following properties:

### Example
  
An example of using [EmbedAuthor](EmbedAuthor 'Guilded.NET.Base.Embeds.EmbedAuthor') to display content owner:  
  
```csharp  
// ... Getting information about a new post...  
EmbedAuthor author = new EmbedAuthor(post.Author.Username, post.Author.Avatar, post.Url);  
Embed embed = new Embed  
{  
    Author = author,  
    Description = post.Text.Length > 4000  
                ? post.Text.Substring(0, 3997) + "..."  
                : post.Text  
};  
await client.CreateMessageAsync(channelId, embed);  
```

| Constructors | |
| :--- | :--- |
| [EmbedAuthor(string, string, string)](EmbedAuthor.EmbedAuthor(string,string,string) 'Guilded.NET.Base.Embeds.EmbedAuthor.EmbedAuthor(string, string, string)') | Creates a new instance of [EmbedAuthor](EmbedAuthor 'Guilded.NET.Base.Embeds.EmbedAuthor') with optional URL [url](EmbedAuthor.EmbedAuthor(string,string,string)#Guilded.NET.Base.Embeds.EmbedAuthor.EmbedAuthor(string,string,string).url 'Guilded.NET.Base.Embeds.EmbedAuthor.EmbedAuthor(string, string, string).url'). |
| [EmbedAuthor(string, Uri, Uri)](EmbedAuthor.EmbedAuthor(string,Uri,Uri) 'Guilded.NET.Base.Embeds.EmbedAuthor.EmbedAuthor(string, System.Uri, System.Uri)') | Creates a new instance of [EmbedAuthor](EmbedAuthor 'Guilded.NET.Base.Embeds.EmbedAuthor') with optional URL [url](EmbedAuthor.EmbedAuthor(string,Uri,Uri)#Guilded.NET.Base.Embeds.EmbedAuthor.EmbedAuthor(string,System.Uri,System.Uri).url 'Guilded.NET.Base.Embeds.EmbedAuthor.EmbedAuthor(string, System.Uri, System.Uri).url'). |
| [EmbedAuthor(string)](EmbedAuthor.EmbedAuthor(string) 'Guilded.NET.Base.Embeds.EmbedAuthor.EmbedAuthor(string)') | Creates a new instance of [EmbedAuthor](EmbedAuthor 'Guilded.NET.Base.Embeds.EmbedAuthor') without an icon and without a URL. |

| Properties | |
| :--- | :--- |
| [IconUrl](EmbedAuthor.IconUrl 'Guilded.NET.Base.Embeds.EmbedAuthor.IconUrl') | The URL to author's icon. |
| [Name](EmbedAuthor.Name 'Guilded.NET.Base.Embeds.EmbedAuthor.Name') | The name of an embed author. |
| [Url](EmbedAuthor.Url 'Guilded.NET.Base.Embeds.EmbedAuthor.Url') | The URL that author links. |

### See Also
- [EmbedFooter](EmbedFooter 'Guilded.NET.Base.Embeds.EmbedFooter')
- [EmbedField](EmbedField 'Guilded.NET.Base.Embeds.EmbedField')
- [EmbedMedia](EmbedMedia 'Guilded.NET.Base.Embeds.EmbedMedia')