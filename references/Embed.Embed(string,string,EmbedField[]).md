---
title: Embed(string, string, EmbedField[])
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [Embed](Embed.md 'Guilded.Base.Embeds.Embed') with its [fields](Embed.Embed(string,string,EmbedField[]).md#Guilded.Base.Embeds.Embed.Embed(string,string,Guilded.Base.Embeds.EmbedField[]).fields 'Guilded.Base.Embeds.Embed.Embed(string, string, Guilded.Base.Embeds.EmbedField[]).fields') and a [title](Embed.Embed(string,string,EmbedField[]).md#Guilded.Base.Embeds.Embed.Embed(string,string,Guilded.Base.Embeds.EmbedField[]).title 'Guilded.Base.Embeds.Embed.Embed(string, string, Guilded.Base.Embeds.EmbedField[]).title')."
---

## Embed(string, string, EmbedField[]) Constructor
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`Embed`](Embed.md 'Guilded.Base.Embeds.Embed')

Initializes a new instance of [Embed](Embed.md 'Guilded.Base.Embeds.Embed') with its [fields](Embed.Embed(string,string,EmbedField[]).md#Guilded.Base.Embeds.Embed.Embed(string,string,Guilded.Base.Embeds.EmbedField[]).fields 'Guilded.Base.Embeds.Embed.Embed(string, string, Guilded.Base.Embeds.EmbedField[]).fields') and a [title](Embed.Embed(string,string,EmbedField[]).md#Guilded.Base.Embeds.Embed.Embed(string,string,Guilded.Base.Embeds.EmbedField[]).title 'Guilded.Base.Embeds.Embed.Embed(string, string, Guilded.Base.Embeds.EmbedField[]).title').

```csharp
public Embed(string title, string description, params Guilded.Base.Embeds.EmbedField[] fields);
```
#### Parameters

<a name='Guilded.Base.Embeds.Embed.Embed(string,string,Guilded.Base.Embeds.EmbedField[]).title'></a>

`title` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The title of the embed

<a name='Guilded.Base.Embeds.Embed.Embed(string,string,Guilded.Base.Embeds.EmbedField[]).description'></a>

`description` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The description text of the embed

<a name='Guilded.Base.Embeds.Embed.Embed(string,string,Guilded.Base.Embeds.EmbedField[]).fields'></a>

`fields` [EmbedField](EmbedField.md 'Guilded.Base.Embeds.EmbedField')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')

The list of fields in this embed