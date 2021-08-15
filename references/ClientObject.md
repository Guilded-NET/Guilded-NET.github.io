
#### [Guilded.NET.Base](index 'index')
### [Guilded.NET.Base](index#Guilded_NET_Base 'Guilded.NET.Base')
## ClientObject Class
An object that has a parent client.  
```csharp
public abstract class ClientObject : Guilded.NET.Base.BaseObject
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#129106; ClientObject  

Derived  
&#8627; [BaseChannel](BaseChannel 'Guilded.NET.Base.BaseChannel')  
&#8627; [BaseEmote](BaseEmote 'Guilded.NET.Base.BaseEmote')  
&#8627; [BaseMention](BaseMention 'Guilded.NET.Base.Chat.BaseMention')  
&#8627; [BaseMessage](BaseMessage 'Guilded.NET.Base.Chat.BaseMessage')  
&#8627; [ChannelContent&lt;T&gt;](ChannelContent_T_ 'Guilded.NET.Base.Content.ChannelContent&lt;T&gt;')  
&#8627; [ProfileMedia](ProfileMedia 'Guilded.NET.Base.Content.ProfileMedia')  
&#8627; [ProfilePost](ProfilePost 'Guilded.NET.Base.Content.ProfilePost')  
&#8627; [Reply](Reply 'Guilded.NET.Base.Content.Reply')  
&#8627; [EmoteInfo](EmoteInfo 'Guilded.NET.Base.EmoteInfo')  
&#8627; [GuildedEvent](GuildedEvent 'Guilded.NET.Base.Events.GuildedEvent')  
&#8627; [BasicGuildedForm](BasicGuildedForm 'Guilded.NET.Base.Forms.BasicGuildedForm')  
&#8627; [FormData](FormData 'Guilded.NET.Base.Forms.FormData')  
&#8627; [MetadataInvite](MetadataInvite 'Guilded.NET.Base.MetadataInvite')  
&#8627; [Reaction](Reaction 'Guilded.NET.Base.Reaction')  
&#8627; [BaseTeam](BaseTeam 'Guilded.NET.Base.Teams.BaseTeam')  
&#8627; [Flowbot](Flowbot 'Guilded.NET.Base.Teams.Flowbot')  
&#8627; [Group](Group 'Guilded.NET.Base.Teams.Group')  
&#8627; [Member](Member 'Guilded.NET.Base.Teams.Member')  
&#8627; [MemberDetails](MemberDetails 'Guilded.NET.Base.Teams.MemberDetails')  
&#8627; [PermissionBase](PermissionBase 'Guilded.NET.Base.Teams.PermissionBase')  
&#8627; [TeamBot](TeamBot 'Guilded.NET.Base.Teams.TeamBot')  
&#8627; [TeamOverview](TeamOverview 'Guilded.NET.Base.Teams.TeamOverview')  
&#8627; [TeamRole](TeamRole 'Guilded.NET.Base.Teams.TeamRole')  
&#8627; [VoiceRoom](VoiceRoom 'Guilded.NET.Base.Teams.VoiceRoom')  
&#8627; [Webhook](Webhook 'Guilded.NET.Base.Teams.Webhook')  
&#8627; [WebhookDetails](WebhookDetails 'Guilded.NET.Base.Teams.WebhookDetails')  
&#8627; [BaseUser](BaseUser 'Guilded.NET.Base.Users.BaseUser')  
&#8627; [Friend](Friend 'Guilded.NET.Base.Users.Friend')  
&#8627; [FriendList](FriendList 'Guilded.NET.Base.Users.FriendList')  
&#8627; [FriendRequests](FriendRequests 'Guilded.NET.Base.Users.FriendRequests')  
&#8627; [GameStatus](GameStatus 'Guilded.NET.Base.Users.GameStatus')  
&#8627; [Me](Me 'Guilded.NET.Base.Users.Me')  

| Properties | |
| :--- | :--- |
| [ParentClient](ClientObject_ParentClient 'Guilded.NET.Base.ClientObject.ParentClient') | The parent client that adopts this object.<br/> |

| Methods | |
| :--- | :--- |
| [OnDeserialized(StreamingContext)](ClientObject_OnDeserialized(StreamingContext) 'Guilded.NET.Base.ClientObject.OnDeserialized(System.Runtime.Serialization.StreamingContext)') | Adds a parent client if context contains it.<br/> |

#### See Also
- [BaseGuildedClient](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')
- [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject')
