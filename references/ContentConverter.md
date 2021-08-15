#### [Guilded.NET](Guilded_NET_Base.md 'Guilded.NET.Base')
### [Guilded.NET.Converters](Guilded_NET_Base.md#Guilded_NET_Converters 'Guilded.NET.Converters')
## ContentConverter Class
Converts specific interface types.  
```csharp
public class ContentConverter
```

Inheritance [Newtonsoft.Json.JsonConverter](https://docs.microsoft.com/en-us/dotnet/api/Newtonsoft.Json.JsonConverter 'Newtonsoft.Json.JsonConverter') &#129106; ContentConverter  

| Methods | |
| :--- | :--- |
| [CanConvert(Type)](ContentConverter_CanConvert(Type).md 'Guilded.NET.Converters.ContentConverter.CanConvert(System.Type)') | Returns whether the converter supports converting the given type.<br/> |
| [ReadJson(JsonReader, Type, object, JsonSerializer)](ContentConverter_ReadJson(JsonReader_Type_object_JsonSerializer).md 'Guilded.NET.Converters.ContentConverter.ReadJson(JsonReader, System.Type, object, JsonSerializer)') | Reads the given JSON object as [Guilded.NET.Base.Content.Reply](https://docs.microsoft.com/en-us/dotnet/api/Guilded.NET.Base.Content.Reply 'Guilded.NET.Base.Content.Reply'), [Guilded.NET.Base.Forms.FormField](https://docs.microsoft.com/en-us/dotnet/api/Guilded.NET.Base.Forms.FormField 'Guilded.NET.Base.Forms.FormField') or [Guilded.NET.Base.BaseChannel](https://docs.microsoft.com/en-us/dotnet/api/Guilded.NET.Base.BaseChannel 'Guilded.NET.Base.BaseChannel').<br/> |
| [WriteJson(JsonWriter, object, JsonSerializer)](ContentConverter_WriteJson(JsonWriter_object_JsonSerializer).md 'Guilded.NET.Converters.ContentConverter.WriteJson(JsonWriter, object, JsonSerializer)') | Writes given object as JSON.<br/> |
