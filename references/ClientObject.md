
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base](Guilded_NET_Base#Guilded_NET_Base 'Guilded.NET.Base')
## ClientObject Class

A base that with a parent client.
```csharp
public abstract class ClientObject : Guilded.NET.Base.BaseObject
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#x27A1; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#x27A1; ClientObject

Derived  
&#8627; [ChannelContent&lt;T&gt;](ChannelContent_T_ 'Guilded.NET.Base.Content.ChannelContent&lt;T&gt;')  
&#8627; [Reaction](Reaction 'Guilded.NET.Base.Content.Reaction')  
&#8627; [GuildedSocketMessage](GuildedSocketMessage 'Guilded.NET.Base.Events.GuildedSocketMessage')  
&#8627; [Member](Member 'Guilded.NET.Base.Teams.Member')

### Remarks
  
A base object that also contains definining parent client. The parent client that defined this method is referenced in [ParentClient](ClientObject_ParentClient 'Guilded.NET.Base.ClientObject.ParentClient'), that is initiated with internal OnDeserialized method. This allows having methods like [CreateMessageAsync(string)](Message_CreateMessageAsync(string) 'Guilded.NET.Base.Content.Message.CreateMessageAsync(string)'), where it requires to call the parent client's methods.

### See Also
- [BaseGuildedClient](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')
- [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject')

| Properties | |
| :--- | :--- |
| [ParentClient](ClientObject_ParentClient 'Guilded.NET.Base.ClientObject.ParentClient') | The parent client that adopts this object. |
