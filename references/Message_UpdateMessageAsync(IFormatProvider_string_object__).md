
#### [Guilded.NET.Base](index 'index')
### [Guilded.NET.Base.Chat](index#Guilded_NET_Base_Chat 'Guilded.NET.Base.Chat').[Message](Message 'Guilded.NET.Base.Chat.Message')
## Message.UpdateMessageAsync(IFormatProvider, string, object[]) Method
Updates the contents of the message.  
```csharp
public System.Threading.Tasks.Task<Guilded.NET.Base.Chat.Message> UpdateMessageAsync(System.IFormatProvider provider, string format, params object[] args);
```

#### Parameters
<a name='Guilded_NET_Base_Chat_Message_UpdateMessageAsync(System_IFormatProvider_string_object__)_provider'></a>
`provider` [System.IFormatProvider](https://docs.microsoft.com/en-us/dotnet/api/System.IFormatProvider 'System.IFormatProvider')  
The provider that gives the format string information about the culture
  
<a name='Guilded_NET_Base_Chat_Message_UpdateMessageAsync(System_IFormatProvider_string_object__)_format'></a>
`format` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
The composite format string
  
<a name='Guilded_NET_Base_Chat_Message_UpdateMessageAsync(System_IFormatProvider_string_object__)_args'></a>
`args` [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')  
The arguments of the format string
  

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Message](Message 'Guilded.NET.Base.Chat.Message')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Message edited

#### Exceptions
[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')  
When the client receives an error from Guilded API
[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
When the given content only consists of whitespace or is null
[System.ArgumentOutOfRangeException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentOutOfRangeException 'System.ArgumentOutOfRangeException')  
When the contents of the message are above the message limit of 4000 characters
### Example
```csharp
await message.UpdateMessageAsync(cultureInfo, "Current date: {0}", DateTime.Now);  
```