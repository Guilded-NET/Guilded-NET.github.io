
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### [Guilded.NET.Base.Content](Guilded_NET_Base#Guilded_NET_Base_Content 'Guilded.NET.Base.Content').[Message](Message 'Guilded.NET.Base.Content.Message')
## Message.IsPrivate Property
Whether the reply is private.  
```csharp
public bool IsPrivate { get; set; }
```

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')
Reply is private
### Remarks
Specifies whether the reply is private or not.



This can only be [true](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool') if [ReplyMessageIds](Message_ReplyMessageIds 'Guilded.NET.Base.Content.Message.ReplyMessageIds') has a value.
