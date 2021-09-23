
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### [Guilded.NET.Base](Guilded_NET_Base#Guilded_NET_Base 'Guilded.NET.Base').[BaseObject](BaseObject 'Guilded.NET.Base.BaseObject')
## BaseObject.Serialize(JsonConverter[]) Method
Returns serialized [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') instance.  
```csharp
public virtual string Serialize(params JsonConverter[] converters);
```

#### Parameters
<a name='Guilded_NET_Base_BaseObject_Serialize(JsonConverter__)_converters'></a>
`converters` [Newtonsoft.Json.JsonConverter](https://docs.microsoft.com/en-us/dotnet/api/Newtonsoft.Json.JsonConverter 'Newtonsoft.Json.JsonConverter')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')  
Guilded object converters that will be used to serialize
  

#### Returns
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
Serialized [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') instance
### Remarks
Returns serialized version of this [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') instance based on [converters](BaseObject_Serialize(JsonConverter__)#Guilded_NET_Base_BaseObject_Serialize(JsonConverter__)_converters 'Guilded.NET.Base.BaseObject.Serialize(JsonConverter[]).converters').
