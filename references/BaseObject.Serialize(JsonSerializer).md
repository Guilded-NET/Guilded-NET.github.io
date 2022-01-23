---
title: Serialize(JsonSerializer)
layout: references
section: references
tags:
  - references
  - method
description: "

Returns serialized [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') instance.

```csharp
public string Serialize(Newtonsoft.Json.JsonSerializer serializer);
```"
---

## BaseObject.Serialize(JsonSerializer) Method
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`BaseObject`](BaseObject 'Guilded.NET.Base.BaseObject')

Returns serialized [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') instance.

```csharp
public string Serialize(Newtonsoft.Json.JsonSerializer serializer);
```

### Remarks
  
Returns serialized version of this [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') instance based on [serializer](BaseObject.Serialize(JsonSerializer)#Guilded.NET.Base.BaseObject.Serialize(Newtonsoft.Json.JsonSerializer).serializer 'Guilded.NET.Base.BaseObject.Serialize(Newtonsoft.Json.JsonSerializer).serializer').
#### Parameters

<a name='Guilded.NET.Base.BaseObject.Serialize(Newtonsoft.Json.JsonSerializer).serializer'></a>

`serializer` [Newtonsoft.Json.JsonSerializer](https://docs.microsoft.com/en-us/dotnet/api/Newtonsoft.Json.JsonSerializer 'Newtonsoft.Json.JsonSerializer')

The serializer that will serialize

#### Returns
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
Serialized [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') instance