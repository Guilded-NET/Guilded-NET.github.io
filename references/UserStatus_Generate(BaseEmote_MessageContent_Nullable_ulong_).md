
#### [Guilded.NET.Base](index 'index')
### [Guilded.NET.Base.Users](index#Guilded_NET_Base_Users 'Guilded.NET.Base.Users').[UserStatus](UserStatus 'Guilded.NET.Base.Users.UserStatus')
## UserStatus.Generate(BaseEmote, MessageContent, Nullable&lt;ulong&gt;) Method
Generates user status for setting your custom status.  
```csharp
public static Guilded.NET.Base.Users.UserStatus Generate(Guilded.NET.Base.BaseEmote emote, Guilded.NET.Base.Chat.MessageContent content=null, System.Nullable<ulong> expiresIn=0uL);
```

#### Parameters
<a name='Guilded_NET_Base_Users_UserStatus_Generate(Guilded_NET_Base_BaseEmote_Guilded_NET_Base_Chat_MessageContent_System_Nullable_ulong_)_emote'></a>
`emote` [BaseEmote](BaseEmote 'Guilded.NET.Base.BaseEmote')  
ID of the emote it should use
  
<a name='Guilded_NET_Base_Users_UserStatus_Generate(Guilded_NET_Base_BaseEmote_Guilded_NET_Base_Chat_MessageContent_System_Nullable_ulong_)_content'></a>
`content` [MessageContent](MessageContent 'Guilded.NET.Base.Chat.MessageContent')  
Content of the status
  
<a name='Guilded_NET_Base_Users_UserStatus_Generate(Guilded_NET_Base_BaseEmote_Guilded_NET_Base_Chat_MessageContent_System_Nullable_ulong_)_expiresIn'></a>
`expiresIn` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.UInt64](https://docs.microsoft.com/en-us/dotnet/api/System.UInt64 'System.UInt64')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')  
When it should expire in milliseconds
  

#### Returns
[UserStatus](UserStatus 'Guilded.NET.Base.Users.UserStatus')  
Generated status
