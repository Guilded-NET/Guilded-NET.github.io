
#### [Guilded.NET.Base](index 'index')
### [Guilded.NET.Base](index#Guilded_NET_Base 'Guilded.NET.Base').[BaseObject](BaseObject 'Guilded.NET.Base.BaseObject')
## BaseObject.Serialize(JsonConverter[]) Method
Returns serialized version of this object with the given [converters](BaseObject_Serialize(JsonConverter__)#Guilded_NET_Base_BaseObject_Serialize(JsonConverter__)_converters 'Guilded.NET.Base.BaseObject.Serialize(JsonConverter[]).converters').  
```csharp
public virtual string Serialize(params JsonConverter[] converters);
```

#### Parameters
<a name='Guilded_NET_Base_BaseObject_Serialize(JsonConverter__)_converters'></a>
`converters` [Newtonsoft.Json.JsonConverter](https://docs.microsoft.com/en-us/dotnet/api/Newtonsoft.Json.JsonConverter 'Newtonsoft.Json.JsonConverter')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')  
Converters to serialize object with
  

#### Returns
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
Serialized object
