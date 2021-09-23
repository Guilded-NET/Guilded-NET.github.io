
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### [Guilded.NET.Base](Guilded_NET_Base#Guilded_NET_Base 'Guilded.NET.Base').[IdConverter](IdConverter 'Guilded.NET.Base.IdConverter')
## IdConverter.ReadJson(JsonReader, Type, object, JsonSerializer) Method
Reads the given JSON object as [GId](GId 'Guilded.NET.Base.GId') or [FormId](FormId 'Guilded.NET.Base.FormId').  
```csharp
public override object ReadJson(JsonReader reader, System.Type objectType, object existingValue, JsonSerializer serializer);
```

#### Parameters
<a name='Guilded_NET_Base_IdConverter_ReadJson(JsonReader_System_Type_object_JsonSerializer)_reader'></a>
`reader` [Newtonsoft.Json.JsonReader](https://docs.microsoft.com/en-us/dotnet/api/Newtonsoft.Json.JsonReader 'Newtonsoft.Json.JsonReader')  
The reader that was used to read JSON
  
<a name='Guilded_NET_Base_IdConverter_ReadJson(JsonReader_System_Type_object_JsonSerializer)_objectType'></a>
`objectType` [System.Type](https://docs.microsoft.com/en-us/dotnet/api/System.Type 'System.Type')  
The type of the object to convert
  
<a name='Guilded_NET_Base_IdConverter_ReadJson(JsonReader_System_Type_object_JsonSerializer)_existingValue'></a>
`existingValue` [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object')  
The previous value of the property being converted
  
<a name='Guilded_NET_Base_IdConverter_ReadJson(JsonReader_System_Type_object_JsonSerializer)_serializer'></a>
`serializer` [Newtonsoft.Json.JsonSerializer](https://docs.microsoft.com/en-us/dotnet/api/Newtonsoft.Json.JsonSerializer 'Newtonsoft.Json.JsonSerializer')  
The serializer that is deserializing the object
  

#### Returns
[System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object')  
[GId](GId 'Guilded.NET.Base.GId') | [FormId](FormId 'Guilded.NET.Base.FormId')
