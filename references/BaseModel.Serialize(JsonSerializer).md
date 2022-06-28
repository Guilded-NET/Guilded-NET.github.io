---
title: Serialize(JsonSerializer)
layout: references
section: references
tags:
  - references
  - method
description: "

Returns serialized [BaseModel](BaseModel 'Guilded.Base.BaseModel') instance."
---

## BaseModel.Serialize(JsonSerializer) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseModel`](BaseModel 'Guilded.Base.BaseModel')

Returns serialized [BaseModel](BaseModel 'Guilded.Base.BaseModel') instance.

```csharp
public string Serialize(Newtonsoft.Json.JsonSerializer serializer);
```
#### Parameters

<a name='Guilded.Base.BaseModel.Serialize(Newtonsoft.Json.JsonSerializer).serializer'></a>

`serializer` [Newtonsoft.Json.JsonSerializer](https://docs.microsoft.com/en-us/dotnet/api/Newtonsoft.Json.JsonSerializer 'Newtonsoft.Json.JsonSerializer')

The serializer that will serialize

### Remarks
  
Returns serialized version of this [BaseModel](BaseModel 'Guilded.Base.BaseModel') instance based on [serializer](BaseModel.Serialize(JsonSerializer)#Guilded.Base.BaseModel.Serialize(Newtonsoft.Json.JsonSerializer).serializer 'Guilded.Base.BaseModel.Serialize(Newtonsoft.Json.JsonSerializer).serializer').

#### Returns
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
Serialized [BaseModel](BaseModel 'Guilded.Base.BaseModel') instance

### See Also
- [Serialize(JsonConverter[])](BaseModel.Serialize(JsonConverter[]) 'Guilded.Base.BaseModel.Serialize(Newtonsoft.Json.JsonConverter[])')
- [BaseGuildedClient](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')