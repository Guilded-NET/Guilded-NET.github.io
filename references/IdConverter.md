---
title: IdConverter
layout: references
section: references
tags:
  - references
  - class
description: "

Converts [HashId](HashId 'Guilded.NET.Base.HashId') to string or vice versa in a JSON.

```csharp
public class IdConverter : Newtonsoft.Json.JsonConverter
```"
---

## IdConverter Class
###### **Assembly:** `Guilded.NET.Base`<br/>**Namespace:** [`Guilded.NET.Base`](Guilded.NET.Base 'Guilded.NET.Base')

Converts [HashId](HashId 'Guilded.NET.Base.HashId') to string or vice versa in a JSON.

```csharp
public class IdConverter : Newtonsoft.Json.JsonConverter
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [Newtonsoft.Json.JsonConverter](https://docs.microsoft.com/en-us/dotnet/api/Newtonsoft.Json.JsonConverter 'Newtonsoft.Json.JsonConverter') &#129106; IdConverter

| Methods | |
| :--- | :--- |
| [CanConvert(Type)](IdConverter.CanConvert(Type) 'Guilded.NET.Base.IdConverter.CanConvert(System.Type)') | Returns whether the converter supports converting the given type. |
| [ReadJson(JsonReader, Type, object, JsonSerializer)](IdConverter.ReadJson(JsonReader,Type,object,JsonSerializer) 'Guilded.NET.Base.IdConverter.ReadJson(Newtonsoft.Json.JsonReader, System.Type, object, Newtonsoft.Json.JsonSerializer)') | Reads the given JSON object as [HashId](HashId 'Guilded.NET.Base.HashId') or [FormId](FormId 'Guilded.NET.Base.FormId'). |
| [WriteJson(JsonWriter, object, JsonSerializer)](IdConverter.WriteJson(JsonWriter,object,JsonSerializer) 'Guilded.NET.Base.IdConverter.WriteJson(Newtonsoft.Json.JsonWriter, object, Newtonsoft.Json.JsonSerializer)') | Writes given object as JSON. |
