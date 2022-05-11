---
title: Serialize(JsonConverter[])
layout: references
section: references
tags:
  - references
  - method
description: "

Returns the serialized [BaseObject](BaseObject.md 'Guilded.Base.BaseObject') instance."
---

## BaseObject.Serialize(JsonConverter[]) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseObject`](BaseObject.md 'Guilded.Base.BaseObject')

Returns the serialized [BaseObject](BaseObject.md 'Guilded.Base.BaseObject') instance.

```csharp
public virtual string Serialize(params Newtonsoft.Json.JsonConverter[] converters);
```
#### Parameters

<a name='Guilded.Base.BaseObject.Serialize(Newtonsoft.Json.JsonConverter[]).converters'></a>

`converters` [Newtonsoft.Json.JsonConverter](https://docs.microsoft.com/en-us/dotnet/api/Newtonsoft.Json.JsonConverter 'Newtonsoft.Json.JsonConverter')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')

Guilded object converters that will be used to serialize

#### Returns
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
Serialized [BaseObject](BaseObject.md 'Guilded.Base.BaseObject') instance