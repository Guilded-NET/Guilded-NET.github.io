---
title: WriteJson(JsonWriter, object, JsonSerializer)
layout: references
section: references
tags:
  - references
  - method
description: "

Writes given object as JSON.

```csharp
public override void WriteJson(Newtonsoft.Json.JsonWriter writer, object? value, Newtonsoft.Json.JsonSerializer serializer);
```"
---

## IdConverter.WriteJson(JsonWriter, object, JsonSerializer) Method
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`IdConverter`](IdConverter 'Guilded.NET.Base.IdConverter')

Writes given object as JSON.

```csharp
public override void WriteJson(Newtonsoft.Json.JsonWriter writer, object? value, Newtonsoft.Json.JsonSerializer serializer);
```
#### Parameters

<a name='Guilded.NET.Base.IdConverter.WriteJson(Newtonsoft.Json.JsonWriter,object,Newtonsoft.Json.JsonSerializer).writer'></a>

`writer` [Newtonsoft.Json.JsonWriter](https://docs.microsoft.com/en-us/dotnet/api/Newtonsoft.Json.JsonWriter 'Newtonsoft.Json.JsonWriter')

The writer to use to write to JSON

<a name='Guilded.NET.Base.IdConverter.WriteJson(Newtonsoft.Json.JsonWriter,object,Newtonsoft.Json.JsonSerializer).value'></a>

`value` [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object')

The object to write to JSON

<a name='Guilded.NET.Base.IdConverter.WriteJson(Newtonsoft.Json.JsonWriter,object,Newtonsoft.Json.JsonSerializer).serializer'></a>

`serializer` [Newtonsoft.Json.JsonSerializer](https://docs.microsoft.com/en-us/dotnet/api/Newtonsoft.Json.JsonSerializer 'Newtonsoft.Json.JsonSerializer')

The serializer that is serializing the object