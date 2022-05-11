---
title: ReadJson(JsonReader, Type, object, JsonSerializer)
layout: references
section: references
tags:
  - references
  - method
description: "

Reads the given JSON object as [HashId](HashId.md 'Guilded.Base.HashId') or [FormId](FormId.md 'Guilded.Base.FormId')."
---

## IdConverter.ReadJson(JsonReader, Type, object, JsonSerializer) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`IdConverter`](IdConverter.md 'Guilded.Base.IdConverter')

Reads the given JSON object as [HashId](HashId.md 'Guilded.Base.HashId') or [FormId](FormId.md 'Guilded.Base.FormId').

```csharp
public override object? ReadJson(Newtonsoft.Json.JsonReader reader, System.Type objectType, object? existingValue, Newtonsoft.Json.JsonSerializer serializer);
```
#### Parameters

<a name='Guilded.Base.IdConverter.ReadJson(Newtonsoft.Json.JsonReader,System.Type,object,Newtonsoft.Json.JsonSerializer).reader'></a>

`reader` [Newtonsoft.Json.JsonReader](https://docs.microsoft.com/en-us/dotnet/api/Newtonsoft.Json.JsonReader 'Newtonsoft.Json.JsonReader')

The reader that was used to read JSON

<a name='Guilded.Base.IdConverter.ReadJson(Newtonsoft.Json.JsonReader,System.Type,object,Newtonsoft.Json.JsonSerializer).objectType'></a>

`objectType` [System.Type](https://docs.microsoft.com/en-us/dotnet/api/System.Type 'System.Type')

The type of the object to convert

<a name='Guilded.Base.IdConverter.ReadJson(Newtonsoft.Json.JsonReader,System.Type,object,Newtonsoft.Json.JsonSerializer).existingValue'></a>

`existingValue` [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object')

The previous value of the property being converted

<a name='Guilded.Base.IdConverter.ReadJson(Newtonsoft.Json.JsonReader,System.Type,object,Newtonsoft.Json.JsonSerializer).serializer'></a>

`serializer` [Newtonsoft.Json.JsonSerializer](https://docs.microsoft.com/en-us/dotnet/api/Newtonsoft.Json.JsonSerializer 'Newtonsoft.Json.JsonSerializer')

The serializer that is deserializing the object

#### Returns
[System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object')  
[HashId](HashId.md 'Guilded.Base.HashId') or [FormId](FormId.md 'Guilded.Base.FormId')