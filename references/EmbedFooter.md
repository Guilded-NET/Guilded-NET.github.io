---
title: EmbedFooter
layout: references
section: references
tags:
  - references
  - class
description: "

The footer of an embed.

```csharp
public class EmbedFooter : Guilded.NET.Base.BaseObject
```"
---

## EmbedFooter Class
###### **Assembly:** `Guilded.NET.Base`<br/>**Namespace:** [`Guilded.NET.Base.Embeds`](Guilded.NET.Base.Embeds 'Guilded.NET.Base.Embeds')

The footer of an embed.

```csharp
public class EmbedFooter : Guilded.NET.Base.BaseObject
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#129106; EmbedFooter

### Remarks
  
The bottom area of an embed that defines a side information about something, such as post likes. Footers can also have timestamps, but that can be used by setting [Timestamp](Embed.Timestamp 'Guilded.NET.Base.Embeds.Embed.Timestamp') property. Timestamps are not officially part of footers, but that's the way it is displayed.

| Constructors | |
| :--- | :--- |
| [EmbedFooter(string, string)](EmbedFooter.EmbedFooter(string,string) 'Guilded.NET.Base.Embeds.EmbedFooter.EmbedFooter(string, string)') | Creates a new instance of [EmbedFooter](EmbedFooter 'Guilded.NET.Base.Embeds.EmbedFooter') with text [text](EmbedFooter.EmbedFooter(string,string)#Guilded.NET.Base.Embeds.EmbedFooter.EmbedFooter(string,string).text 'Guilded.NET.Base.Embeds.EmbedFooter.EmbedFooter(string, string).text'). |
| [EmbedFooter(string, Uri)](EmbedFooter.EmbedFooter(string,Uri) 'Guilded.NET.Base.Embeds.EmbedFooter.EmbedFooter(string, System.Uri)') | Creates a new instance of [EmbedFooter](EmbedFooter 'Guilded.NET.Base.Embeds.EmbedFooter') with text [text](EmbedFooter.EmbedFooter(string,Uri)#Guilded.NET.Base.Embeds.EmbedFooter.EmbedFooter(string,System.Uri).text 'Guilded.NET.Base.Embeds.EmbedFooter.EmbedFooter(string, System.Uri).text'). |

| Properties | |
| :--- | :--- |
| [IconUrl](EmbedFooter.IconUrl 'Guilded.NET.Base.Embeds.EmbedFooter.IconUrl') | The source URL of footer's icon. |
| [Text](EmbedFooter.Text 'Guilded.NET.Base.Embeds.EmbedFooter.Text') | The description of the footer. |

### See Also
- [EmbedAuthor](EmbedAuthor 'Guilded.NET.Base.Embeds.EmbedAuthor')
- [EmbedField](EmbedField 'Guilded.NET.Base.Embeds.EmbedField')
- [EmbedMedia](EmbedMedia 'Guilded.NET.Base.Embeds.EmbedMedia')