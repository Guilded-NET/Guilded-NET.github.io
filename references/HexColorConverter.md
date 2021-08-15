
#### [Guilded.NET](index 'index')
### [Guilded.NET.Converters](index#Guilded_NET_Converters 'Guilded.NET.Converters')
## HexColorConverter Class
Converts colour to hex.  
```csharp
public class HexColorConverter
```

Inheritance [Newtonsoft.Json.JsonConverter](https://docs.microsoft.com/en-us/dotnet/api/Newtonsoft.Json.JsonConverter 'Newtonsoft.Json.JsonConverter') &#129106; HexColorConverter  

| Properties | |
| :--- | :--- |
| [CanRead](HexColorConverter_CanRead 'Guilded.NET.Converters.HexColorConverter.CanRead') | If this converter can read JSON value.<br/> |

| Methods | |
| :--- | :--- |
| [CanConvert(Type)](HexColorConverter_CanConvert(Type) 'Guilded.NET.Converters.HexColorConverter.CanConvert(System.Type)') | Returns whether the converter supports converting the given type.<br/> |
| [ReadJson(JsonReader, Type, object, JsonSerializer)](HexColorConverter_ReadJson(JsonReader_Type_object_JsonSerializer) 'Guilded.NET.Converters.HexColorConverter.ReadJson(JsonReader, System.Type, object, JsonSerializer)') | Reads the given JSON object as [System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color').<br/> |
| [WriteJson(JsonWriter, object, JsonSerializer)](HexColorConverter_WriteJson(JsonWriter_object_JsonSerializer) 'Guilded.NET.Converters.HexColorConverter.WriteJson(JsonWriter, object, JsonSerializer)') | Writes given object as JSON.<br/> |
