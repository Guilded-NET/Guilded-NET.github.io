#### [Guilded.NET](Guilded_NET_Base.md 'Guilded.NET.Base')
### [Guilded.NET.Converters](Guilded_NET_Base.md#Guilded_NET_Converters 'Guilded.NET.Converters')
## RichTextConverter Class
Converts JSON to rich text markup objects.  
```csharp
public class RichTextConverter
```

Inheritance [Newtonsoft.Json.JsonConverter](https://docs.microsoft.com/en-us/dotnet/api/Newtonsoft.Json.JsonConverter 'Newtonsoft.Json.JsonConverter') &#129106; RichTextConverter  

| Properties | |
| :--- | :--- |
| [CanWrite](RichTextConverter_CanWrite.md 'Guilded.NET.Converters.RichTextConverter.CanWrite') | If this converter can write.<br/> |

| Methods | |
| :--- | :--- |
| [CanConvert(Type)](RichTextConverter_CanConvert(Type).md 'Guilded.NET.Converters.RichTextConverter.CanConvert(System.Type)') | Returns whether the converter supports converting the given type.<br/> |
| [ReadJson(JsonReader, Type, object, JsonSerializer)](RichTextConverter_ReadJson(JsonReader_Type_object_JsonSerializer).md 'Guilded.NET.Converters.RichTextConverter.ReadJson(JsonReader, System.Type, object, JsonSerializer)') | Reads the given JSON object as [Guilded.NET.Base.Chat.ChatElement](https://docs.microsoft.com/en-us/dotnet/api/Guilded.NET.Base.Chat.ChatElement 'Guilded.NET.Base.Chat.ChatElement').<br/> |
| [WriteJson(JsonWriter, object, JsonSerializer)](RichTextConverter_WriteJson(JsonWriter_object_JsonSerializer).md 'Guilded.NET.Converters.RichTextConverter.WriteJson(JsonWriter, object, JsonSerializer)') | Writes given object as JSON.<br/> |
