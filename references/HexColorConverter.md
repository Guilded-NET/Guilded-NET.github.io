
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base](Guilded_NET_Base#Guilded_NET_Base 'Guilded.NET.Base')
## HexColorConverter Class

Converts colour to hex for roles.
```csharp
public class HexColorConverter : Newtonsoft.Json.JsonConverter
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#x27A1; [Newtonsoft.Json.JsonConverter](https://docs.microsoft.com/en-us/dotnet/api/Newtonsoft.Json.JsonConverter 'Newtonsoft.Json.JsonConverter') &#x27A1; HexColorConverter

| Properties | |
| :--- | :--- |
| [CanRead](HexColorConverter_CanRead 'Guilded.NET.Base.HexColorConverter.CanRead') | If this converter can read JSON value. |

| Methods | |
| :--- | :--- |
| [CanConvert(Type)](HexColorConverter_CanConvert(Type) 'Guilded.NET.Base.HexColorConverter.CanConvert(System.Type)') | Returns whether the converter supports converting the given type. |
| [ReadJson(JsonReader, Type, object, JsonSerializer)](HexColorConverter_ReadJson(JsonReader_Type_object_JsonSerializer) 'Guilded.NET.Base.HexColorConverter.ReadJson(Newtonsoft.Json.JsonReader, System.Type, object, Newtonsoft.Json.JsonSerializer)') | Reads the given JSON object as [System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color'). |
| [WriteJson(JsonWriter, object, JsonSerializer)](HexColorConverter_WriteJson(JsonWriter_object_JsonSerializer) 'Guilded.NET.Base.HexColorConverter.WriteJson(Newtonsoft.Json.JsonWriter, object, Newtonsoft.Json.JsonSerializer)') | Writes given object as JSON. |
