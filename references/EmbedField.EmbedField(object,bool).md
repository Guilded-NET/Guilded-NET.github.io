---
title: EmbedField(object, bool)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [EmbedField](EmbedField 'Guilded.Base.Embeds.EmbedField'), which is optionally inline."
---

## EmbedField(object, bool) Constructor
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`EmbedField`](EmbedField 'Guilded.Base.Embeds.EmbedField')

Initializes a new instance of [EmbedField](EmbedField 'Guilded.Base.Embeds.EmbedField'), which is optionally inline.

```csharp
public EmbedField(object? value, bool inline=false);
```
#### Parameters

<a name='Guilded.Base.Embeds.EmbedField.EmbedField(object,bool).value'></a>

`value` [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object')

The text contents of an [embed's](Embed 'Guilded.Base.Embeds.Embed') field

<a name='Guilded.Base.Embeds.EmbedField.EmbedField(object,bool).inline'></a>

`inline` [System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

Whether the field should be inline with other fields

#### Exceptions

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
Either name or [value](EmbedField.EmbedField(object,bool)#Guilded.Base.Embeds.EmbedField.EmbedField(object,bool).value 'Guilded.Base.Embeds.EmbedField.EmbedField(object, bool).value') are [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null')

### See Also
- [EmbedField](EmbedField 'Guilded.Base.Embeds.EmbedField')