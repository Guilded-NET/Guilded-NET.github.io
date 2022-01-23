---
title: HexColorConverter
layout: references
section: references
tags:
  - references
  - class
description: "

Converts colour to hex for roles.

```csharp
public class HexColorConverter : Newtonsoft.Json.JsonConverter
```"
---

## HexColorConverter Class
###### **Assembly:** `Guilded.NET.Base`<br/>**Namespace:** [`Guilded.NET.Base`](Guilded.NET.Base 'Guilded.NET.Base')

Converts colour to hex for roles.

```csharp
public class HexColorConverter : Newtonsoft.Json.JsonConverter
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [Newtonsoft.Json.JsonConverter](https://docs.microsoft.com/en-us/dotnet/api/Newtonsoft.Json.JsonConverter 'Newtonsoft.Json.JsonConverter') &#129106; HexColorConverter

| Properties | |
| :--- | :--- |
| [CanRead](HexColorConverter.CanRead 'Guilded.NET.Base.HexColorConverter.CanRead') | If this converter can read JSON value. |

| Methods | |
| :--- | :--- |
| [CanConvert(Type)](HexColorConverter.CanConvert(Type) 'Guilded.NET.Base.HexColorConverter.CanConvert(System.Type)') | Returns whether the converter supports converting the given type. |
| [ReadJson(JsonReader, Type, object, JsonSerializer)](HexColorConverter.ReadJson(JsonReader,Type,object,JsonSerializer) 'Guilded.NET.Base.HexColorConverter.ReadJson(Newtonsoft.Json.JsonReader, System.Type, object, Newtonsoft.Json.JsonSerializer)') | Reads the given JSON object as [System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color'). |
| [WriteJson(JsonWriter, object, JsonSerializer)](HexColorConverter.WriteJson(JsonWriter,object,JsonSerializer) 'Guilded.NET.Base.HexColorConverter.WriteJson(Newtonsoft.Json.JsonWriter, object, Newtonsoft.Json.JsonSerializer)') | Writes given object as JSON. |
