
#### [Guilded.NET.Base](index 'index')
### [Guilded.NET.Base](index#Guilded_NET_Base 'Guilded.NET.Base').[FlatListConverter](FlatListConverter 'Guilded.NET.Base.FlatListConverter')
## FlatListConverter.ReadJson(JsonReader, Type, object, JsonSerializer) Method
Reads the given JSON value or array as [System.Array](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array').  
```csharp
public override object ReadJson(JsonReader reader, System.Type objectType, object existingValue, JsonSerializer serializer);
```

#### Parameters
<a name='Guilded_NET_Base_FlatListConverter_ReadJson(JsonReader_System_Type_object_JsonSerializer)_reader'></a>
`reader` [Newtonsoft.Json.JsonReader](https://docs.microsoft.com/en-us/dotnet/api/Newtonsoft.Json.JsonReader 'Newtonsoft.Json.JsonReader')  
The reader that was used to read JSON
  
<a name='Guilded_NET_Base_FlatListConverter_ReadJson(JsonReader_System_Type_object_JsonSerializer)_objectType'></a>
`objectType` [System.Type](https://docs.microsoft.com/en-us/dotnet/api/System.Type 'System.Type')  
The type of the object to convert
  
<a name='Guilded_NET_Base_FlatListConverter_ReadJson(JsonReader_System_Type_object_JsonSerializer)_existingValue'></a>
`existingValue` [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object')  
The previous value of the property being converted
  
<a name='Guilded_NET_Base_FlatListConverter_ReadJson(JsonReader_System_Type_object_JsonSerializer)_serializer'></a>
`serializer` [Newtonsoft.Json.JsonSerializer](https://docs.microsoft.com/en-us/dotnet/api/Newtonsoft.Json.JsonSerializer 'Newtonsoft.Json.JsonSerializer')  
The serializer that is deserializing the object
  

#### Returns
[System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object')  
[System.Array](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')
