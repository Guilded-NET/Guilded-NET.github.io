---
title: EmbedField
layout: references
section: references
tags:
  - references
  - class
description: "

A field in an embed.

```csharp
public class EmbedField : Guilded.NET.Base.BaseObject
```"
---

## EmbedField Class
###### **Assembly:** `Guilded.NET.Base`<br/>**Namespace:** [`Guilded.NET.Base.Embeds`](Guilded.NET.Base.Embeds 'Guilded.NET.Base.Embeds')

A field in an embed.

```csharp
public class EmbedField : Guilded.NET.Base.BaseObject
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#129106; EmbedField

### Remarks
  
Displays a field with its own description/value and title/name. Fields can be both inline and blocks. They are only inline if [Inline](EmbedField.Inline 'Guilded.NET.Base.Embeds.EmbedField.Inline') parameter is [true](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool').

| Constructors | |
| :--- | :--- |
| [EmbedField(string, string, bool)](EmbedField.EmbedField(string,string,bool) 'Guilded.NET.Base.Embeds.EmbedField.EmbedField(string, string, bool)') | Creates a new instance of [EmbedField](EmbedField 'Guilded.NET.Base.Embeds.EmbedField'), which is optionally inline. |

| Properties | |
| :--- | :--- |
| [Inline](EmbedField.Inline 'Guilded.NET.Base.Embeds.EmbedField.Inline') | Whether the field should be inline with other fields. |
| [Name](EmbedField.Name 'Guilded.NET.Base.Embeds.EmbedField.Name') | The title of the embed. |
| [Value](EmbedField.Value 'Guilded.NET.Base.Embeds.EmbedField.Value') | The description text of the field. |

### See Also
- [EmbedFooter](EmbedFooter 'Guilded.NET.Base.Embeds.EmbedFooter')
- [EmbedAuthor](EmbedAuthor 'Guilded.NET.Base.Embeds.EmbedAuthor')
- [EmbedMedia](EmbedMedia 'Guilded.NET.Base.Embeds.EmbedMedia')