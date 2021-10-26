
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base](Guilded_NET_Base#Guilded_NET_Base 'Guilded.NET.Base').[BaseGuildedClient](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')
## BaseGuildedClient.Serialize(object) Method

Serializes object with client's Guilded serializer.
```csharp
public string Serialize(object obj);
```

#### Parameters

<a name='Guilded_NET_Base_BaseGuildedClient_Serialize(object)_obj'></a>
`obj` [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object')

The parameter to serialize


#### Returns
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
Serialized object

### Remarks
  
Serializes given object to JSON using [GuildedSerializer](BaseGuildedClient_GuildedSerializer 'Guilded.NET.Base.BaseGuildedClient.GuildedSerializer'). Use this if you want to send REST request or WebSocket message.

### See Also
- [Deserialize&lt;T&gt;(string)](BaseGuildedClient_Deserialize_T_(string) 'Guilded.NET.Base.BaseGuildedClient.Deserialize&lt;T&gt;(string)')