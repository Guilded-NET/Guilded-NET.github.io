
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### [Guilded.NET.Base.Content](Guilded_NET_Base#Guilded_NET_Base_Content 'Guilded.NET.Base.Content')
## ChannelContent&lt;T&gt; Class
The base type for channel contents.  
```csharp
public abstract class ChannelContent<T> : Guilded.NET.Base.ClientObject
```

#### Type parameters
<a name='Guilded_NET_Base_Content_ChannelContent_T__T'></a>
`T`  
The type of the identifier [Id](ChannelContent_T__Id 'Guilded.NET.Base.Content.ChannelContent&lt;T&gt;.Id')
  

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#x27A1; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#x27A1; [ClientObject](ClientObject 'Guilded.NET.Base.ClientObject') &#x27A1; ChannelContent&lt;T&gt;  

Derived  
&#8627; [ForumThread](ForumThread 'Guilded.NET.Base.Content.ForumThread')  
&#8627; [ListItem](ListItem 'Guilded.NET.Base.Content.ListItem')  
&#8627; [Message](Message 'Guilded.NET.Base.Content.Message')  
### Remarks
Defines the base type for all channel contents, apart from deleted ones.

| Properties | |
| :--- | :--- |
| [ChannelId](ChannelContent_T__ChannelId 'Guilded.NET.Base.Content.ChannelContent&lt;T&gt;.ChannelId') | The identifier of the channel where the content is.<br/> |
| [CreatedAt](ChannelContent_T__CreatedAt 'Guilded.NET.Base.Content.ChannelContent&lt;T&gt;.CreatedAt') | The date of when the content was created.<br/> |
| [CreatedAuto](ChannelContent_T__CreatedAuto 'Guilded.NET.Base.Content.ChannelContent&lt;T&gt;.CreatedAuto') | Gets whether the content was created by a bot or a webhook.<br/> |
| [CreatedBy](ChannelContent_T__CreatedBy 'Guilded.NET.Base.Content.ChannelContent&lt;T&gt;.CreatedBy') | The identifier of the user creator of the content.<br/> |
| [CreatedByBot](ChannelContent_T__CreatedByBot 'Guilded.NET.Base.Content.ChannelContent&lt;T&gt;.CreatedByBot') | The identifier of the bot creator of the content.<br/> |
| [CreatedByWebhook](ChannelContent_T__CreatedByWebhook 'Guilded.NET.Base.Content.ChannelContent&lt;T&gt;.CreatedByWebhook') | The identifier of the webhook creator of the content.<br/> |
| [Id](ChannelContent_T__Id 'Guilded.NET.Base.Content.ChannelContent&lt;T&gt;.Id') | The identifier of the content.<br/> |

| Methods | |
| :--- | :--- |
| [Equals(object)](ChannelContent_T__Equals(object) 'Guilded.NET.Base.Content.ChannelContent&lt;T&gt;.Equals(object)') | Returns whether this instance and specified instance are equal to each other.<br/> |
| [GetHashCode()](ChannelContent_T__GetHashCode() 'Guilded.NET.Base.Content.ChannelContent&lt;T&gt;.GetHashCode()') | Gets a hashcode of this instance.<br/> |
| [ToString()](ChannelContent_T__ToString() 'Guilded.NET.Base.Content.ChannelContent&lt;T&gt;.ToString()') | Returns string equivalent to this instance.<br/> |
