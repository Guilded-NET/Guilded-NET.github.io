---
title: EmbedField(string, string, bool)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Creates a new instance of [EmbedField](EmbedField 'Guilded.NET.Base.Embeds.EmbedField'), which is optionally inline.

```csharp
public EmbedField(string name, string value, bool inline=false);
```"
---

## EmbedField(string, string, bool) Constructor
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`EmbedField`](EmbedField 'Guilded.NET.Base.Embeds.EmbedField')

Creates a new instance of [EmbedField](EmbedField 'Guilded.NET.Base.Embeds.EmbedField'), which is optionally inline.

```csharp
public EmbedField(string name, string value, bool inline=false);
```

### Remarks
  
Creates a new field with the name [name](EmbedField.EmbedField(string,string,bool)#Guilded.NET.Base.Embeds.EmbedField.EmbedField(string,string,bool).name 'Guilded.NET.Base.Embeds.EmbedField.EmbedField(string, string, bool).name') and a value [value](EmbedField.EmbedField(string,string,bool)#Guilded.NET.Base.Embeds.EmbedField.EmbedField(string,string,bool).value 'Guilded.NET.Base.Embeds.EmbedField.EmbedField(string, string, bool).value').
#### Parameters

<a name='Guilded.NET.Base.Embeds.EmbedField.EmbedField(string,string,bool).name'></a>

`name` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The title of the embed

<a name='Guilded.NET.Base.Embeds.EmbedField.EmbedField(string,string,bool).value'></a>

`value` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The description text of the field

<a name='Guilded.NET.Base.Embeds.EmbedField.EmbedField(string,string,bool).inline'></a>

`inline` [System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

Whether the field should be inline with other fields

#### Exceptions

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
Either [name](EmbedField.EmbedField(string,string,bool)#Guilded.NET.Base.Embeds.EmbedField.EmbedField(string,string,bool).name 'Guilded.NET.Base.Embeds.EmbedField.EmbedField(string, string, bool).name') or [value](EmbedField.EmbedField(string,string,bool)#Guilded.NET.Base.Embeds.EmbedField.EmbedField(string,string,bool).value 'Guilded.NET.Base.Embeds.EmbedField.EmbedField(string, string, bool).value') are [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null')