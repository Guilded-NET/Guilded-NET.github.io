
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### [Guilded.NET.Base.Content](Guilded_NET_Base#Guilded_NET_Base_Content 'Guilded.NET.Base.Content')
## Reaction Class
The information about a reaction.  
```csharp
public class Reaction : Guilded.NET.Base.ClientObject
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#x27A1; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#x27A1; [ClientObject](ClientObject 'Guilded.NET.Base.ClientObject') &#x27A1; Reaction  
### Remarks
Defines a react in [ChannelContent&lt;T&gt;](ChannelContent_T_ 'Guilded.NET.Base.Content.ChannelContent&lt;T&gt;').

| Properties | |
| :--- | :--- |
| [CreatedAt](Reaction_CreatedAt 'Guilded.NET.Base.Content.Reaction.CreatedAt') | The date of when this reaction was created.<br/> |
| [CreatedAuto](Reaction_CreatedAuto 'Guilded.NET.Base.Content.Reaction.CreatedAuto') | Gets whether the message was created by a bot or webhook.<br/> |
| [CreatedBy](Reaction_CreatedBy 'Guilded.NET.Base.Content.Reaction.CreatedBy') | The identifier of the author of this reaction.<br/> |
| [CreatedByBot](Reaction_CreatedByBot 'Guilded.NET.Base.Content.Reaction.CreatedByBot') | The identifier of the bot that created this reaction.<br/> |
| [CreatedByWebhook](Reaction_CreatedByWebhook 'Guilded.NET.Base.Content.Reaction.CreatedByWebhook') | The identifier of the webhook that created this reaction.<br/> |
| [Id](Reaction_Id 'Guilded.NET.Base.Content.Reaction.Id') | The identifier of the emote reacted with.<br/> |

| Methods | |
| :--- | :--- |
| [Equals(object)](Reaction_Equals(object) 'Guilded.NET.Base.Content.Reaction.Equals(object)') | Returns whether this and [obj](Reaction_Equals(object)#Guilded_NET_Base_Content_Reaction_Equals(object)_obj 'Guilded.NET.Base.Content.Reaction.Equals(object).obj') are equal to each other.<br/> |
| [GetHashCode()](Reaction_GetHashCode() 'Guilded.NET.Base.Content.Reaction.GetHashCode()') | Gets a hashcode of this object.<br/> |

#### See Also
- [Emote](Emote 'Guilded.NET.Base.Emote')
- [Message](Message 'Guilded.NET.Base.Content.Message')
- [ChatEmote](ChatEmote 'Guilded.NET.Base.Chat.ChatEmote')
