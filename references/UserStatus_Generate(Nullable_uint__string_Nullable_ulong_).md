#### [Guilded.NET.Base](Guilded_NET_Base.md 'Guilded.NET.Base')
### [Guilded.NET.Base.Users](Guilded_NET_Base.md#Guilded_NET_Base_Users 'Guilded.NET.Base.Users').[UserStatus](UserStatus.md 'Guilded.NET.Base.Users.UserStatus')
## UserStatus.Generate(Nullable&lt;uint&gt;, string, Nullable&lt;ulong&gt;) Method
Generates user status for setting your custom status.  
```csharp
public static Guilded.NET.Base.Users.UserStatus Generate(System.Nullable<uint> emoteId=null, string content=null, System.Nullable<ulong> expiresIn=0uL);
```
#### Parameters
<a name='Guilded_NET_Base_Users_UserStatus_Generate(System_Nullable_uint__string_System_Nullable_ulong_)_emoteId'></a>
`emoteId` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')  
ID of the emote it should use
  
<a name='Guilded_NET_Base_Users_UserStatus_Generate(System_Nullable_uint__string_System_Nullable_ulong_)_content'></a>
`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
Content of the status
  
<a name='Guilded_NET_Base_Users_UserStatus_Generate(System_Nullable_uint__string_System_Nullable_ulong_)_expiresIn'></a>
`expiresIn` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.UInt64](https://docs.microsoft.com/en-us/dotnet/api/System.UInt64 'System.UInt64')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')  
When it should expire in milliseconds
  
#### Returns
[UserStatus](UserStatus.md 'Guilded.NET.Base.Users.UserStatus')  
Generated status
