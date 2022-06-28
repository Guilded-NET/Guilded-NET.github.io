---
title: Serialize(JsonConverter[])
layout: references
section: references
tags:
  - references
  - method
description: "

Returns the serialized [BaseModel](BaseModel 'Guilded.Base.BaseModel') instance."
---

## BaseModel.Serialize(JsonConverter[]) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseModel`](BaseModel 'Guilded.Base.BaseModel')

Returns the serialized [BaseModel](BaseModel 'Guilded.Base.BaseModel') instance.

```csharp
public virtual string Serialize(params Newtonsoft.Json.JsonConverter[] converters);
```
#### Parameters

<a name='Guilded.Base.BaseModel.Serialize(Newtonsoft.Json.JsonConverter[]).converters'></a>

`converters` [Newtonsoft.Json.JsonConverter](https://docs.microsoft.com/en-us/dotnet/api/Newtonsoft.Json.JsonConverter 'Newtonsoft.Json.JsonConverter')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')

Guilded object converters that will be used to serialize

#### Returns
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
Serialized [BaseModel](BaseModel 'Guilded.Base.BaseModel') instance

### See Also
- [Serialize(JsonSerializer)](BaseModel.Serialize(JsonSerializer) 'Guilded.Base.BaseModel.Serialize(Newtonsoft.Json.JsonSerializer)')
- [BaseGuildedClient](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')