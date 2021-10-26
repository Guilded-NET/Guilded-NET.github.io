
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base.Content](Guilded_NET_Base#Guilded_NET_Base_Content 'Guilded.NET.Base.Content')
## MessageType Enum

The type of the message created or updated.
```csharp
public enum MessageType
```
### Fields

<a name='Guilded_NET_Base_Content_MessageType_Default'></a>
`Default` 0

  
A plain message that holds [Content](Message_Content 'Guilded.NET.Base.Content.Message.Content').  
  
This can be created by anyone.

<a name='Guilded_NET_Base_Content_MessageType_System'></a>
`System` 1

  
A system event that is created once some action is done.  
  
This can't be created by anyone and only occurs if certain actions happen.

### Remarks
  
Defines the type of a [Message](Message 'Guilded.NET.Base.Content.Message') instance. Currently only [Default](MessageType#Guilded_NET_Base_Content_MessageType_Default 'Guilded.NET.Base.Content.MessageType.Default') and [System](MessageType#Guilded_NET_Base_Content_MessageType_System 'Guilded.NET.Base.Content.MessageType.System') are available.

### See Also
- [Message](Message 'Guilded.NET.Base.Content.Message')