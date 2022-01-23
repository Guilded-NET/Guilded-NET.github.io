---
title: Serialize(JsonConverter[])
layout: references
section: references
tags:
  - references
  - method
description: "

Returns serialized [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') instance.

```csharp
public virtual string Serialize(params Newtonsoft.Json.JsonConverter[] converters);
```"
---

## BaseObject.Serialize(JsonConverter[]) Method
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`BaseObject`](BaseObject 'Guilded.NET.Base.BaseObject')

Returns serialized [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') instance.

```csharp
public virtual string Serialize(params Newtonsoft.Json.JsonConverter[] converters);
```

### Remarks
  
Returns serialized version of this [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') instance based on [converters](BaseObject.Serialize(JsonConverter[])#Guilded.NET.Base.BaseObject.Serialize(Newtonsoft.Json.JsonConverter[]).converters 'Guilded.NET.Base.BaseObject.Serialize(Newtonsoft.Json.JsonConverter[]).converters').
#### Parameters

<a name='Guilded.NET.Base.BaseObject.Serialize(Newtonsoft.Json.JsonConverter[]).converters'></a>

`converters` [Newtonsoft.Json.JsonConverter](https://docs.microsoft.com/en-us/dotnet/api/Newtonsoft.Json.JsonConverter 'Newtonsoft.Json.JsonConverter')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')

Guilded object converters that will be used to serialize

#### Returns
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
Serialized [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') instance