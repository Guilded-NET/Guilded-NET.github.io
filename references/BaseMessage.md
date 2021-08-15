
#### [Guilded.NET.Base](index 'index')
### [Guilded.NET.Base.Chat](index#Guilded_NET_Base_Chat 'Guilded.NET.Base.Chat')
## BaseMessage Class
The base type for [Message](Message 'Guilded.NET.Base.Chat.Message') and [MessageDeleted](MessageDeleted 'Guilded.NET.Base.Chat.MessageDeleted').  
```csharp
public class BaseMessage : Guilded.NET.Base.ClientObject
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#129106; [ClientObject](ClientObject 'Guilded.NET.Base.ClientObject') &#129106; BaseMessage  

Derived  
&#8627; [Message](Message 'Guilded.NET.Base.Chat.Message')  
&#8627; [MessageDeleted](MessageDeleted 'Guilded.NET.Base.Chat.MessageDeleted')  

| Properties | |
| :--- | :--- |
| [ChannelId](BaseMessage_ChannelId 'Guilded.NET.Base.Chat.BaseMessage.ChannelId') | The identifier of the channel this message is in.<br/> |
| [Id](BaseMessage_Id 'Guilded.NET.Base.Chat.BaseMessage.Id') | The identifier of the message.<br/> |

| Methods | |
| :--- | :--- |
| [RespondAsync(MessageContent)](BaseMessage_RespondAsync(MessageContent) 'Guilded.NET.Base.Chat.BaseMessage.RespondAsync(Guilded.NET.Base.Chat.MessageContent)') | Creates a new message in same channel as a response.<br/> |
| [RespondAsync(object)](BaseMessage_RespondAsync(object) 'Guilded.NET.Base.Chat.BaseMessage.RespondAsync(object)') | Creates a new message in same channel as a response.<br/> |
| [RespondAsync(string, object[])](BaseMessage_RespondAsync(string_object__) 'Guilded.NET.Base.Chat.BaseMessage.RespondAsync(string, object[])') | Creates a new message in same channel as a response.<br/> |
| [RespondAsync(string)](BaseMessage_RespondAsync(string) 'Guilded.NET.Base.Chat.BaseMessage.RespondAsync(string)') | Creates a new message in same channel as a response.<br/> |
| [RespondAsync(IFormatProvider, string, object[])](BaseMessage_RespondAsync(IFormatProvider_string_object__) 'Guilded.NET.Base.Chat.BaseMessage.RespondAsync(System.IFormatProvider, string, object[])') | Creates a new message in same channel as a response.<br/> |
| [ToString()](BaseMessage_ToString() 'Guilded.NET.Base.Chat.BaseMessage.ToString()') | Creates string equivalent of the message.<br/> |
