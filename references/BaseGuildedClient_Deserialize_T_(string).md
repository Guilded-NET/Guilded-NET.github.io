
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### [Guilded.NET.Base](Guilded_NET_Base#Guilded_NET_Base 'Guilded.NET.Base').[BaseGuildedClient](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')
## BaseGuildedClient.Deserialize&lt;T&gt;(string) Method
Deserializes JSON with client's Guilded serializer.  
```csharp
public T Deserialize<T>(string json);
```

#### Type parameters
<a name='Guilded_NET_Base_BaseGuildedClient_Deserialize_T_(string)_T'></a>
`T`  
The type of deserialized instance
  

#### Parameters
<a name='Guilded_NET_Base_BaseGuildedClient_Deserialize_T_(string)_json'></a>
`json` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
Raw JSON to deserialize
  

#### Returns
[T](BaseGuildedClient_Deserialize_T_(string)#Guilded_NET_Base_BaseGuildedClient_Deserialize_T_(string)_T 'Guilded.NET.Base.BaseGuildedClient.Deserialize&lt;T&gt;(string).T')  
Deserialized object
### Remarks
Deserializes given JSON file/text using [GuildedSerializer](BaseGuildedClient_GuildedSerializer 'Guilded.NET.Base.BaseGuildedClient.GuildedSerializer'). Use this if you want to deserialize Guilded response or WebSocket message.

#### See Also
- [Serialize(object)](BaseGuildedClient_Serialize(object) 'Guilded.NET.Base.BaseGuildedClient.Serialize(object)')
