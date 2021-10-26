
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base](Guilded_NET_Base#Guilded_NET_Base 'Guilded.NET.Base')
## IdConverter Class

Converts [GId](GId 'Guilded.NET.Base.GId') to string or vice versa in a JSON.
```csharp
public class IdConverter : Newtonsoft.Json.JsonConverter
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#x27A1; [Newtonsoft.Json.JsonConverter](https://docs.microsoft.com/en-us/dotnet/api/Newtonsoft.Json.JsonConverter 'Newtonsoft.Json.JsonConverter') &#x27A1; IdConverter

| Methods | |
| :--- | :--- |
| [CanConvert(Type)](IdConverter_CanConvert(Type) 'Guilded.NET.Base.IdConverter.CanConvert(System.Type)') | Returns whether the converter supports converting the given type. |
| [ReadJson(JsonReader, Type, object, JsonSerializer)](IdConverter_ReadJson(JsonReader_Type_object_JsonSerializer) 'Guilded.NET.Base.IdConverter.ReadJson(Newtonsoft.Json.JsonReader, System.Type, object, Newtonsoft.Json.JsonSerializer)') | Reads the given JSON object as [GId](GId 'Guilded.NET.Base.GId') or [FormId](FormId 'Guilded.NET.Base.FormId'). |
| [WriteJson(JsonWriter, object, JsonSerializer)](IdConverter_WriteJson(JsonWriter_object_JsonSerializer) 'Guilded.NET.Base.IdConverter.WriteJson(Newtonsoft.Json.JsonWriter, object, Newtonsoft.Json.JsonSerializer)') | Writes given object as JSON. |
