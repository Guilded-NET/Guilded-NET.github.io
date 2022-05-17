---
title: DecimalColorConverter
layout: references
section: references
tags:
  - references
  - class
description: "

Converts [System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color') to an integer in RGB format."
---

## DecimalColorConverter Class
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base`](Guilded.Base 'Guilded.Base')

Converts [System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color') to an integer in RGB format.

```csharp
public class DecimalColorConverter : Newtonsoft.Json.JsonConverter
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [Newtonsoft.Json.JsonConverter](https://docs.microsoft.com/en-us/dotnet/api/Newtonsoft.Json.JsonConverter 'Newtonsoft.Json.JsonConverter') &#129106; DecimalColorConverter

| Methods | |
| :--- | :--- |
| [CanConvert(Type)](DecimalColorConverter.CanConvert(Type) 'Guilded.Base.DecimalColorConverter.CanConvert(System.Type)') | Returns whether the converter supports converting the given type. |
| [ReadJson(JsonReader, Type, object, JsonSerializer)](DecimalColorConverter.ReadJson(JsonReader,Type,object,JsonSerializer) 'Guilded.Base.DecimalColorConverter.ReadJson(Newtonsoft.Json.JsonReader, System.Type, object, Newtonsoft.Json.JsonSerializer)') | Reads the given JSON object as [System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color'). |
| [WriteJson(JsonWriter, object, JsonSerializer)](DecimalColorConverter.WriteJson(JsonWriter,object,JsonSerializer) 'Guilded.Base.DecimalColorConverter.WriteJson(Newtonsoft.Json.JsonWriter, object, Newtonsoft.Json.JsonSerializer)') | Writes given object as JSON. |
