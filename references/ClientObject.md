#### [Guilded.NET.Base](Guilded_NET_Base.md 'Guilded.NET.Base')
### [Guilded.NET.Base](Guilded_NET_Base.md#Guilded_NET_Base 'Guilded.NET.Base')
## ClientObject Class
An object that has a parent client.  
```csharp
public abstract class ClientObject : Guilded.NET.Base.BaseObject
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject.md 'Guilded.NET.Base.BaseObject') &#129106; ClientObject  

Derived  
&#8627; [BaseChannel](BaseChannel.md 'Guilded.NET.Base.BaseChannel')  
&#8627; [BaseEmote](BaseEmote.md 'Guilded.NET.Base.BaseEmote')  
&#8627; [BaseMention](BaseMention.md 'Guilded.NET.Base.Chat.BaseMention')  
&#8627; [BaseMessage](BaseMessage.md 'Guilded.NET.Base.Chat.BaseMessage')  
&#8627; [ChannelContent&lt;T&gt;](ChannelContent_T_.md 'Guilded.NET.Base.Content.ChannelContent&lt;T&gt;')  
&#8627; [ProfileMedia](ProfileMedia.md 'Guilded.NET.Base.Content.ProfileMedia')  
&#8627; [ProfilePost](ProfilePost.md 'Guilded.NET.Base.Content.ProfilePost')  
&#8627; [Reply](Reply.md 'Guilded.NET.Base.Content.Reply')  
&#8627; [EmoteInfo](EmoteInfo.md 'Guilded.NET.Base.EmoteInfo')  
&#8627; [GuildedEvent](GuildedEvent.md 'Guilded.NET.Base.Events.GuildedEvent')  
&#8627; [BasicGuildedForm](BasicGuildedForm.md 'Guilded.NET.Base.Forms.BasicGuildedForm')  
&#8627; [FormData](FormData.md 'Guilded.NET.Base.Forms.FormData')  
&#8627; [MetadataInvite](MetadataInvite.md 'Guilded.NET.Base.MetadataInvite')  
&#8627; [Reaction](Reaction.md 'Guilded.NET.Base.Reaction')  
&#8627; [BaseTeam](BaseTeam.md 'Guilded.NET.Base.Teams.BaseTeam')  
&#8627; [Flowbot](Flowbot.md 'Guilded.NET.Base.Teams.Flowbot')  
&#8627; [Group](Group.md 'Guilded.NET.Base.Teams.Group')  
&#8627; [Member](Member.md 'Guilded.NET.Base.Teams.Member')  
&#8627; [MemberDetails](MemberDetails.md 'Guilded.NET.Base.Teams.MemberDetails')  
&#8627; [PermissionBase](PermissionBase.md 'Guilded.NET.Base.Teams.PermissionBase')  
&#8627; [TeamBot](TeamBot.md 'Guilded.NET.Base.Teams.TeamBot')  
&#8627; [TeamOverview](TeamOverview.md 'Guilded.NET.Base.Teams.TeamOverview')  
&#8627; [TeamRole](TeamRole.md 'Guilded.NET.Base.Teams.TeamRole')  
&#8627; [VoiceRoom](VoiceRoom.md 'Guilded.NET.Base.Teams.VoiceRoom')  
&#8627; [Webhook](Webhook.md 'Guilded.NET.Base.Teams.Webhook')  
&#8627; [WebhookDetails](WebhookDetails.md 'Guilded.NET.Base.Teams.WebhookDetails')  
&#8627; [BaseUser](BaseUser.md 'Guilded.NET.Base.Users.BaseUser')  
&#8627; [Friend](Friend.md 'Guilded.NET.Base.Users.Friend')  
&#8627; [FriendList](FriendList.md 'Guilded.NET.Base.Users.FriendList')  
&#8627; [FriendRequests](FriendRequests.md 'Guilded.NET.Base.Users.FriendRequests')  
&#8627; [GameStatus](GameStatus.md 'Guilded.NET.Base.Users.GameStatus')  
&#8627; [Me](Me.md 'Guilded.NET.Base.Users.Me')  

| Properties | |
| :--- | :--- |
| [ParentClient](ClientObject_ParentClient.md 'Guilded.NET.Base.ClientObject.ParentClient') | The parent client that adopts this object.<br/> |

| Methods | |
| :--- | :--- |
| [OnDeserialized(StreamingContext)](ClientObject_OnDeserialized(StreamingContext).md 'Guilded.NET.Base.ClientObject.OnDeserialized(System.Runtime.Serialization.StreamingContext)') | Adds a parent client if context contains it.<br/> |
#### See Also
- [BaseGuildedClient](BaseGuildedClient.md 'Guilded.NET.Base.BaseGuildedClient')
- [BaseObject](BaseObject.md 'Guilded.NET.Base.BaseObject')
