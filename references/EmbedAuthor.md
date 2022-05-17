---
title: EmbedAuthor
layout: references
section: references
tags:
  - references
  - class
description: "

Represents an author of the content represented in an [embed](Embed 'Guilded.Base.Embeds.Embed')."
---

## EmbedAuthor Class
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Embeds`](Guilded.Base.Embeds 'Guilded.Base.Embeds')

Represents an author of the content represented in an [embed](Embed 'Guilded.Base.Embeds.Embed').

```csharp
public class EmbedAuthor : Guilded.Base.BaseObject
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.Base.BaseObject') &#129106; EmbedAuthor

### Example
  
An example of using [EmbedAuthor](EmbedAuthor 'Guilded.Base.Embeds.EmbedAuthor') to display content owner:  
  
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
| [EmbedAuthor(string, string, string)](EmbedAuthor.EmbedAuthor(string,string,string) 'Guilded.Base.Embeds.EmbedAuthor.EmbedAuthor(string, string, string)') | Initializes a new instance of [EmbedAuthor](EmbedAuthor 'Guilded.Base.Embeds.EmbedAuthor') with an optional [url](EmbedAuthor.EmbedAuthor(string,string,string)#Guilded.Base.Embeds.EmbedAuthor.EmbedAuthor(string,string,string).url 'Guilded.Base.Embeds.EmbedAuthor.EmbedAuthor(string, string, string).url'). |
| [EmbedAuthor(string, Uri, Uri)](EmbedAuthor.EmbedAuthor(string,Uri,Uri) 'Guilded.Base.Embeds.EmbedAuthor.EmbedAuthor(string, Uri, Uri)') | Initializes a new instance of [EmbedAuthor](EmbedAuthor 'Guilded.Base.Embeds.EmbedAuthor') with an optional [url](EmbedAuthor.EmbedAuthor(string,Uri,Uri)#Guilded.Base.Embeds.EmbedAuthor.EmbedAuthor(string,Uri,Uri).url 'Guilded.Base.Embeds.EmbedAuthor.EmbedAuthor(string, Uri, Uri).url'). |
| [EmbedAuthor(string)](EmbedAuthor.EmbedAuthor(string) 'Guilded.Base.Embeds.EmbedAuthor.EmbedAuthor(string)') | Initializes a new instance of [EmbedAuthor](EmbedAuthor 'Guilded.Base.Embeds.EmbedAuthor') without an icon and without a URL. |

| Properties | |
| :--- | :--- |
| [IconUrl](EmbedAuthor.IconUrl 'Guilded.Base.Embeds.EmbedAuthor.IconUrl') | Gets the URL to author's icon. |
| [Name](EmbedAuthor.Name 'Guilded.Base.Embeds.EmbedAuthor.Name') | Gets the name of an embed author. |
| [Url](EmbedAuthor.Url 'Guilded.Base.Embeds.EmbedAuthor.Url') | Gets the URL that author links. |

### See Also
- [Embed](Embed 'Guilded.Base.Embeds.Embed')
- [EmbedFooter](EmbedFooter 'Guilded.Base.Embeds.EmbedFooter')
- [EmbedField](EmbedField 'Guilded.Base.Embeds.EmbedField')
- [EmbedMedia](EmbedMedia 'Guilded.Base.Embeds.EmbedMedia')