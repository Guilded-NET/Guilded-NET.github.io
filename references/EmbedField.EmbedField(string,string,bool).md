---
title: EmbedField(string, string, bool)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [EmbedField](EmbedField 'Guilded.Base.Embeds.EmbedField'), which is optionally inline."
---

## EmbedField(string, string, bool) Constructor
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`EmbedField`](EmbedField 'Guilded.Base.Embeds.EmbedField')

Initializes a new instance of [EmbedField](EmbedField 'Guilded.Base.Embeds.EmbedField'), which is optionally inline.

```csharp
public EmbedField(string name, string value, bool inline=false);
```
#### Parameters

<a name='Guilded.Base.Embeds.EmbedField.EmbedField(string,string,bool).name'></a>

`name` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The title of an [embed's](Embed 'Guilded.Base.Embeds.Embed') field

<a name='Guilded.Base.Embeds.EmbedField.EmbedField(string,string,bool).value'></a>

`value` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The text contents of an [embed's](Embed 'Guilded.Base.Embeds.Embed') field

<a name='Guilded.Base.Embeds.EmbedField.EmbedField(string,string,bool).inline'></a>

`inline` [System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

Whether the field should be inline with other fields

#### Exceptions

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
Either [name](EmbedField.EmbedField(string,string,bool)#Guilded.Base.Embeds.EmbedField.EmbedField(string,string,bool).name 'Guilded.Base.Embeds.EmbedField.EmbedField(string, string, bool).name') or [value](EmbedField.EmbedField(string,string,bool)#Guilded.Base.Embeds.EmbedField.EmbedField(string,string,bool).value 'Guilded.Base.Embeds.EmbedField.EmbedField(string, string, bool).value') are [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null')

### See Also
- [EmbedField](EmbedField 'Guilded.Base.Embeds.EmbedField')